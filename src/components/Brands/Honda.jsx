import React from "react";

const HondaPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-14 font-sans">
            {/* Hero Section */}
            <section className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl w-full">
                <img
                    src="https://s3-prod.autonews.com/s3fs-public/PROLOGUE-01_i.jpg"
                    alt="Honda Showroom"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-white/90 p-4 sm:p-6 rounded-2xl shadow-lg max-w-[90%]">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Honda</h1>
                    <p className="text-sm sm:text-base text-gray-600">The Power of Dreams — Reliability Meets Performance</p>
                </div>
            </section>

            {/* About Section */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-blue-800 underline underline-offset-4">About the Brand</h2>
                <p className="text-gray-700 leading-relaxed">
                    Honda Cars India Ltd. (HCIL), a subsidiary of Honda Motor Co. Ltd., Japan, has been delivering
                    premium and reliable vehicles to Indian consumers since 1995.
                </p>
                <p className="text-gray-700">
                    Known for their refined engines, solid build quality, and strong resale value, Honda cars
                    have carved a niche for themselves in the sedan and compact SUV markets.
                </p>
            </section>

            {/* Key Highlights */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
                <div style={{ background: "linear-gradient(to right, #373B44, #4286f4)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">🛠️ Legendary Engine Quality</h3>
                    <p>Honda’s i-VTEC engines are known for unmatched refinement and fuel efficiency.</p>
                </div>
                <div style={{ background: "linear-gradient(to right, #000000, #434343)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">🧑‍🔬 Advanced Safety Features</h3>
                    <p>All Honda cars come equipped with ACE™ body structure and standard safety tech.</p>
                </div>
                <div style={{ background: "linear-gradient(to right, #f7971e, #ffd200)", borderRadius: "1.5rem", padding: "1.5rem", color: "#111" }}>
                    <h3 className="text-xl font-bold mb-2">🌿 Eco-Friendly Commitment</h3>
                    <p>Honda emphasizes low-emission engines and hybrid technologies globally.</p>
                </div>
            </section>

            {/* Best Cars by Honda */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-rose-800 underline underline-offset-4">Best Cars by Honda</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            name: "Honda City",
                            image: "https://s3.us-east-2.amazonaws.com/mgpanel/4187-city-4-tfb.jpg",
                            desc: "A premium sedan known for elegance, space, and segment-leading features."
                        },
                        {
                            name: "Honda Amaze",
                            image: "https://paultan.org/image/2021/08/2021-Honda-Amaze-facelift-accessories-India-1.jpg",
                            desc: "Compact sedan with refined engines and impressive practicality."
                        },
                        {
                            name: "Honda Elevate",
                            image: "https://images.hindustantimes.com/auto/img/2023/09/02/1600x900/Honda_Elevate_011_1690696453543_1693651281154.jpg",
                            desc: "The newest compact SUV with bold design and connected features."
                        },
                        {
                            name: "Honda WR-V",
                            image: "https://quatrorodas.abril.com.br/wp-content/uploads/2017/04/mg_7655-e1597072768978.jpg?quality=70&strip=info",
                            desc: "A crossover based on the Jazz with rugged styling and strong practicality."
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
                    Honda is accelerating the shift to electric and hybrid mobility solutions globally.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Plans to launch multiple EVs under the e:N series in Asia.</li>
                    <li>Honda City e:HEV - India’s first mainstream hybrid sedan.</li>
                    <li>Commitment to carbon neutrality by 2050.</li>
                </ul>
            </section>

            {/* Achievements */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-indigo-700 underline underline-offset-4">Achievements & Recognition</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Over 2 million cars sold in India</li>
                    <li>Honda City – a legendary nameplate in India for over two decades</li>
                    <li>High customer satisfaction scores for service and reliability</li>
                </ul>
            </section>

            {/* Timeline */}
            <section className="py-12 px-4 bg-white rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-center text-purple-700 underline underline-offset-4 mb-10">
                    Honda India Timeline
                </h2>
                <div className="relative border-l-4 border-purple-600 pl-6 space-y-12">
                    {[
                        { year: "1995", icon: "🏢", event: "Honda Cars India Ltd. established as a subsidiary." },
                        { year: "1998", icon: "🚘", event: "Launch of first-gen Honda City — game changer for sedans." },
                        { year: "2013", icon: "🚗", event: "Honda Amaze launched — entered compact sedan market." },
                        { year: "2020", icon: "⚡", event: "Honda City e:HEV introduced — bringing hybrid tech to India." },
                        { year: "2023", icon: "🚙", event: "Launch of Elevate SUV to capture compact SUV segment." },
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
            <section className="bg-gradient-to-r from-red-700 to-rose-500 text-white rounded-3xl px-6 py-12 text-center shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Discover the Power of Dreams</h2>
                <p className="text-base sm:text-lg mb-6">
                    Experience premium driving, trusted engineering, and Honda’s vision for the future.
                </p>
                <a
                    href="https://www.hondacarindia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-red-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
                >
                    Visit Official Website
                </a>
            </section>
        </div>
    );
};

export default HondaPage;
