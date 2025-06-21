import React from "react";

const BYDPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="https://www.hdcarwallpapers.com/download/byd_e_seed_gt_2019_5k-3840x2160.jpg"
                    alt="BYD Innovation"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        BYD EV
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl md:text-2xl text-gray-200">
                        Electrifying the future with innovation, performance, and sustainability.
                    </p>
                </div>
            </section>

            {/* BYD Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-6 text-white">BYD Philosophy</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    BYD (Build Your Dreams) is a global leader in electric vehicles and battery technologies.
                    With a vision for zero-emission transportation and green energy, BYD is shaping tomorrow’s mobility.
                </p>
            </section>

            {/* Key Innovations */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "🔋",
                        title: "Blade Battery",
                        desc: "Advanced lithium iron phosphate battery for safety & efficiency.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "⚙️",
                        title: "e-Platform 3.0",
                        desc: "Integrated EV platform offering enhanced range and performance.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "🌱",
                        title: "Sustainable Mobility",
                        desc: "Driving green innovation with global reach and eco-conscious vision.",
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

            {/* Charging Network */}
            <section className="py-16 px-6 bg-black text-white">
                <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8">
                    Rapid Charging Capabilities
                </h2>
                <p className="text-center max-w-3xl mx-auto mb-8 text-lg text-gray-400">
                    BYD EVs support fast-charging networks globally — delivering efficient energy top-ups and extended range with cutting-edge technology.
                </p>
                <img
                    src="https://www.autoworldjournal.com/wp-content/uploads/2025/03/BYD-Charging-Alt-img-ed.jpg"
                    alt="BYD Charging"
                    className="rounded-3xl mx-auto shadow-2xl w-full max-w-5xl"
                />
            </section>

            {/* BYD Lineup */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-12 text-white underline underline-offset-8">
                    BYD EV Lineup
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "BYD Seal",
                            img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/byd-seal-review-2023-001-cornering-front.jpg",
                            desc: "Premium electric sedan combining style and advanced tech."
                        },
                        {
                            name: "BYD Atto 3",
                            img: "https://www.topgear.com/sites/default/files/2023/03/25-BYD-Atto-3.jpg",
                            desc: "Versatile electric SUV designed for dynamic city life."
                        },
                        {
                            name: "BYD Dolphin",
                            img: "https://cdn.motor1.com/images/mgl/mMk7ze/s1/byd-dolphin-europa.jpg",
                            desc: "Compact electric hatchback delivering urban efficiency."
                        },
                        {
                            name: "BYD Tang EV",
                            img: "https://cdn.motor1.com/images/mgl/6ZNn97/s1/byd-tang-2024.jpg",
                            desc: "High-performance electric SUV with luxurious comfort."
                        },
                        {
                            name: "BYD Han EV",
                            img: "http://autozam.ru/wp-content/uploads/2021/05/byd-han-1.jpg",
                            desc: "Luxury electric sedan redefining performance and design."
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

            {/* Autopilot & Tech */}
            <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-10 text-white">
                    Advanced Technology
                </h2>
                <img
                    src="https://greenwheelsindia.com/wp-content/uploads/2024/05/BYD-Hybrid-tech.jpg"
                    alt="BYD Technology"
                    className="rounded-3xl shadow-2xl border border-gray-700 mb-8"
                />
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    BYD’s proprietary Blade Battery offers unmatched safety, longer lifespan, and efficient energy density.
                    Combined with intelligent drive systems and connected car technologies, BYD EVs deliver futuristic experiences.
                </p>
            </section>

            {/* Milestones Timeline */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8">
                    BYD’s Key Milestones
                </h2>
                <div className="space-y-12 max-w-4xl mx-auto border-l-4 border-green-400 pl-6 relative">
                    {[
                        {
                            year: "1995",
                            event: "BYD founded in Shenzhen, China."
                        },
                        {
                            year: "2003",
                            event: "Entered automobile sector."
                        },
                        {
                            year: "2008",
                            event: "Launch of the world’s first mass-produced plug-in hybrid vehicle (F3DM)."
                        },
                        {
                            year: "2015",
                            event: "BYD becomes global leader in EV & PHEV sales."
                        },
                        {
                            year: "2020",
                            event: "Launch of Blade Battery technology."
                        },
                        {
                            year: "2022",
                            event: "BYD surpasses Tesla in EV sales in China."
                        },
                        {
                            year: "2024",
                            event: "Global expansion to over 50 countries; BYD Seal and Dolphin launched in India & Europe."
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-green-400 shadow-[0_0_12px_3px_rgba(34,197,94,0.6)]" />
                            <h4 className="text-xl font-semibold text-green-300 mb-1">{item.year}</h4>
                            <p className="text-gray-300">{item.event}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-black py-20 px-6 text-center text-white">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Drive The Future</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join BYD in building a greener, smarter world with electric mobility.
                    Explore innovation — Drive electric. Drive BYD.
                </p>
                <a
                    href="https://www.byd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
                >
                    Visit BYD Official
                </a>
            </section>
        </div>
    );
};

export default BYDPage;
