import React from "react";

const VolvoPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <img
                    src="https://wallpaperaccess.com/full/1266124.jpg"
                    alt="Volvo Luxury"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        Volvo
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
                        For Life — Innovation, Safety & Scandinavian Luxury
                    </p>
                </div>
            </section>

            {/* Volvo Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
                <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        Volvo's Scandinavian Philosophy
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        Volvo blends modern Scandinavian design with an uncompromising commitment to safety, sustainability, and comfort. A pioneer in hybrid and electric technologies, Volvo offers premium experiences designed for life — with care for both people and the planet.
                    </p>
                </div>
            </section>

            {/* Signature Highlights with Gradients */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "🛡️",
                        title: "Safety First",
                        desc: "Volvo leads with groundbreaking safety innovations that protect drivers and passengers.",
                        gradient: "from-sky-100 via-blue-50 to-white"
                    },
                    {
                        icon: "♻️",
                        title: "Sustainable Luxury",
                        desc: "A vision for climate-neutral manufacturing and fully electric models by 2030.",
                        gradient: "from-green-100 via-lime-50 to-white"
                    },
                    {
                        icon: "❄️",
                        title: "Minimalist Scandinavian Design",
                        desc: "Clean, timeless design focusing on comfort, simplicity, and premium materials.",
                        gradient: "from-slate-100 via-gray-50 to-white"
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

            {/* Top Volvo Cars */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 underline underline-offset-8 text-gray-900">
                    Top Volvo Cars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            name: "Volvo XC90 Recharge",
                            img: "https://www.moll.de/img/angebote/private/XC90RECHARGE.jpg",
                            desc: "A flagship SUV that blends elegance with hybrid performance and unmatched safety."
                        },
                        {
                            name: "Volvo XC60 Recharge",
                            img: "https://www.slashgear.com/img/gallery/2023-volvo-xc60-recharge-review-plug-in-hybrid-shuts-down-electric-skeptics/l-intro-1672439381.jpg",
                            desc: "A dynamic mid-size SUV with cutting-edge hybrid technology."
                        },
                        {
                            name: "Volvo C40 Recharge",
                            img: "https://images.carexpert.com.au/resize/3000/-/app/uploads/2021/03/volvo-c40-recharge-3.jpg",
                            desc: "A fully electric crossover coupe — progressive design for an electric future."
                        },
                        {
                            name: "Volvo S90",
                            img: "https://pictures.topspeed.com/IMG/jpg/201512/2017-volvo-s90-90.jpg",
                            desc: "An elegant Scandinavian luxury sedan with top-tier comfort and craftsmanship."
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

            {/* Volvo Legacy Timeline */}
            <section className="py-16 px-4 md:px-10 bg-gray-100 text-gray-900 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-12 tracking-wide underline underline-offset-8 decoration-sky-500">
                    Volvo's Legacy
                </h2>
                <div className="relative border-l-4 border-sky-500 pl-6 space-y-12">
                    {[
                        {
                            year: "1927",
                            icon: "🚗",
                            event: "Volvo is founded in Gothenburg, Sweden with a vision for safer cars."
                        },
                        {
                            year: "1959",
                            icon: "🛡️",
                            event: "Introduction of the three-point seatbelt — one of the greatest safety innovations in automotive history."
                        },
                        {
                            year: "1991",
                            icon: "🌀",
                            event: "Launch of the Side Impact Protection System (SIPS)."
                        },
                        {
                            year: "2019",
                            icon: "🔋",
                            event: "Volvo introduces its first plug-in hybrids across the lineup."
                        },
                        {
                            year: "2021",
                            icon: "⚡",
                            event: "Launch of C40 Recharge — Volvo's first electric-only model."
                        },
                        {
                            year: "2023",
                            icon: "🌍",
                            event: "Volvo pledges to become fully electric by 2030 and climate neutral by 2040."
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-sky-500 shadow-[0_0_15px_4px_rgba(56,189,248,0.6)] z-10" />
                            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <h4 className="text-xl font-semibold text-sky-600 tracking-wide">{item.year}</h4>
                                </div>
                                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{item.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-black py-16 px-6 text-center text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Drive the Volvo Way</h2>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                    Discover Scandinavian luxury, cutting-edge safety, and sustainability — experience Volvo today.
                </p>
                <a
                    href="https://www.volvocars.com"
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

export default VolvoPage;
