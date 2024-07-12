import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { logout as apiLogout } from '../api/api';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axiosInstance.get('/auth/me')
                .then(response => {
                    setUser(response.data.user);
                })
                .catch(error => {
                    console.error('Failed to fetch user data:', error);
                    localStorage.removeItem('token');
                    setUser(null);
                });
        }
    }, []);

    const login = (token, userData) => {
        localStorage.setItem('token', token);
        setUser(userData);
    };

    const logout = async () => {
        try {
            await apiLogout();
            localStorage.removeItem('token');
            setUser(null);
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
