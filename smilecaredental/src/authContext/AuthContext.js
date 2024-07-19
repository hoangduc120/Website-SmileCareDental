import React, { createContext, useState, useEffect, useMemo } from 'react';
import axiosInstance from '../api/axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(atob(token.split('.')[1]));
            setUser(user);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const res = await axiosInstance.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            const user = JSON.parse(atob(res.data.token.split('.')[1]));
            setUser(user);
            console.log("User after login:", user);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const logout = async () => {
        try {
            await axiosInstance.post('/api/auth/logout');
        } catch (error) {
            console.error('Logout failed', error);
        } finally {
            localStorage.removeItem('token');
            setUser(null);
            window.location.href = '/login';
        }
    };

    const menuItems = useMemo(() => {
        if (!user) return ['Đăng nhập'];
        switch (user.role) {
            case 1: return ['Admin System', 'Logout'];
            case 2: return ['Thông tin cá nhân', 'Logout'];
            case 3: return ['Thông tin bác sĩ', 'Logout'];
            case 4: return ['Clinic Owner', 'Logout'];
            default: return ['Logout'];
        }
    }, [user]);



    return (
        <AuthContext.Provider value={{ user, login, logout, menuItems }}>
            {children}
        </AuthContext.Provider>
    );
};
