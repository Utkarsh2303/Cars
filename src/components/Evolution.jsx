import React from "react";
import { Link } from 'react-router-dom'

const EvolutionOfCarsPage = () => {
    return (
      <div className="pt-20">
          <div className="font-sans text-gray-900 bg-white px-6 py-12 space-y-16 ">
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto text-center space-y-6">
                <h1 className="text-5xl font-bold text-blue-900">🚗 The Evolution of Cars 🌍</h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                    From steam-powered wagons to futuristic electric vehicles — explore the incredible journey of the automobile! 🏎️⚙️
                </p>
                <img
                    src="https://png.pngtree.com/background/20230412/original/pngtree-classic-car-warm-light-picture-image_2401456.jpg"
                    alt="Evolution of Cars Hero"
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                />
            </section>

            {/* Section 1: The Birth of the Automobile */}
            <section className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-blue-800">🔹 The Birth of the Automobile (Late 1800s)</h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                    The idea of a self-propelled vehicle dates back to the late 18th century. Steam-powered wagons emerged in Europe, but Karl Benz’s 1886 Patent-Motorwagen truly ignited the automotive revolution! 🚘
                </p>
                <img
                    src="https://edgecast-img.yahoo.net/mysterio/api/9384CAD4FF014522C92F93CC27BE9D998F9DB9B810644A383B9678A7501CAA6B/autoblog/resizefill_w1200_h675;quality_80;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1200x675/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2022/12/09151019/rg-1886-benz-patent-motorwagen-201.jpg"
                    alt="Benz Patent Motorwagen"
                    className="w-full rounded-lg shadow-lg"
                />
            </section>

            {/* Section 2: Assembly Line & Mass Production */}
            <section className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-blue-800">🔹 The Assembly Line Revolution (Early 1900s)</h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                    Henry Ford’s 1908 Model T and the moving assembly line in 1913 made cars affordable & accessible. 🚗💨
                    The dream of owning a car became reality for millions!
                </p>
                <img
                    src="https://wallpapercave.com/wp/wp6247895.jpg"
                    alt="Ford Model T"
                    className="w-full rounded-lg shadow-lg"
                />
            </section>

            {/* Section 3: Variety & New Segments */}
            <section className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-blue-800">🔹 Variety & New Segments (Mid 1900s)</h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                    Car segments expanded — 🚙 Sedans | 🚗 Coupes | 🚕 Convertibles | 🚐 MPVs | 🚜 SUVs.
                    Cars became status symbols, fashion icons, and adventure companions!
                </p>
                <img
                    src="https://www.classicandsportscar.com/sites/default/files/styles/slideshow_slide/public/2022-10/02-Packard-Eight_mecum.jpg.jpg?itok=L6QGJ5s5"
                    alt="Classic Car"
                    className="w-full rounded-lg shadow-lg"
                />
            </section>

            {/* Section 4: Racing & Performance Cars */}
            <section className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-blue-800">🏁 Racing & Performance Cars</h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                    Motorsports pushed car technology — Formula 1, Le Mans, rally racing inspired lighter, faster, safer performance cars. 🏎️🏆
                    Speed and engineering excellence became key factors.
                </p>
                <img
                    src="https://hips.hearstapps.com/roa.h-cdn.co/assets/14/47/4000x2000/546b40a4b6ce8_-_audi-lg.jpg?resize=1200:*"
                    alt="F1 Car"
                    className="w-full rounded-lg shadow-lg"
                />
            </section>

            {/* Section 5: Indian Car Industry */}
            <section className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-blue-800">🇮🇳 Indian Car Industry</h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                    India’s car journey began with Hindustan Ambassador & Premier Padmini 🚖.
                    Today, India is a global auto hub — Tata, Mahindra, Maruti Suzuki, Hyundai, Kia — making cars for the world! 🌍
                    Affordable hatchbacks to luxury EVs — Indian roads are buzzing! 🚗
                </p>
                <img
                    src="https://wallpapercave.com/wp/wp8898345.jpg"
                    alt="Ambassador"
                    className="w-full rounded-lg shadow-lg"
                />
            </section>

            {/* Section 6: Tech & Safety Innovations */}
            <section className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-blue-800">🛠️ Tech & Safety Innovations</h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                    🚗 ABS, airbags, navigation, parking sensors, cruise control...
                    ⚙️ Hybrid engines, electric motors, regenerative braking...
                    Today’s cars are safer, smarter, and more connected than ever! 🚘
                </p>
                <img
                    src="http://momentcar.com/images/bmw-m3-1990-6.jpg"
                    alt="1990s BMW"
                    className="w-full rounded-lg shadow-lg"
                />
            </section>

            {/* Section 7: The EV Revolution */}
            <section className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-blue-800">⚡ The EV Revolution (2020s & Beyond)</h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                    Electric Vehicles (EVs) are shaping the future 🌍 — Tesla, Tata EVs, BYD, Hyundai Ioniq, Kia EV6...
                    Zero emissions, instant torque, AI-based features! 🤖
                    A cleaner, greener driving experience. 🌿
                </p>
                <img
                    src="https://images.frandroid.com/wp-content/uploads/2019/09/tesla-model-s-1563301327.jpg"
                    alt="Tesla Model S"
                    className="w-full rounded-lg shadow-lg"
                />
            </section>

            {/* Section 8: The Road Ahead */}
            <section className="max-w-4xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl font-bold text-blue-800">🚗 The Road Ahead 🚀</h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                    From humble steam wagons to AI-driven cars — the evolution of automobiles is a story of human ambition! 🏎️
                    The future holds: flying cars, full-autonomous vehicles, hydrogen fuel cells & even more eco-friendly innovations! 🌟
                </p>
                <img
                    src="https://www.carscoops.com/wp-content/uploads/2019/09/4476d8a2-mercedes-le-mans-concept-.jpg"
                    alt="Future Cars"
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                />
            </section>


            <section className="max-w-4xl mx-auto py-12 px-6 text-center space-y-6 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 shadow-inner mt-10">
                <p className="text-3xl italic font-bold text-blue-900 leading-relaxed">
                    "Cars are not just machines. They are a reflection of <span className="text-indigo-700">human passion</span>, <span className="text-indigo-700">innovation</span>, and the endless pursuit of <span className="text-indigo-700">freedom</span>." 🚗💭
                </p>
                <p className="text-lg text-gray-600">— Unknown</p>
            </section>

        </div>
      </div>
    );
};

export default EvolutionOfCarsPage;
