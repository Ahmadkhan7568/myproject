"use client";

import { useState, useEffect } from "react";
import {
    Users,
    TrendingUp,
    ShoppingBag,
    MousePointer2,
    ArrowUpRight,
    ArrowDownRight,
    Activity,
    Coffee,
    Wallet,
    CreditCard,
    AlertCircle,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { getDB, updateSettings, logWithdrawal } from "@/lib/database";

export default function AdminDashboard() {
    const [withdrawalMethod, setWithdrawalMethod] = useState<"paypal" | "crypto" | null>(null);
    const [walletAddress, setWalletAddress] = useState("");
    const [isWithdrawing, setIsWithdrawing] = useState(false);
    const [withdrawn, setWithdrawn] = useState(false);

    useEffect(() => {
        const db = getDB();
        setWalletAddress(db.settings.walletAddress);
    }, []);

    const stats = [
        { name: "Total Revenue", value: "$1,290.00", change: "+4.2%", trending: "up", icon: ShoppingBag, color: "text-gold" },
        { name: "Affiliate Clicks", value: "842", change: "+12.2%", trending: "up", icon: MousePointer2, color: "text-blue-500" },
        { name: "Conversion Rate", value: "3.2%", change: "-0.5%", trending: "down", icon: TrendingUp, color: "text-green-500" },
        { name: "Active Users", value: "156", change: "+22.3%", trending: "up", icon: Users, color: "text-purple-500" },
    ];

    const handleWithdraw = () => {
        setIsWithdrawing(true);
        // Save to "Real" DB
        if (withdrawalMethod === 'crypto') {
            updateSettings({ walletAddress });
        }
        logWithdrawal({ method: withdrawalMethod, address: walletAddress, amount: 1290 * 0.5 });

        setTimeout(() => {
            setIsWithdrawing(false);
            setWithdrawn(true);
        }, 2000);
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.name} className="p-8 rounded-[32px] bg-white border border-[#E9ECEF] hover:shadow-luxury transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700">
                                <Icon size={80} />
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <div className={`p-3 rounded-2xl bg-[#F8F9FA] ${stat.color} border border-[#E9ECEF]`}>
                                    <Icon size={20} />
                                </div>
                                <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${stat.trending === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                    {stat.change}
                                    {stat.trending === 'up' ? <ArrowUpRight size={14} className="ml-1" /> : <ArrowDownRight size={14} className="ml-1" />}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[#6C757D] text-[10px] font-black uppercase tracking-[0.2em] mb-1">{stat.name}</h3>
                                <p className="text-3xl font-bold font-serif text-coffee-brown">{stat.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Insight Section */}
                <div className="lg:col-span-2 space-y-10">
                    <div className="p-10 rounded-[48px] bg-white border border-[#E9ECEF] shadow-sm relative overflow-hidden group min-h-[400px]">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h2 className="text-2xl font-serif text-coffee-brown mb-2">Revenue Analytics</h2>
                                <p className="text-[#6C757D] text-sm font-medium">Monitoring your machine sales performance.</p>
                            </div>
                            <div className="p-1.5 rounded-2xl bg-[#F8F9FA] border border-[#E9ECEF] flex space-x-2">
                                <button className="px-6 py-2 rounded-xl bg-white text-[10px] font-black tracking-widest uppercase shadow-sm border border-[#E9ECEF]">Detailed</button>
                                <button className="px-6 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase text-[#6C757D] hover:text-[#1a1a1a] transition-colors">Compact</button>
                            </div>
                        </div>

                        {/* Mock Chart */}
                        <div className="h-64 flex items-end space-x-3 mb-4">
                            {[15, 25, 35, 30, 45, 60, 55, 75, 80, 70, 90, 100].map((h, i) => (
                                <div key={i} className="flex-grow group/bar relative">
                                    <div
                                        className="w-full bg-[#F8F9FA] rounded-t-xl group-hover/bar:bg-gold transition-all duration-500 border-x border-t border-[#E9ECEF]"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between px-2 text-[10px] font-black text-[#ADB5BD] uppercase tracking-[0.3em]">
                            <span>Jan</span>
                            <span>Apr</span>
                            <span>Jul</span>
                            <span>Oct</span>
                            <span>Dec</span>
                        </div>
                    </div>

                    {/* Withdrawal System */}
                    <div className="p-10 rounded-[48px] bg-white border border-[#E9ECEF] shadow-sm">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="p-3 rounded-2xl bg-gold/10 text-gold border border-gold/20">
                                <Wallet size={24} />
                            </div>
                            <h2 className="text-2xl font-serif text-coffee-brown">Withdraw Funds</h2>
                        </div>

                        {withdrawn ? (
                            <div className="p-8 rounded-3xl bg-green-50 border border-green-100 text-center animate-in zoom-in-95 duration-500">
                                <CheckCircle2 className="text-green-500 w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-green-900 mb-2">Request Submitted</h3>
                                <p className="text-green-700 text-sm max-w-sm mx-auto">
                                    Your withdrawal request is being processed.
                                    {withdrawalMethod === 'crypto' && " As per Amazon policy, crypto conversions take 3-7 working days."}
                                </p>
                                <button
                                    onClick={() => setWithdrawn(false)}
                                    className="mt-6 text-green-700 font-bold text-xs uppercase tracking-widest underline underline-offset-4"
                                >
                                    New Withdrawal
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <button
                                        onClick={() => setWithdrawalMethod("paypal")}
                                        className={`p-6 rounded-[32px] border-2 text-left transition-all group ${withdrawalMethod === 'paypal' ? 'border-gold bg-gold/5' : 'border-[#F1F3F5] bg-[#F8F9FA] hover:border-gold/30'}`}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3 rounded-2xl ${withdrawalMethod === 'paypal' ? 'bg-gold text-white' : 'bg-white text-[#6C757D] border border-[#E9ECEF]'}`}>
                                                <CreditCard size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1a1a1a]">PayPal</p>
                                                <p className="text-[10px] text-[#6C757D] font-medium uppercase tracking-widest">Instant Transfer</p>
                                            </div>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setWithdrawalMethod("crypto")}
                                        className={`p-6 rounded-[32px] border-2 text-left transition-all group ${withdrawalMethod === 'crypto' ? 'border-gold bg-gold/5' : 'border-[#F1F3F5] bg-[#F8F9FA] hover:border-gold/30'}`}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3 rounded-2xl ${withdrawalMethod === 'crypto' ? 'bg-gold text-white' : 'bg-white text-[#6C757D] border border-[#E9ECEF]'}`}>
                                                <Coffee size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1a1a1a]">Crypto Wallet</p>
                                                <p className="text-[10px] text-[#6C757D] font-medium uppercase tracking-widest">USDT / BTC</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                {withdrawalMethod === 'crypto' && (
                                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-500">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Enter your USDT (ERC-20 / TRC-20) address"
                                                value={walletAddress}
                                                onChange={(e) => setWalletAddress(e.target.value)}
                                                className="w-full bg-[#F8F9FA] border border-[#E9ECEF] rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-all"
                                            />
                                        </div>
                                        <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 flex items-start space-x-3">
                                            <AlertCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                                            <p className="text-xs text-blue-700 leading-relaxed font-medium">
                                                <b>Important:</b> As per Amazon policy to convert the money in crypto it will take 3 to 7 working days, and you can take only 50% in crypto.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {withdrawalMethod && (
                                    <button
                                        onClick={handleWithdraw}
                                        disabled={isWithdrawing || (withdrawalMethod === 'crypto' && !walletAddress)}
                                        className="w-full gold-button py-5 rounded-2xl text-sm font-black tracking-[0.2em] flex items-center justify-center space-x-3 shadow-gold-glow disabled:opacity-50"
                                    >
                                        {isWithdrawing ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <span>PROCESS WITHDRAWAL</span>
                                                <ArrowRight size={18} />
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Actions and Insights */}
                <div className="space-y-8">
                    {/* Live Activity */}
                    <div className="p-8 rounded-[48px] bg-white border border-[#E9ECEF] shadow-sm">
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/20">
                                <Activity size={18} />
                            </div>
                            <h3 className="font-serif text-lg">Market Signal</h3>
                        </div>
                        <div className="space-y-6">
                            {[
                                { msg: "New click from United States", time: "just now" },
                                { msg: "Breville Barista price drop alert", time: "14m ago" },
                                { msg: "New affiliate sale pending", time: "1h ago" }
                            ].map((item, i) => (
                                <div key={i} className="flex space-x-4 items-start pb-6 border-b border-[#F1F3F5] last:border-0 last:pb-0">
                                    <div className="w-2 h-2 rounded-full bg-gold mt-1.5 shadow-gold-glow"></div>
                                    <div>
                                        <p className="text-xs font-bold text-[#1a1a1a] mb-1">{item.msg}</p>
                                        <p className="text-[10px] text-[#ADB5BD] uppercase font-black tracking-widest">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pro Tip */}
                    <div className="p-8 rounded-[48px] bg-coffee-brown shadow-luxury relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
                        <h3 className="text-white font-serif text-xl mb-4 leading-tight">Scale your <span className="text-gold italic">Strategy</span></h3>
                        <p className="text-white/60 text-xs mb-8 leading-relaxed font-medium">
                            Your performance shows a 15% increase in conversion when comparing models side-by-side. Use the scraper to add more diverse price points.
                        </p>
                        <button className="w-full py-4 rounded-2xl bg-white text-coffee-brown text-[10px] font-black tracking-widest uppercase hover:bg-gold hover:text-white transition-all">
                            Open Scraper
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
