import React, { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { heroData } from "../data/hero";
import { useLanguage } from "../context/LanguageContext.jsx";

const Hero = ({ hasAnimated }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { lang } = useLanguage();

  const roles = heroData.roles[lang];

  useEffect(() => {
    const currentRole = roles[currentTextIndex];

    if (!isDeleting) {
      if (currentText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(100);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(150);
      }
    }
  }, [currentText, currentTextIndex, isDeleting, typingSpeed, roles]);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-20">
      {/* Fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center h-full flex flex-col justify-center">
        <div
          className={`transition-all duration-1000 ${
            hasAnimated.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          id="hero"
        >
          {/* Greeting */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
              {heroData.greeting[lang]}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl leading-tight font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
            {heroData.name}
          </h1>

          {/* Roles (typewriter) */}
          <div className="h-12 md:h-16 mb-6 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
              {lang === "en" ? "I'm a " : "Soy "}
              <span className="text-blue-600 font-bold">{currentText}</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {heroData.description[lang]}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            {heroData.ctaButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  button.variant === "primary"
                    ? "bg-black text-white hover:bg-gray-800"
                    : "border-2 border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {button.text[lang]}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {heroData.socialLinks.map((social, index) => {
              const Icon =
                social.icon === "Github" ? Github : social.icon === "Linkedin" ? Linkedin : Mail;
              return (
                <a key={index} href={social.url} className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-gray-700" />
                </a>
              );
            })}
          </div>

          {/* Scroll */}
          <div className="animate-bounce">
            <button onClick={scrollToAbout} className="flex flex-col items-center text-gray-600 hover:text-black">
              <span className="text-sm mb-2">{lang === "en" ? "Learn More" : "Saber más"}</span>
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
