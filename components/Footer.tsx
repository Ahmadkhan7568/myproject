import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-matte-black text-cream-light pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold font-serif text-cream uppercase tracking-tighter">
                                OurCoffee<span className="text-gold">Stops</span>
                            </span>
                        </Link>
                        <p className="text-xs text-cream/60 leading-relaxed mb-6">
                            Expert reviews, in-depth comparisons, and curated top picks to help you find the perfect coffee machine for your lifestyle and budget.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-gold text-lg mb-6 tracking-wide">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-cream/70 font-sans">
                            <li><Link href="/best-coffee-machines" className="hover:text-gold transition-colors underline-offset-4 hover:underline">Best Coffee Machines</Link></li>
                            <li><Link href="/espresso-machines" className="hover:text-gold transition-colors underline-offset-4 hover:underline">Espresso Machines</Link></li>
                            <li><Link href="/comparison" className="hover:text-gold transition-colors underline-offset-4 hover:underline">Compare Models</Link></li>
                            <li><Link href="/about" className="hover:text-gold transition-colors underline-offset-4 hover:underline">About Our Passion</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors underline-offset-4 hover:underline">Contact Expert</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-gold text-lg mb-6 tracking-wide">Legal</h4>
                        <ul className="space-y-4 text-sm text-cream/70 font-sans">
                            <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-conditions" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/admin" className="hover:text-gold transition-colors opacity-30">Admin Login</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-gold text-lg mb-6 tracking-wide">Our Mission</h4>
                        <p className="text-xs text-cream/60 leading-relaxed italic">
                            "We believe every home deserves the perfect brew. Our mission is to simplify the complex world of coffee machines."
                        </p>
                    </div>
                </div>

                <div className="border-t border-cream/10 pt-10 text-center">
                    <p className="text-[10px] text-cream/40 leading-loose max-w-4xl mx-auto mb-8 uppercase tracking-widest px-4">
                        We proudly help coffee lovers across the United States, including Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, and Wyoming find the best coffee machines for their homes.
                    </p>

                    <p className="text-[10px] text-cream/30 italic max-w-2xl mx-auto mb-10 px-4">
                        Affiliate Disclosure: Our Coffee Stops is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
                    </p>

                    <div className="text-xs text-cream/20 font-sans uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} OurCoffeeStops.com - All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
