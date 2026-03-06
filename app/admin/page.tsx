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
    ArrowRight,
    ShieldCheck,
    Heart,
    MessageSquare,
    Globe,
    Share2
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
        { name: "Visits (Last 9mo)", value: "124.5K", change: "+15.8%", trending: "up", icon: Globe, color: "text-[#1a1a1a]" },
        { name: "Total Likes", value: "12.4K", change: "+8.4%", trending: "up", icon: Heart, color: "text-red-500" },
        { name: "Comments", value: "3,204", change: "+14.1%", trending: "up", icon: MessageSquare, color: "text-blue-500" },
        { name: "Shares", value: "1,105", change: "+5.2%", trending: "up", icon: Share2, color: "text-green-500" },
    ];

    const [paypalEmail, setPaypalEmail] = useState("");
    const [isPaypalAttached, setIsPaypalAttached] = useState(false);
    const [showPaypalForm, setShowPaypalForm] = useState(false);

    const handleWithdraw = () => {
        setIsWithdrawing(true);
        const amount = 1290 * 0.5; // Always 50% for this demo/policy

        if (withdrawalMethod === 'crypto') {
            updateSettings({ walletAddress });
        }
        logWithdrawal({
            method: withdrawalMethod,
            address: withdrawalMethod === 'crypto' ? walletAddress : paypalEmail,
            amount: amount,
            status: "Processing"
        });

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
                                <h2 className="text-2xl font-serif text-coffee-brown mb-2">Earnings Report</h2>
                                <p className="text-[#6C757D] text-sm font-medium">Monitoring your machine sales performance.</p>
                            </div>
                            <div className="p-1.5 rounded-2xl bg-[#F8F9FA] border border-[#E9ECEF] flex space-x-2">
                                <button className="px-6 py-2 rounded-xl bg-white text-[10px] font-black tracking-widest uppercase shadow-sm border border-[#E9ECEF]">Detailed</button>
                                <button className="px-6 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase text-[#6C757D] hover:text-[#1a1a1a] transition-colors">Compact</button>
                            </div>
                        </div>

                        {/* Mock Chart */}
                        <div className="h-64 flex items-end space-x-3 mb-4">
                            {[30, 45, 60, 55, 75, 80, 70, 90, 100].map((h, i) => (
                                <div key={i} className="flex-grow group/bar relative">
                                    <div
                                        className="w-full bg-[#F8F9FA] rounded-t-xl group-hover/bar:bg-gold transition-all duration-500 border-x border-t border-[#E9ECEF]"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between px-2 text-[10px] font-black text-[#ADB5BD] uppercase tracking-[0.3em]">
                            <span>Jul</span>
                            <span>Sep</span>
                            <span>Nov</span>
                            <span>Jan</span>
                            <span>Mar</span>
                        </div>
                    </div>

                    {/* Withdrawal System */}
                    <div className="p-10 rounded-[48px] bg-white border border-[#E9ECEF] shadow-sm">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="p-3 rounded-2xl bg-gold/10 text-gold border border-gold/20">
                                <Wallet size={24} />
                            </div>
                            <h2 className="text-2xl font-serif text-coffee-brown">Get Paid</h2>
                        </div>

                        {withdrawn ? (
                            <div className="p-12 rounded-[40px] bg-green-50 border border-green-100 text-center animate-in zoom-in-95 duration-500">
                                <CheckCircle2 className="text-green-500 w-16 h-16 mx-auto mb-6" />
                                <h3 className="text-2xl font-serif text-green-900 mb-2">Transaction Finalized</h3>
                                <p className="text-green-700 text-sm max-w-sm mx-auto font-medium">
                                    Your withdrawal request for <span className="font-bold">$645.00</span> has been logged.
                                    {withdrawalMethod === 'crypto' && " Note: Processing requires 3-7 business days for scrip verification."}
                                </p>
                                <button
                                    onClick={() => { setWithdrawn(false); setWithdrawalMethod(null); }}
                                    className="mt-8 gold-button px-10 py-4 rounded-3xl text-[10px] font-black tracking-widest"
                                >
                                    NEW OPERATION
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <button
                                        onClick={() => { setWithdrawalMethod("paypal"); setShowPaypalForm(false); }}
                                        className={`p-8 rounded-[40px] border-2 text-left transition-all group relative overflow-hidden ${withdrawalMethod === 'paypal' ? 'border-gold bg-gold/5' : 'border-[#F1F3F5] bg-[#F8F9FA] hover:border-gold/30'}`}
                                    >
                                        <div className="flex items-center space-x-4 relative z-10">
                                            <div className={`p-4 rounded-2xl ${withdrawalMethod === 'paypal' ? 'bg-gold text-white shadow-gold-glow' : 'bg-white text-[#6C757D] border border-[#E9ECEF]'}`}>
                                                <CreditCard size={24} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1a1a1a] text-lg">PayPal</p>
                                                <p className="text-[10px] text-[#6C757D] font-black uppercase tracking-[0.2em]">{isPaypalAttached ? 'Connected' : 'Action Required'}</p>
                                            </div>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setWithdrawalMethod("crypto")}
                                        className={`p-8 rounded-[40px] border-2 text-left transition-all group relative overflow-hidden ${withdrawalMethod === 'crypto' ? 'border-gold bg-gold/5' : 'border-[#F1F3F5] bg-[#F8F9FA] hover:border-gold/30'}`}
                                    >
                                        <div className="flex items-center space-x-4 relative z-10">
                                            <div className={`p-4 rounded-2xl ${withdrawalMethod === 'crypto' ? 'bg-gold text-white shadow-gold-glow' : 'bg-white text-[#6C757D] border border-[#E9ECEF]'}`}>
                                                <Coffee size={24} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1a1a1a] text-lg">Crypto</p>
                                                <p className="text-[10px] text-[#6C757D] font-black uppercase tracking-[0.2em]">Cross-Border Scrip</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                {withdrawalMethod === 'paypal' && (
                                    <div className="animate-in slide-in-from-top-4 duration-500">
                                        {!isPaypalAttached && !showPaypalForm ? (
                                            <div className="p-10 rounded-[40px] bg-[#FAF7F2] border border-gold/10 text-center space-y-6">
                                                <p className="text-coffee-brown/60 text-sm font-medium italic">"Attach PayPal to withdraw funds securely to your verified merchant account."</p>
                                                <button
                                                    onClick={() => setShowPaypalForm(true)}
                                                    className="gold-button px-10 py-4 rounded-2xl text-[10px] font-black tracking-widest uppercase"
                                                >
                                                    CONNECT PAYPAL
                                                </button>
                                            </div>
                                        ) : showPaypalForm && !isPaypalAttached ? (
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-[#ADB5BD] ml-4">Merchant Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="paypal-merchant@example.com"
                                                    value={paypalEmail}
                                                    onChange={(e) => setPaypalEmail(e.target.value)}
                                                    className="w-full bg-[#F8F9FA] border border-[#E9ECEF] rounded-3xl px-8 py-5 text-sm focus:outline-none focus:border-gold transition-all font-medium"
                                                />
                                                <button
                                                    onClick={() => { if (paypalEmail) setIsPaypalAttached(true); }}
                                                    className="w-full bg-matte-black text-white py-5 rounded-3xl text-[10px] font-black tracking-widest uppercase hover:bg-gold transition-all shadow-lg"
                                                >
                                                    VERIFY & ATTACH ACCOUNT
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="p-8 rounded-[40px] bg-green-50 border border-green-100 flex items-center justify-between">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                                        <CheckCircle2 size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-green-900">{paypalEmail}</p>
                                                        <p className="text-[10px] text-green-700 font-black uppercase tracking-widest">Primary Merchant Account</p>
                                                    </div>
                                                </div>
                                                <button onClick={() => setIsPaypalAttached(false)} className="text-[10px] font-black text-red-500 uppercase tracking-widest">Detach</button>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {withdrawalMethod === 'crypto' && (
                                    <div className="space-y-6 animate-in slide-in-from-top-4 duration-500">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-[#ADB5BD] ml-4">Settlement Wallet (USDT/BTC)</label>
                                            <input
                                                type="text"
                                                placeholder="0x... or bc1..."
                                                value={walletAddress}
                                                onChange={(e) => setWalletAddress(e.target.value)}
                                                className="w-full bg-[#F8F9FA] border border-[#E9ECEF] rounded-3xl px-8 py-5 text-sm focus:outline-none focus:border-gold transition-all font-medium"
                                            />
                                        </div>
                                        <div className="p-8 rounded-[40px] bg-blue-50/50 border border-blue-100/50 backdrop-blur-sm relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                                <ShieldCheck size={64} className="text-blue-900" />
                                            </div>
                                            <div className="flex items-start space-x-4 relative z-10">
                                                <div className="p-3 rounded-2xl bg-white text-blue-600 shadow-sm border border-blue-100">
                                                    <AlertCircle size={20} />
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="text-xs font-black uppercase tracking-widest text-blue-900">Safety & Verification</h4>
                                                    <p className="text-xs text-blue-800/70 leading-relaxed font-medium italic">
                                                        "To keep things secure, crypto payments are currently limited to 50% of your total balance per request. It usually takes 3-7 business days to verify and process."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {withdrawalMethod && (
                                    <div className="pt-6">
                                        <div className="flex justify-between items-center mb-6 px-4">
                                            <span className="text-[10px] font-black text-[#ADB5BD] uppercase tracking-[0.3em]">Estimated Payment</span>
                                            <span className="text-2xl font-serif text-coffee-brown">$645.00 <span className="text-[10px] font-sans text-gold uppercase tracking-widest">(50% Limit)</span></span>
                                        </div>
                                        <button
                                            onClick={handleWithdraw}
                                            disabled={isWithdrawing || (withdrawalMethod === 'crypto' && !walletAddress) || (withdrawalMethod === 'paypal' && !isPaypalAttached)}
                                            className="w-full gold-button py-6 rounded-3xl text-[10px] font-black tracking-[0.25em] flex items-center justify-center space-x-3 shadow-gold-glow disabled:opacity-30 disabled:scale-100 active:scale-95 transition-all"
                                        >
                                            {isWithdrawing ? (
                                                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <>
                                                    <span>GET PAID NOW</span>
                                                    <ArrowRight size={18} />
                                                </>
                                            )}
                                        </button>
                                    </div>
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
