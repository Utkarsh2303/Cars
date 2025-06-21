import React from "react";

const MahindraPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-14 font-sans">
            {/* Hero Section */}
            <section className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl w-full">
                <img
                    src="http://mahindraimages.dealersites.in/189/gallery/showroom-7771.jpg"
                    alt="Mahindra Showroom"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-white/90 p-4 sm:p-6 rounded-2xl shadow-lg max-w-[90%]">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Mahindra</h1>
                    <p className="text-sm sm:text-base text-gray-600">Rise with Ruggedness, Power, and Purpose</p>
                </div>
            </section>

            {/* About Section */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-red-800 underline underline-offset-4">About the Brand</h2>
                <p className="text-gray-700 leading-relaxed">
                    Mahindra & Mahindra is one of India’s most respected automobile manufacturers, best known for its robust SUVs and commercial vehicles. Founded in 1945, Mahindra has grown into a global group with a strong focus on innovation and sustainable mobility.
                </p>
                <p className="text-gray-700">
                    The brand symbolizes strength, capability, and Indian engineering excellence, with offerings ranging from off-road icons to futuristic EVs.
                </p>
            </section>

            {/* Key Highlights */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
                <div style={{ background: "linear-gradient(to right, #b92b27, #1565c0)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">🚙 Legendary SUVs</h3>
                    <p>Renowned for rugged SUVs like Thar, Scorpio, and Bolero that dominate both cities and off-road terrain.</p>
                </div>
                <div style={{ background: "linear-gradient(to right, #1f4037, #99f2c8)", borderRadius: "1.5rem", padding: "1.5rem", color: "#111" }}>
                    <h3 className="text-xl font-bold mb-2">🌿 Green Vision</h3>
                    <p>Driving sustainability with electric mobility and cutting-edge EV platforms.</p>
                </div>
                <div style={{ background: "linear-gradient(to right, #000000, #434343)", borderRadius: "1.5rem", padding: "1.5rem" }}>
                    <h3 className="text-xl font-bold mb-2">⚒️ Made in India</h3>
                    <p>Committed to Indian manufacturing and global quality standards.</p>
                </div>
            </section>

            {/* Best Cars by Mahindra */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-green-800 underline underline-offset-4">Best Cars by Mahindra</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            name: "Thar",
                            image: "https://www.livemint.com/lm-img/img/2023/05/22/1600x900/Mahindrathar_1604486465203_1604486476898_1684738538587.jpg",
                            desc: "A lifestyle SUV with off-roading DNA, modern tech, and iconic presence."
                        },
                        {
                            name: "XUV700",
                            image: "https://carthrust.com/wp-content/uploads/2021/08/XUV700-Picture-01.jpg",
                            desc: "A futuristic SUV loaded with ADAS, panoramic sunroof, and premium performance."
                        },
                        {
                            name: "Scorpio-N",
                            image: "https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/05/mahindra-scorpio-n-4.jpeg",
                            desc: "The Big Daddy of SUVs — bold, muscular, and built for urban and rural adventures."
                        },
                        {
                            name: "Bolero Neo",
                            image: "https://awtobazar.in/wp-content/uploads/2021/07/Bolero-Neo.jpeg",
                            desc: "Rugged reliability with a blend of utility and modern features."
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

            {/* Electric Vision */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-blue-700 underline underline-offset-4">Electric Mobility by Mahindra</h2>
                <p className="text-gray-700">
                    Mahindra Electric is pioneering affordable EV solutions for urban mobility and sustainable transportation.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>XUV400 EV: High-range electric SUV with modern design</li>
                    <li>e-Verito: Electric sedan for eco-conscious fleet users</li>
                    <li>Born Electric Platform: Next-gen EVs with futuristic aesthetics</li>
                </ul>
            </section>

            {/* Achievements */}
            <section className="space-y-4 px-2">
                <h2 className="text-2xl font-semibold text-indigo-700 underline underline-offset-4">Achievements & Recognition</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Over 75 years of automotive excellence</li>
                    <li>Multiple safety and innovation awards for XUV700</li>
                    <li>Leader in EV technology and rural mobility</li>
                </ul>
            </section>

            {/* Timeline */}
            <section className="py-12 px-4 bg-white rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-center text-purple-700 underline underline-offset-4 mb-10">
                    Mahindra India Timeline
                </h2>
                <div className="relative border-l-4 border-purple-600 pl-6 space-y-12">
                    {[
                        { year: "1945", icon: "🏭", event: "Mahindra & Mahindra founded as a steel trading company." },
                        { year: "1954", icon: "🚙", event: "Launched the iconic Willys Jeep in India." },
                        { year: "2000", icon: "🌍", event: "Expanded globally with presence in multiple countries." },
                        { year: "2010", icon: "⚡", event: "Entered EV segment with Mahindra Reva Electric." },
                        { year: "2021", icon: "🚀", event: "Launched XUV700 with world-class features and tech." },
                        { year: "2022", icon: "🌱", event: "Announced Born Electric EV platform for global markets." },
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
            <section className="bg-gradient-to-r from-red-800 to-orange-500 text-white rounded-3xl px-6 py-12 text-center shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Explore Mahindra SUVs & EVs</h2>
                <p className="text-base sm:text-lg mb-6">
                    Discover powerful, intelligent vehicles built for India and the world.
                </p>
                <a
                    href="https://auto.mahindra.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-red-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
                >
                    Visit Official Website
                </a>
            </section>
        </div>
    );
};

export default MahindraPage;
