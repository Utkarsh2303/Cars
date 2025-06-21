import React from "react";

const HyundaiPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-14 font-sans">
            {/* Hero Section */}
            <section className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl w-full">
                <img
                    src="https://www.hapskorea.com/wp-content/uploads/2017/06/Hyundai-Dealership-.jpg"
                    alt="Hyundai Showroom"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-white/90 p-4 sm:p-6 rounded-2xl shadow-lg max-w-[90%]">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Hyundai</h1>
                    <p className="text-sm sm:text-base text-gray-600">Innovation with Style and Performance</p>
                </div>
            </section>

            {/* About Section */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-blue-800 underline underline-offset-4">About the Brand</h2>
                <p className="text-gray-700 leading-relaxed">
                    Hyundai Motor India Limited (HMIL), a wholly-owned subsidiary of Hyundai Motor Company, South Korea, is the second-largest car manufacturer in India.
                    Since entering the Indian market in 1996, Hyundai has earned a reputation for offering high-quality, feature-rich, and stylish vehicles.
                </p>
                <p className="text-gray-700">
                    Known for innovation and safety, Hyundai’s lineup includes everything from small hatchbacks to premium SUVs and electric cars, catering to the evolving preferences of Indian consumers.
                </p>
            </section>

            {/* Key Highlights */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
                <div style={{ background: "linear-gradient(to right, #002f4b, #dc4225)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">🚘 Feature-Packed Cars</h3>
                    <p>Known for cutting-edge tech and premium interiors across all segments.</p>
                </div>
                <div style={{ background: "linear-gradient(to right, #434343, #000000)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">🌐 Global Design Language</h3>
                    <p>“Sensuous Sportiness” design with global appeal and futuristic aesthetics.</p>
                </div>
                <div style={{ background: "linear-gradient(to right, #1c92d2, #f2fcfe)", borderRadius: "1.5rem", padding: "1.5rem", color: "#111" }}>
                    <h3 className="text-xl font-bold mb-2">⚙️ Smart Mobility Vision</h3>
                    <p>Investing in EVs, hydrogen fuel cells, and smart connected solutions.</p>
                </div>
            </section>

            {/* Best Cars by Hyundai */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-rose-800 underline underline-offset-4">Best Cars by Hyundai</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            name: "Creta",
                            image: "https://1.bp.blogspot.com/-U5ro1ds6qcc/XSEG4IK2bmI/AAAAAAAAVio/yozhEhLS1MwAEAMYRbq2Vz192f9ABOdIQCLcBGAs/s1600/Prestige_09.jpg",
                            desc: "India’s top-selling SUV, with bold looks, spacious interiors, and loads of tech."
                        },
                        {
                            name: "i20",
                            image: "https://media.autoexpress.co.uk/image/private/s--WvuSbfm3--/v1562242264/autoexpress/2016/02/i20-twin-061.jpg",
                            desc: "A sporty hatchback with advanced features and a dynamic driving experience."
                        },
                        {
                            name: "Verna",
                            image: "https://images.hindustantimes.com/auto/img/2023/03/24/1600x900/Hyundai_Verna_2_1679646995838_1679647001735_1679647001735.jpg",
                            desc: "A stylish sedan offering powerful engines, ventilated seats, and ADAS."
                        },
                        {
                            name: "Venue",
                            image: "https://www.drivespark.com/img/2023/08/hyundai-venue-knight-edition-cover_1692342806611_1692342806727-1200x675-20230818124801.jpg",
                            desc: "A compact SUV packed with modern features and ideal for urban use."
                        },
                    ].map((car) => (
                        <div key={car.name} className="rounded-xl overflow-hidden shadow-lg bg-white border">
                            <img src={car.image} alt={car.name} className="w-full h-64 object-cover" loading="lazy" />
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
                    Hyundai is committed to a greener future through electric vehicles, hybrid tech, and sustainability.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Kona Electric: One of the first EVs in India with 452 km range</li>
                    <li>Ioniq 5: Award-winning futuristic EV with ultra-fast charging</li>
                    <li>Plans to launch 6 EVs in India by 2028</li>
                </ul>
            </section>

            {/* Achievements */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-indigo-700 underline underline-offset-4">Achievements & Recognition</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>2nd largest car manufacturer in India</li>
                    <li>Over 10 million customers served in India</li>
                    <li>Multiple “Car of the Year” awards for Creta, Verna, and i20</li>
                </ul>
            </section>

            {/* Timeline */}
            <section className="py-12 px-4 bg-white rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-center text-purple-700 underline underline-offset-4 mb-10">
                    Hyundai India Timeline
                </h2>
                <div className="relative border-l-4 border-purple-600 pl-6 space-y-12">
                    {[
                        { year: "1996", icon: "🏭", event: "Hyundai sets up base in India with a plant in Chennai." },
                        { year: "1998", icon: "🚗", event: "Launch of Santro — a revolutionary tall-boy hatchback." },
                        { year: "2006", icon: "🌍", event: "Became India’s largest car exporter." },
                        { year: "2015", icon: "🏆", event: "Creta launched — setting a new benchmark in SUVs." },
                        { year: "2019", icon: "⚡", event: "Kona Electric introduced — India's first long-range EV." },
                        { year: "2023", icon: "🚀", event: "Ioniq 5 launched, showcasing global EV innovation." },
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
            <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-3xl px-6 py-12 text-center shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Experience Hyundai Innovation</h2>
                <p className="text-base sm:text-lg mb-6">
                    Discover cutting-edge design, safety, and futuristic technology today.
                </p>
                <a
                    href="https://www.hyundai.com/in/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
                >
                    Visit Official Website
                </a>
            </section>
        </div>
    );
};

export default HyundaiPage;
