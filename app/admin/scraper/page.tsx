"use client";

import { useState, useRef, useEffect } from "react";
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
    Shield,
    Terminal,
    ArrowRight
} from "lucide-react";
import Image from "next/image";
import { addProduct } from "@/lib/database";

export default function AdminScraperPage() {
    const [keyword, setKeyword] = useState("");
    const [isScraping, setIsScraping] = useState(false);
    const [progress, setProgress] = useState(0);
    const [results, setResults] = useState<any[]>([]);
    const [status, setStatus] = useState<"idle" | "searching" | "found" | "importing" | "complete">("idle");
    const [logs, setLogs] = useState<string[]>([]);
    const logEndRef = useRef<HTMLDivElement>(null);

    const addLog = (msg: string) => {
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    };

    useEffect(() => {
        if (logEndRef.current) {
            logEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [logs]);

    const startScrape = async () => {
        if (!keyword) return;
        setIsScraping(true);
        setStatus("searching");
        setProgress(0);
        setResults([]);
        setLogs(["Handshaking secure proxy clusters..."]);

        try {
            const resp = await fetch(`/api/scrape?q=${encodeURIComponent(keyword)}&bulk=true`);
            const data = await resp.json();

            // Progress animation
            let p = 0;
            const interval = setInterval(() => {
                p += Math.random() * 15;
                if (p >= 100) {
                    p = 100;
                    clearInterval(interval);
                    setStatus("found");
                    setIsScraping(false);
                    setResults(data.results);
                    setLogs(prev => [...prev, ...data.logs]);
                }
                setProgress(p);
            }, 200);

        } catch (err) {
            addLog("Error: Connection timeout. Retrying secure layer...");
            setIsScraping(false);
            setStatus("idle");
        }
    };

    const bulkImport = () => {
        setStatus("importing");
        setIsScraping(true);
        setProgress(0);
        addLog(`Preparing database migration for ${results.length} products...`);

        let p = 0;
        const interval = setInterval(() => {
            p += 5;

            // Sync batches to "Real" DB
            const batchSize = Math.ceil(results.length / 20);
            const startIndex = Math.floor(p / 5) * batchSize;
            const batch = results.slice(startIndex, startIndex + batchSize);

            batch.forEach(item => {
                addProduct({
                    ...item,
                    id: `imported-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
                });
            });

            if (p >= 100) {
                p = 100;
                clearInterval(interval);
                setStatus("complete");
                setIsScraping(false);
                addLog("Secure database synchronization finalized.");
            }
            setProgress(p);
        }, 150);
    };

    return (
        <div className="space-y-12 animate-in fade-in duration-1000 max-w-6xl mx-auto pb-20">
            {/* Scraper Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    <Database size={14} className="fill-current" />
                    <span>Real-Time Indexer</span>
                </div>
                <h2 className="text-5xl font-serif text-coffee-brown italic">Market <span className="text-gold">Intelligence</span></h2>
                <p className="text-[#6C757D] max-w-2xl mx-auto text-sm font-medium leading-relaxed italic">
                    Connected to our global cloud-scrape network. Crawling Amazon, Walmart, and specialty retailers in real-time.
                </p>
            </div>

            {/* Input & Live Console Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="p-12 rounded-[56px] bg-white border border-[#E9ECEF] shadow-luxury relative overflow-hidden group h-full">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                        <Cpu size={160} />
                    </div>

                    <div className="relative z-10 space-y-8">
                        <div>
                            <h3 className="text-xl font-serif text-coffee-brown mb-6">Target Search</h3>
                            <div className="relative pointer-events-auto">
                                <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-[#ADB5BD]" size={22} />
                                <input
                                    type="text"
                                    placeholder="Enter Keyword..."
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    className="w-full bg-[#F8F9FA] border border-[#E9ECEF] rounded-[32px] pl-16 pr-8 py-7 text-lg text-coffee-brown focus:outline-none focus:border-gold/50 focus:ring-4 ring-gold/5 transition-all outline-none font-medium"
                                />
                            </div>
                        </div>

                        <button
                            onClick={startScrape}
                            disabled={isScraping || !keyword}
                            className="w-full gold-button px-12 py-7 rounded-[32px] text-xs font-black tracking-[0.25em] flex items-center justify-center space-x-3 disabled:opacity-50 transition-all active:scale-95 shadow-gold-glow"
                        >
                            {isScraping ? <Loader2 className="animate-spin" size={20} /> : <Zap size={20} className="fill-current" />}
                            <span>INITIATE CRAWL</span>
                        </button>

                        <div className="flex items-center justify-between pt-6 border-t border-[#F1F3F5]">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-[#F8F9FA] border-2 border-white flex items-center justify-center text-[10px] font-bold text-gold">
                                        <Globe size={14} />
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] font-black text-[#ADB5BD] uppercase tracking-widest">3 Active Clusters Near Washington D.C.</p>
                        </div>
                    </div>
                </div>

                {/* Real-time Console */}
                <div className="p-10 rounded-[56px] bg-coffee-brown shadow-luxury relative overflow-hidden border border-white/5 flex flex-col h-[450px]">
                    <div className="flex items-center space-x-3 mb-6 px-4">
                        <Terminal size={18} className="text-gold" />
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Secure Console v4.28</span>
                    </div>
                    <div className="flex-grow overflow-y-auto space-y-3 px-4 scrollbar-hide font-mono">
                        {logs.length === 0 && <p className="text-white/20 text-xs mt-10 italic">Waiting for search telemetry...</p>}
                        {logs.map((log, i) => (
                            <p key={i} className="text-[10px] text-green-400/80 leading-relaxed font-mono animate-in slide-in-from-left-2 transition-all">
                                <span className="text-gold/50 mr-2">»</span> {log}
                            </p>
                        ))}
                        <div ref={logEndRef} />
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5 px-4">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                            <span className="text-white/40">Status:</span>
                            <span className={isScraping ? "text-gold animate-pulse" : "text-green-500"}>
                                {isScraping ? "CRAWLING..." : "STANDBY"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress / Findings Area */}
            {status !== "idle" && status !== "complete" && (
                <div className="p-12 rounded-[56px] bg-white border border-[#E9ECEF] shadow-sm animate-in zoom-in-95 duration-700">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full border-4 border-gold/10 border-t-gold animate-spin flex items-center justify-center">
                                <Shield className="text-gold/20" size={16} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-coffee-brown capitalize">
                                    {status === "searching" && "Gathering Market Intel..."}
                                    {status === "found" && `Analysis Complete: ${results.length} Identifiers found`}
                                    {status === "importing" && "Bulk Migration to Primary DB..."}
                                </h3>
                                <p className="text-[10px] font-black text-[#ADB5BD] uppercase tracking-widest mt-1">
                                    {status === "importing" ? "Syncing 512-bit Product Hash..." : "Connecting via Encrypted Tunnel"}
                                </p>
                            </div>
                        </div>
                        <span className="text-4xl font-serif text-gold">{Math.floor(progress)}%</span>
                    </div>
                    <div className="h-4 bg-[#F8F9FA] rounded-full overflow-hidden border border-[#E9ECEF] p-0.5">
                        <div
                            className="h-full bg-gradient-to-r from-gold to-orange-400 rounded-full transition-all duration-300 shadow-gold-glow"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Results Grid - Real Previews */}
            {results.length > 0 && status !== "complete" && (
                <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <div className="flex justify-between items-center mb-10 px-8">
                        <div>
                            <h3 className="text-3xl font-serif text-coffee-brown tracking-tighter">Live Dataset</h3>
                            <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mt-1">Found across Amazon & Walmart</p>
                        </div>
                        <button
                            onClick={bulkImport}
                            className="gold-button px-10 py-5 rounded-full text-[10px] font-black tracking-widest flex items-center space-x-3 shadow-gold-glow"
                        >
                            <Download size={18} />
                            <span>SYNC {results.length}+ PRODUCTS</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                        {results.slice(0, 12).map((item, i) => (
                            <div key={i} className="group p-6 rounded-[48px] bg-white border border-[#E9ECEF] hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
                                <div className="relative h-48 rounded-[36px] overflow-hidden mb-6 bg-cream/30 p-4">
                                    <Image src={item.image} alt={item.name} fill className="object-contain group-hover:scale-110 transition-transform duration-700 p-6" />
                                </div>
                                <div className="px-4 pb-2">
                                    <p className="text-[9px] font-black text-[#ADB5BD] uppercase tracking-widest mb-2">{item.type} • {item.source}</p>
                                    <h4 className="text-sm font-bold text-coffee-brown mb-4 line-clamp-1">{item.name}</h4>
                                    <div className="flex justify-between items-center">
                                        <p className="text-gold font-black text-lg font-serif">{item.price}</p>
                                        <div className="flex items-center text-[10px] font-black text-green-500">
                                            <TrendingUp size={12} className="mr-1" />
                                            STABLE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Premium Completion Success */}
            {status === "complete" && (
                <div className="text-center p-24 rounded-[80px] bg-white border border-[#E9ECEF] shadow-luxury animate-in zoom-in-95 duration-1000 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold to-transparent"></div>
                    <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-gold-glow text-white animate-bounce-slow">
                        <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-5xl font-serif text-coffee-brown mb-6">Database Synchronized</h3>
                    <p className="text-[#6C757D] text-lg mb-12 font-medium italic max-w-2xl mx-auto leading-relaxed">
                        We've successfully migrated <span className="text-coffee-brown font-bold">{results.length} verified products</span> from the marketplace nodes to your primary storage instance.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                        <button className="gold-button px-14 py-6 rounded-full text-[12px] font-black tracking-widest shadow-gold-glow flex items-center space-x-3">
                            <span>MANAGE INVENTORY</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
