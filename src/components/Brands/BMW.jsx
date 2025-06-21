import React from "react";

const BMWPage = () => {
    return (
        <div className="font-sans text-gray-200 ">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <img
                    src="https://images.hdqwalls.com/download/bmw-m-nfs-4k-2q-1920x1080.jpg"
                    alt="BMW Luxury"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-xl">
                        BMW
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300">
                        Sheer Driving Pleasure — The Ultimate Driving Machine
                    </p>
                </div>
            </section>

            {/* BMW Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-white">
                        Why BMW is The Ultimate Driving Machine
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed text-center">
                        BMW defines the art of performance, engineering excellence, and timeless aesthetics. Whether it’s innovation in driving dynamics, precision in design, or technological superiority — BMW delivers an unmatched driving experience.
                    </p>
                </div>
            </section>

            {/* Signature Highlights with Gradients */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "🏎️",
                        title: "M Series Performance",
                        desc: "BMW’s M division delivers motorsport DNA with stunning power and precision.",
                        gradient: "from-indigo-900 via-blue-700 to-gray-900"
                    },
                    {
                        icon: "⚡",
                        title: "BMW i Electric Innovation",
                        desc: "Leading the charge with the revolutionary i series electric vehicles.",
                        gradient: "from-cyan-900 via-sky-700 to-gray-900"
                    },
                    {
                        icon: "🧠",
                        title: "Cutting-edge Tech",
                        desc: "Seamless integration of digital tech with intelligent driving systems.",
                        gradient: "from-purple-900 via-violet-700 to-gray-900"
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className={`rounded-2xl p-6 bg-gradient-to-br ${item.gradient} border border-gray-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300`}
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* Top BMW Cars */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 underline underline-offset-8 text-white">
                    Top BMW Cars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            name: "BMW M5 CS",
                            img: "https://www.hdcarwallpapers.com/download/bmw_m5_cs_2021_5k_6-3840x2160.jpg",
                            desc: "Limited-edition super sedan — the most powerful M5 ever built."
                        },
                        {
                            name: "BMW i7",
                            img: "https://www.bmw.com.tr/content/dam/bmw/common/all-models/i-series/i7/2022/Highlights/bmw-7-series-i7-cp-design-exterior-desktop.jpg",
                            desc: "Flagship electric luxury sedan with groundbreaking tech."
                        },
                        {
                            name: "BMW X5 M Competition",
                            img: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/x5m/2023/bmw-x5-m-competition-individual-ai-01.png.asset.1676993259479.png",
                            desc: "High-performance SUV with luxurious interiors and raw power."
                        },
                        {
                            name: "BMW Z4 Roadster",
                            img: "https://wallpapers.com/images/hd/bmw-z4-1920-x-1200-wallpaper-9khnkmn4lxl5q78z.jpg",
                            desc: "Sporty convertible delivering open-top driving pleasure."
                        }
                    ].map((car) => (
                        <div
                            key={car.name}
                            className="bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl transition duration-300"
                        >
                            <img
                                src={car.img}
                                alt={car.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-5 space-y-2">
                                <h3 className="text-xl font-bold text-white">{car.name}</h3>
                                <p className="text-sm text-gray-300">{car.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BMW Legacy Timeline */}
            <section className="py-16 px-4 md:px-10 bg-gray-500 text-gray-100 rounded-3xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center mb-12 tracking-wide underline underline-offset-8 decoration-blue-500">
                    BMW Legacy
                </h2>
                <div className="relative border-l-4 border-blue-500 pl-6 space-y-12">
                    {[
                        {
                            year: "1916",
                            icon: "🏁",
                            event: "BMW founded in Munich — initially as an aircraft engine manufacturer."
                        },
                        {
                            year: "1936",
                            icon: "🏎️",
                            event: "Launch of BMW 328 — legendary roadster dominating pre-war racing."
                        },
                        {
                            year: "1972",
                            icon: "🥇",
                            event: "Creation of BMW M — the high-performance motorsport division."
                        },
                        {
                            year: "1999",
                            icon: "🚀",
                            event: "BMW X5 launches — creating the luxury performance SUV segment."
                        },
                        {
                            year: "2022",
                            icon: "⚡",
                            event: "BMW iX & i4 represent the dawn of BMW’s new EV future."
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_4px_rgba(59,130,246,0.6)] z-10" />
                            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 p-5 rounded-xl shadow-md border border-gray-700">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <h4 className="text-xl font-semibold text-blue-400 tracking-wide">{item.year}</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-black py-16 px-6 text-center text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Drive the Ultimate Machine</h2>
                <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
                    From racetrack to road, BMW continues to set benchmarks. Discover yours today.
                </p>
                <a
                    href="https://www.bmw.in"
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

export default BMWPage;


