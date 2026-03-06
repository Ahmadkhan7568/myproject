"use client";

import { useState, useEffect } from "react";
import { Copy, CheckCircle2, AlertCircle, Clock, Wallet, Trash2 } from "lucide-react";
import { getDB, deleteWithdrawal } from "@/lib/database";

export default function WithdrawalsPage() {
    const [withdrawals, setWithdrawals] = useState<any[]>([]);
    const [copiedId, setCopiedId] = useState<number | null>(null);

    const refreshData = () => {
        const db = getDB();
        setWithdrawals([...db.withdrawals].reverse());
    };

    useEffect(() => {
        refreshData();
    }, []);

    const copyToClipboard = (text: string, id: number) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to remove this record?")) {
            deleteWithdrawal(id);
            refreshData();
        }
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-serif text-white mb-2 tracking-tight">Payment Requests</h1>
                    <p className="text-white/40 text-sm font-medium">View and manage requests for money.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#111111] border border-white/5 flex space-x-6 shadow-sm">
                    <div>
                        <p className="text-[10px] font-black tracking-widest text-white/20 uppercase mb-1">Total Requests</p>
                        <p className="text-xl font-serif text-white leading-none">{withdrawals.length}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black tracking-widest text-white/20 uppercase mb-1">Waiting to be Paid</p>
                        <p className="text-xl font-serif text-gold leading-none">
                            ${withdrawals.filter(w => w.status === 'Processing').reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#111111] rounded-[40px] border border-white/5 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                                <th className="p-6 font-medium">ID & Date</th>
                                <th className="p-6 font-medium">Method & Wallet</th>
                                <th className="p-6 font-medium">Amount</th>
                                <th className="p-6 font-medium">Status</th>
                                <th className="p-6 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium text-white/80">
                            {withdrawals.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-white/20">
                                        <Wallet size={32} className="mx-auto mb-4 opacity-50" />
                                        <p>No withdrawal requests found.</p>
                                    </td>
                                </tr>
                            ) : (
                                withdrawals.map((withdrawal) => (
                                    <tr key={withdrawal.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                        <td className="p-6">
                                            <p className="font-bold text-white">#{withdrawal.id.toString().slice(-6)}</p>
                                            <p className="text-[10px] text-white/40 mt-1">
                                                {new Date(withdrawal.date).toLocaleDateString()}
                                            </p>
                                        </td>
                                        <td className="p-6 max-w-[200px]">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${withdrawal.method === 'crypto' ? 'bg-gold/10 text-gold' : 'bg-blue-500/10 text-blue-400'}`}>
                                                    {withdrawal.method}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2 group">
                                                <p className="text-xs truncate text-white/40">{withdrawal.address}</p>
                                                <button
                                                    onClick={() => copyToClipboard(withdrawal.address, withdrawal.id)}
                                                    className="p-1.5 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/10 text-white/20 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                                                    title="Copy Address"
                                                >
                                                    {copiedId === withdrawal.id ? <CheckCircle2 size={14} className="text-green-500" /> : <Copy size={14} />}
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <p className="font-serif text-lg font-bold text-white">${withdrawal.amount.toFixed(2)}</p>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center space-x-2">
                                                {withdrawal.status === 'Processing' ? (
                                                    <span className="flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
                                                        <Clock size={12} className="mr-1.5" /> Processing
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                                                        <CheckCircle2 size={12} className="mr-1.5" /> Completed
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-6 text-right">
                                            <div className="flex items-center justify-end space-x-4">
                                                <button className="text-[10px] font-black tracking-widest uppercase text-gold hover:text-white transition-colors">
                                                    Details
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(withdrawal.id)}
                                                    className="p-2 rounded-xl text-white/20 hover:text-red-500 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
                                                    title="Remove Entry"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
