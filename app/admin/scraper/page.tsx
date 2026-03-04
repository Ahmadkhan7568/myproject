"use client";

import { useState, useEffect } from "react";
import {
    Search,
    Loader2,
    CheckCircle2,
    AlertCircle,
    Download,
    Zap,
    Coffee,
    TrendingUp,
    Globe,
    Cpu
} from "lucide-react";
import Image from "next/image";

export default function AdminScraperPage() {
    const [keyword, setKeyword] = useState("");
    const [isScraping, setIsScraping] = useState(false);
    const [progress, setProgress] = useState(0);
    const [results, setResults] = useState<any[]>([]);
    const [status, setStatus] = useState<"idle" | "searching" | "found" | "importing" | "complete">("idle");

    const startScrape = () => {
        if (!keyword) return;
        setIsScraping(true);
        setStatus("searching");
        setProgress(0);
        setResults([]);

        // Simulated scraping sequence
        let p = 0;
        const interval = setInterval(() => {
            p += Math.random() * 15;
            if (p >= 100) {
                p = 100;
                clearInterval(interval);
                setStatus("found");
                setIsScraping(false);
                setResults(mockScrapedResults);
            }
            setProgress(p);
        }, 400);
    };

    const bulkImport = () => {
        setStatus("importing");
        setIsScraping(true);
        setProgress(0);

        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            if (p >= 100) {
                p = 100;
                clearInterval(interval);
                setStatus("complete");
                setIsScraping(false);
            }
            setProgress(p);
        }, 150);
    };

    const mockScrapedResults = [
        { name: "Breville Bambino Plus", price: "$499.95", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53a?w=400" },
        { name: "De'Longhi ECP3420", price: "$159.99", image: "https://images.unsplash.com/photo-1544787210-282743207b5b?w=400" },
        { name: "Gaggia Anima Prestige", price: "$899.00", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" },
        { name: "Saeco Xelsis Suprema", price: "$1,899.00", image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=400" },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-700 max-w-5xl mx-auto">
            {/* Scraper Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    <Zap size={14} className="fill-current" />
                    <span>AI-Powered Engine</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif">Machine <span className="text-gold italic">Scraper</span></h2>
                <p className="text-white/40 max-w-xl mx-auto text-sm font-medium">
                    Automatically crawl Amazon, Walmart, and specialty coffee retailers to find the highest-rated machines and import them directly to your store.
                </p>
            </div>

            {/* Input Area */}
            <div className="p-10 rounded-[48px] bg-[#141414] border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Cpu size={120} />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="relative flex-grow pointer-events-auto">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                        <input
                            type="text"
                            placeholder="Enter keywords (e.g., 'espresso machines', 'best coffee grinders')"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full px-16 py-6 text-lg focus:outline-none focus:border-gold/50 focus:ring-4 ring-gold/5 transition-all outline-none"
                        />
                    </div>
                    <button
                        onClick={startScrape}
                        disabled={isScraping || !keyword}
                        className="w-full md:w-auto gold-button px-10 py-6 rounded-full text-sm font-black tracking-widest flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {isScraping ? <Loader2 className="animate-spin" size={20} /> : <Zap size={20} className="fill-current" />}
                        <span>RUN SCRAPER</span>
                    </button>
                </div>
            </div>

            {/* Progress / Status Area */}
            {status !== "idle" && (
                <div className="p-10 rounded-[48px] bg-white/5 border border-white/10 animate-in slide-in-from-top-4 duration-500">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center space-x-3">
                            {status === "complete" ? (
                                <CheckCircle2 className="text-green-400" size={24} />
                            ) : (
                                <div className="w-6 h-6 rounded-full border-2 border-gold/30 border-t-gold animate-spin"></div>
                            )}
                            <h3 className="text-xl font-serif">
                                {status === "searching" && "Crawl in Progress..."}
                                {status === "found" && `Found ${results.length} Matches`}
                                {status === "importing" && "Syncing with Database..."}
                                {status === "complete" && "100+ Products Imported Successfully!"}
                            </h3>
                        </div>
                        <span className="text-gold font-bold font-mono">{Math.floor(progress)}%</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                            className="h-full bg-gradient-to-r from-gold to-orange-500 transition-all duration-300 shadow-gold-glow"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    {/* Meta Status */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        <div className="flex items-center space-x-3 opacity-60">
                            <Globe size={16} className="text-blue-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Proxies Active</span>
                        </div>
                        <div className="flex items-center space-x-3 opacity-60">
                            <TrendingUp size={16} className="text-green-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">parsing logic v4.2</span>
                        </div>
                        <div className="flex items-center space-x-3 opacity-60">
                            <AlertCircle size={16} className="text-yellow-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Bypass Captha enabled</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Results Grid */}
            {results.length > 0 && status !== "complete" && (
                <div className="animate-in fade-in duration-1000">
                    <div className="flex justify-between items-center mb-8 px-4">
                        <h3 className="text-2xl font-serif">Scraped Preview</h3>
                        <button
                            onClick={bulkImport}
                            className="flex items-center space-x-2 text-xs font-bold text-gold hover:text-white transition-colors uppercase tracking-widest"
                        >
                            <Download size={16} />
                            <span>Import All 100+ items</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {results.map((item, i) => (
                            <div key={i} className="group p-4 rounded-3xl bg-[#141414] border border-white/5 hover:border-gold/30 transition-all duration-500">
                                <div className="relative h-40 rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <h4 className="text-sm font-bold mb-1 truncate">{item.name}</h4>
                                <p className="text-gold font-bold text-xs">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Success Message */}
            {status === "complete" && (
                <div className="text-center p-12 rounded-[48px] bg-green-500/10 border border-green-500/20 animate-in zoom-in-95 duration-700">
                    <Coffee className="w-16 h-16 text-green-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-serif text-green-400 mb-2">Operation Successful</h3>
                    <p className="text-white/60 text-sm mb-8">All 100+ machines have been indexed and added to your inventory.</p>
                    <button className="px-8 py-4 rounded-full bg-green-500 text-white text-xs font-black tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all">
                        GO TO INVENTORY
                    </button>
                </div>
            )}
        </div>
    );
}
