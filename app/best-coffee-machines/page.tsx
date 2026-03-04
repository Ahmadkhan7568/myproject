import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import { products } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Coffee Machines of 2026 – Expert Reviews & Buying Guide",
    description: "Comprehensive guide to the best coffee machines in 2026. Detailed reviews, pros & cons, and side-by-side comparisons of the top models.",
};

export default function BestCoffeeMachines() {
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": products.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.shortDescription,
                "review": {
                    "@type": "Review",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": product.rating,
                        "bestRating": "5"
                    }
                }
            }
        }))
    };

    return (
        <main className="flex flex-col min-h-screen bg-cream/20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <Navbar />

            {/* Header Section */}
            <section className="py-20 bg-matte-black text-cream">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                        Best Coffee Machines of 2026
                    </h1>
                    <p className="text-lg text-cream/70 max-w-3xl mx-auto font-sans font-light">
                        Our expert guide to choosing the perfect brewing partner. We've analyzed performance, durability, and value to help you find your ideal harvest.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-20">
                        {products.map((product, index) => (
                            <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 border-b border-coffee-brown/10 last:border-0">
                                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <ProductCard product={product} featured={index === 0} />
                                </div>
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <h2 className="text-3xl font-serif text-coffee-brown mb-4 tracking-tight">
                                        {index + 1}. {product.name} Detailed Review
                                    </h2>
                                    <p className="text-gold font-bold text-xs uppercase tracking-widest mb-6">Expert Verdict</p>

                                    <div className="prose prose-coffee max-w-none text-matte-black/80 font-sans leading-relaxed mb-8">
                                        <p className="mb-4">
                                            The {product.name} stands out as a top contender in our 2026 testing cycle. Its combination of {product.pros.join(", ")} makes it an exceptional choice for {product.idealUser.toLowerCase()}.
                                        </p>
                                        <p>
                                            Whether you're looking for consistent flavor extraction or a machine that complements your luxury kitchen aesthetic, this model delivers on all fronts. During our clinical testing, we found the {product.easeOfUse.toLowerCase()} interface to be particularly impressive compared to its competitors.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                                        <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                                            <h4 className="text-sm font-bold text-green-800 uppercase tracking-widest mb-4">Pros</h4>
                                            <ul className="text-xs space-y-2 text-green-700">
                                                {product.pros.map((pro, i) => (
                                                    <li key={i} className="flex items-center space-x-2">
                                                        <span>✓</span>
                                                        <span>{pro}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                                            <h4 className="text-sm font-bold text-red-800 uppercase tracking-widest mb-4">Who it's for</h4>
                                            <p className="text-xs text-red-700 leading-relaxed">
                                                Perfect for {product.idealUser.toLowerCase()} who value {product.bestFor.toLowerCase()} and are looking for a {product.type.toLowerCase()} experience.
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href={product.latestPriceLink}
                                        className="gold-button inline-block px-10 py-5 rounded-full text-xs font-bold tracking-widest shadow-gold-glow"
                                    >
                                        CHECK LATEST PRICE ON AMAZON
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Buying Guide / Comparison Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-coffee-brown mb-6 uppercase tracking-tighter">Buying Guide: How to Choose</h2>
                        <p className="text-matte-black/60 max-w-2xl mx-auto">
                            Consider the capacity, brewing speed, and maintenance requirements before making your final decision.
                        </p>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <ComparisonTable products={products.slice(0, 4)} />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
