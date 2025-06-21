import React from "react";

const TataPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-14 font-sans">
            {/* Hero Section */}
            <section className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl w-full">
                <img
                    src="https://www.pascotata.com/uploads/cache/networkaddress/3219main-2-1200x800.jpg"
                    alt="Tata Showroom"
                    className="w-full h-120 object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-white/90 p-4 sm:p-6 rounded-2xl shadow-lg max-w-[90%]">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Tata Motors</h1>
                    <p className="text-sm sm:text-base text-gray-600">Driven by Trust. Designed for India.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-blue-800 underline underline-offset-4">About the Brand</h2>
                <p className="text-gray-700 leading-relaxed">
                    Tata Motors Limited, a part of the Tata Group, is India’s largest automobile company and a pioneer in passenger and commercial vehicles. Established in 1945, Tata Motors has consistently pushed boundaries with innovative design, indigenous engineering, and safety-first products.
                </p>
                <p className="text-gray-700">
                    With a focus on sustainability and affordability, Tata has become a household name, offering everything from affordable hatchbacks to electric vehicles and rugged SUVs.
                </p>
            </section>

            {/* Key Highlights */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
                <div style={{ background: "linear-gradient(to right, #2c3e50, #3498db)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">🛡️ India's Safest Cars</h3>
                    <p>First Indian brand with 5-star Global NCAP safety rated cars.</p>
                </div>
                <div style={{ background: "linear-gradient(to right, #000000, #434343)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">🇮🇳 Made in India</h3>
                    <p>Strong emphasis on indigenous design and engineering excellence.</p>
                </div>
                <div style={{ background: "linear-gradient(to right, #4ca1af, #c4e0e5)", borderRadius: "1.5rem", padding: "1.5rem", color: "#111" }}>
                    <h3 className="text-xl font-bold mb-2">⚡ Electric Revolution</h3>
                    <p>Leading the EV movement in India with Nexon EV and more.</p>
                </div>
            </section>

            {/* Best Cars by Tata */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-rose-800 underline underline-offset-4">Best Cars by Tata</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            name: "Nexon",
                            image: "https://www.autobics.com/wp-content/uploads/2023/09/2023-Tata-Nexon-Front-Quarter.jpg",
                            desc: "India’s first 5-star safety rated SUV with bold design and smart tech."
                        },
                        {
                            name: "Punch",
                            image: "https://images.hindustantimes.com/auto/img/2021/10/04/1600x900/Tata_Punch_3_1633332322337_1633332329772.jpg",
                            desc: "Micro SUV built for urban adventures with high ground clearance and robust build."
                        },
                        {
                            name: "Tiago EV",
                            image: "https://images.hindustantimes.com/img/2022/09/28/1600x900/tiago_1664352635402_1664352635613_1664352635613.JPG",
                            desc: "Most affordable electric hatchback offering fun and sustainable driving."
                        },
                        {
                            name: "Harrier",
                            image: "https://cdni.autocarindia.com/ExtraImages/20230112034637_Harrier_front.jpg",
                            desc: "Premium SUV with powerful road presence and ADAS features."
                        },
                    ].map((car) => (
                        <div key={car.name} className="rounded-xl overflow-hidden shadow-lg bg-white border">
                            <img src={car.image} alt={car.name} className="w-full h-70 object-cover" loading="lazy" />
                            <div className="p-4 space-y-2">
                                <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                                <p className="text-sm text-gray-600">{car.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Green Mobility */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-green-700 underline underline-offset-4">Green Mobility Drive</h2>
                <p className="text-gray-700">
                    Tata Motors leads India’s electric revolution with advanced EV tech and cleaner mobility solutions.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Nexon EV: Most popular EV SUV in India</li>
                    <li>Tiago EV: First electric hatchback under ₹10L</li>
                    <li>Tigor EV: Sedan option in the EV segment</li>
                    <li>Plans for multiple EVs by 2030</li>
                </ul>
            </section>

            {/* Achievements */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-indigo-700 underline underline-offset-4">Achievements & Recognition</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>First Indian brand with 5-star safety rating (Nexon)</li>
                    <li>Leader in affordable EVs in India</li>
                    <li>Part of $100B Tata Group legacy</li>
                    <li>Global footprint in over 125 countries</li>
                </ul>
            </section>

            {/* Timeline */}
            <section className="py-12 px-4 bg-white rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-center text-purple-700 underline underline-offset-4 mb-10">
                    Tata Motors India Timeline
                </h2>
                <div className="relative border-l-4 border-purple-600 pl-6 space-y-12">
                    {[
                        { year: "1945", icon: "🏭", event: "Founded as Tata Engineering and Locomotive Co. (TELCO)" },
                        { year: "1991", icon: "🚗", event: "Launch of Tata Sierra — India’s first indigenous SUV" },
                        { year: "1998", icon: "🎉", event: "India’s first indigenously developed car — Tata Indica" },
                        { year: "2008", icon: "💡", event: "Launched Tata Nano — world’s cheapest car" },
                        { year: "2020", icon: "🔋", event: "Nexon EV introduced — beginning of Tata's EV journey" },
                        { year: "2023", icon: "🌿", event: "Tiago EV launched — affordable and practical EV solution" },
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute left-[-35px] top-1.5 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-md z-10"></div>
                            <div className="bg-purple-50 p-4 rounded-xl shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <h4 className="text-xl font-semibold text-purple-800">{item.year}</h4>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-gray-800 to-blue-800 text-white rounded-3xl px-6 py-12 text-center shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Drive the Future with Tata</h2>
                <p className="text-base sm:text-lg mb-6">
                    Explore the perfect blend of safety, design, and Indian innovation.
                </p>
                <a
                    href="https://cars.tatamotors.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
                >
                    Visit Official Website
                </a>
            </section>
        </div>
    );
};

export default TataPage;
