import { blogPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <article className="pt-20 pb-24">
                {/* Header Section */}
                <header className="container mx-auto px-6 max-w-4xl text-center mb-16">
                    <div className="inline-block px-4 py-1 mb-6 border border-gold/30 rounded-full bg-gold/5 text-gold text-[10px] uppercase tracking-[0.3em] font-bold">
                        {post.date}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif text-coffee-brown mb-8 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center space-x-4 text-sm font-medium text-matte-black/40 uppercase tracking-widest">
                        <span>By {post.author}</span>
                        <span className="w-1 h-1 bg-gold rounded-full"></span>
                        <span>5 min read</span>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="container mx-auto px-6 mb-20">
                    <div className="relative h-[400px] md:h-[600px] w-full rounded-[40px] overflow-hidden shadow-luxury">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-6 max-w-3xl">
                    <div
                        className="prose prose-luxury lg:prose-xl font-sans text-matte-black/80 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-20 pt-10 border-t border-coffee-brown/10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="text-left">
                                <h4 className="font-serif text-coffee-brown text-lg mb-2">Share this guide</h4>
                                <div className="flex space-x-4">
                                    {/* Social icons placeholders */}
                                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-coffee-brown hover:bg-gold hover:text-white transition-colors cursor-pointer">f</div>
                                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-coffee-brown hover:bg-gold hover:text-white transition-colors cursor-pointer">t</div>
                                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-coffee-brown hover:bg-gold hover:text-white transition-colors cursor-pointer">in</div>
                                </div>
                            </div>
                            <Link
                                href="/#blog"
                                className="gold-button px-8 py-4 rounded-full text-xs font-bold tracking-widest"
                            >
                                BACK TO ALL POSTS
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts Simple Grid */}
            <section className="py-24 bg-cream/20">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-serif text-coffee-brown text-center mb-16 underline decoration-gold underline-offset-8">You Might Also Like</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((related) => (
                            <Link key={related.slug} href={`/blog/${related.slug}`} className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
                                <h4 className="font-serif text-lg text-coffee-brown group-hover:text-gold transition-colors mb-2">{related.title}</h4>
                                <p className="text-xs text-matte-black/50 uppercase tracking-widest">{related.date}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
