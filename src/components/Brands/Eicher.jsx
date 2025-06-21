import React from "react";

const EicherCommercialVehiclesPage = () => {
    return (
        <div className="bg-gray-950 text-white font-sans">
            {/* Hero Section */}
            <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://wallpapercave.com/wp/wp8889244.jpg"
                    alt="Eicher Commercial Vehicles"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-6xl font-extrabold mb-5 tracking-tight text-yellow-400">
                        EICHER TRUCKS & BUSES
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
                        Driving business success with fuel-efficient, reliable and future-ready commercial vehicles across India and the world.
                    </p>
                </div>
            </section>

            {/* Eicher Legacy */}
            <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                <img
                    src="https://5.imimg.com/data5/IP/RW/KL/GLADMIN-54035940/443618364246363ed2502e8e9751a532-500x500-500x500.png"
                    alt="Eicher Heavy Duty"
                    className="rounded-xl shadow-lg"
                />
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-yellow-400">
                        Trusted by Businesses. Powered by Innovation.
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Eicher, part of the VE Commercial Vehicles (VECV) JV, is one of India’s most respected CV brands — known for delivering exceptional fuel efficiency, superior Uptime, and an innovative approach to transportation.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Leveraging Volvo Group’s global expertise, Eicher continues to revolutionize CV technology with connected vehicles, electric buses, and BS6-compliant trucks.
                    </p>
                </div>
            </section>

            {/* Vehicle Segments */}
            <section className="py-20 bg-gray-900 px-6 sm:px-10">
                <h2 className="text-5xl font-bold text-center mb-14 underline underline-offset-8 text-yellow-400">
                    Eicher Commercial Vehicle Portfolio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Heavy Duty Trucks",
                            img: "https://5.imimg.com/data5/GC/HI/VQ/GLADMIN-54035940/880b36aae60de0f0df7e1f0ea1bdad73-500x500-500x500.png",
                            desc: "High-performance HCVs for long haul, mining, and construction."
                        },
                        {
                            title: "Light & Medium Duty Trucks",
                            img: "https://c.ndtvimg.com/2019-06/be49ieb8_eicher-trucks-_625x300_10_June_19.jpg",
                            desc: "Reliable LMDs with excellent fuel efficiency and high payload."
                        },
                        {
                            title: "Electric Buses",
                            img: "https://mnogotonn.com/wp-content/uploads/2023/01/eicher-bus-ev.jpg",
                            desc: "Smart zero-emission e-buses for urban & intercity public transport."
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-yellow-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Smart Connected Vehicles */}
            <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <img
                    src="https://www.eichertrucksandbuses.com/_next/image?url=https:%2F%2Fcms.eichertrucksandbuses.com%2Fuploads%2Fbanner-video-image%2F589132016ec84bf7a4436008e58b9893.png&w=1920&q=75"
                    alt="Smart Connected Vehicles"
                    className="rounded-xl shadow-xl w-full md:w-1/2"
                />
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 text-yellow-400">
                        Smart Connected Technology
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        The Eicher Live platform brings connected vehicles with 24x7 uptime management, fuel coaching, predictive maintenance, and advanced fleet management tools — helping businesses maximize profits and efficiency.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Backed by Volvo Group engineering, Eicher CVs are now smarter and more connected than ever.
                    </p>
                </div>
            </section>

            {/* Eicher Timeline */}
            <section className="py-20 bg-gray-900 text-white">
                <h2 className="text-5xl font-bold text-center mb-14 underline underline-offset-8 text-yellow-400">
                    Eicher Journey Over the Years
                </h2>
                <div className="max-w-5xl mx-auto border-l-4 border-yellow-400 pl-6 space-y-10 relative">
                    {[
                        {
                            year: "1959",
                            event: "Launched India’s first indigenously built tractor."
                        },
                        {
                            year: "1986",
                            event: "Foray into CV manufacturing."
                        },
                        {
                            year: "2008",
                            event: "Formed VE Commercial Vehicles JV with Volvo Group."
                        },
                        {
                            year: "2020",
                            event: "Launched BSVI range with advanced fuel efficiency."
                        },
                        {
                            year: "2023",
                            event: "Expanding e-buses & connected vehicle solutions."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_12px_3px_rgba(253,224,71,0.5)]" />
                            <h4 className="text-xl font-semibold text-yellow-300 mb-1">{item.year}</h4>
                            <p className="text-gray-300">{item.event}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 text-center px-6 sm:px-10">
                <h2 className="text-5xl font-bold mb-6 text-yellow-400">
                    Drive Business Success with Eicher
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                    Explore Eicher’s full range of heavy, medium, and light duty trucks & buses — where technology meets efficiency, reliability meets profitability.
                </p>
                <a
                    href="https://www.eichertrucksandbuses.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 text-black font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transition"
                >
                    Visit Eicher Official
                </a>
            </section>
        </div>
    );
};

export default EicherCommercialVehiclesPage;
