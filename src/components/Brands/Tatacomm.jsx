import React from "react";

const TataCommercialVehiclesPage = () => {
    return (
        <div className="bg-gray-950 text-white font-sans">
            {/* Hero Section */}
            <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://www.team-bhp.com/forum/attachments/commercial-vehicles/2048407d1598526279-tata-motors-unveils-upgraded-range-commercial-vehicles-tata-motors-upgraded-bs6-range-commercial-vehicles.jpg"
                    alt="Tata Commercial Vehicles"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative text-center z-10 px-4">
                    <h1 className="text-7xl font-extrabold mb-6 tracking-tight text-blue-400">
                        TATA COMMERCIAL VEHICLES
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
                        Powering India's logistics, construction, infrastructure, and mobility through world-class, future-ready vehicles.
                    </p>
                </div>
            </section>

            {/* Brand Legacy */}
            <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 className="text-5xl font-bold mb-6 text-blue-400">
                        Strong Heritage. Dynamic Innovation.
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Tata Motors is India's largest commercial vehicle manufacturer, with a wide portfolio of products that have redefined freight, passenger mobility, and construction solutions — trusted for quality and performance globally.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Driven by electric, hydrogen fuel cell, and smart connected technologies, Tata is shaping the future of sustainable transport.
                    </p>
                </div>
                <img
                    src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2020/08/etrio-elev-tata-ace.jpg"
                    alt="Tata EV Commercial"
                    className="rounded-xl shadow-lg"
                />
            </section>

            {/* Product Segments */}
            <section className="py-20 bg-gray-900 px-6 sm:px-10">
                <h2 className="text-5xl font-bold text-center mb-14 underline underline-offset-8 text-blue-400">
                    Our Commercial Vehicle Range
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Heavy Trucks",
                            img: "https://images.carandbike.com/cms/articles/3201712/articles/3202045/Tata_Prima_5530_2022_09_05_T12_57_31_490_Z_19559e51be.S",
                            desc: "Robust, reliable HCVs for long-haul, construction, and mining."
                        },
                        {
                            title: "Intermediate & Light Trucks",
                            img: "https://d1hv7ee95zft1i.cloudfront.net/custom/truck-model-photo/original/tata-light-truck-lpt-1116-11-tonner-dropside-61b463dfd34e9.jpg",
                            desc: "Fuel-efficient, agile ICVs for last-mile and regional transport."
                        },
                        {
                            title: "Electric & Alt-Fuel CVs",
                            img: "https://www.rushlane.com/wp-content/uploads/2020/07/tata-motors-fleet-edge-connected-vehicle-ecosystem-2-696x522.jpg",
                            desc: "Zero-emission EV trucks & alternate fuel vehicles for greener cities."
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
                                <h3 className="text-2xl font-bold text-blue-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <img
                    src="https://autonexa.com/wp-content/uploads/2019/01/tata-motors-truck.jpg"
                    alt="Connected Vehicles"
                    className="rounded-xl shadow-xl w-full md:w-1/2"
                />
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 text-blue-400">
                        Smart & Connected Mobility
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Tata Motors' connected vehicle platform enables AI-driven insights, telematics, predictive maintenance, and operational efficiency for fleet owners, transforming logistics into a data-smart, future-ready ecosystem.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Coupled with ADAS, EV drivetrains, and alternative fuel capabilities, Tata is committed to cleaner, safer, and more intelligent transport.
                    </p>
                </div>
            </section>

            {/* Milestones */}
            <section className="py-20 bg-gray-900 text-white">
                <h2 className="text-5xl font-bold text-center mb-14 underline underline-offset-8 text-blue-400">
                    Tata CV Journey
                </h2>
                <div className="max-w-5xl mx-auto border-l-4 border-blue-400 pl-6 space-y-10 relative">
                    {[
                        {
                            year: "1954",
                            event: "Launched India’s first indigenous truck with Daimler-Benz."
                        },
                        {
                            year: "2008",
                            event: "Introduced world’s first 1-tonne mini truck — Tata Ace."
                        },
                        {
                            year: "2020",
                            event: "First OEM in India to launch BS6 range of CVs."
                        },
                        {
                            year: "2023",
                            event: "Unveiled hydrogen fuel-cell and electric HCVs."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-7 top-2 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_12px_3px_rgba(59,130,246,0.5)]" />
                            <h4 className="text-xl font-semibold text-blue-300 mb-1">{item.year}</h4>
                            <p className="text-gray-300">{item.event}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 text-center px-6 sm:px-10">
                <h2 className="text-5xl font-bold mb-6 text-blue-400">
                    Leading India's Road to the Future
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                    Explore Tata’s versatile commercial vehicle range and discover mobility solutions crafted to power India's businesses, industries, and infrastructure — now and for generations to come.
                </p>
                <a
                    href="https://www.tatamotors.com/products/commercial-vehicles/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-400 text-black font-bold py-4 px-10 rounded-full hover:bg-blue-300 transition"
                >
                    Explore Tata CVs
                </a>
            </section>
        </div>
    );
};

export default TataCommercialVehiclesPage;
