"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";

interface ProductCardProps {
    product: any;
    featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
    return (
        <div className={`card-luxury overflow-hidden group flex flex-col relative !rounded-[48px] ${featured ? 'border-gold/30' : ''}`}>
            {/* Header Badge */}
            <div className="absolute top-6 left-6 z-20 flex flex-col space-y-2">
                {featured && (
                    <div className="bg-gold px-4 py-1.5 rounded-full shadow-lg flex items-center space-x-2 animate-pulse">
                        <ShieldCheck size={12} className="text-white" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Editor's Choice</span>
                    </div>
                )}
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center space-x-2 self-start">
                    <Star size={12} className="text-gold fill-current" />
                    <span className="text-[10px] font-black text-coffee-brown uppercase tracking-widest">{product.rating}</span>
                </div>
            </div>

            {/* Trending Tag */}
            <div className="absolute top-6 right-6 z-20">
                <div className="bg-green-500/10 backdrop-blur-md px-3 py-1.5 rounded-full text-green-600 flex items-center space-x-2 border border-green-500/20">
                    <TrendingUp size={12} />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Hot</span>
                </div>
            </div>

            {/* Image Container */}
            <div className="relative h-72 w-full bg-[#FAF7F2] overflow-hidden p-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30"></div>
                <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                    <Image
                        src={product.image || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e: any) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800';
                        }}
                    />
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-x-6 bottom-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                        href={product.latestPriceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-coffee-brown text-white py-4 rounded-3xl text-[10px] font-black tracking-widest uppercase flex items-center justify-center space-x-2 shadow-2xl"
                    >
                        <span>Specifications</span>
                        <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-10 flex flex-col flex-grow bg-white">
                <div className="mb-6">
                    <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-2 font-inter">{product.type}</p>
                    <h3 className="text-3xl font-serif text-coffee-brown leading-[1.1] mb-2 group-hover:text-gold transition-colors">
                        {product.name}
                    </h3>
                </div>

                <p className="text-sm text-coffee-brown/60 mb-8 line-clamp-2 leading-relaxed font-inter italic font-medium">
                    {product.description || product.shortDescription || "Crafting professional-grade coffee in the comfort of your own kitchen."}
                </p>

                <div className="mt-auto pt-8 border-t border-coffee-brown/5 flex items-end justify-between">
                    <div>
                        <p className="text-[10px] font-black text-coffee-brown/30 uppercase tracking-widest mb-1 font-inter italic">Market Price</p>
                        <p className="text-3xl font-serif font-black text-coffee-brown leading-none">
                            {product.price}
                        </p>
                    </div>
                    <a
                        href={product.latestPriceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gold-button px-8 py-4 rounded-3xl text-[10px] font-black tracking-[0.25em] shadow-gold-glow flex items-center space-x-2"
                    >
                        <span>GET DEAL</span>
                        <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
