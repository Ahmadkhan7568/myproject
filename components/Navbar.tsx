import Link from "next/link";
// UI Forced Update - 2026-03-05

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-coffee-brown/10 py-4 shadow-sm">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold font-serif text-coffee-brown tracking-tight">
                        OurCoffee<span className="text-gold">Stops</span>
                    </span>
                </Link>
                <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-matte-black uppercase tracking-wider">
                    <Link href="/best-coffee-machines" className="hover:text-gold transition-colors">
                        Best Machines
                    </Link>
                    <Link href="/espresso-machines" className="hover:text-gold transition-colors">
                        Espresso
                    </Link>
                    <Link href="/comparison" className="hover:text-gold transition-colors">
                        Compare
                    </Link>
                    <Link href="/#blog" className="hover:text-gold transition-colors">
                        Blog
                    </Link>
                    <Link href="/about" className="hover:text-gold transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-gold transition-colors">
                        Contact
                    </Link>
                    <Link
                        href="/best-coffee-machines"
                        className="gold-button px-6 py-2 rounded-full text-xs font-bold tracking-widest shadow-gold-glow"
                    >
                        VIEW TOP PICKS
                    </Link>
                </div>
                {/* Mobile menu button could go here */}
            </div>
        </nav>
    );
};

export default Navbar;
