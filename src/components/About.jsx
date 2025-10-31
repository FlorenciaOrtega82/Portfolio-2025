import React from "react";
import {
    Github,
    Linkedin,
    Mail,
    Code,
    Palette,
    Smartphone,
    ExternalLink,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const About = ({ hasAnimated }) => {
    const { lang } = useLanguage();

    const translations = {
        en: {
            title: "About Me",
            paragraph1:
                "I'm a passionate frontend developer with a knack for creating engaging and user-friendly web applications. With a strong foundation in React, Javascript, and modern CSS frameworks to build sociable, performant applications.",
            paragraph2:
                "My journey in web development started with curiosity for how websites are built. Over the years, I've honed my skills.",
            features: [
                {
                    icon: <Code className="w-8 h-8 mb-4 text-black" />,
                    title: "Clean Code",
                    description:
                        "Writing maintainable, scalable code following best practices",
                },
                {
                    icon: <Palette className="w-8 h-8 mb-4 text-black" />,
                    title: "UI/UX Design",
                    description:
                        "Creating intuitive interfaces with attention to detail",
                },
                {
                    icon: <Smartphone className="w-8 h-8 mb-4 text-black" />,
                    title: "Responsive",
                    description:
                        "Mobile-first approach ensuring great experience on all devices",
                },
                {
                    icon: <ExternalLink className="w-8 h-8 mb-4 text-black" />,
                    title: "Performance",
                    description:
                        "Optimizing for fast load times and smooth interactions",
                },
            ],
        },
        es: {
            title: "Sobre mí",
            paragraph1:
                "Soy una desarrolladora frontend apasionada, con talento para crear aplicaciones web atractivas y fáciles de usar. Con una sólida base en React, Javascript y frameworks modernos de CSS para construir aplicaciones sociales y de alto rendimiento.",
            paragraph2:
                "Mi camino en el desarrollo web comenzó por curiosidad sobre cómo se construyen los sitios. Con los años, he perfeccionado mis habilidades.",
            features: [
                {
                    icon: <Code className="w-8 h-8 mb-4 text-black" />,
                    title: "Código Limpio",
                    description:
                        "Escribo código mantenible y escalable siguiendo buenas prácticas",
                },
                {
                    icon: <Palette className="w-8 h-8 mb-4 text-black" />,
                    title: "Diseño UI/UX",
                    description:
                        "Creo interfaces intuitivas con atención al detalle",
                },
                {
                    icon: <Smartphone className="w-8 h-8 mb-4 text-black" />,
                    title: "Responsivo",
                    description:
                        "Diseño enfocado en móviles para una gran experiencia en todos los dispositivos",
                },
                {
                    icon: <ExternalLink className="w-8 h-8 mb-4 text-black" />,
                    title: "Rendimiento",
                    description:
                        "Optimizo para tiempos de carga rápidos e interacciones fluidas",
                },
            ],
        },
    };

    const { title, paragraph1, paragraph2, features } = translations[lang];

    return (
        <section id="about" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div
                    className={`transition-all duration-1000 ${
                        hasAnimated.about
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        {title}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 mb-6">
                                {paragraph1}
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                {paragraph2}
                            </p>

                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/FlorenciaOrtega82"
                                    target="_blank"
                                >
                                    <Github className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/flor-ortega"
                                    target="_blank"
                                >
                                    <Linkedin className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
                                </a>
                                <a href="mailto:florortega055@gmail.com">
                                    <Mail className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                                >
                                    {feature.icon}
                                    <h3 className="font-semibold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
