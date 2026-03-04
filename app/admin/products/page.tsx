import { products } from "@/lib/products";
import Image from "next/image";
import { Edit2, Trash2, Plus, ExternalLink } from "lucide-react";

export default function AdminProductsPage() {
    return (
        <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-700">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h2 className="text-3xl font-serif mb-2">Inventory Management</h2>
                    <p className="text-white/40 text-sm font-medium">You currently have {products.length} listed machines.</p>
                </div>
                <button className="gold-button px-8 py-4 rounded-full text-xs font-bold tracking-widest flex items-center space-x-2">
                    <Plus size={16} />
                    <span>ADD MACHINE</span>
                </button>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-white/5 bg-[#141414]">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Product</th>
                            <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Type</th>
                            <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Price</th>
                            <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Rating</th>
                            <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                                <td className="px-8 py-5">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-white/10">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-serif text-sm group-hover:text-gold transition-colors">{product.name}</div>
                                            <div className="text-[10px] text-white/30 uppercase tracking-widest truncate max-w-[200px]">{product.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 font-medium whitespace-nowrap">
                                        {product.type}
                                    </span>
                                </td>
                                <td className="px-8 py-5 font-bold font-serif text-gold">{product.price}</td>
                                <td className="px-8 py-5">
                                    <div className="flex items-center text-xs font-bold text-white/60">
                                        <span className="text-gold mr-1">★</span>
                                        {product.rating}
                                    </div>
                                </td>
                                <td className="px-8 py-5">
                                    <div className="flex items-center justify-end space-x-3 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                                        <button className="p-2.5 rounded-xl bg-white/5 hover:bg-gold hover:text-white transition-all">
                                            <Edit2 size={14} />
                                        </button>
                                        <button className="p-2.5 rounded-xl bg-white/5 hover:bg-red-500 hover:text-white transition-all">
                                            <Trash2 size={14} />
                                        </button>
                                        <a
                                            href={product.latestPriceLink}
                                            target="_blank"
                                            className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-500 hover:text-white transition-all"
                                        >
                                            <ExternalLink size={14} />
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
