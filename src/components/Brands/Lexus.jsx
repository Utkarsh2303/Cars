import React from "react";

const LexusPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <img
                    src="https://wallpapers.com/images/hd/lexus-ls460-f-sport-headlights-be3tby6xq8h1akik.jpg"
                    alt="Lexus Luxury"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        Lexus
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
                        Experience Amazing — Bold Design, Exhilarating Performance, Impeccable Craftsmanship
                    </p>
                </div>
            </section>

            {/* Lexus Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
                <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        The Lexus Philosophy
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        Lexus merges cutting-edge innovation with traditional Takumi craftsmanship, delivering world-class reliability, luxurious comfort, and hybrid leadership. A brand that champions sustainability without compromising elegance or driving thrill.
                    </p>
                </div>
            </section>

            {/* Signature Highlights with Gradients */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "🎌",
                        title: "Takumi Craftsmanship",
                        desc: "Master artisans blend precision engineering with human artistry in every Lexus.",
                        gradient: "from-rose-100 via-pink-50 to-white"
                    },
                    {
                        icon: "⚡",
                        title: "Hybrid Leadership",
                        desc: "Pioneers in luxury hybrid vehicles delivering efficiency and performance.",
                        gradient: "from-green-100 via-emerald-50 to-white"
                    },
                    {
                        icon: "🎼",
                        title: "Omotenashi Hospitality",
                        desc: "Japanese philosophy of anticipating needs and delivering personalized luxury.",
                        gradient: "from-indigo-100 via-blue-50 to-white"
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

            {/* Top Lexus Cars */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 underline underline-offset-8 text-gray-900">
                    Top Lexus Cars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            name: "Lexus LS 500h",
                            img: "https://autos.yahoo.com.tw/p/r/w1200/car-trim/January2021/c761ef46fb6f44683407c4a7f074ffb8.jpeg",
                            desc: "The flagship luxury sedan combining hybrid efficiency with supreme comfort."
                        },
                        {
                            name: "Lexus RX 500h F Sport",
                            img: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/09/2023-Lexus-RX-500h-F-Sport-Performance-Exterior-Front-Three-Quarter-View.jpg",
                            desc: "A luxury crossover SUV with thrilling performance and bold styling."
                        },
                        {
                            name: "Lexus LC 500 Coupe",
                            img: "https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/545/2018-lexus-lc_100545635.jpg",
                            desc: "A breathtaking coupe with a 5.0L V8, seamless design, and performance artistry."
                        },
                        {
                            name: "Lexus UX 300e",
                            img: "https://ev-database.org/img/auto/Lexus_UX_300e_Electric_2023/Lexus_UX_300e_Electric_2023-01@2x.jpg",
                            desc: "The first fully electric Lexus — a blend of eco-conscious mobility and elegance."
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

            {/* Lexus Legacy Timeline */}
            <section className="py-16 px-4 md:px-10 bg-gray-100 text-gray-900 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-12 tracking-wide underline underline-offset-8 decoration-indigo-500">
                    Lexus Legacy
                </h2>
                <div className="relative border-l-4 border-indigo-500 pl-6 space-y-12">
                    {[
                        {
                            year: "1989",
                            icon: "🚗",
                            event: "Lexus debuts with the LS 400 at the North American International Auto Show, redefining luxury."
                        },
                        {
                            year: "2005",
                            icon: "🌿",
                            event: "Launch of RX 400h — world’s first luxury hybrid SUV."
                        },
                        {
                            year: "2017",
                            icon: "🏎️",
                            event: "Unveiling of the LC 500 — a bold new direction in Lexus design language."
                        },
                        {
                            year: "2020",
                            icon: "🔋",
                            event: "Lexus introduces UX 300e — its first fully electric vehicle."
                        },
                        {
                            year: "2023",
                            icon: "🚀",
                            event: "Lexus announces an electrified future — aiming to become a full BEV brand by 2035."
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_4px_rgba(99,102,241,0.6)] z-10" />
                            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <h4 className="text-xl font-semibold text-indigo-600 tracking-wide">{item.year}</h4>
                                </div>
                                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{item.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-black py-16 px-6 text-center text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience Amazing with Lexus</h2>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                    Discover unparalleled craftsmanship, cutting-edge technology, and exhilarating performance — your Lexus journey begins today.
                </p>
                <a
                    href="https://www.lexus.com"
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

export default LexusPage;
