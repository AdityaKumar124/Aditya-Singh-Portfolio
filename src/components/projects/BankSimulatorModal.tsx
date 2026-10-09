"use client";

import React, { useState } from "react";
import { X, ShieldCheck, ArrowRightLeft, PlusCircle, MinusCircle, AlertTriangle, Lock, Unlock, History } from "lucide-react";

interface BankSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Transaction {
  id: string;
  type: "DEPOSIT" | "WITHDRAWAL" | "TRANSFER";
  account: string;
  amount: number;
  timestamp: string;
  status: "SUCCESS" | "FAILED";
  exception?: string;
}

export const BankSimulatorModal: React.FC<BankSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeAccount, setActiveAccount] = useState<"SAVINGS" | "CHECKING" | "BUSINESS">("SAVINGS");
  const [balances, setBalances] = useState({
    SAVINGS: 2500,
    CHECKING: 1200,
    BUSINESS: 8500,
  });
  const [pin, setPin] = useState("1234");
  const [enteredPin, setEnteredPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [amountInput, setAmountInput] = useState("");
  const [transferTarget, setTransferTarget] = useState<"SAVINGS" | "CHECKING" | "BUSINESS">("CHECKING");
  const [operationMessage, setOperationMessage] = useState<{ text: string; error?: boolean } | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "TX-9041",
      type: "DEPOSIT",
      account: "SAVINGS",
      amount: 1000,
      timestamp: "10:14:02 AM",
      status: "SUCCESS",
    },
    {
      id: "TX-9042",
      type: "TRANSFER",
      account: "SAVINGS -> CHECKING",
      amount: 300,
      timestamp: "11:22:15 AM",
      status: "SUCCESS",
    },
  ]);

  if (!isOpen) return null;

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPin === pin) {
      setIsAuthenticated(true);
      setOperationMessage({ text: "PIN authenticated. Session established." });
    } else {
      setOperationMessage({
        text: "InvalidPinException: Authorization failed. Check PIN.",
        error: true,
      });
    }
  };

  const handleDeposit = () => {
    const val = parseFloat(amountInput);
    if (isNaN(val) || val <= 0) {
      setOperationMessage({ text: "IllegalArgumentException: Deposit amount must be > 0", error: true });
      return;
    }

    setBalances((prev) => ({
      ...prev,
      [activeAccount]: prev[activeAccount] + val,
    }));

    const newTx: Transaction = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      type: "DEPOSIT",
      account: activeAccount,
      amount: val,
      timestamp: new Date().toLocaleTimeString(),
      status: "SUCCESS",
    };

    setTransactions([newTx, ...transactions]);
    setOperationMessage({ text: `Deposited $${val.toFixed(2)} to ${activeAccount}. Thread safe lock released.` });
    setAmountInput("");
  };

  const handleWithdraw = () => {
    const val = parseFloat(amountInput);
    if (isNaN(val) || val <= 0) {
      setOperationMessage({ text: "IllegalArgumentException: Withdrawal amount must be > 0", error: true });
      return;
    }

    if (val > balances[activeAccount]) {
      const failedTx: Transaction = {
        id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
        type: "WITHDRAWAL",
        account: activeAccount,
        amount: val,
        timestamp: new Date().toLocaleTimeString(),
        status: "FAILED",
        exception: "InsufficientFundsException",
      };
      setTransactions([failedTx, ...transactions]);
      setOperationMessage({
        text: `InsufficientFundsException: Balance ($${balances[activeAccount]}) is less than request ($${val}).`,
        error: true,
      });
      return;
    }

    setBalances((prev) => ({
      ...prev,
      [activeAccount]: prev[activeAccount] - val,
    }));

    const newTx: Transaction = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      type: "WITHDRAWAL",
      account: activeAccount,
      amount: val,
      timestamp: new Date().toLocaleTimeString(),
      status: "SUCCESS",
    };

    setTransactions([newTx, ...transactions]);
    setOperationMessage({ text: `Withdrew $${val.toFixed(2)} from ${activeAccount}. Ledger updated.` });
    setAmountInput("");
  };

  const handleTransfer = () => {
    const val = parseFloat(amountInput);
    if (isNaN(val) || val <= 0) {
      setOperationMessage({ text: "IllegalArgumentException: Transfer amount must be > 0", error: true });
      return;
    }
    if (activeAccount === transferTarget) {
      setOperationMessage({ text: "InvalidOperationException: Source and target accounts cannot be identical", error: true });
      return;
    }
    if (val > balances[activeAccount]) {
      setOperationMessage({
        text: `InsufficientFundsException: Source account balance insufficient for transfer.`,
        error: true,
      });
      return;
    }

    setBalances((prev) => ({
      ...prev,
      [activeAccount]: prev[activeAccount] - val,
      [transferTarget]: prev[transferTarget] + val,
    }));

    const newTx: Transaction = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      type: "TRANSFER",
      account: `${activeAccount} -> ${transferTarget}`,
      amount: val,
      timestamp: new Date().toLocaleTimeString(),
      status: "SUCCESS",
    };

    setTransactions([newTx, ...transactions]);
    setOperationMessage({ text: `Atomic transfer of $${val.toFixed(2)} to ${transferTarget} confirmed.` });
    setAmountInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-cyber-cyan/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-blue/20 border border-cyber-cyan/40 text-cyber-cyan">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Bank Account Simulator</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-cyan-500/30">
                  JAVA OOP RUNTIME DEMO
                </span>
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Interactive demonstration of OOP models, custom exceptions, and transaction consistency.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Close simulator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulator Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isAuthenticated ? (
            /* PIN Authentication Screen */
            <div className="max-w-md mx-auto text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-cyber-blue/10 border border-cyber-cyan/30 flex items-center justify-center mx-auto text-cyber-cyan">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Enter Account PIN</h4>
              <p className="text-xs text-slate-400">
                Simulation safety lock enabled. For this demonstration, default PIN is{" "}
                <span className="font-mono text-cyber-cyan font-bold">1234</span>.
              </p>

              <form onSubmit={handleAuth} className="space-y-4">
                <input
                  type="password"
                  maxLength={4}
                  value={enteredPin}
                  onChange={(e) => setEnteredPin(e.target.value)}
                  placeholder="••••"
                  className="w-40 text-center tracking-widest text-2xl font-mono px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyber-cyan"
                  autoFocus
                />
                <div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-cyber-blue hover:bg-blue-600 text-white font-mono text-xs font-bold"
                  >
                    AUTHENTICATE PIN
                  </button>
                </div>
              </form>

              {operationMessage?.error && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-xs font-mono text-red-300 flex items-center justify-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{operationMessage.text}</span>
                </div>
              )}
            </div>
          ) : (
            /* Main Banking Simulator Dashboard */
            <div className="space-y-6">
              {/* Account Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {(["SAVINGS", "CHECKING", "BUSINESS"] as const).map((type) => {
                  const isSel = activeAccount === type;
                  return (
                    <button
                      key={type}
                      onClick={() => setActiveAccount(type)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSel
                          ? "bg-slate-900 border-cyber-cyan shadow-lg shadow-cyber-cyan/20"
                          : "bg-slate-950 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">
                        {type} ACCOUNT
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">
                        ${balances[type].toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-cyber-cyan">
                        {isSel ? "● ACTIVE TARGET" : "Click to select"}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Status & Feedback banner */}
              {operationMessage && (
                <div
                  className={`p-3 rounded-xl border font-mono text-xs flex items-center gap-2 ${
                    operationMessage.error
                      ? "bg-red-950/60 border-red-500/50 text-red-300"
                      : "bg-emerald-950/50 border-emerald-500/40 text-emerald-300"
                  }`}
                >
                  {operationMessage.error ? (
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                  ) : (
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                  )}
                  <span>{operationMessage.text}</span>
                </div>
              )}

              {/* Operations Control Panel */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">AMOUNT ($):</span>
                    <input
                      type="number"
                      placeholder="e.g. 250"
                      value={amountInput}
                      onChange={(e) => setAmountInput(e.target.value)}
                      className="w-36 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 font-mono text-sm text-white focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={handleDeposit}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-300 font-mono text-xs font-medium"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>DEPOSIT</span>
                    </button>
                    <button
                      onClick={handleWithdraw}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600/20 border border-red-500/40 hover:bg-red-600/30 text-red-300 font-mono text-xs font-medium"
                    >
                      <MinusCircle className="w-3.5 h-3.5" />
                      <span>WITHDRAW</span>
                    </button>
                    <div className="flex items-center gap-2 pl-2 border-l border-slate-700">
                      <select
                        value={transferTarget}
                        onChange={(e) =>
                          setTransferTarget(e.target.value as "SAVINGS" | "CHECKING" | "BUSINESS")
                        }
                        className="bg-slate-950 border border-slate-700 text-xs font-mono text-slate-300 rounded-lg p-2 focus:outline-none"
                      >
                        <option value="SAVINGS">To Savings</option>
                        <option value="CHECKING">To Checking</option>
                        <option value="BUSINESS">To Business</option>
                      </select>
                      <button
                        onClick={handleTransfer}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyber-blue hover:bg-blue-600 text-white font-mono text-xs font-medium"
                      >
                        <ArrowRightLeft className="w-3.5 h-3.5" />
                        <span>TRANSFER</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transaction Audit Ledger */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                  <History className="w-4 h-4 text-cyber-cyan" />
                  <span>TRANSACTION AUDIT LEDGER (CHRONOLOGICAL)</span>
                </h4>
                <div className="border border-slate-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left font-mono text-xs">
                    <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="p-3">TX ID</th>
                        <th className="p-3">TYPE</th>
                        <th className="p-3">TARGET</th>
                        <th className="p-3">AMOUNT</th>
                        <th className="p-3">TIME</th>
                        <th className="p-3 text-right">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 bg-slate-950">
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-slate-900/40">
                          <td className="p-3 text-cyber-cyan">{tx.id}</td>
                          <td className="p-3 text-white font-semibold">{tx.type}</td>
                          <td className="p-3 text-slate-300">{tx.account}</td>
                          <td className="p-3 text-white">${tx.amount.toFixed(2)}</td>
                          <td className="p-3 text-slate-400">{tx.timestamp}</td>
                          <td className="p-3 text-right">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] ${
                                tx.status === "SUCCESS"
                                  ? "bg-emerald-500/20 text-emerald-300"
                                  : "bg-red-500/20 text-red-300"
                              }`}
                            >
                              {tx.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>THREAD SYNCHRONIZATION: ACTIVE</span>
          </div>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setEnteredPin("");
              setOperationMessage(null);
            }}
            className="text-slate-400 hover:text-white"
          >
            LOCK SIMULATOR
          </button>
        </div>
      </div>
    </div>
  );
};
