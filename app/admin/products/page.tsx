"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Edit2, Trash2, Plus, ExternalLink, Package } from "lucide-react";
import { getDB, DB } from "@/lib/database";

export default function AdminProductsPage() {
    const [db, setDb] = useState<DB | null>(null);

    useEffect(() => {
        setDb(getDB());
    }, []);

    if (!db) return <div className="p-20 text-center font-serif text-coffee-brown italic animate-pulse">Loading Inventory...</div>;

    const products = db.products;

    return (
        <div className="space-y-10 animate-in slide-in-from-bottom-5 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
                <div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-widest mb-4">
                        <Package size={12} />
                        <span>Supply Chain</span>
                    </div>
                    <h2 className="text-4xl font-serif text-coffee-brown mb-2">Inventory Control</h2>
                    <p className="text-[#6C757D] text-sm font-medium italic">Monitoring {products.length} high-performance product listings.</p>
                </div>
                <button className="gold-button px-10 py-5 rounded-full text-[10px] font-black tracking-[0.2em] flex items-center space-x-3 shadow-gold-glow">
                    <Plus size={18} />
                    <span>ADD PRODUCT</span>
                </button>
            </div>

            <div className="overflow-hidden rounded-[40px] border border-[#E9ECEF] bg-white shadow-sm">
                <div className="p-8 border-b border-[#F1F3F5] bg-[#F8F9FA]/50 flex justify-between items-center">
                    <div className="flex space-x-4">
                        <div className="px-5 py-2 rounded-xl bg-white border border-[#E9ECEF] text-[10px] font-black uppercase tracking-widest text-[#1a1a1a] shadow-sm">All Items</div>
                        <div className="px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#ADB5BD] hover:text-[#1a1a1a] transition-colors cursor-pointer">In Stock</div>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search inventory..."
                            className="bg-white border border-[#E9ECEF] rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-gold w-64"
                        />
                    </div>
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#F8F9FA]/30">
                            <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.25em] text-[#ADB5BD]">Machine Detail</th>
                            <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.25em] text-[#ADB5BD]">Category</th>
                            <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.25em] text-[#ADB5BD]">Listing Price</th>
                            <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.25em] text-[#ADB5BD]">Market Rating</th>
                            <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.25em] text-[#ADB5BD] text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F1F3F5]">
                        {products.map((product: any) => (
                            <tr key={product.id} className="hover:bg-[#F8F9FA]/50 transition-colors group">
                                <td className="px-10 py-6">
                                    <div className="flex items-center space-x-5">
                                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-sm border border-[#E9ECEF] bg-white p-0.5">
                                            <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-serif text-[15px] font-bold text-coffee-brown group-hover:text-gold transition-colors">{product.name}</div>
                                            <div className="text-[10px] text-[#ADB5BD] font-black uppercase tracking-widest mt-1">ID: {String(product.id).split('-').pop()}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-10 py-6">
                                    <span className="text-[10px] px-4 py-1.5 rounded-full bg-white border border-[#E9ECEF] text-[#495057] font-black uppercase tracking-widest shadow-sm">
                                        {product.type}
                                    </span>
                                </td>
                                <td className="px-10 py-6">
                                    <span className="font-serif text-lg font-bold text-coffee-brown">{product.price}</span>
                                </td>
                                <td className="px-10 py-6">
                                    <div className="flex items-center text-xs font-black text-coffee-brown">
                                        <span className="text-gold mr-2 text-base">★</span>
                                        {product.rating}
                                    </div>
                                </td>
                                <td className="px-10 py-6">
                                    <div className="flex items-center justify-end space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                        <button className="p-3 rounded-2xl bg-white text-[#6C757D] hover:text-gold border border-[#E9ECEF] hover:shadow-sm transition-all">
                                            <Edit2 size={16} />
                                        </button>
                                        <button className="p-3 rounded-2xl bg-white text-[#6C757D] hover:text-red-500 border border-[#E9ECEF] hover:shadow-sm transition-all">
                                            <Trash2 size={16} />
                                        </button>
                                        <a
                                            href={product.latestPriceLink}
                                            target="_blank"
                                            className="p-3 rounded-2xl bg-white text-[#6C757D] hover:text-blue-500 border border-[#E9ECEF] hover:shadow-sm transition-all"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
