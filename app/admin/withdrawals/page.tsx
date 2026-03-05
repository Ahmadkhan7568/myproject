"use client";

import { useState, useEffect } from "react";
import { Copy, CheckCircle2, AlertCircle, Clock, Wallet } from "lucide-react";
import { getDB } from "@/lib/database";

export default function WithdrawalsPage() {
    const [withdrawals, setWithdrawals] = useState<any[]>([]);
    const [copiedId, setCopiedId] = useState<number | null>(null);

    useEffect(() => {
        const db = getDB();
        // Reverse to show newest first
        setWithdrawals([...db.withdrawals].reverse());
    }, []);

    const copyToClipboard = (text: string, id: number) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-serif text-coffee-brown mb-2 tracking-tight">Withdrawal Requests</h1>
                    <p className="text-[#6C757D] text-sm font-medium">Manage and audit pending partner disbursements.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#E9ECEF] flex space-x-6 shadow-sm">
                    <div>
                        <p className="text-[10px] font-black tracking-widest text-[#ADB5BD] uppercase mb-1">Total Requests</p>
                        <p className="text-xl font-serif text-coffee-brown leading-none">{withdrawals.length}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black tracking-widest text-[#ADB5BD] uppercase mb-1">Pending Vol.</p>
                        <p className="text-xl font-serif text-gold leading-none">
                            ${withdrawals.filter(w => w.status === 'Processing').reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[40px] border border-[#E9ECEF] overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#F8F9FA] border-b border-[#E9ECEF] text-[10px] font-black uppercase tracking-[0.2em] text-[#ADB5BD]">
                                <th className="p-6 font-medium">ID & Date</th>
                                <th className="p-6 font-medium">Method & Wallet</th>
                                <th className="p-6 font-medium">Amount</th>
                                <th className="p-6 font-medium">Status</th>
                                <th className="p-6 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium text-[#1a1a1a]">
                            {withdrawals.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-[#ADB5BD]">
                                        <Wallet size={32} className="mx-auto mb-4 opacity-50" />
                                        <p>No withdrawal requests found.</p>
                                    </td>
                                </tr>
                            ) : (
                                withdrawals.map((withdrawal) => (
                                    <tr key={withdrawal.id} className="border-b border-[#F1F3F5] last:border-0 hover:bg-[#F8F9FA] transition-colors">
                                        <td className="p-6">
                                            <p className="font-bold">#{withdrawal.id.toString().slice(-6)}</p>
                                            <p className="text-[10px] text-[#6C757D] mt-1">
                                                {new Date(withdrawal.date).toLocaleDateString()}
                                            </p>
                                        </td>
                                        <td className="p-6 max-w-[200px]">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${withdrawal.method === 'crypto' ? 'bg-gold/10 text-gold' : 'bg-blue-50 text-blue-600'}`}>
                                                    {withdrawal.method}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2 group">
                                                <p className="text-xs truncate text-[#6C757D]">{withdrawal.address}</p>
                                                <button
                                                    onClick={() => copyToClipboard(withdrawal.address, withdrawal.id)}
                                                    className="p-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E9ECEF] text-[#ADB5BD] hover:text-[#1a1a1a] transition-all opacity-0 group-hover:opacity-100"
                                                    title="Copy Address"
                                                >
                                                    {copiedId === withdrawal.id ? <CheckCircle2 size={14} className="text-green-500" /> : <Copy size={14} />}
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <p className="font-serif text-lg font-bold">${withdrawal.amount.toFixed(2)}</p>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center space-x-2">
                                                {withdrawal.status === 'Processing' ? (
                                                    <span className="flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-widest border border-amber-100">
                                                        <Clock size={12} className="mr-1.5" /> Processing
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest border border-green-100">
                                                        <CheckCircle2 size={12} className="mr-1.5" /> Completed
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-6 text-right">
                                            <button className="text-[10px] font-black tracking-widest uppercase text-gold hover:text-coffee-brown transition-colors">
                                                Details
                                            </button>
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
