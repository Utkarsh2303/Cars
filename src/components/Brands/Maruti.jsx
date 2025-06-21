import React from "react";

const MarutiSuzukiPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-14 font-sans">
            {/* Hero Section */}
            <section className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl w-full">
                <img
                    src="https://www.carblogindia.com/wp-content/uploads/2015/07/maruti-suzuki-nexa-showroom-launch-22.jpg"
                    alt="Maruti Suzuki"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-white/90 p-4 sm:p-6 rounded-2xl shadow-lg max-w-[90%]">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Maruti Suzuki</h1>
                    <p className="text-sm sm:text-base text-gray-600">India’s Most Trusted Automobile Brand</p>
                </div>
            </section>

            {/* About Section */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-blue-800 underline underline-offset-4">About the Brand</h2>
                <p className="text-gray-700 leading-relaxed">
                    Maruti Suzuki India Limited is the leading passenger vehicle manufacturer in India.
                    Founded in 1981, it began as a government initiative and later formed a joint venture with Suzuki Motor Corporation, Japan.
                    The brand revolutionized the Indian automotive landscape with iconic cars like the Maruti 800, and continues to dominate the market with affordability, efficiency, and reliability.
                </p>
                <p className="text-gray-700">
                    With its wide product portfolio, excellent after-sales network, and continuous innovation, Maruti Suzuki plays a crucial role in India’s mobility.
                </p>
            </section>

            {/* Key Highlights */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
                <div style={{ background: "linear-gradient(to right, #004e92, #000428)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">🏆 Market Leader</h3>
                    <p>Commanding over 40% of the Indian passenger car market.</p>
                </div>
                <div style={{ background: "linear-gradient(to right, #283e51, #485563)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">🔧 Massive Service Network</h3>
                    <p>3500+ service centers ensure easy maintenance across India.</p>
                </div>
                <div style={{ background: "linear-gradient(to right, #373b44, #4286f4)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">📦 Affordable Parts</h3>
                    <p>Spare parts and service costs are among the lowest in the segment.</p>
                </div>
            </section>

            {/* Best Cars by Maruti */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-rose-800 underline underline-offset-4">Best Cars by Maruti Suzuki</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            name: "Swift",
                            image: "https://gaadiwaadi.com/wp-content/uploads/2023/10/swift-concept.jpg",
                            desc: "A sporty hatchback loved by young drivers for its style, mileage, and peppy engine."
                        },
                        {
                            name: "Baleno",
                            image: "https://ic1.maxabout.us/autos/cars_india/N/2020/12/new-maruti-baleno-front-3-quarter-view.jpg",
                            desc: "A premium hatchback with bold styling, spacious interior, and tech-savvy features."
                        },
                        {
                            name: "Brezza",
                            image: "https://www.ambalauto.com/uploads/model/full/fd1e84173ddec108730b0f7cb90fcbd4.jpg",
                            desc: "A compact SUV with a muscular stance, great features, and solid city+highway drive balance."
                        },
                        {
                            name: "Ertiga",
                            image: "https://wallpapercave.com/wp/wp6669506.jpg",
                            desc: "India’s favorite MPV—affordable 7-seater with family-first comfort and CNG option."
                        },
                    ].map((car) => (
                        <div key={car.name} className="rounded-xl overflow-hidden shadow-lg bg-white border">
                            <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
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
                <h2 className="text-2xl font-semibold text-green-700 underline underline-offset-4">Green Mobility Initiative</h2>
                <p className="text-gray-700">
                    Maruti Suzuki is stepping into the future with eco-friendly technologies. It offers a
                    wide range of cars with Smart Hybrid and CNG options and plans to roll out EVs
                    by 2025.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>WagonR, Ertiga, and Celerio available with factory-fitted CNG</li>
                    <li>Smart Hybrid tech in Brezza, Grand Vitara, Ciaz, etc.</li>
                    <li>Electric vehicle production plant under development in Gujarat</li>
                </ul>
            </section>

            {/* Achievements */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-indigo-700 underline underline-offset-4">Achievements & Recognition</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Named “Most Trusted Car Brand” in multiple industry surveys</li>
                    <li>Exported over 2 million cars globally</li>
                    <li>Swift & Alto among top 10 best-selling cars of all time in India</li>
                </ul>
            </section>

            {/* Timeline */}
            <section className="py-12 px-4 bg-white rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-center text-purple-700 underline underline-offset-4 mb-10">
                    Maruti Suzuki Journey Through Time
                </h2>
                <div className="relative border-l-4 border-purple-600 pl-6 space-y-12">
                    {[
                        { year: "1981", icon: "🏢", event: "Founded as Maruti Udyog Ltd. to provide affordable cars for the Indian public." },
                        { year: "1983", icon: "🚗", event: "Launch of the iconic Maruti 800, revolutionizing personal mobility in India." },
                        { year: "1992", icon: "🤝", event: "Suzuki becomes a major shareholder, boosting technology and production quality." },
                        { year: "2000", icon: "📦", event: "Launch of WagonR – a practical family hatchback that became a bestseller." },
                        { year: "2005", icon: "🎉", event: "Achieved 5 million cumulative vehicle sales – a landmark in Indian automotive history." },
                        { year: "2015", icon: "🏬", event: "NEXA dealerships launched for a premium car-buying experience with Baleno & Ciaz." },
                        { year: "2022", icon: "🌿", event: "Grand Vitara launched with Smart Hybrid and All-Wheel Drive tech." },
                        { year: "2025", icon: "⚡", event: "Scheduled launch of their first fully electric vehicle (EV) under Maruti brand." },
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

          {/* CTA Section */}
<section className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-3xl px-6 py-12 text-center shadow-xl">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Explore Maruti Suzuki Today!</h2>
    <p className="text-base sm:text-lg mb-6">
        Discover the perfect blend of performance, comfort, and innovation.
    </p>
    <a
        href="https://www.marutisuzuki.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-red-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
    >
        Visit Official Website
    </a>
</section>

        </div>
    );
};

export default MarutiSuzukiPage;


