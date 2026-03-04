import { blogPosts } from "@/lib/blog";
import Image from "next/image";
import { Edit2, Trash2, Plus, Eye } from "lucide-react";
import Link from "next/link";

export default function AdminBlogsPage() {
    return (
        <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-700">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h2 className="text-3xl font-serif mb-2">Editorial Management</h2>
                    <p className="text-white/40 text-sm font-medium">You have {blogPosts.length} published SEO articles.</p>
                </div>
                <button className="gold-button px-8 py-4 rounded-full text-xs font-bold tracking-widest flex items-center space-x-2">
                    <Plus size={16} />
                    <span>NEW ARTICLE</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <div key={post.slug} className="group p-6 rounded-[32px] bg-[#141414] border border-white/5 hover:border-gold/20 transition-all duration-500 relative overflow-hidden">
                        <div className="relative h-48 rounded-2xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                            <Image src={post.image} alt={post.title} fill className="object-cover" />
                            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="p-2 rounded-xl bg-black/80 backdrop-blur text-white hover:text-gold transition-colors"
                                >
                                    <Eye size={16} />
                                </Link>
                                <button className="p-2 rounded-xl bg-black/80 backdrop-blur text-white hover:text-gold transition-colors">
                                    <Edit2 size={16} />
                                </button>
                            </div>
                        </div>

                        <h3 className="font-serif text-lg mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-gold transition-colors leading-tight">
                            {post.title}
                        </h3>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                            <div className="flex items-center space-x-2">
                                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{post.date}</span>
                            </div>
                            <div className="text-[10px] font-bold text-gold uppercase tracking-widest">
                                {post.author}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
