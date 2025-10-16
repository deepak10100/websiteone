"use client"

import { useState, useEffect } from 'react';

// This is a mock useUser hook. In a real app, you would
// replace this with your actual authentication logic.

export const useUser = () => {
    const [user, setUser] = useState<{ displayName: string, email: string, photoURL: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate checking auth state
        const storedUser = sessionStorage.getItem('mock-user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (userData: { displayName: string, email: string, photoURL: string }) => {
        sessionStorage.setItem('mock-user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        sessionStorage.removeItem('mock-user');
        setUser(null);
    };

    return { user, loading, login, logout };
}
