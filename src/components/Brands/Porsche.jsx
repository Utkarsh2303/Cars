import React from "react";

const PorschePage = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <img
                    src="https://www.hdcarwallpapers.com/walls/porsche_911_gt_4k_2-HD.jpg"
                    alt="Porsche Performance"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-black drop-shadow-lg">
                        Porsche
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-black">
                        Driven by Dreams — Precision, Power, Passion
                    </p>
                </div>
            </section>

            {/* Porsche Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
                <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        The Spirit of Porsche
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        Porsche is the embodiment of engineering perfection and racing heritage. Each Porsche blends motorsport DNA with unmatched luxury and timeless design — built for those who dream beyond limits.
                    </p>
                </div>
            </section>

            {/* Signature Highlights with Gradients */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "🏁",
                        title: "Racing Pedigree",
                        desc: "Decades of motorsport triumphs inspire every road-going Porsche.",
                        gradient: "from-red-100 via-pink-50 to-white"
                    },
                    {
                        icon: "⚡",
                        title: "E-Performance",
                        desc: "Porsche’s commitment to electrified sports cars and sustainability.",
                        gradient: "from-green-100 via-lime-50 to-white"
                    },
                    {
                        icon: "🎨",
                        title: "Timeless Design",
                        desc: "Iconic silhouettes that honor Porsche’s rich history while shaping the future.",
                        gradient: "from-yellow-100 via-orange-50 to-white"
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className={`rounded-2xl p-6 bg-gradient-to-br ${item.gradient} border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300`}
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-800">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* Top Porsche Cars */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 underline underline-offset-8 text-gray-900">
                    Top Porsche Cars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            name: "Porsche 911 Carrera",
                            img: "https://www.hdcarwallpapers.com/walls/porsche_911_carrera_4s_2019_4k_11-HD.jpg",
                            desc: "The timeless sports car with iconic design and legendary performance."
                        },
                        {
                            name: "Porsche Taycan",
                            img: "https://www.motoringresearch.com/wp-content/uploads/2018/06/Porsche_Taycan_02.jpg",
                            desc: "Porsche’s high-performance all-electric sports saloon."
                        },
                        {
                            name: "Porsche Panamera",
                            img: "https://www.ixbt.com/img/n1/news/2023/10/5/2024-porsche-panamera-turbo-sonderwunsch_large.jpg",
                            desc: "Luxury performance saloon with dynamic handling."
                        },
                        {
                            name: "Porsche Cayenne",
                            img: "https://cdn.motor1.com/images/mgl/bgm3W6/s1/2024-porsche-cayenne-turbo-e-hybrid-front-3-4.jpg",
                            desc: "Dynamic SUV offering Porsche performance with practicality."
                        }
                    ].map((car) => (
                        <div
                            key={car.name}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={car.img}
                                alt={car.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-5 space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                                <p className="text-sm text-gray-700">{car.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Porsche Legacy Timeline */}
            <section className="py-16 px-4 md:px-10 bg-gray-100 text-gray-900 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-12 tracking-wide underline underline-offset-8 decoration-red-500">
                    Porsche’s Legacy
                </h2>
                <div className="relative border-l-4 border-red-500 pl-6 space-y-12">
                    {[
                        {
                            year: "1948",
                            icon: "🏁",
                            event: "The first Porsche — the 356 — is completed in Gmünd, Austria."
                        },
                        {
                            year: "1964",
                            icon: "✨",
                            event: "Birth of the Porsche 911 — an icon of sports car engineering."
                        },
                        {
                            year: "1984",
                            icon: "🏆",
                            event: "Porsche 911 Carrera 4x4 wins the Paris-Dakar Rally."
                        },
                        {
                            year: "2015",
                            icon: "⚡",
                            event: "Porsche 919 Hybrid wins at Le Mans and World Endurance Championship."
                        },
                        {
                            year: "2020",
                            icon: "🚀",
                            event: "Launch of Taycan — Porsche’s first all-electric sports car."
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_4px_rgba(239,68,68,0.6)] z-10" />
                            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <h4 className="text-xl font-semibold text-red-600 tracking-wide">{item.year}</h4>
                                </div>
                                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{item.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-black py-16 px-6 text-center text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Driven by Dreams</h2>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                    Whether it’s iconic sports cars or electrified luxury — discover your Porsche.
                </p>
                <a
                    href="https://www.porsche.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
                >
                    Visit Official Website
                </a>
            </section>
        </div>
    );
};

export default PorschePage;
