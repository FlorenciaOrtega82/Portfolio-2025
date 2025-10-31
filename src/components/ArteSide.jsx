import React from "react";
import { arte } from "../data/arte";
import ArtCard from "./ArtCard";
import {useLanguage} from "../context/LanguageContext";

const ArteSide = ({ hasAnimated }) => {
    const {lang} = useLanguage();
    const titles = {
        en: "Art Side",
        es:"Lado Artístico",
    }
    return (
        <section id="art" className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div
                    className={`transition-all duration-1000 delay-300 ${
                        hasAnimated.art
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        {titles[lang]}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {arte.map((art, index) => (
                            <ArtCard key={index} art={art} lang={lang}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArteSide;
