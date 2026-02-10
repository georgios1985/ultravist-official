import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import { Navbar } from "./components/Navbar";

// Pages Imports
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import DashboardPage from "./pages/DashboardPage";

// Placeholder pages voor nu (zodat het niet crasht)
const WallpaperDetailPage = () => <div className="md:pl-72 p-20 text-white">Details (Coming Soon)</div>;
const CreditsPage = () => <div className="md:pl-72 p-20 text-white">Credits (Coming Soon)</div>;
const PaymentSuccessPage = () => <div className="md:pl-72 p-20 text-white">Success</div>;
const LoginPage = () => <div className="md:pl-72 p-20 text-white">Login</div>;
const RegisterPage = () => <div className="md:pl-72 p-20 text-white">Register</div>;
const AdminPage = () => <div className="md:pl-72 p-20 text-white">Admin Upload</div>;
const SettingsPage = () => <div className="md:pl-72 p-20 text-white">Settings</div>;

function App() {
    return (
        <AuthProvider>
            <div className="noise-overlay min-h-screen bg-[#050505] text-white">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/wallpaper/:id" element={<WallpaperDetailPage />} />
                        <Route path="/credits" element={<CreditsPage />} />
                        <Route path="/credits/success" element={<PaymentSuccessPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                </BrowserRouter>
                <Toaster position="top-right" theme="dark" />
            </div>
        </AuthProvider>
    );
}

export default App;
