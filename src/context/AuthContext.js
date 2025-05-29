// /context/AuthContext.js
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser, forgotPassword } from "@/services/authService";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async (email, password) => {
    const res = await loginUser(email, password);
    if (res.success) {
      setUser(res.user);
      localStorage.setItem("token", res.token);
      router.push("/dashboard");
    } else {
      alert(res.message);
    }
  };

  const register = async (data) => {
    const res = await registerUser(data);
    if (res.success) {
      router.push("/login");
    } else {
      alert(res.message);
    }
  };

  const sendResetLink = async (email) => {
    const res = await forgotPassword(email);
    alert(res.message);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, sendResetLink, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
