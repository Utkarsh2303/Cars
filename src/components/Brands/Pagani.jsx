import React from "react";

const PaganiPage = () => {
    return (
        <div className="font-sans text-gray-100 bg-gradient-to-b from-gray-950 via-black to-gray-900">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="https://www.hdcarwallpapers.com/download/pagani_zonda_cinque_roadster_4k-3840x2160.jpg"
                    alt="Pagani Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/95 flex items-center justify-center text-center px-6">
                    <div>
                        <h1 className="text-6xl md:text-7xl font-extrabold text-indigo-400 mb-6">Pagani</h1>
                        <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto">
                            Where art meets engineering — bespoke hypercars crafted with passion.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Pagani */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-6 text-gray-100">
                <h2 className="text-4xl font-bold text-indigo-400">About Pagani</h2>
                <p className="text-lg leading-relaxed">
                    Founded in 1992 by Horacio Pagani in Modena, Italy — Pagani Automobili creates some of the most artistic and exclusive hypercars on earth.
                    Known for obsessive attention to detail, beautiful craftsmanship, and materials like carbon-titanium, Pagani cars are both performance machines and rolling works of art.
                    Production is extremely limited — each Pagani is custom-built for its owner.
                </p>
            </section>

            {/* Iconic Models */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-12 text-gray-100">
                <h2 className="text-4xl font-bold text-indigo-400">Signature Pagani Models</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Pagani Huayra Roadster BC",
                            image: "https://www.thesupercarblog.com/wp-content/uploads/2020/02/Pagani-Huayra-BC-Roadster-Blue-Carbon.jpg",
                            desc: "An ultra-light open-top masterpiece — with 800 hp and exquisite craftsmanship."
                        },
                        {
                            name: "Pagani Zonda HP Barchetta",
                            image: "https://wallpapers.com/images/hd/pagani-zonda-hp-barchetta-1600-x-1172-wallpaper-2sytas7joiymww9x.jpg",
                            desc: "A collector’s dream — limited to 3 units globally, the purest expression of the iconic Zonda."
                        },
                        {
                            name: "Pagani Utopia",
                            image: "https://images4.alphacoders.com/127/1271984.jpg",
                            desc: "The next generation Pagani — blending tradition, emotion, and a 864 hp V12."
                        },
                    ].map((model, index) => (
                        <div key={index} className="bg-black/70 backdrop-blur-md rounded-xl overflow-hidden border border-indigo-500 shadow-lg">
                            <img src={model.image} alt={model.name} className="h-56 w-full object-cover" />
                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-indigo-400">{model.name}</h3>
                                <p className="text-gray-300">{model.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pagani Philosophy */}
            <section className="bg-black/90 py-16 px-6 text-center text-gray-200 space-y-8">
                <h2 className="text-4xl font-bold text-indigo-400">The Pagani Philosophy</h2>
                <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                    At Pagani, each hypercar is designed to stir the soul — a perfect blend of artistry, performance, and Italian craftsmanship. 
                    No two Paganis are alike — each is sculpted to the vision of its owner, with the most advanced materials and techniques in the automotive world.
                </p>
                <blockquote className="italic text-xl max-w-3xl mx-auto text-indigo-300">
                    "Art and science can walk together hand in hand." — Horacio Pagani
                </blockquote>
            </section>

            {/* Pros & Cons */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">
                <h2 className="text-4xl font-bold text-indigo-400">Pros & Cons of Pagani Ownership</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-400">Pros</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>Exquisite bespoke craftsmanship</li>
                            <li>Unparalleled exclusivity — very low production</li>
                            <li>Timeless, art-inspired design</li>
                            <li>Raw V12 power and dynamic handling</li>
                            <li>Instant collectible status — strong value</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-red-400">Cons</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>Extreme cost (approx. $3 million)</li>
                            <li>Maintenance is artisanal — highly specialized</li>
                            <li>Very limited dealer & service network</li>
                            <li>Waiting lists for new models</li>
                            <li>Built for collectors — less suited for daily use</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final Section + Visit Site */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-center space-y-8 text-gray-100">
                <h2 className="text-4xl font-bold text-indigo-400">Discover Pagani</h2>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                    More than a car — a rolling sculpture. If you value craftsmanship, individuality, and emotion, Pagani offers a hypercar experience like no other.
                </p>

                <a
                    href="https://www.pagani.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-8 py-4 bg-indigo-500 text-black font-bold text-lg rounded-full shadow-lg transition transform hover:scale-105 hover:bg-indigo-400"
                >
                    Visit Pagani Official Site
                </a>
            </section>
        </div>
    );
};

export default PaganiPage;
