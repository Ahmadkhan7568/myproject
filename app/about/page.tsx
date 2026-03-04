import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Our Coffee Passion – Our Coffee Stops",
    description: "Learn about the mission behind Our Coffee Stops. We're dedicated to helping coffee lovers across the USA find their perfect brewing machine.",
};

export default function About() {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />

            {/* Story Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-serif text-coffee-brown mb-6">Our Passion for the Perfect Brew</h1>
                        <div className="w-16 h-1 bg-gold mx-auto"></div>
                    </div>

                    <div className="prose prose-lg prose-coffee max-w-none font-sans text-matte-black/80 leading-relaxed">
                        <p className="mb-8 font-serif italic text-2xl text-gold text-center">
                            "We believe that a great cup of coffee isn't just a drink—it's a ritual that defines the start of your day."
                        </p>
                        <p className="mb-6">
                            Founded in 2025, **Our Coffee Stops** was born from a simple observation: the world of coffee machines is unnecessarily complicated. Between the technical jargon, the varied certifications, and the overwhelming number of brands, many home enthusiasts find themselves frustrated by their purchase choice.
                        </p>
                        <p className="mb-6">
                            Our mission is to cut through the noise. We spend hundreds of hours researching, testing, and comparing the latest coffee technology to bring you reviews that are as aesthetically pleasing as they are technically sound. We don't just look at how a machine pulls a shot; we look at how it fits into your life.
                        </p>
                        <p className="mb-12">
                            Based in the United States, our team of experts understands the nuances of home brewing. From the high-tech espresso bars of the West Coast to the traditional drip makers of the East, we've curated a selection that represents the best in class across every category.
                        </p>

                        <div className="bg-cream/30 p-10 rounded-2xl border border-gold/10 mb-12">
                            <h3 className="text-2xl font-serif text-coffee-brown mb-4">Affiliate Transparency</h3>
                            <p className="text-sm text-matte-black/70 mb-0">
                                To support our deep-dive research and keep our reviews free for everyone, we participate in several affiliate marketing programs. This means that when you click a link and make a purchase, we may receive a small commission. This comes at no additional cost to you and helps us continue our mission of providing the most comprehensive coffee machine guides on the web.
                            </p>
                        </div>

                        <h3 className="text-2xl font-serif text-coffee-brown mb-6">Our Testing Philosophy</h3>
                        <ul className="list-disc pl-6 space-y-4 mb-12">
                            <li><strong>Reliability:</strong> How does the machine perform after 100 cycles?</li>
                            <li><strong>Design:</strong> Does the aesthetic match the premium price tag?</li>
                            <li><strong>User Experience:</strong> Is the interface intuitive for both beginners and experts?</li>
                            <li><strong>Value:</strong> Does the performance justify the investment?</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
