import React from "react";

const MaseratiPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <img
                    src="https://wallpapercave.com/wp/yJ1iH9r.jpg"
                    alt="Maserati Luxury"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        Maserati
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
                        The Absolute Opposite of Ordinary — Italian Elegance & Power
                    </p>
                </div>
            </section>

            {/* Maserati Philosophy */}
            <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
                <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        The Maserati Experience
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        Maserati stands for Italian luxury, bold design, and powerful performance. Every Maserati is crafted with passion and precision, embodying the spirit of grand touring and an unmistakable road presence.
                    </p>
                </div>
            </section>

            {/* Signature Highlights with Gradients */}
            <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "🇮🇹",
                        title: "Italian Craftsmanship",
                        desc: "Hand-built interiors and iconic design inspired by Italian artistry.",
                        gradient: "from-rose-100 via-pink-50 to-white"
                    },
                    {
                        icon: "🏎️",
                        title: "Race-bred Performance",
                        desc: "A legacy rooted in motorsport, delivering thrilling dynamics.",
                        gradient: "from-indigo-100 via-purple-50 to-white"
                    },
                    {
                        icon: "🎼",
                        title: "Distinctive Sound",
                        desc: "Signature Maserati exhaust note — pure emotion through every rev.",
                        gradient: "from-yellow-100 via-orange-50 to-white"
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

            {/* Top Maserati Cars */}
            <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 underline underline-offset-8 text-gray-900">
                    Top Maserati Cars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            name: "Maserati MC20",
                            img: "https://www.carscoops.com/wp-content/uploads/2022/09/Novitec-Maserati-MC20-main.jpg",
                            desc: "A mid-engine supercar blending Italian artistry with modern engineering."
                        },
                        {
                            name: "Maserati Ghibli",
                            img: "https://www.hdcarwallpapers.com/walls/maserati_ghibli_nerissimo_black_edition_4k_2018-HD.jpg",
                            desc: "Luxury sports sedan with dynamic performance and bold style."
                        },
                        {
                            name: "Maserati Levante",
                            img: "https://media.autoexpress.co.uk/image/private/s--HlYFnaS7--/v1562246097/autoexpress/2018/03/maserati-levante-trofeo-2018-2_lead.jpg",
                            desc: "Luxury performance SUV with Italian elegance."
                        },
                        {
                            name: "Maserati GranTurismo",
                            img: "https://cdn.motor1.com/images/mgl/qkZeMR/s3/maserati-granturismo-primaserie-75th-anniversary-launch-edition.jpg",
                            desc: "The ultimate grand tourer — timeless design meets thrilling power."
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

            {/* Maserati Legacy Timeline */}
            <section className="py-16 px-4 md:px-10 bg-gray-100 text-gray-900 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-12 tracking-wide underline underline-offset-8 decoration-red-500">
                    Maserati Legacy
                </h2>
                <div className="relative border-l-4 border-red-500 pl-6 space-y-12">
                    {[
                        {
                            year: "1914",
                            icon: "🏁",
                            event: "Maserati founded in Bologna, Italy, by Alfieri Maserati and brothers."
                        },
                        {
                            year: "1926",
                            icon: "🏎️",
                            event: "First Maserati car — Tipo 26 — wins its debut race at Targa Florio."
                        },
                        {
                            year: "1957",
                            icon: "🥇",
                            event: "Maserati wins Formula 1 World Championship with Juan Manuel Fangio."
                        },
                        {
                            year: "2007",
                            icon: "🎖️",
                            event: "Maserati GranTurismo redefines the luxury grand touring segment."
                        },
                        {
                            year: "2020",
                            icon: "⚡",
                            event: "MC20 marks a new era with cutting-edge engineering and electrification."
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_4px_rgba(239,68,68,0.6)] z-10" />
                            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <h4 className="text-xl font-semibold text-red-600 tracking-wide">{item.year}</h4>
                                </div>
                                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{item.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-black py-16 px-6 text-center text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience Maserati</h2>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                    Discover the art of Italian performance and luxury. Your Maserati awaits.
                </p>
                <a
                    href="https://www.maserati.com"
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

export default MaseratiPage;
