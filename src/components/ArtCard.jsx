import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const ArtCard = ({ art }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const {lang} = useLanguage();

  return (
    <>
      {/* --- Tarjeta principal --- */}
      <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
        <div
          className="bg-gray-100 flex items-center justify-center overflow-hidden aspect-[5/4] sm:aspect-[4/3] md:aspect-[3/2] cursor-zoom-in"
          onClick={() => setIsZoomed(true)}
        >
          {art?.image ? (
            <img
              loading="lazy"
              src={art.image}
              alt={art?.title ? `${art.title} preview` : "Artwork preview"}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="text-7xl font-bold text-gray-300">
              {art?.title ? art.title.charAt(0) : "?"}
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-gray-600 transition-colors">
            {art?.title[lang] ?? "Untitled"}
          </h3>
          <p className="text-gray-600 mb-4 text-base leading-relaxed flex-grow">
            {art?.description[lang] ?? "No description"}
          </p>
        </div>
      </div>

      {/* --- Modal de zoom --- */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out p-4"
        >
          <img
            src={art.image}
            alt={art?.title ?? "Artwork"}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default ArtCard;
