"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getDB, DB } from "@/lib/database";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";

// UI Forced Update - 2026-03-05
export default function Home() {
  const [db, setDb] = useState<DB | null>(null);

  useEffect(() => {
    setDb(getDB());
  }, []);

  if (!db) return <div className="min-h-screen bg-cream flex items-center justify-center font-serif text-coffee-brown italic animate-pulse">Brewing Excellence...</div>;

  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30">
      <Navbar />
      <Hero />
      <Features />

      {/* Dynamic Products Section */}
      <section id="products" className="py-32 bg-white px-8 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FAF7F2] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 text-gold">
                <Sparkles size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] font-inter">Market Leaders</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-coffee-brown leading-[1.1]">Elite <span className="text-gold italic underline decoration-gold/20 underline-offset-8">Curations</span></h2>
              <p className="text-coffee-brown/50 max-w-xl text-lg font-medium italic">Hand-selected coffee machines that set the benchmark for engineering and flavor.</p>
            </div>
            <Link href="/best-coffee-machines" className="group flex items-center space-x-4 text-coffee-brown font-black text-xs uppercase tracking-[0.3em] pb-2 border-b-2 border-gold/10 hover:border-gold transition-all">
              <span>VIEW FULL CATALOG</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-gold" />
            </Link>
          </div>

          <ProductGrid products={db.products.slice(0, 6)} />
        </div>
      </section>

      {/* Comparison Section - High Intensity UI */}
      <section className="bg-matte-black py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000')] bg-fixed bg-cover bg-center opacity-10 grayscale scale-110"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <ComparisonTable products={db.products.slice(0, 4)} />
        </div>
      </section>

      {/* Editorial Section */}
      <section id="blog" className="py-32 px-8 bg-[#FAF7F2] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 text-gold">
                <TrendingUp size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] font-inter">Industry Insights</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-coffee-brown italic leading-[1.1]">Coffee <span className="text-gold">Chronicles</span></h2>
              <p className="text-coffee-brown/50 max-w-xl text-lg font-medium italic">Deep dives into brewing techniques, maintenance guides, and the latest trends.</p>
            </div>
            <Link href="/blog" className="group flex items-center space-x-4 text-coffee-brown font-black text-xs uppercase tracking-[0.3em] pb-2 border-b-2 border-gold/10 hover:border-gold transition-all">
              <span>EDITORIAL HUB</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {db.blogs.slice(0, 15).map((post: any) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group block bg-white rounded-[56px] overflow-hidden shadow-premium hover:shadow-luxury transition-all duration-700 hover:-translate-y-4 border border-coffee-brown/5"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-brown/40 to-transparent"></div>
                  <div className="absolute top-8 left-8">
                    <span className="bg-gold text-white px-5 py-2 rounded-full text-[9px] font-black tracking-widest shadow-xl uppercase">
                      {post.date}
                    </span>
                  </div>
                </div>
                <div className="p-12">
                  <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-4">{post.author}</p>
                  <h3 className="text-3xl font-serif text-coffee-brown mb-6 group-hover:text-gold transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-coffee-brown/50 text-sm line-clamp-3 mb-10 leading-relaxed font-inter font-medium italic italic">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-8 border-t border-coffee-brown/5">
                    <span className="text-[10px] font-black text-coffee-brown/20 uppercase tracking-[0.2em] group-hover:text-gold transition-colors">READ ARTICLE</span>
                    <ArrowUpRight size={18} className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
