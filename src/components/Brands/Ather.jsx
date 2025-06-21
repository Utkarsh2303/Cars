import React from "react";

const AtherEVPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="https://wallpapercave.com/wp/wp10563629.jpg"
                    alt="Ather EV Innovation"
                    className="w-full h-200 object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        ATHER EV
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl md:text-2xl text-gray-200">
                        Redefining urban mobility with intelligent electric scooters.
                    </p>
                </div>
            </section>

            {/* Ather Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-6 text-white">Ather Philosophy</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Ather Energy is committed to transforming urban mobility with high-performance electric scooters, seamless connectivity, and future-ready technology — all designed and built in India.
                </p>
            </section>

            {/* Key Innovations */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "⚡",
                        title: "Fast Charging",
                        desc: "Recharge up to 80% in 30 minutes at Ather Grid fast chargers.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "🧠",
                        title: "Smart Dashboard",
                        desc: "7-inch touchscreen with Google Maps, OTA updates, and connected features.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "🔋",
                        title: "Robust Battery",
                        desc: "IP67-rated battery with 3-year warranty and industry-leading durability.",
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

            {/* Fast Charging Network */}
            <section className="py-16 px-6 bg-black text-white">
                <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8">
                    Ather Grid — Fast Charging Network
                </h2>
                <p className="text-center max-w-3xl mx-auto mb-8 text-lg text-gray-400">
                    Ather Grid spans 1000+ locations across India, enabling quick top-ups during your city commute and long rides.
                </p>
                <img src="https://i0.wp.com/emobilityplus.com/wp-content/uploads/2022/05/ather-scooter.webp?fit=2340%2C1000&ssl=1" alt="Ather Grid" className="rounded-3xl mx-auto shadow-2xl w-full max-w-5xl" />
            </section>

            {/* Ather EV Lineup */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-12 text-white underline underline-offset-8">
                    Ather EV Lineup
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Ather 450X",
                            img: "https://cdni.autocarindia.com/ExtraImages/20200921053916_Ather-450.jpg",
                            desc: "Flagship electric scooter with unmatched performance and features."
                        },
                        {
                            name: "Ather 450S",
                            img: "https://bd.gaadicdn.com/processedimages/ather-energy/ather-450/source/v_ather-450-std1528199854.jpg",
                            desc: "Smart electric scooter with incredible value for urban riders."
                        },
                        {
                            name: "Ather Rizta (upcoming)",
                            img: "https://media.assettype.com/freepressjournal/2024-04/1502b733-6099-428f-aab9-c7f352270f2d/Ather_Rizta.jpeg",
                            desc: "Family-friendly electric scooter built for comfort and range."
                        }
                    ].map((scooter) => (
                        <div
                            key={scooter.name}
                            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl transition duration-300"
                        >
                            <img
                                src={scooter.img}
                                alt={scooter.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-5 space-y-2">
                                <h3 className="text-2xl font-bold text-white">{scooter.name}</h3>
                                <p className="text-base text-gray-300">{scooter.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Connected Tech */}
            <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-10 text-white">
                    Ather Stack — Smart Connected Scooters
                </h2>
                <img
                    src="https://bd.gaadicdn.com/upload/userfiles/images/6603b8a428085.jpg"
                    alt="Ather Stack"
                    className="rounded-3xl shadow-2xl border border-black mb-8"
                />
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Ather Stack integrates hardware, software, and cloud services to deliver an unmatched connected experience with OTA updates, AI-driven insights, and intuitive navigation.
                </p>
            </section>

            {/* Ather Timeline */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8">
                    Ather Milestones
                </h2>
                <div className="space-y-12 max-w-4xl mx-auto border-l-4 border-green-500 pl-6 relative">
                    {[
                        {
                            year: "2013",
                            event: "Ather Energy founded by IIT Madras alumni."
                        },
                        {
                            year: "2018",
                            event: "Launch of Ather 450 — first smart electric scooter."
                        },
                        {
                            year: "2021",
                            event: "Ather Grid expanded to 30+ Indian cities."
                        },
                        {
                            year: "2024",
                            event: "Ather Rizta debut and 1000+ fast chargers nationwide."
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
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience Ather EV</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Discover Ather's smart electric scooters — redefining urban mobility with intelligence, performance, and sustainability.
                </p>
                <a
                    href="https://www.atherenergy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
                >
                    Explore Ather EVs
                </a>
            </section>
        </div>
    );
};

export default AtherEVPage;
