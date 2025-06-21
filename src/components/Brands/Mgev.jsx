import React from "react";

const MGElectricPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="https://wallpapers.com/images/featured/mg-n755aw0cd5d0w7x9.jpg"
                    alt="MG Electric Innovation"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        MG ELECTRIC
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl md:text-2xl text-gray-200">
                        Pioneering smart, sustainable, and connected electric mobility.
                    </p>
                </div>
            </section>

            {/* MG Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-6 text-white">MG Philosophy</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    MG Motor is committed to democratizing electric mobility with affordable, feature-rich, and connected EVs. 
                    With cutting-edge designs, AI-driven technology, and a passion for innovation, MG brings electric dreams to life.
                </p>
            </section>

            {/* Key Innovations */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "🔋",
                        title: "Advanced Battery Tech",
                        desc: "Reliable range with fast-charging capability.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "🧠",
                        title: "i-SMART Connectivity",
                        desc: "AI-powered smart features & real-time controls.",
                        gradient: "from-gray-800 via-gray-900 to-black"
                    },
                    {
                        icon: "🌱",
                        title: "Green Manufacturing",
                        desc: "Commitment to eco-friendly production & materials.",
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
                    Expanding Charging Network
                </h2>
                <p className="text-center max-w-3xl mx-auto mb-8 text-lg text-gray-400">
                    MG supports a growing ecosystem of public and home charging solutions, offering seamless EV ownership with a robust service network.
                </p>
                <img src="https://www.benewsonline.com/wp-content/uploads/2020/11/MG-NEW-MG-EP-Charging.jpg" alt="Charging Network" className="rounded-3xl mx-auto shadow-2xl w-full max-w-5xl" />
            </section>

            {/* MG Electric Lineup */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-12 text-white underline underline-offset-8">
                    MG Electric Lineup
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "MG ZS EV",
                            img: "https://news.mgmotor.eu/wp-content/uploads/2021/10/MG-ZS-EV-parked-side-shot.jpg",
                            desc: "Premium electric SUV offering range and tech."
                        },
                        {
                            name: "MG Comet EV",
                            img: "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/125193/comet-ev-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
                            desc: "Compact and connected city EV for everyday mobility."
                        },
                        {
                            name: "MG Cyberster (upcoming)",
                            img: "https://www.cbvcvehiclemanagement.co.uk/wp/wp-content/uploads/2023/05/MG-Cyberster-revealed-1024x640.jpg",
                            desc: "Futuristic electric roadster for performance enthusiasts."
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
                    Smart Connected Driving
                </h2>
                <img
                    src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/cms/uploads/v90rsm2toqyukkowqi5u"
                    alt="MG iSmart"
                    className="rounded-3xl shadow-2xl border border-gray-700 mb-8"
                />
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    MG i-SMART brings AI-based features, voice controls, remote access, OTA updates, and integrated connected services,
                    making every drive smart, safe, and intuitive.
                </p>
            </section>

            {/* MG Milestones Timeline */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-8">
                    MG Electric Milestones
                </h2>
                <div className="space-y-12 max-w-4xl mx-auto border-l-4 border-green-500 pl-6 relative">
                    {[
                        {
                            year: "2019",
                            event: "Launch of MG Hector — first connected SUV in India."
                        },
                        {
                            year: "2020",
                            event: "Debut of MG ZS EV in India — popularizing premium electric SUVs."
                        },
                        {
                            year: "2022",
                            event: "Launch of advanced i-SMART features with OTA updates."
                        },
                        {
                            year: "2023",
                            event: "Introduction of MG Comet EV — affordable and stylish city car."
                        },
                        {
                            year: "2025 (upcoming)",
                            event: "Expected global launch of MG Cyberster roadster."
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
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Drive Forward with MG Electric</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Experience the perfect blend of technology, sustainability, and style with MG Electric. 
                    Discover a smarter way to drive.
                </p>
                <a
                    href="https://www.mgmotor.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
                >
                    Visit MG Official
                </a>
            </section>
        </div>
    );
};

export default MGElectricPage;
