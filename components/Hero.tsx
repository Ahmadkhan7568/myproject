import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background with luxury blurred effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.4)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000')`
                }}
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-block px-4 py-1 mb-6 border border-gold/30 rounded-full bg-gold/10 backdrop-blur-sm">
                    <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">2026 Ultimate Buying Guide</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] max-w-5xl mx-auto">
                    Find the Perfect <span className="text-gold">Coffee Machine</span> for Your Home
                </h1>

                <p className="text-lg md:text-xl text-cream/80 mb-12 max-w-2xl mx-auto font-sans font-light leading-relaxed">
                    Expert reviews, in-depth comparisons, and curated top picks to help you choose the best coffee machine without wasting money.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="/best-coffee-machines"
                        className="gold-button px-10 py-5 rounded-full text-sm font-bold tracking-widest shadow-gold-glow w-full sm:w-auto"
                    >
                        VIEW TOP PICKS
                    </Link>
                    <Link
                        href="/comparison"
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-sm font-bold tracking-widest hover:bg-white/20 transition-all w-full sm:w-auto"
                    >
                        COMPARE MODELS
                    </Link>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
