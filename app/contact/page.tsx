import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Our Coffee Experts – Our Coffee Stops",
    description: "Have questions about a specific coffee machine? Contact our expert team for personalized recommendations and support.",
};

export default function Contact() {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />

            <section className="py-24 bg-cream/20 flex-grow">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        <div>
                            <h1 className="text-4xl md:text-5xl font-serif text-coffee-brown mb-6">Get in Touch</h1>
                            <p className="text-lg text-matte-black/60 mb-10 font-sans">
                                Our team is here to help you find the perfect machine for your home. Reach out for personalized recommendations or business inquiries.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shadow-sm">
                                        ✉
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-coffee-brown">Email Us</h4>
                                        <p className="text-sm text-matte-black/70 italic">hello@ourcoffeestops.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shadow-sm">
                                        📍
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-coffee-brown">Our HQ</h4>
                                        <p className="text-sm text-matte-black/70">Luxury Coffee Labs, New York, NY</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-10 rounded-3xl shadow-luxury border border-coffee-brown/5">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-coffee-brown mb-2 pl-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Jane Doe"
                                            className="w-full bg-cream/10 border border-coffee-brown/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-coffee-brown mb-2 pl-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="jane@example.com"
                                            className="w-full bg-cream/10 border border-coffee-brown/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-coffee-brown mb-2 pl-1">Subject</label>
                                    <select
                                        className="w-full bg-cream/10 border border-coffee-brown/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                                        required
                                    >
                                        <option>Product Recommendation</option>
                                        <option>Technical Question</option>
                                        <option>Business Partnership</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-coffee-brown mb-2 pl-1">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us what's on your mind..."
                                        className="w-full bg-cream/10 border border-coffee-brown/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="gold-button w-full py-4 rounded-xl text-xs font-bold tracking-[0.3em] shadow-gold-glow"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
