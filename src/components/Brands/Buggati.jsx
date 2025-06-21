import React from "react";

const BugattiPage = () => {
    return (
        <div className="font-sans text-gray-100 bg-gradient-to-b from-black via-gray-950 to-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="https://wallpaperaccess.com/full/564293.jpg"
                    alt="Bugatti Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 flex items-center justify-center text-center px-6">
                    <div>
                        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-400 mb-6">Bugatti</h1>
                        <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto">
                            The art of perfection. The pursuit of speed. The epitome of luxury hypercars.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Bugatti */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-6 text-gray-100">
                <h2 className="text-4xl font-bold text-blue-400">About Bugatti</h2>
                <p className="text-lg leading-relaxed">
                    Founded in 1909 by Ettore Bugatti in Molsheim, France, Bugatti has always stood for beauty, artistry, and unparalleled performance. 
                    In the modern era, Bugatti hypercars break boundaries in speed, craftsmanship, and engineering. 
                    Known for producing the fastest and most luxurious cars in the world, Bugatti remains an icon in automotive history.
                </p>
            </section>

            {/* Iconic Models */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-12 text-gray-100">
                <h2 className="text-4xl font-bold text-blue-400">Iconic Bugatti Models</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Bugatti Chiron Super Sport",
                            image: "https://www.supercars.net/blog/wp-content/uploads/2023/04/Bugatti-Chiron-Super-Sport-125.jpg",
                            desc: "A 1,600 hp engineering marvel — capable of speeds over 490 km/h, redefining hypercar limits."
                        },
                        {
                            name: "Bugatti Divo",
                            image: "http://gtspirit.com/wp-content/uploads/2018/10/Divo03.jpg",
                            desc: "Aero-focused, dynamic handling masterpiece — combining art and extreme performance."
                        },
                        {
                            name: "Bugatti La Voiture Noire",
                            image: "https://1cars.org/wp-content/uploads/2021/05/Bugatti-La-Voiture-Noire.jpeg",
                            desc: "A one-of-one tribute to exclusivity — the world’s most expensive new car ever made."
                        },
                    ].map((model, index) => (
                        <div key={index} className="bg-black/60 backdrop-blur-md rounded-xl overflow-hidden border border-blue-500 shadow-lg">
                            <img src={model.image} alt={model.name} className="h-56 w-full object-cover" />
                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-blue-400">{model.name}</h3>
                                <p className="text-gray-300">{model.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bugatti Philosophy */}
            <section className="bg-black/90 py-16 px-6 text-center text-gray-200 space-y-8">
                <h2 className="text-4xl font-bold text-blue-400">The Bugatti Philosophy</h2>
                <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                    Bugatti is a celebration of passion, art, and precision. More than machines, Bugatti hypercars are timeless pieces of design 
                    and performance — pushing boundaries of speed while honoring tradition and luxury.
                </p>
                <blockquote className="italic text-xl max-w-3xl mx-auto text-blue-300">
                    "If comparable, it is no longer Bugatti."
                </blockquote>
            </section>

            {/* Pros & Cons */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">
                <h2 className="text-4xl font-bold text-blue-400">Pros & Cons of Bugatti Ownership</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-400">Pros</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>Unrivaled top speed & performance</li>
                            <li>Ultra-exclusive craftsmanship</li>
                            <li>Timeless, elegant design</li>
                            <li>Engineering perfection with comfort</li>
                            <li>Investment-worthy limited production</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-red-400">Cons</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>Extremely high acquisition cost</li>
                            <li>Very high maintenance & service costs</li>
                            <li>Requires specialized handling & garages</li>
                            <li>Limited driving practicality — hypercars built for occasion</li>
                            <li>Long waitlists for special editions</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final Section + Visit Site */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-center space-y-8 text-gray-100">
                <h2 className="text-4xl font-bold text-blue-400">Experience Bugatti</h2>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                    Bugatti is the embodiment of performance without compromise. A true hypercar legend — built for connoisseurs of engineering, speed, and luxury. 
                    If you seek perfection on four wheels, Bugatti awaits you.
                </p>

                <a
                    href="https://www.bugatti.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-8 py-4 bg-blue-500 text-black font-bold text-lg rounded-full shadow-lg transition transform hover:scale-105 hover:bg-blue-400"
                >
                    Visit Official Bugatti Site
                </a>
            </section>
        </div>
    );
};

export default BugattiPage;
