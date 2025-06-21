import React from "react";

const MercedesBenzPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <img
                    src="https://images.hdqwalls.com/wallpapers/black-mercedes-benz-amg-gt-4k-2020-m1.jpg"
                    alt="Mercedes Benz Luxury"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        Mercedes-Benz
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
                        The Pinnacle of Automotive Luxury and Performance
                    </p>
                </div>
            </section>

            {/* Luxury Statement */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
                <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        Why Mercedes-Benz Means Luxury
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        Synonymous with innovation, prestige, and sophistication — Mercedes-Benz is more than a car brand; it’s a statement. From handcrafted interiors to cutting-edge technology, every model is engineered for those who demand nothing less than excellence.
                    </p>
                </div>
            </section>

            {/* Signature Highlights */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "⚙️ German Engineering",
                        desc: "Precision, power, and perfection — the heart of every Mercedes-Benz.",
                        bg: "bg-white border border-gray-300"
                    },
                    {
                        title: "🛋️ Bespoke Interiors",
                        desc: "Ambient lighting, Nappa leather, and digital innovation in harmony.",
                        bg: "bg-white border border-gray-300"
                    },
                    {
                        title: "🚀 Performance DNA",
                        desc: "AMG models built to dominate the track and cruise with grace.",
                        bg: "bg-white border border-gray-300"
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className={`rounded-2xl p-6 ${item.bg} shadow-md hover:scale-105 transition-transform`}
                    >
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* Top Mercedes-Benz Cars */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 underline underline-offset-8 text-gray-900">
                    Top Mercedes-Benz Cars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            name: "S-Class",
                            img: "https://www.carscoops.com/wp-content/uploads/2021/02/2021-mercedes-benz-s-class-australia-0.jpg",
                            desc: "The flagship sedan blending elegance and intelligence."
                        },
                        {
                            name: "G-Class",
                            img: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/01/mercedes-g-wagen.jpg",
                            desc: "Iconic luxury SUV with unmatched off-road capability."
                        },
                        {
                            name: "EQE Sedan",
                            img: "https://s1.cdn.autoevolution.com/images/news/all-new-2024-mercedes-e-class-leaked-business-sedan-sends-s-class-vibes-213975_1.jpg",
                            desc: "Electric power meets classic Mercedes luxury."
                        },
                        {
                            name: "AMG GT Coupe",
                            img: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2022/10/2022-Mercedes-AMG-GT-Coupe-Front-34.jpg",
                            desc: "A luxury grand tourer that performs like a supercar."
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


            {/* Mercedes-Benz Legacy Timeline */}
            <section className="py-16 px-4 md:px-10 bg-gray-100 text-gray-900 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-12 tracking-wide underline underline-offset-8 decoration-yellow-500">
                    Legacy of Mercedes-Benz
                </h2>
                <div className="relative border-l-4 border-yellow-500 pl-6 space-y-12">
                    {[
                        {
                            year: "1886",
                            icon: "🚘",
                            event: "Carl Benz creates the world’s first automobile — the Benz Patent-Motorwagen.",
                        },
                        {
                            year: "1926",
                            icon: "💎",
                            event: "Formation of Mercedes-Benz after the merger of Karl Benz and Gottlieb Daimler companies.",
                        },
                        {
                            year: "1979",
                            icon: "🛡️",
                            event: "Launch of the legendary G-Class — a luxury off-roader that defined rugged class.",
                        },
                        {
                            year: "1997",
                            icon: "🚗",
                            event: "Mercedes-Benz introduces the first compact car – the A-Class.",
                        },
                        {
                            year: "2010",
                            icon: "⚡",
                            event: "BlueEFFICIENCY and clean diesel tech bring sustainability to the lineup.",
                        },
                        {
                            year: "2021",
                            icon: "🌐",
                            event: "Launch of the EQS — a fully electric luxury sedan setting new benchmarks in EV tech.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_15px_4px_rgba(234,179,8,0.7)] z-10" />
                            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <h4 className="text-xl font-semibold text-yellow-600 tracking-wide">{item.year}</h4>
                                </div>
                                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{item.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gray-900 py-16 px-6 text-center text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience the Star</h2>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                    From city drives to mountain passes, every journey in a Mercedes-Benz is an experience in itself. Step in and elevate your drive.
                </p>
                <a
                    href="https://www.mercedes-benz.co.in"
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

export default MercedesBenzPage;

