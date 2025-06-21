import React from "react";
import { useNavigate } from "react-router-dom";

const SurpriseButton = () => {
    const navigate = useNavigate();

    const randomPages = [
        "/Evolution",
        "/car-buying-guide",
        "/Sportcars",
        "/Hatchback",
        "/Sedan",
        "/Suv",
        "/Electric",
        "/Convertible",
        "/Coupe",
        "/Wagon",
        "/Crossover",
        "/Luxury",
        "/Pickup",
        "/Minivan",
        "/Micro",
        "/Roadster",
        "/Muscle"
    ];

    const handleSurpriseClick = () => {
        const randomIndex = Math.floor(Math.random() * randomPages.length);
        const randomPage = randomPages[randomIndex];
        navigate(randomPage);
    };

    return (
        <button
            onClick={handleSurpriseClick}
            className="fixed bottom-6 right-6 
               bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900
               text-white px-5 py-4 rounded-full shadow-2xl border-2 border-white/20
               hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0
               transition-transform duration-300 ease-in-out animate-bounce-slow cursor-pointer z-50"
        >
            🎁 Surprise Me!
        </button>

    );
};

export default SurpriseButton;
