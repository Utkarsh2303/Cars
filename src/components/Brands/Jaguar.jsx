import React from "react";

const JaguarPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <img
                    src="https://wallpaperaccess.com/full/4283553.jpg"
                    alt="Jaguar Luxury"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        Jaguar
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
                        The Art of Performance — Where Elegance Meets Power
                    </p>
                </div>
            </section>

            {/* Jaguar Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
                <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        Jaguar’s Distinctive Legacy
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        Jaguar creates cars that are a perfect blend of seductive design, agile performance, and innovative technology. Each Jaguar is a masterpiece of craftsmanship, built for those who crave dynamic driving and refined luxury.
                    </p>
                </div>
            </section>

            {/* Signature Highlights with Gradients */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "🏎️",
                        title: "Exhilarating Performance",
                        desc: "Every Jaguar is engineered for thrilling performance and handling.",
                        gradient: "from-red-100 via-pink-50 to-white"
                    },
                    {
                        icon: "⚡",
                        title: "Electrifying Future",
                        desc: "Jaguar’s transition towards an all-electric luxury brand by 2025.",
                        gradient: "from-purple-100 via-indigo-50 to-white"
                    },
                    {
                        icon: "🎨",
                        title: "Timeless British Design",
                        desc: "Sculpted exteriors and luxurious interiors that captivate the senses.",
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

            {/* Top Jaguar Cars */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 underline underline-offset-8 text-gray-900">
                    Top Jaguar Cars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            name: "Jaguar F-TYPE",
                            img: "http://www.car-revs-daily.com/wp-content/uploads/2015-JAGUAR-F-Type-Coupe-American-Launch-at-Willow-Springs-in-75-Sideways-Action-Shots-17.jpg",
                            desc: "Iconic sports coupe and convertible delivering pulse-quickening performance."
                        },
                        {
                            name: "Jaguar F-PACE",
                            img: "http://performancedrive.com.au/wp-content/uploads/2018/03/Jaguar-F-PACE-SVR.jpg",
                            desc: "Performance SUV with athletic style and advanced technology."
                        },
                        {
                            name: "Jaguar I-PACE",
                            img: "https://cdn.motor1.com/images/mgl/qvVZR/s1/jaguar-i-pace-lo-show-di-presentazione-dalle-19-del-1-marzo.jpg",
                            desc: "Award-winning all-electric performance SUV."
                        },
                        {
                            name: "Jaguar XE",
                            img: "https://images.prismic.io/carwow/8826acac-41be-4397-b6bd-e8156e4bf4ad_LHD+Jaguar+XE+2021+Exterior+6.jpg",
                            desc: "A refined, dynamic sedan with sporting agility and luxurious comfort."
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

            {/* Jaguar Legacy Timeline */}
            <section className="py-16 px-4 md:px-10 bg-gray-100 text-gray-900 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-12 tracking-wide underline underline-offset-8 decoration-red-500">
                    Jaguar's Legacy
                </h2>
                <div className="relative border-l-4 border-red-500 pl-6 space-y-12">
                    {[
                        {
                            year: "1935",
                            icon: "🏁",
                            event: "Jaguar’s first car, the SS 90, was unveiled — signaling the birth of a legendary brand."
                        },
                        {
                            year: "1948",
                            icon: "🔥",
                            event: "Launch of the Jaguar XK120 — the fastest production car of its time."
                        },
                        {
                            year: "1961",
                            icon: "✨",
                            event: "Introduction of the iconic E-TYPE, hailed as one of the most beautiful cars ever made."
                        },
                        {
                            year: "2018",
                            icon: "⚡",
                            event: "Jaguar I-PACE launches — the brand’s first all-electric SUV."
                        },
                        {
                            year: "2025",
                            icon: "🚀",
                            event: "Jaguar transitions to an all-electric luxury brand."
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unleash the Art of Performance</h2>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                    Discover a new era of electric luxury and thrilling dynamics — experience Jaguar today.
                </p>
                <a
                    href="https://www.jaguar.com"
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

export default JaguarPage;
