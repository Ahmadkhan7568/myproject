"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    ShoppingBag,
    FileText,
    Search,
    Settings,
    ExternalLink,
    Coffee,
    LogOut,
    Bell
} from "lucide-react";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, logout } from "@/lib/auth";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (pathname === "/admin/login") {
            setIsChecking(false);
            return;
        }

        if (!isAuthenticated()) {
            router.push("/admin/login");
        } else {
            setIsChecking(false);
        }
    }, [pathname, router]);

    const handleLogout = () => {
        logout();
        router.push("/admin/login");
    };

    if (isChecking && pathname !== "/admin/login") {
        return (
            <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-[10px] font-black tracking-widest text-gold uppercase">Authenticating...</p>
                </div>
            </div>
        );
    }

    // Hide sidebar for login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Products", href: "/admin/products", icon: ShoppingBag },
        { name: "Blogs", href: "/admin/blogs", icon: FileText },
        { name: "Scraper", href: "/admin/scraper", icon: Search },
    ];

    return (
        <div className="flex min-h-screen bg-[#F8F9FA] text-[#1a1a1a] font-sans transition-colors duration-500">
            {/* Sidebar */}
            <aside className="w-72 border-r border-[#E9ECEF] bg-white hidden lg:flex flex-col sticky top-0 h-screen shadow-sm z-30">
                <div className="p-8 mb-4">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center shadow-luxury group-hover:scale-105 transition-all">
                            <Coffee className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold font-serif tracking-tight text-coffee-brown">Admin<span className="text-gold">CP</span></span>
                    </Link>
                </div>

                <nav className="flex-grow px-6 space-y-1.5">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-3 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${isActive
                                    ? "bg-[#F8F9FA] text-gold shadow-sm font-semibold border border-[#E9ECEF]"
                                    : "text-[#6C757D] hover:bg-[#F8F9FA] hover:text-[#1a1a1a]"
                                    }`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? "text-gold" : "group-hover:text-[#1a1a1a]"}`} />
                                <span className="text-sm tracking-wide">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-8 border-t border-[#E9ECEF] mt-auto">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 text-[#6C757D] hover:text-red-500 transition-colors px-4 py-2 w-full text-sm font-medium"
                    >
                        <LogOut size={18} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow flex flex-col min-h-screen relative">
                {/* Header */}
                <header className="h-20 border-b border-[#E9ECEF] flex items-center justify-between px-10 bg-white/80 backdrop-blur-xl sticky top-0 z-20 shadow-sm">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xs font-black uppercase tracking-[0.4em] text-[#ADB5BD]">
                            {navItems.find(i => i.href === pathname)?.name || "Management"}
                        </h1>
                    </div>

                    <div className="flex items-center space-x-8">
                        <Link href="/" target="_blank" className="flex items-center space-x-2 text-xs font-black text-gold hover:text-coffee-brown transition-colors uppercase tracking-[0.2em]">
                            <span>VIEW STORE</span>
                            <ExternalLink size={14} />
                        </Link>

                        <div className="flex items-center space-x-4">
                            <div className="relative p-2 rounded-xl bg-[#F8F9FA] text-[#6C757D] hover:text-gold transition-colors cursor-pointer border border-[#E9ECEF]">
                                <Bell size={18} />
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></div>
                            </div>
                            <div className="flex items-center space-x-3 pl-4 border-l border-[#E9ECEF]">
                                <div className="text-right hidden sm:block">
                                    <p className="text-xs font-bold text-[#1a1a1a]">Ahmad Khan</p>
                                    <p className="text-[10px] text-[#6C757D] font-medium">Super Admin</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-gold/20 overflow-hidden bg-[#F8F9FA] flex items-center justify-center p-0.5 shadow-sm">
                                    <div className="w-full h-full rounded-full bg-gold/10 flex items-center justify-center text-xs font-black text-gold">AK</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-10 flex-grow bg-[#F8F9FA]">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
