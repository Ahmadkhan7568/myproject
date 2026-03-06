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
        <div className="min-h-screen bg-[#000000] flex items-center justify-center p-6 font-inter">
            <div className="max-w-md w-full animate-in fade-in zoom-in duration-700">
                <div className="bg-[#111111] rounded-[48px] shadow-2xl border border-white/5 p-12 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center text-white shadow-gold-glow mx-auto mb-6">
                            <Coffee size={32} className="fill-current" />
                        </div>
                        <h1 className="text-3xl font-serif text-white mb-2 tracking-tight">Admin Portal</h1>
                        <p className="text-sm text-white/40 font-medium italic">Sign in to manage your coffee store.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@admin.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-sm text-white focus:outline-none focus:border-gold/30 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-sm text-white focus:outline-none focus:border-gold/30 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="flex items-center space-x-2 text-red-400 text-[10px] font-black uppercase tracking-widest bg-red-500/10 p-4 rounded-2xl animate-in slide-in-from-top-1 border border-red-500/20">
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
                                    <span>SIGN IN</span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-white/5 text-center">
                        <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.3em]">
                            Admin Panel Access
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
