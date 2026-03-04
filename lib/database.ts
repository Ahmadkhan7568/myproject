import { products as initialProducts } from "./products";
import { blogPosts as initialBlogs } from "./blog";

// This is a simple mock database that persists to local storage in the browser 
// for the demo, or could be swapped for Supabase/MongoDB.
// Since we are in a Next.js environment without a running backend for fs,
// we will use a robust pattern that could easily be connected to an API.

export interface DB {
    products: any[];
    blogs: any[];
    withdrawals: any[];
    settings: {
        walletAddress: string;
        revenue: number;
    };
}

const STORAGE_KEY = "coffee_admin_db";

export const getDB = (): DB => {
    if (typeof window === "undefined") return { products: initialProducts, blogs: initialBlogs, withdrawals: [], settings: { walletAddress: "", revenue: 1290 } };

    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        const initial = {
            products: initialProducts,
            blogs: initialBlogs,
            withdrawals: [],
            settings: { walletAddress: "", revenue: 1290 }
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        return initial;
    }
    return JSON.parse(data);
};

export const saveDB = (db: DB) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    }
};

export const addProduct = (product: any) => {
    const db = getDB();
    db.products.unshift(product);
    saveDB(db);
};

export const updateSettings = (settings: Partial<DB['settings']>) => {
    const db = getDB();
    db.settings = { ...db.settings, ...settings };
    saveDB(db);
};

export const logWithdrawal = (withdrawal: any) => {
    const db = getDB();
    db.withdrawals.push({ ...withdrawal, id: Date.now(), date: new Date().toISOString() });
    saveDB(db);
};
