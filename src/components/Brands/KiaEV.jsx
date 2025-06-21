import React from "react";

const KiaEVPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="https://www.hdcarwallpapers.com/download/kia_ev6_2021_4k_3-1600x900.jpg"
                    alt="Kia EV Innovation"
                    className="w-full h-200 object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        KIA EV
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl md:text-2xl text-gray-200">
                        Powering the future with bold design, technology, and innovation.
                    </p>
                </div>
            </section>

            {/* Kia Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-6 text-white">Kia EV Philosophy</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Kia is transforming mobility through its "Plan S" strategy — accelerating the global shift to electric vehicles.
                    With design-driven innovation, cutting-edge technology, and sustainable thinking, Kia EVs are reshaping the automotive experience.
                </p>
            </section>

            {/* Key Innovations */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "⚡",
                        title: "800V Ultra-fast Charging",
                        desc: "Recharge up to 80% in just 18 minutes.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "🎮",
                        title: "Advanced Drive Tech",
                        desc: "Level 2+ ADAS, AR Navigation, and immersive controls.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "♻️",
                        title: "Sustainable Materials",
                        desc: "Eco-friendly interiors crafted from recycled materials.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className={`rounded-2xl p-6 bg-gradient-to-br ${item.gradient} border border-gray-700 shadow-xl hover:scale-105 transition-transform duration-300`}
                    >
                        <div className="text-5xl mb-4 text-white">{item.icon}</div>
                        <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-base text-gray-300">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* Fast Charging */}
            <section className="py-16 px-6 bg-black text-white">
                <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8">
                    Global Fast Charging Network
                </h2>
                <p className="text-center max-w-3xl mx-auto mb-8 text-lg text-gray-400">
                    Kia supports an extensive charging network through partnerships and Kia Connect, enabling seamless long-distance travel.
                </p>
                <img src="https://www.kia.com/content/dam/kwcms/kme/global/en/assets/contents/about-kia/experience-kia/technology/electrification/freecoding/wave_9/assets/img/ev_public-charging_image-1.jpg" alt="Kia Charging" className="rounded-3xl mx-auto shadow-2xl w-full max-w-5xl" />
            </section>

            {/* Kia EV Lineup */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-12 text-white underline underline-offset-8">
                    Kia EV Lineup
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Kia EV6",
                            img: "https://mobiwisy.fr/wp-content/uploads/Kia-EV6-blanc-1920x1280.jpg",
                            desc: "Award-winning electric crossover with sporty performance."
                        },
                        {
                            name: "Kia EV9",
                            img: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/08/2024-kia-ev9-gt-line.jpg",
                            desc: "Flagship 7-seater electric SUV with luxury features."
                        },
                        {
                            name: "Kia EV5 (upcoming)",
                            img: "https://www.kia.com/content/dam/kwcms/gt/en/images/showroom/EV5-ovc-25my/Features/overview/ev5-25my-kv-pc.jpg",
                            desc: "Future compact electric SUV for urban adventures."
                        }
                    ].map((car) => (
                        <div
                            key={car.name}
                            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl transition duration-300"
                        >
                            <img
                                src={car.img}
                                alt={car.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-5 space-y-2">
                                <h3 className="text-2xl font-bold text-white">{car.name}</h3>
                                <p className="text-base text-gray-300">{car.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Connected Tech */}
            <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-10 text-white">
                    Kia Connect — Smart Mobility
                </h2>
                <img
                    src="https://www.kia.com/content/dam/kwcms/kme/ie/en/assets/vehicles/ev9/rhd-lifestyle-phone-navi-1720w.jpg"
                    alt="Kia Connect"
                    className="rounded-3xl shadow-2xl border border-gray-700 mb-8"
                />
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Kia Connect enables seamless digital experience with AI voice controls, OTA updates, live navigation, and remote management, 
                    redefining modern mobility.
                </p>
            </section>

            {/* Kia EV Timeline */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8">
                    Kia EV Journey
                </h2>
                <div className="space-y-12 max-w-4xl mx-auto border-l-4 border-green-500 pl-6 relative">
                    {[
                        {
                            year: "2021",
                            event: "Global launch of Kia EV6 — first dedicated EV."
                        },
                        {
                            year: "2023",
                            event: "Debut of Kia EV9 — redefining electric luxury SUV segment."
                        },
                        {
                            year: "2024",
                            event: "Kia EV9 launched in India."
                        },
                        {
                            year: "2025 (upcoming)",
                            event: "Kia EV5 global debut and India launch expected."
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_12px_3px_rgba(34,197,94,0.6)]" />
                            <h4 className="text-xl font-semibold text-green-400 mb-1">{item.year}</h4>
                            <p className="text-gray-300">{item.event}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-black py-20 px-6 text-center text-white">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Drive Bold with Kia EV</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Discover Kia's range of electric vehicles — where innovation meets design. 
                    Embrace the future of driving today.
                </p>
                <a
                    href="https://www.kia.com/in/discover-kia/ev.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
                >
                    Explore Kia EVs
                </a>
            </section>
        </div>
    );
};

export default KiaEVPage;
