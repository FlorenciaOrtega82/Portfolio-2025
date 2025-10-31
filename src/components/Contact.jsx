import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { contactLinks } from "../data/contact";
import { useLanguage } from "../context/LanguageContext";

const Contact = ({ hasAnimated }) => {
    const { lang } = useLanguage();

    const translations = {
        en: {
            title: "Let's Work Together",
            paragraph:
                "I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate or just want to say hello!",
            links: contactLinks.map((link) => ({
                ...link,
                icon:
                    link.label === "Email Me" ? (
                        <Mail className="w-5 h-5 mr-2" />
                    ) : link.label === "GitHub" ? (
                        <Github className="w-5 h-5 mr-2" />
                    ) : (
                        <Linkedin className="w-5 h-5 mr-2" />
                    ),
            })),
        },
        es: {
            title: "Trabajemos Juntos",
            paragraph:
                "Siempre estoy interesada en nuevas oportunidades y proyectos emocionantes. ¡No dudes en contactarme si quieres colaborar o simplemente saludar!",
            links: contactLinks.map((link) => ({
                ...link,
                icon:
                    link.label === "Email Me" ? (
                        <Mail className="w-5 h-5 mr-2" />
                    ) : link.label === "GitHub" ? (
                        <Github className="w-5 h-5 mr-2" />
                    ) : (
                        <Linkedin className="w-5 h-5 mr-2" />
                    ),
            })),
        },
    };

    const { title, paragraph, links } = translations[lang];

    return (
        <section id="contact" className="py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div
                    className={`transition-all duration-100 delay-500 ${
                        hasAnimated.contact
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <h2 className="text-4xl font-bold mb-8">{title}</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        {paragraph}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                        <a
                            href={links[0].href}
                            className={`flex items-center justify-center w-full sm:w-auto ${links[0].className}`}
                        >
                            {links[0].icon}
                            {links[0].label}
                        </a>
                        <div className="flex gap-4 sm:gap-8">
                            <a
                                href={links[1].href}
                                className={`flex items-center justify-center flex-1 sm:flex-none ${links[1].className}`}
                            >
                                {links[1].icon} {links[1].label}{" "}
                            </a>
                            <a
                                href={links[2].href}
                                className={`flex items-center justify-center flex-1 sm:flex-none ${links[2].className}`}
                            >
                                {links[2].icon} {links[2].label}{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
