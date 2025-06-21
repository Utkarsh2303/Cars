import React from "react";

const BharatBenzCommercialVehiclesPage = () => {
    return (
        <div className="bg-black text-white font-sans">
            {/* Hero Section */}
            <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://www.daimlertruck.com/fileadmin/_processed_/2/e/csm_bharatbenz-truck-range_e63785af65.jpg"
                    alt="BharatBenz Commercial Vehicles"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-6xl font-extrabold mb-5 tracking-tight text-yellow-500">
                        BHARATBENZ
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
                        German Engineering. Made for India. Built to Deliver Excellence across Commercial Mobility.
                    </p>
                </div>
            </section>

            {/* Brand Philosophy */}
            <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                <img
                    src="https://assets.tractorjunction.com/truck-junction/assets/images/truck/bharatbenz-4828r-front.webp"
                    alt="BharatBenz Trucks"
                    className="rounded-xl shadow-xl"
                />
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-yellow-500">
                        Designed for Indian Roads. Engineered for Performance.
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        BharatBenz, a brand of Daimler India Commercial Vehicles (DICV), brings the best of global truck & bus engineering — customized for India’s dynamic & challenging transport environment.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        With a focus on uptime, fuel efficiency, safety, and unmatched comfort — BharatBenz CVs are trusted by thousands of Indian fleet operators.
                    </p>
                </div>
            </section>

            {/* Vehicle Portfolio */}
            <section className="py-20 bg-gray-900 px-6 sm:px-10">
                <h2 className="text-5xl font-bold text-center mb-14 underline underline-offset-8 text-yellow-500">
                    BharatBenz Vehicle Portfolio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Heavy Duty Trucks",
                            img: "https://images.91wheels.com/cv_blog/wp-content/uploads/2022/09/BharatBenz-2823C-full-details-explained.jpg",
                            desc: "Rugged, powerful, fuel-efficient HDTs — built for haulage & infrastructure."
                        },
                        {
                            title: "Medium Duty Trucks",
                            img: "https://5.imimg.com/data5/SELLER/Default/2021/3/NX/VQ/GU/12469657/bharatbenz-1015r-41-ton-medium-duty-truck-1000x1000.jpg",
                            desc: "Optimized payload and efficiency for intra & intercity transport."
                        },
                        {
                            title: "BharatBenz Buses",
                            img: "https://www.bharatbenz.com/uploads/bus_images/key_buying_factors/main_1532431927.jpg",
                            desc: "Safe, comfortable, and reliable buses — built for Indian travel."
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-xl"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-yellow-400">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Advanced Features */}
            <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <img
                    src="https://www.motorindiaonline.in/wp-content/uploads/2022/04/BharatBenz-pic-5.jpg"
                    alt="BharatBenz Connected"
                    className="rounded-xl shadow-xl w-full md:w-1/2"
                />
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 text-yellow-500">
                        Intelligent Telematics & Connectivity
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        BharatBenz CVs are equipped with ProConnect telematics, giving you live data on fuel, performance, uptime, and maintenance — empowering fleet owners to make data-driven decisions and maximize efficiency.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Safety, innovation, and efficiency — always in focus.
                    </p>
                </div>
            </section>

            {/* BharatBenz Journey */}
            <section className="py-20 bg-gray-900 text-white">
                <h2 className="text-5xl font-bold text-center mb-14 underline underline-offset-8 text-yellow-500">
                    BharatBenz Journey
                </h2>
                <div className="max-w-5xl mx-auto border-l-4 border-yellow-400 pl-6 space-y-10 relative">
                    {[
                        {
                            year: "2012",
                            event: "BharatBenz brand launched in India."
                        },
                        {
                            year: "2013",
                            event: "First BharatBenz heavy duty trucks hit the roads."
                        },
                        {
                            year: "2015",
                            event: "Launch of BharatBenz buses for Indian markets."
                        },
                        {
                            year: "2020",
                            event: "ProConnect advanced connectivity platform introduced."
                        },
                        {
                            year: "2024",
                            event: "Expansion into electric buses & next-gen CV tech."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_12px_3px_rgba(253,224,71,0.5)]" />
                            <h4 className="text-xl font-semibold text-yellow-400 mb-1">{item.year}</h4>
                            <p className="text-gray-300">{item.event}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 text-center px-6 sm:px-10">
                <h2 className="text-5xl font-bold mb-6 text-yellow-500">
                    Power Your Fleet with BharatBenz
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                    Explore the full range of BharatBenz trucks & buses — engineered for India, delivering global performance and reliability. Drive your fleet forward today.
                </p>
                <a
                    href="https://www.bharatbenz.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 text-black font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transition"
                >
                    Visit BharatBenz Official
                </a>
            </section>
        </div>
    );
};

export default BharatBenzCommercialVehiclesPage;
