import React from "react";

const AudiPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <img
                    src="https://wallpaperaccess.com/full/3245413.jpg"
                    alt="Audi Luxury"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        Audi
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
                        Progress through Technology — Vorsprung durch Technik
                    </p>
                </div>
            </section>

            {/* Audi Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
                <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        Why Audi Stands for Innovation
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        Audi blends progressive design, advanced technology, and refined performance in every model. Known for quattro all-wheel drive and sleek aesthetics, Audi is a choice for those who seek futuristic performance with luxury.
                    </p>
                </div>
            </section>

            {/* Signature Highlights with Gradients */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "🔧",
                        title: "quattro Technology",
                        desc: "Unmatched grip and handling in all weather with Audi’s legendary all-wheel drive.",
                        gradient: "from-blue-100 via-blue-50 to-white"
                    },
                    {
                        icon: "🧠",
                        title: "Virtual Cockpit",
                        desc: "Driver-focused digital displays redefining the dashboard experience.",
                        gradient: "from-purple-100 via-indigo-50 to-white"
                    },
                    {
                        icon: "⚡",
                        title: "e-tron Electric Power",
                        desc: "Audi’s future-forward fully electric and hybrid lineup built for thrill and sustainability.",
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


            {/* Top Audi Cars */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 underline underline-offset-8 text-gray-900">
                    Top Audi Cars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            name: "Audi A8 L",
                            img: "https://www.motortrend.com/uploads/sites/5/2018/10/2019-Audi-A8-L-71.jpg",
                            desc: "The epitome of Audi luxury and sophistication in a long-wheelbase sedan."
                        },
                        {
                            name: "Audi Q8",
                            img: "https://cdn.motor1.com/images/mgl/3XB1K/s1/audi-q8.jpg",
                            desc: "A stylish luxury SUV coupe that combines presence and performance."
                        },
                        {
                            name: "Audi RS5 Sportback",
                            img: "https://www.hdcarwallpapers.com/walls/audi_rs_5_sportback_2020_4k-HD.jpg",
                            desc: "A 444-hp powerhouse that blends practicality with high-speed performance."
                        },
                        {
                            name: "Audi e-tron GT",
                            img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1-audi-e-tron-gt-rs-proto-drive-hero-front.jpg",
                            desc: "Audi’s electric masterpiece with supercar design and zero-emission power."
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

            {/* Audi Legacy Timeline */}
            <section className="py-16 px-4 md:px-10 bg-gray-100 text-gray-900 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-12 tracking-wide underline underline-offset-8 decoration-red-500">
                    Legacy of Audi
                </h2>
                <div className="relative border-l-4 border-red-500 pl-6 space-y-12">
                    {[
                        {
                            year: "1909",
                            icon: "🏁",
                            event: "August Horch founds Audi, named after the Latin translation of his surname — 'to listen'."
                        },
                        {
                            year: "1932",
                            icon: "⚙️",
                            event: "The four rings are born after the merger of Audi with three other German manufacturers."
                        },
                        {
                            year: "1980",
                            icon: "🧊",
                            event: "Audi revolutionizes rally racing with the quattro all-wheel-drive system."
                        },
                        {
                            year: "2007",
                            icon: "🚀",
                            event: "Audi R8 launches, instantly becoming a symbol of performance and design."
                        },
                        {
                            year: "2021",
                            icon: "🔋",
                            event: "Audi expands its e-tron range — committing to a fully electric future by 2033."
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Live the Vorsprung</h2>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                    With cutting-edge innovation and timeless design, Audi isn’t just a drive — it’s a direction. Discover your next move.
                </p>
                <a
                    href="https://www.audi.in"
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

export default AudiPage;
