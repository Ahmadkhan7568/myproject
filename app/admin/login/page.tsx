"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Coffee, Lock, Mail, Loader2, AlertCircle } from "lucide-react";
import { login, isAuthenticated } from "@/lib/auth";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated()) {
            router.push("/admin");
        }
    }, [router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Artificial delay for premium feel
        await new Promise(resolve => setTimeout(resolve, 800));

        if (login(email, password)) {
            router.push("/admin");
        } else {
            setError("Invalid credentials. Access denied.");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-6 font-inter">
            <div className="max-w-md w-full animate-in fade-in zoom-in duration-700">
                <div className="bg-white rounded-[48px] shadow-luxury border border-coffee-brown/5 p-12 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center text-white shadow-gold-glow mx-auto mb-6">
                            <Coffee size={32} className="fill-current" />
                        </div>
                        <h1 className="text-3xl font-serif text-coffee-brown mb-2 tracking-tight">Admin Portal</h1>
                        <p className="text-sm text-coffee-brown/40 font-medium italic">Secure access following 512-bit encryption protocols.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-coffee-brown/40 ml-4">Authorized Email</label>
                            <div className="relative">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@admin.com"
                                    className="w-full bg-[#FAF7F2] border border-coffee-brown/5 rounded-3xl py-5 pl-16 pr-6 text-sm text-coffee-brown focus:outline-none focus:border-gold/30 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-coffee-brown/40 ml-4">Security Passphrase</label>
                            <div className="relative">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className="w-full bg-[#FAF7F2] border border-coffee-brown/5 rounded-3xl py-5 pl-16 pr-6 text-sm text-coffee-brown focus:outline-none focus:border-gold/30 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="flex items-center space-x-2 text-red-500 text-[10px] font-black uppercase tracking-widest bg-red-50 p-4 rounded-2xl animate-in slide-in-from-top-1">
                                <AlertCircle size={14} />
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full gold-button py-6 rounded-3xl text-[10px] font-black tracking-[0.25em] shadow-gold-glow flex items-center justify-center space-x-3 active:scale-95 transition-all"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin" size={18} />
                            ) : (
                                <>
                                    <span>AUTHORIZE SESSION</span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-coffee-brown/5 text-center">
                        <p className="text-[9px] font-black text-coffee-brown/20 uppercase tracking-[0.3em]">
                            OurCoffeeStops Secure Layer v4.28
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
