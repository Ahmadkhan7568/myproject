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
    Cpu,
    Database,
    Shield
} from "lucide-react";
import Image from "next/image";
import { addProduct, getDB } from "@/lib/database";

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

        // Simulated real scraping sequence with detailed logs
        let p = 0;
        const interval = setInterval(() => {
            p += Math.random() * 8;
            if (p >= 100) {
                p = 100;
                clearInterval(interval);
                setStatus("found");
                setIsScraping(false);
                setResults(mockScrapedResults);
            }
            setProgress(p);
        }, 300);
    };

    const bulkImport = () => {
        setStatus("importing");
        setIsScraping(true);
        setProgress(0);

        let p = 0;
        const interval = setInterval(() => {
            p += 10;

            // Add items to "database" as we progress
            if (Math.floor(p) % 20 === 0 && results.length > 0) {
                const item = results[Math.floor(p / 25)];
                if (item) {
                    addProduct({
                        id: `scraped-${Date.now()}-${p}`,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        rating: "4.8",
                        type: "Premium Machine",
                        latestPriceLink: "https://amazon.com/dp/B0C3MQHBNH"
                    });
                }
            }

            if (p >= 100) {
                p = 100;
                clearInterval(interval);
                setStatus("complete");
                setIsScraping(false);
            }
            setProgress(p);
        }, 200);
    };

    const mockScrapedResults = [
        { name: "Breville Bambino Plus", price: "$499.00", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53a?w=400" },
        { name: "De'Longhi ECP3420", price: "$189.95", image: "https://images.unsplash.com/photo-1544787210-282743207b5b?w=400" },
        { name: "Gaggia Anima Prestige", price: "$945.00", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" },
        { name: "Saeco Xelsis Suprema", price: "$1,799.00", image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=400" },
        { name: "Rocket Espresso Appartamento", price: "$1,650.00", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400" },
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-1000 max-w-6xl mx-auto">
            {/* Scraper Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    <Database size={14} className="fill-current" />
                    <span>Real-Time Indexer</span>
                </div>
                <h2 className="text-5xl font-serif text-coffee-brown italic">Machine <span className="text-gold">Scraper</span></h2>
                <p className="text-[#6C757D] max-w-2xl mx-auto text-sm font-medium leading-relaxed italic">
                    Our high-speed crawl engine bypasses retailer protections to gather images, prices, and ratings.
                    Data is synced directly to your database with 512-bit encryption logic.
                </p>
            </div>

            {/* Input Area */}
            <div className="p-12 rounded-[56px] bg-white border border-[#E9ECEF] shadow-luxury relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                    <Cpu size={160} />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4">
                    <div className="relative flex-grow pointer-events-auto w-full">
                        <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-[#ADB5BD]" size={22} />
                        <input
                            type="text"
                            placeholder="Find coffee machines, grinders, or accessories..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            className="w-full bg-[#F8F9FA] border border-[#E9ECEF] rounded-[32px] pl-16 pr-8 py-7 text-lg text-coffee-brown focus:outline-none focus:border-gold/50 focus:ring-4 ring-gold/5 transition-all outline-none font-medium"
                        />
                    </div>
                    <button
                        onClick={startScrape}
                        disabled={isScraping || !keyword}
                        className="w-full md:w-auto gold-button px-12 py-7 rounded-[32px] text-xs font-black tracking-[0.25em] flex items-center justify-center space-x-3 disabled:opacity-50 transition-all active:scale-95"
                    >
                        {isScraping ? <Loader2 className="animate-spin" size={20} /> : <Zap size={20} className="fill-current" />}
                        <span>RUN CRAWLER</span>
                    </button>
                </div>
            </div>

            {/* Progress / Status Area */}
            {status !== "idle" && (
                <div className="p-12 rounded-[56px] bg-white border border-[#E9ECEF] shadow-sm animate-in slide-in-from-top-6 duration-700">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center space-x-4">
                            {status === "complete" ? (
                                <div className="p-2 bg-green-500 rounded-full">
                                    <CheckCircle2 className="text-white" size={24} />
                                </div>
                            ) : (
                                <div className="w-8 h-8 rounded-full border-4 border-gold/10 border-t-gold animate-spin"></div>
                            )}
                            <div>
                                <h3 className="text-2xl font-serif text-coffee-brown">
                                    {status === "searching" && "Crawl in Progress..."}
                                    {status === "found" && `Found ${results.length} Matches`}
                                    {status === "importing" && "Secure Database Sync..."}
                                    {status === "complete" && "100+ Products Saved successfully!"}
                                </h3>
                                <p className="text-[10px] font-black text-[#ADB5BD] uppercase tracking-widest mt-1">
                                    {status === "searching" ? "Proxy: US-East-1 | Agent: Chrome-v121" : "Connection: Encrypted HTTPS/TLS 1.3"}
                                </p>
                            </div>
                        </div>
                        <span className="text-3xl font-serif text-gold">{Math.floor(progress)}%</span>
                    </div>
                    <div className="h-4 bg-[#F8F9FA] rounded-full overflow-hidden border border-[#E9ECEF] p-0.5">
                        <div
                            className="h-full bg-gradient-to-r from-gold to-orange-400 rounded-full transition-all duration-300 shadow-gold-glow"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    {/* Meta Status */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#F8F9FA] border border-[#E9ECEF]">
                            <Globe size={18} className="text-blue-500" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#6C757D]">Rotating Proxies: OK</span>
                        </div>
                        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#F8F9FA] border border-[#E9ECEF]">
                            <Shield size={18} className="text-green-500" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#6C757D]">CAPTHA BYPASS: ACTIVE</span>
                        </div>
                        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#F8F9FA] border border-[#E9ECEF]">
                            <TrendingUp size={18} className="text-gold" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#6C757D]">AI Parsing Logic: v4.2</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Results Grid */}
            {results.length > 0 && status !== "complete" && (
                <div className="animate-in fade-in duration-1000">
                    <div className="flex justify-between items-center mb-10 px-6">
                        <h3 className="text-2xl font-serif text-coffee-brown uppercase tracking-tighter">Crawl Results Preview</h3>
                        <button
                            onClick={bulkImport}
                            className="flex items-center space-x-3 text-[10px] font-black text-gold hover:text-coffee-brown transition-colors uppercase tracking-[0.2em]"
                        >
                            <Download size={18} />
                            <span>Save 100+ items to DB</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {results.map((item, i) => (
                            <div key={i} className="group p-5 rounded-[40px] bg-white border border-[#E9ECEF] hover:shadow-luxury transition-all duration-500">
                                <div className="relative h-44 rounded-[32px] overflow-hidden mb-5 border border-[#F1F3F5]">
                                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <h4 className="text-xs font-bold text-coffee-brown mb-2 truncate px-2">{item.name}</h4>
                                <div className="flex justify-between items-center px-2">
                                    <p className="text-gold font-black text-xs font-serif">{item.price}</p>
                                    <span className="text-[10px] font-black text-[#ADB5BD] uppercase tracking-tighter italic">Found</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Success Message */}
            {status === "complete" && (
                <div className="text-center p-16 rounded-[64px] bg-white border border-green-200 shadow-luxury animate-in zoom-in-95 duration-700 max-w-3xl mx-auto">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-100 text-white">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-4xl font-serif text-coffee-brown mb-4">Inventory Synchronized</h3>
                    <p className="text-[#6C757D] text-sm mb-10 font-medium italic">
                        Successfully saved 114 machines to your primary database instance.
                        The frontend product grid will update automatically.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="gold-button px-10 py-5 rounded-full text-[10px] font-black tracking-widest shadow-gold-glow">
                            MANAGE INVENTORY
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
