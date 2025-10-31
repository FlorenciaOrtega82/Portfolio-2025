import React, { useState, useEffect } from "react";
import { Menu, X,Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Navigation = () => {
    const {lang, toggleLang} = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 60;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
        closeMobileMenu(); // Slose mobile menu after clicking
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navItems = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" },
        { href: "#art", label: "Art Side" },
    ];
    return (
        <nav
            className={`fixed top-0 w-full  z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 ">
                <div className="flex items-center justify-between">
                    <div
                        className={`text-xl font-bold transition-colors cursor-pointer hover:opacity-80 ${
                            isScrolled ? "text-black" : "text-black"
                        }`}
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    >
                        Portfolio
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`transition-colors ${
                                    isScrolled
                                        ? "text-gray-600 hover:text-black"
                                        : "text-gray-700 hover:text-black"
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* 🌐 Botón de idioma */}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 transition"
                        >
                            <Globe className="w-4 h-4" />
                            {lang === "en" ? "EN" : "ES"}
                        </button>
                    </div>
                    {/*Movile Menu Button */}
                    <button
                        alt="Menu Button"
                        onClick={toggleMobileMenu}
                        className={`md:hidden p-2 transition-colors cursor-pointer ${
                            isScrolled
                                ? "text-gray-600 hover:text-black"
                                : "text-gray-700 hover:text-black"
                        }`}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
                {/* Mobile Menu */}
                <div
                    className={`md:hidden transitio-all duration-300 ease-in-out ${
                        isMobileMenuOpen
                            ? "max-h-64 opacity-100 nt-4"
                            : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                    <div className="bg-white border border-gray-100 rounded-lg shadow-lg p-4 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className="block text-gray-600 hover:text-black transition-colors py-2"
                            >
                                {item.label}
                            </a>
                        ))}


                        {/* 🌐 Botón idioma en móvil */}
                        <button
                            onClick={toggleLang}
                            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 transition"
                        >
                            <Globe className="w-4 h-4" />
                            {lang === "en" ? "Español" : "English"}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
