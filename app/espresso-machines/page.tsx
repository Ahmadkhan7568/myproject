import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Espresso Machines 2026 – Beginner to Premium Picks",
    description: "Explore the best espresso machines for your home lab. From beginner-friendly models to premium semi-automatics, find your perfect shot.",
};

const espressoProducts = products.filter(p => p.bestFor.includes("Espresso") || p.type.includes("Espresso") || p.name.includes("Espresso"));

export default function EspressoMachines() {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />

            {/* Featured Header */}
            <section className="relative h-[60vh] flex items-center justify-center bg-coffee-brown overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 grayscale-[0.5]"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=2000')" }}
                />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6">
                        Espresso <span className="text-gold">Artistry</span>
                    </h1>
                    <p className="text-cream/70 max-w-2xl mx-auto font-sans font-light tracking-wide italic">
                        "The heart of coffee culture, refined for your home kitchen."
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif text-coffee-brown mb-6">Automatic vs. Semi-Automatic</h2>
                            <p className="text-matte-black/70 mb-6 leading-relaxed">
                                Choosing between automatic and semi-automatic machines depends on your desire for control versus consistency.
                            </p>
                            <div className="space-y-6">
                                <div className="p-6 bg-cream/30 rounded-2xl border border-gold/10">
                                    <h4 className="font-bold text-coffee-brown text-sm uppercase mb-2">Automatic Machines</h4>
                                    <p className="text-xs text-matte-black/60">Best for consistency and speed. Ideal for those who want quality espresso at the touch of a button.</p>
                                </div>
                                <div className="p-6 bg-coffee-brown text-cream rounded-2xl">
                                    <h4 className="font-bold text-gold text-sm uppercase mb-2">Semi-Automatic Machines</h4>
                                    <p className="text-xs text-cream/70">Best for enthusiasts who want to master the art of pulling a perfect shot. Greater control over grind size and pressure.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-64 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-300 font-serif italic">Espresso Shot</div>
                            <div className="h-64 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-300 font-serif italic mt-8">Frothing Milk</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-24 bg-cream/10">
                <div className="container mx-auto px-6">
                    <h3 className="text-2xl font-serif text-center mb-16 text-coffee-brown uppercase tracking-widest">Our Curated Recommendations</h3>

                    <div className="space-y-32">
                        {/* Beginner Picks */}
                        <div>
                            <div className="flex items-center space-x-6 mb-12">
                                <h4 className="text-xl font-serif text-gold">Beginner Friendly</h4>
                                <div className="flex-grow h-[1px] bg-gold/20"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {products.slice(4, 7).map(p => (
                                    <ProductCard key={p.id} product={p} />
                                ))}
                            </div>
                        </div>

                        {/* Premium Picks */}
                        <div>
                            <div className="flex items-center space-x-6 mb-12">
                                <h4 className="text-xl font-serif text-gold">Premium Selection</h4>
                                <div className="flex-grow h-[1px] bg-gold/20"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                                {products.slice(0, 2).map(p => (
                                    <ProductCard key={p.id} product={p} featured />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Linking */}
            <section className="py-20 border-t border-coffee-brown/5">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-serif text-coffee-brown mb-8 uppercase tracking-tighter">Looking for more?</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/best-coffee-machines" className="text-xs font-bold tracking-widest hover:text-gold transition-colors underline underline-offset-8">ALL TOP PICKS</Link>
                        <span className="text-gold/30">|</span>
                        <Link href="/comparison" className="text-xs font-bold tracking-widest hover:text-gold transition-colors underline underline-offset-8">DETAILED COMPARISON</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
