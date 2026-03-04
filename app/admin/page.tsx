import Link from "next/link";
import {
    Users,
    TrendingUp,
    ShoppingBag,
    MousePointer2,
    ArrowUpRight,
    ArrowDownRight,
    Activity,
    Coffee
} from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { name: "Total Revenue", value: "$12,845.00", change: "+12.5%", trending: "up", icon: ShoppingBag, color: "text-gold" },
        { name: "Affiliate Clicks", value: "3,421", change: "+5.2%", trending: "up", icon: MousePointer2, color: "text-blue-400" },
        { name: "Conversion Rate", value: "4.8%", change: "-1.1%", trending: "down", icon: TrendingUp, color: "text-green-400" },
        { name: "Active Users", value: "892", change: "+18.3%", trending: "up", icon: Users, color: "text-purple-400" },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.name} className="p-6 rounded-[32px] bg-[#141414] border border-white/5 hover:border-gold/20 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                                <Icon size={64} />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}>
                                    <Icon size={20} />
                                </div>
                                <div className={`flex items-center text-xs font-bold ${stat.trending === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                    {stat.change}
                                    {stat.trending === 'up' ? <ArrowUpRight size={14} className="ml-1" /> : <ArrowDownRight size={14} className="ml-1" />}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{stat.name}</h3>
                                <p className="text-2xl font-bold font-serif">{stat.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Insight Card */}
                <div className="lg:col-span-2 p-8 rounded-[40px] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 relative overflow-hidden group">
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-all duration-1000"></div>

                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <h2 className="text-2xl font-serif mb-2">Performance Analytics</h2>
                            <p className="text-white/40 text-sm">Monthly overview of machine sales and affiliate growth.</p>
                        </div>
                        <div className="p-2 rounded-full bg-white/5 border border-white/10 flex space-x-2">
                            <button className="px-4 py-1.5 rounded-full bg-gold text-[10px] font-bold tracking-widest uppercase shadow-gold-glow">Monthly</button>
                            <button className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors">Weekly</button>
                        </div>
                    </div>

                    {/* Mock Chart Area */}
                    <div className="h-64 flex items-end space-x-4">
                        {[40, 70, 45, 90, 65, 85, 100, 75, 55, 95, 80, 110].map((h, i) => (
                            <div key={i} className="flex-grow group/bar relative">
                                <div
                                    className="w-full bg-gold/20 rounded-t-lg group-hover/bar:bg-gold transition-all duration-500"
                                    style={{ height: `${h}%` }}
                                ></div>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-white text-black px-2 py-1 rounded text-[10px] font-bold">
                                    {h}%
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-6 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                    </div>
                </div>

                {/* Right Column: Mini Cards */}
                <div className="space-y-8">
                    {/* Insights Box */}
                    <div className="p-8 rounded-[40px] bg-[#141414] border border-white/5 relative overflow-hidden">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-2 rounded-lg bg-gold/20 text-gold">
                                <Activity size={18} />
                            </div>
                            <h3 className="font-serif">Live Insights</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                <p className="text-xs text-white/70 leading-relaxed mb-2 font-medium">Trending: <span className="text-gold font-bold italic">"Breville Barista"</span> searches up 45% this morning.</p>
                                <div className="text-[10px] text-white/30 uppercase font-black">2 mins ago</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                <p className="text-xs text-white/70 leading-relaxed mb-2 font-medium">Market Alert: High demand for semi-automatic machines in Urban areas.</p>
                                <div className="text-[10px] text-white/30 uppercase font-black">1 hour ago</div>
                            </div>
                        </div>
                    </div>

                    {/* Action Card */}
                    <div className="p-8 rounded-[40px] bg-gold shadow-gold-glow relative overflow-hidden group">
                        <Coffee className="absolute -top-4 -right-4 w-24 h-24 text-black/10 transition-transform group-hover:scale-125 group-hover:rotate-12" />
                        <h3 className="text-black font-serif text-xl mb-2">Need more machines?</h3>
                        <p className="text-black/60 text-sm mb-6 font-medium">Our AI-powered scraper can hunt for 100+ machines in seconds.</p>
                        <Link
                            href="/admin/scraper"
                            className="inline-block bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                            Start Scraper →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
