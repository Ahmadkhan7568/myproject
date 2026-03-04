"use client";

// Simple local-storage based auth for the admin panel
const AUTH_KEY = "coffee_admin_session";

export const login = (email: string, pass: string) => {
    if (email === "admin@admin.com" && pass === "islamabad2025") {
        if (typeof window !== "undefined") {
            localStorage.setItem(AUTH_KEY, "authenticated_" + Date.now());
            return true;
        }
    }
    return false;
};

export const logout = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(AUTH_KEY);
    }
};

export const isAuthenticated = (): boolean => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem(AUTH_KEY);
};
