import React from "react";

const TeslaPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="https://images.hdqwalls.com/wallpapers/tesla-model-x-front-4k-5x.jpg"
                    alt="Tesla Innovation"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        TESLA
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl md:text-2xl text-gray-200">
                        Driving the future of sustainable energy and mobility.
                    </p>
                </div>
            </section>

            {/* Tesla Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-6 text-white">Tesla Philosophy</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Tesla leads the revolution in electric vehicles, energy storage, and autonomous technology.
                    With a mission to accelerate the world’s transition to sustainable energy, every Tesla embodies
                    innovation, efficiency, and high performance.
                </p>
            </section>

            {/* Key Innovations */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "⚡",
                        title: "Electric Powertrain",
                        desc: "Industry-leading range, performance, and efficiency.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "🤖",
                        title: "Full Self-Driving (FSD)",
                        desc: "Autonomous capabilities powered by AI & machine learning.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "🌍",
                        title: "Sustainable Energy",
                        desc: "Solar, battery storage, and a cleaner future.",
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



            <section className="py-16 px-6 bg-black text-white">
                <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8">
                    The World’s Fastest Charging Network
                </h2>
                <p className="text-center max-w-3xl mx-auto mb-8 text-lg text-gray-400">
                    With over 50,000 Superchargers globally, Tesla drivers enjoy unmatched convenience and coverage — charge up to 322 km in 15 minutes.
                </p>
                <img src="https://www.motorbiscuit.com/wp-content/uploads/2021/03/TeslaChargingStation.jpg" alt="Supercharger Network" className="rounded-3xl mx-auto shadow-2xl w-full max-w-5xl" />
            </section>


            {/* Tesla Lineup */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-12 text-white underline underline-offset-8">
                    Tesla Lineup
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Model S",
                            img: "https://techbriefly.com/wp-content/uploads/2023/05/Tesla-models-explained-S-3-X-Y-and-Cybertruck-2.jpg",
                            desc: "Luxury electric sedan with stunning speed & range."
                        },
                        {
                            name: "Model 3",
                            img: "https://ymimg1.b8cdn.com/uploads/article/8831/pictures/10704690/2024-Tesla-Model-3-Facelift-2.jpg",
                            desc: "Affordable, efficient, everyday electric performance."
                        },
                        {
                            name: "Model X",
                            img: "https://citymagazine.si/wp-content/uploads/2023/05/tesla-3-2024-spy-photo.jpg",
                            desc: "Spacious electric SUV with falcon wing doors."
                        },
                        {
                            name: "Model Y",
                            img: "https://cdn.motor1.com/images/mgl/NGOolM/s1/tesla-model-y.jpg",
                            desc: "Versatile, high-performing electric crossover."
                        },
                        {
                            name: "Cybertruck",
                            img: "https://supercarblondie.com/wp-content/uploads/Tesla-Cybertruck-front-view-on-road.png",
                            desc: "Futuristic electric truck with stainless steel exoskeleton."
                        },
                        {
                            name: "Roadster",
                            img: "https://www.teslarati.com/wp-content/uploads/2021/01/tesla-roadster-production-release-candidate-scaled.jpg",
                            desc: "Ultra-fast electric supercar — the next generation Roadster."
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

            {/* Autopilot & Tech Section */}
            <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-10 text-white">
                    Autopilot & Technology
                </h2>
                <img
                    src="https://media.marketrealist.com/brand-img/BQ_cKmYzi/0x0/uploads/2019/08/Tesla-Autopilot.jpeg"
                    alt="Tesla Autopilot"
                    className="rounded-3xl shadow-2xl border border-gray-700 mb-8"
                />
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Tesla’s Autopilot and Full Self-Driving technologies offer cutting-edge safety and convenience.
                    AI-powered vision systems, continuous over-the-air updates, and one of the world's most advanced
                    vehicle software stacks make Tesla’s driving experience unlike any other.
                </p>
            </section>

            {/* Tesla Milestones Timeline */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8">
                    Tesla’s Milestones
                </h2>
                <div className="space-y-12 max-w-4xl mx-auto border-l-4 border-red-500 pl-6 relative">
                    {[
                        {
                            year: "2003",
                            event: "Tesla Motors is founded by Martin Eberhard and Marc Tarpenning."
                        },
                        {
                            year: "2008",
                            event: "Launch of Tesla Roadster — first production EV with over 320 km range."
                        },
                        {
                            year: "2012",
                            event: "Model S debuts: world’s first premium all-electric sedan."
                        },
                        {
                            year: "2015",
                            event: "Launch of Autopilot (driver-assist software) and Powerwall energy storage."
                        },
                        {
                            year: "2017",
                            event: "First Model 3 deliveries — mass-market electric sedan."
                        },
                        {
                            year: "2020",
                            event: "Tesla becomes the world’s most valuable car company."
                        },
                        {
                            year: "2023",
                            event: "Launch of Cybertruck production; Tesla Semi enters commercial use."
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_12px_3px_rgba(239,68,68,0.6)]" />
                            <h4 className="text-xl font-semibold text-red-400 mb-1">{item.year}</h4>
                            <p className="text-gray-300">{item.event}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Final CTA */}
            <section className="bg-black py-20 px-6 text-center text-white">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Accelerate the Future</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join Tesla in driving the world toward sustainable energy and cutting-edge mobility.
                    Explore, experience, and shape the future — one drive at a time.
                </p>
                <a
                    href="https://www.tesla.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
                >
                    Visit Tesla Official
                </a>
            </section>
        </div>
    );
};

export default TeslaPage;
