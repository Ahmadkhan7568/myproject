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

      {/* Dynamic Products from Database */}
      <section id="products" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-brown">Curated <span className="text-gold italic">Selection</span></h2>
            <p className="text-coffee-brown/60 max-w-2xl mx-auto font-medium">Expertly vetted machines for every skill level, from entry-level home brewers to professional baristas.</p>
          </div>
          <ProductGrid products={db.products} />
        </div>
      </section>

      <ComparisonTable />

      {/* Dynamic Blogs from Database */}
      <section id="blog" className="py-24 px-6 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-coffee-brown italic"><span className="text-gold">Coffee</span> Chronicles</h2>
              <p className="text-coffee-brown/60 max-w-xl font-medium">Deep dives into brewing techniques, maintenance guides, and the latest industry trends.</p>
            </div>
            <Link href="/blog" className="group flex items-center space-x-3 text-gold font-black text-xs uppercase tracking-[0.3em] border-b-2 border-gold/10 pb-2 hover:border-gold transition-all">
              <span>VIEW ALL ARTICLES</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {db.blogs.slice(0, 15).map((post: any) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group block bg-white rounded-[40px] overflow-hidden shadow-luxury hover:-translate-y-2 transition-all duration-500 border border-coffee-brown/5"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-coffee-brown shadow-xl">
                      {post.date}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-serif text-coffee-brown mb-4 group-hover:text-gold transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-coffee-brown/60 text-sm line-clamp-3 mb-8 leading-relaxed font-serif italic italic">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-coffee-brown/5">
                    <span className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">{post.author}</span>
                    <span className="text-[10px] font-black text-coffee-brown/40 uppercase tracking-widest flex items-center">
                      READ MORE
                      <span className="ml-2 w-4 h-[1px] bg-gold group-hover:w-8 transition-all"></span>
                    </span>
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
// Home Page Forced Rebuild - 2026-03-05
