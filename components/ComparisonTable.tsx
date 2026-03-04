"use client";

import { Check, X, ShieldCheck, Zap, Coffee, Droplets } from "lucide-react";

interface ComparisonTableProps {
    products: any[];
}

const ComparisonTable = ({ products }: ComparisonTableProps) => {
    if (!products || products.length === 0) return null;

    const rows = [
        { label: "Brewing System", key: "type", icon: Coffee },
        { label: "Pump Pressure", key: "pumpPressure", icon: Droplets },
        { label: "Grinder Type", key: "grinder", icon: Zap },
        { label: "Milk Frothing", key: "milkFrother", icon: Zap },
        { label: "Heating System", key: "heatingSystem", icon: Droplets },
        { label: "Expert For", key: "bestFor", icon: ShieldCheck },
        { label: "Ease of Use", key: "easeOfUse", icon: Check },
        { label: "Price Point", key: "price", icon: Zap },
    ];

    return (
        <div className="space-y-16 animate-in fade-in duration-1000">
            <div className="text-center space-y-6">
                <div className="inline-flex items-center space-x-3 text-gold">
                    <ShieldCheck size={18} />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] font-inter">Lab Comparison</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">Technical <span className="text-gold italic">Benchmark</span></h2>
                <p className="text-white/40 max-w-2xl mx-auto text-sm font-medium italic">A side-by-side analysis of the market's leading coffee engineering feats, verified by our 2026 technical audit.</p>
            </div>

            <div className="overflow-x-auto pb-12 scrollbar-hide">
                <table className="w-full border-separate border-spacing-x-4 border-spacing-y-0">
                    <thead>
                        <tr>
                            <th className="p-0"></th>
                            {products.map((product, i) => (
                                <th key={product.id || i} className="p-0 min-w-[280px]">
                                    <div className="bg-white/5 rounded-t-[40px] border-x border-t border-white/10 p-10 text-center space-y-4 backdrop-blur-sm">
                                        <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">{product.type || "Expert Choice"}</p>
                                        <h3 className="text-xl font-serif text-white leading-snug h-14 line-clamp-2">{product.name}</h3>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-sm font-inter">
                        {rows.map((row, idx) => (
                            <tr key={idx} className="group">
                                <td className="px-10 py-8 bg-black/40 border-l border-white/5 first:rounded-tl-[20px] last:rounded-bl-[20px] backdrop-blur-md">
                                    <div className="flex items-center space-x-3">
                                        <row.icon size={14} className="text-gold/50" />
                                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{row.label}</span>
                                    </div>
                                </td>
                                {products.map((product, pIdx) => (
                                    <td
                                        key={pIdx}
                                        className={`px-10 py-8 text-center text-white/70 border-x border-white/5 transition-all duration-500 group-hover:bg-white/5 ${idx === rows.length - 1 ? 'border-b border-white/10' : 'border-b border-white/5'}`}
                                    >
                                        <span className={`font-serif ${typeof product[row.key] === 'boolean' ? '' : 'text-lg text-white'}`}>
                                            {product[row.key] === true ? <Check className="mx-auto text-green-500" size={24} /> :
                                                product[row.key] === false ? <X className="mx-auto text-red-500/30" size={24} /> :
                                                    product[row.key] || "N/A"}
                                        </span>
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr>
                            <td className="p-0"></td>
                            {products.map((product, i) => (
                                <th key={i} className="p-0">
                                    <div className="bg-white/5 rounded-b-[40px] border-x border-b border-white/10 p-10 text-center backdrop-blur-sm">
                                        <a
                                            href={product.latestPriceLink}
                                            className="gold-button inline-flex px-8 py-4 rounded-full text-[10px] font-black tracking-widest uppercase shadow-gold-glow w-full justify-center"
                                        >
                                            SECURE ITEM
                                        </a>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center flex-wrap gap-8 items-center pt-8 border-t border-white/5">
                <div className="flex items-center space-x-3 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    <span>US-EAST RELAY ACTIVE</span>
                </div>
                <div className="flex items-center space-x-3 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                    <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(198,167,94,0.5)]"></div>
                    <span>MARKET DATA SYNCED</span>
                </div>
                <div className="flex items-center space-x-3 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <span>SCA CERTIFIED AUDIT</span>
                </div>
            </div>
        </div>
    );
};

export default ComparisonTable;
