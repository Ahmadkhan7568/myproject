import Link from "next/link";
import { Coffee, ArrowRight, Play } from "lucide-react";

// UI Forced Update - 2026-03-05
const Hero = () => {
    return (
        <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-matte-black">
            {/* Background with luxury blurred effect and parallax-like overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
                style={{
                    backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.85), rgba(18, 18, 18, 0.45)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000')`
                }}
            />

            {/* Floating particles or glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-coffee-brown/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-dark border border-white/10 animate-in fade-in slide-in-from-top-4 duration-1000">
                        <Coffee size={14} className="text-gold" />
                        <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-black">Professional 2026 Buying Guide</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white leading-[1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        The Art of <br />
                        <span className="text-gold italic text-glow-gold">Superior Brewing</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto font-sans font-extralight leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 italic px-4">
                        Expert analysis, technical deep-dives, and curated selections for those who refuse to settle for anything less than the perfect cup.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                        <Link
                            href="/best-coffee-machines"
                            className="gold-button px-14 py-6 rounded-full text-xs font-black tracking-[0.3em] flex items-center space-x-4 group"
                        >
                            <span>EXPLORE TOP PICKS</span>
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </Link>

                        <button className="flex items-center space-x-4 group">
                            <div className="w-16 h-16 rounded-full glass-light flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-500">
                                <Play size={20} className="fill-current ml-1" />
                            </div>
                            <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">Watch Review</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-30 hover:opacity-100 transition-opacity cursor-pointer animate-float">
                <span className="text-[9px] font-black text-white uppercase tracking-[0.5em] rotate-90 ml-2">SCROLL</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
