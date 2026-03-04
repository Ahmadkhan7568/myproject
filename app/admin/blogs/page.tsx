"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Edit2, Trash2, Plus, Eye, FileText } from "lucide-react";
import Link from "next/link";
import { getDB, DB } from "@/lib/database";

export default function AdminBlogsPage() {
    const [db, setDb] = useState<DB | null>(null);

    useEffect(() => {
        setDb(getDB());
    }, []);

    if (!db) return <div className="p-20 text-center font-serif text-coffee-brown italic animate-pulse">Loading Editorial Data...</div>;

    const blogPosts = db.blogs;

    return (
        <div className="space-y-10 animate-in slide-in-from-bottom-5 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
                <div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-widest mb-4">
                        <FileText size={12} />
                        <span>Editorial Hub</span>
                    </div>
                    <h2 className="text-4xl font-serif text-coffee-brown mb-2">Blog Management</h2>
                    <p className="text-[#6C757D] text-sm font-medium italic">You have published {blogPosts.length} high-quality SEO articles across your platform.</p>
                </div>
                <button className="gold-button px-10 py-5 rounded-full text-[10px] font-black tracking-[0.2em] flex items-center space-x-3 shadow-gold-glow">
                    <Plus size={18} />
                    <span>CREATE ARTICLE</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post: any) => (
                    <div key={post.slug} className="group flex flex-col bg-white rounded-[40px] border border-[#E9ECEF] hover:shadow-luxury transition-all duration-500 overflow-hidden relative">
                        <div className="relative h-60 overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="w-full bg-white text-coffee-brown py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase flex items-center justify-center space-x-2 shadow-lg"
                                >
                                    <Eye size={14} />
                                    <span>Live Preview</span>
                                </Link>
                            </div>
                        </div>

                        <div className="p-8 flex-grow flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">{post.date}</span>
                                <div className="flex space-x-2">
                                    <button className="p-2 rounded-xl bg-[#F8F9FA] text-[#6C757D] hover:text-gold border border-[#E9ECEF] transition-all">
                                        <Edit2 size={14} />
                                    </button>
                                    <button className="p-2 rounded-xl bg-[#F8F9FA] text-[#6C757D] hover:text-red-500 border border-[#E9ECEF] transition-all">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>

                            <h3 className="font-serif text-lg text-coffee-brown mb-4 line-clamp-2 leading-tight group-hover:text-gold transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-[#6C757D] text-xs leading-relaxed line-clamp-3 mb-6 font-medium italic">
                                "{post.excerpt}"
                            </p>

                            <div className="mt-auto pt-6 border-t border-[#F1F3F5] flex justify-between items-center">
                                <span className="text-[10px] font-black text-[#ADB5BD] uppercase tracking-widest">By {post.author}</span>
                                <span className="text-[10px] font-black text-gold uppercase tracking-widest italic flex items-center">
                                    <span className="w-1 h-1 rounded-full bg-gold mr-2 animate-pulse"></span>
                                    Published
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
