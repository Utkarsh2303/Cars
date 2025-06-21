import React from "react";

const OlaElectricPage = () => {
    return (
        <div className="font-sans text-gray-100 bg-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="https://www.drivespark.com/images/2021-08/ola-electric-scooter-20.jpg"
                    alt="OLA Electric"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-xl">
                        OLA ELECTRIC
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl md:text-2xl text-gray-200">
                        India’s EV Revolution Begins Here — Smart, Sustainable, Stylish.
                    </p>
                </div>
            </section>

            {/* Brand Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-6 text-white">Ola’s Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Ola Electric envisions a sustainable future, made in India for the world. With in-house tech, Gigafactory ambitions, and
                    rapid innovation, Ola is transforming daily mobility into a cleaner, smarter experience.
                </p>
            </section>

            {/* Core Innovations */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "🛵",
                        title: "Smart EV Scooters",
                        desc: "Connected, voice-enabled, and loaded with features.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "⚡",
                        title: "Hypercharger Network",
                        desc: "India’s largest 2W fast-charging network under development.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "🏭",
                        title: "Future Factory",
                        desc: "World’s largest 2W EV factory — 100% women-operated.",
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

            {/* Product Lineup */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-12 text-white underline underline-offset-8">
                    OLA EV Lineup
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Ola S1 Pro",
                            img: "https://www.autobics.com/wp-content/uploads/2023/08/2023-Ola-S1-Pro-Amethyst.jpg",
                            desc: "Premium performance scooter with 195 km range and hyper modes."
                        },
                        {
                            name: "Ola S1 Air",
                            img: "https://www.91-cdn.com/hub/wp-content/uploads/2022/11/ola-s1-air-jet-black.png",
                            desc: "Budget-friendly, lightweight EV with great value and features."
                        },
                        {
                            name: "Ola S1X+",
                            img: "https://i.gadgets360cdn.com/large/Ola_S1X_main_1692164473489.jpg",
                            desc: "Mid-range, practical EV scooter ideal for everyday city rides."
                        }
                    ].map((bike) => (
                        <div
                            key={bike.name}
                            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl transition duration-300"
                        >
                            <img
                                src={bike.img}
                                alt={bike.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-5 space-y-2">
                                <h3 className="text-2xl font-bold text-white">{bike.name}</h3>
                                <p className="text-base text-gray-300">{bike.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Showcase */}
            <section className="py-16 px-6 text-center bg-black">
                <h2 className="text-4xl font-semibold text-white mb-10">MoveOS — The Brain Behind It All</h2>
                <img
                    src="https://static.autox.com/uploads/2022/11/Ola-MoveOS-3.jpg"
                    alt="MoveOS"
                    className="mx-auto rounded-2xl border border-gray-700 shadow-xl max-w-4xl"
                />
                <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
                    MoveOS 4 powers Ola scooters with features like hill-hold, moods, proximity unlock, ride analytics, and more — constantly evolving through OTA updates.
                </p>
            </section>

            {/* Timeline */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8">
                    Ola Electric Timeline
                </h2>
                <div className="space-y-12 max-w-4xl mx-auto border-l-4 border-lime-500 pl-6 relative">
                    {[
                        {
                            year: "2021",
                            event: "Launch of Ola S1 and S1 Pro electric scooters."
                        },
                        {
                            year: "2022",
                            event: "MoveOS 2 & 3 launches, Ola Hyperchargers rollout begins."
                        },
                        {
                            year: "2023",
                            event: "S1 Air, S1X+, and S1X series introduced. Factory expansion begins."
                        },
                        {
                            year: "2024",
                            event: "MoveOS 4 rolls out — EV car teaser revealed."
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-lime-400 shadow-[0_0_12px_3px_rgba(163,230,53,0.6)]" />
                            <h4 className="text-xl font-semibold text-lime-400 mb-1">{item.year}</h4>
                            <p className="text-gray-300">{item.event}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-black py-20 px-6 text-center text-white">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join the EV Revolution with Ola</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Explore Ola’s electrifying two-wheeler lineup built for the roads of India — smart, sleek, and sustainable.
                </p>
                <a
                    href="https://www.olaelectric.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
                >
                    Explore Ola Electric
                </a>
            </section>
        </div>
    );
};

export default OlaElectricPage;
