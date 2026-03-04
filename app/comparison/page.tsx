import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import { products } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Coffee Machine Comparison – BrewMaster vs AromaCraft vs NovaPress",
    description: "Compare the top coffee machines of 2026 side-by-side. Analyze price ranges, capacities, and ease of use to find your perfect match.",
};

export default function Comparison() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />

            {/* Visual Header */}
            <section className="py-24 bg-cream/30">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif text-coffee-brown mb-6">
                        Detailed Comparison
                    </h1>
                    <p className="text-lg text-matte-black/60 max-w-2xl mx-auto font-sans">
                        We've broken down every technical detail so you don't have to. Compare our top-rated models below.
                    </p>
                </div>
            </section>

            {/* Main Comparison Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-20">
                        <h2 className="text-2xl font-serif text-coffee-brown mb-8 uppercase tracking-widest text-center">Technical Specifications</h2>
                        <ComparisonTable products={products.slice(0, 4)} />
                    </div>

                    {/* Key Head-to-Head Comparisons */}
                    <div className="space-y-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="p-10 card-luxury border border-gold/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <h3 className="text-2xl font-serif text-coffee-brown mb-6">BrewMaster Elite 9000 vs. Veloura SmartBrew 360</h3>
                                <p className="text-sm text-matte-black/70 mb-8 leading-relaxed">
                                    The ultimate battle between professional-grade precision and smart technology convenience.
                                    Choose the **BrewMaster** if you're a purist seeking control.
                                    Choose the **Veloura** if you value your time and modern connectivity.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-cream/20 rounded-xl">
                                        <span className="block text-gold text-lg font-serif">Winner</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Quality: BrewMaster</span>
                                    </div>
                                    <div className="text-center p-4 bg-cream/20 rounded-xl">
                                        <span className="block text-gold text-lg font-serif">Winner</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Ease: Veloura</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 card-luxury border border-gold/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <h3 className="text-2xl font-serif text-coffee-brown mb-6">AromaCraft Pro X2 vs. NovaPress Espresso One</h3>
                                <p className="text-sm text-matte-black/70 mb-8 leading-relaxed">
                                    Comparing the mid-range heavyweights. The **AromaCraft** is the perfect companion for a busy family kitchen,
                                    while the **NovaPress** is designed for the minimalist who wants big results from a small footprint.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-cream/20 rounded-xl">
                                        <span className="block text-gold text-lg font-serif">Winner</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Speed: AromaCraft</span>
                                    </div>
                                    <div className="text-center p-4 bg-cream/20 rounded-xl">
                                        <span className="block text-gold text-lg font-serif">Winner</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Space: NovaPress</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <section className="py-24 bg-matte-black text-cream">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif text-gold mb-12">Understanding the Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-widest mb-4">Type</h4>
                            <p className="text-xs text-cream/60 leading-relaxed">Refers to the brewing mechanism—automatic, semi-automatic, or manual.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-widest mb-4">Capacity</h4>
                            <p className="text-xs text-cream/60 leading-relaxed">The volume of water the tank can hold. Crucial for large households.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-widest mb-4">Ease of Use</h4>
                            <p className="text-xs text-cream/60 leading-relaxed">An expert assessment of the learning curve for each machine.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
