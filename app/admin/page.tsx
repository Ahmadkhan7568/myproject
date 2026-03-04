import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Login | Our Coffee Stops",
    description: "Secure login for the Our Coffee Stops administrator panel.",
};

export default function AdminLogin() {
    return (
        <main className="min-h-screen bg-matte-black flex items-center justify-center p-6">
            <div className="max-w-md w-full">
                <div className="text-center mb-12">
                    <Link href="/" className="inline-block">
                        <span className="text-3xl font-serif text-cream uppercase tracking-tighter">
                            OurCoffee<span className="text-gold">Stops</span>
                        </span>
                    </Link>
                    <div className="mt-4 text-[10px] font-bold text-gold uppercase tracking-[0.5em]">Administrator Access</div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
                    <h1 className="text-2xl font-serif text-cream mb-8 text-center tracking-tight">Login to Dashboard</h1>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-cream/40 mb-3 pl-1">Username</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-gold transition-all"
                                placeholder="Admin username"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-cream/40 mb-3 pl-1">Password</label>
                            <input
                                type="password"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-gold transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="w-4 h-4 bg-white/5 border-white/10 rounded focus:ring-gold" />
                                <label htmlFor="remember" className="ml-2 text-[10px] text-cream/40 uppercase tracking-widest font-bold">Keep me logged in</label>
                            </div>
                            <Link href="#" className="text-[10px] text-gold uppercase tracking-widest font-bold hover:underline">Forgot?</Link>
                        </div>

                        <button
                            type="button"
                            className="gold-button w-full py-5 rounded-2xl text-[10px] font-bold tracking-[0.4em] shadow-gold-glow mt-4"
                        >
                            AUTHENTICATE
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-white/5 text-center">
                        <Link href="/" className="text-[10px] text-cream/30 uppercase tracking-widest hover:text-gold transition-colors">
                            ← Return to website
                        </Link>
                    </div>
                </div>

                <p className="mt-12 text-center text-[10px] text-cream/10 uppercase tracking-widest font-bold">
                    Restricted access. All actions are logged.
                </p>
            </div>
        </main>
    );
}
