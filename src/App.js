import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import { Navbar } from "./components/Navbar";

// Pages
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import DashboardPage from "./pages/DashboardPage";
import AdminPage from "./pages/AdminPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
    return (
        <AuthProvider>
            <div className="noise-overlay min-h-screen bg-[#050505] text-white">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
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
