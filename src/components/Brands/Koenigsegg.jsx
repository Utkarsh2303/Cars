import React from "react";

const KoenigseggPage = () => {
    return (
        <div className="font-sans text-gray-100 bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="http://www.hdcarwallpapers.com/walls/2017_koenigsegg_regera_4k-HD.jpg"
                    alt="Koenigsegg Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 flex items-center justify-center text-center px-6">
                    <div>
                        <h1 className="text-6xl md:text-7xl font-extrabold text-orange-400 mb-6">Koenigsegg</h1>
                        <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto">
                            Engineering for the extreme — the world’s most advanced hypercars.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Koenigsegg */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-6 text-gray-100">
                <h2 className="text-4xl font-bold text-orange-400">About Koenigsegg</h2>
                <p className="text-lg leading-relaxed">
                    Founded in 1994 by Christian von Koenigsegg in Ängelholm, Sweden — Koenigsegg is a hypercar manufacturer known for relentless innovation and performance.
                    Koenigsegg vehicles hold records in speed, technology, and engineering. Each car is handcrafted and built to achieve what was previously impossible — delivering unmatched power, design, and innovation.
                </p>
            </section>

            {/* Iconic Models */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-12 text-gray-100">
                <h2 className="text-4xl font-bold text-orange-400">Legendary Koenigsegg Models</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Koenigsegg Jesko Absolut",
                            image: "https://wallpapercave.com/wp/wp6852463.jpg",
                            desc: "Designed to be the fastest car on earth — Jesko Absolut combines aerodynamics with raw horsepower."
                        },
                        {
                            name: "Koenigsegg Gemera",
                            image: "https://images.hdqwalls.com/download/koenigsegg-gemera-2020-8z-3840x2400.jpg",
                            desc: "World’s first Mega-GT — four-seat hypercar with hybrid tech and 1,700 hp of sustainable performance."
                        },
                        {
                            name: "Koenigsegg Regera",
                            image: "https://www.topgear.com/sites/default/files/images/big-read/carousel/2016/08/1366a72eb21eacee226ff258abccb290/row_8819.jpg",
                            desc: "A revolutionary hybrid hypercar with direct-drive — effortless acceleration and supreme luxury."
                        },
                    ].map((model, index) => (
                        <div key={index} className="bg-black/70 backdrop-blur-md rounded-xl overflow-hidden border border-orange-500 shadow-lg">
                            <img src={model.image} alt={model.name} className="h-56 w-full object-cover" />
                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-orange-400">{model.name}</h3>
                                <p className="text-gray-300">{model.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Koenigsegg Philosophy */}
            <section className="bg-black/90 py-16 px-6 text-center text-gray-200 space-y-8">
                <h2 className="text-4xl font-bold text-orange-400">The Koenigsegg Philosophy</h2>
                <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                    Koenigsegg is about constant innovation. Whether it’s their own gearbox, hybrid systems, or new fuel technologies, Koenigsegg cars defy expectations and break records. 
                    Owning one is owning the edge of what’s possible in automotive engineering.
                </p>
                <blockquote className="italic text-xl max-w-3xl mx-auto text-orange-300">
                    "The spirit of performance and innovation. Every detail matters."
                </blockquote>
            </section>

            {/* Pros & Cons */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">
                <h2 className="text-4xl font-bold text-orange-400">Pros & Cons of Koenigsegg Ownership</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-400">Pros</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>Extreme top speed and performance</li>
                            <li>Unique innovation (Freevalve tech, direct drive)</li>
                            <li>Ultra-exclusive — very limited production</li>
                            <li>Record-breaking engineering</li>
                            <li>Stunning, futuristic design</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-red-400">Cons</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>Ultra high price point</li>
                            <li>Maintenance requires Koenigsegg specialist</li>
                            <li>Long delivery lead times</li>
                            <li>Very rare — not easy to access or test drive</li>
                            <li>Overkill for city use — true hypercar</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final Section + Visit Site */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-center space-y-8 text-gray-100">
                <h2 className="text-4xl font-bold text-orange-400">Discover Koenigsegg</h2>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                    For those who desire the ultimate expression of innovation and speed — Koenigsegg delivers a hypercar experience beyond imagination. 
                    Crafted by visionaries, driven by pioneers. Are you ready?
                </p>

                <a
                    href="https://www.koenigsegg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-8 py-4 bg-orange-500 text-black font-bold text-lg rounded-full shadow-lg transition transform hover:scale-105 hover:bg-orange-400"
                >
                    Visit Koenigsegg Official Site
                </a>
            </section>
        </div>
    );
};

export default KoenigseggPage;
