import React from "react";

const LamborghiniPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="http://www.hdcarwallpapers.com/walls/lamborghini_centenario_4k-HD.jpg"
                    alt="Lamborghini Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 flex items-center justify-center text-center px-6">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6">Lamborghini</h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                            The pinnacle of Italian automotive excellence — precision engineering, exhilarating performance, and unmistakable design.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Lamborghini */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-8 text-gray-100">
                <h2 className="text-4xl font-bold text-yellow-400">About Lamborghini</h2>
                <p className="text-lg leading-relaxed">
                    Automobili Lamborghini S.p.A. is an Italian manufacturer of luxury sports cars and SUVs, headquartered in Sant'Agata Bolognese. Founded in 1963 by Ferruccio Lamborghini, the brand was created to compete with established marques like Ferrari. 
                    Known for radical design, roaring naturally aspirated V10 and V12 engines, and ground-breaking technology, Lamborghini continues to be a symbol of wealth, power, and automotive passion.
                </p>
            </section>

            {/* Iconic Models */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-gray-100 space-y-12">
                <h2 className="text-4xl font-bold text-yellow-400">Iconic Lamborghini Models</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Lamborghini Aventador",
                            image: "https://images.hdqwalls.com/wallpapers/lamborghini-aventador-sv-2018-s4.jpg",
                            desc: "A flagship V12-powered supercar known for extreme performance and signature scissor doors."
                        },
                        {
                            name: "Lamborghini Huracán",
                            image: "https://www.hdwallpapers.in/download/lamborghini_huracan_evo_2019_4k-HD.jpg",
                            desc: "A thrilling V10 coupe/spyder — a perfect blend of daily usability and track-ready performance."
                        },
                        {
                            name: "Lamborghini Urus",
                            image: "https://gossipvehiculo.com/wp-content/uploads/2022/08/Lamborghini-Urus-G-Power.jpg",
                            desc: "The world’s first Super Sport Utility Vehicle — luxury, practicality, and brutal performance."
                        },
                    ].map((model, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                            <img src={model.image} alt={model.name} className="h-56 w-full object-cover"/>
                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-yellow-400">{model.name}</h3>
                                <p className="text-gray-300">{model.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Buying Guide */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-10 text-gray-100">
                <h2 className="text-4xl font-bold text-yellow-400">Lamborghini Buying Guide</h2>
                <p className="text-lg leading-relaxed">
                    Buying a Lamborghini is not just a purchase — it’s an entry into an exclusive lifestyle. Here are a few tips:
                </p>
                <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                    <li>Decide your goal: track performance, weekend drive, or everyday use (Urus).</li>
                    <li>Consider warranty, servicing costs, and authorized service network.</li>
                    <li>Customization options via Lamborghini Ad Personam.</li>
                    <li>Check for limited editions & collectibles — these often appreciate in value.</li>
                    <li>Insurance for exotic cars is specialized — research high-end insurers.</li>
                </ul>
            </section>

            {/* Pros & Cons */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-gray-100 space-y-10">
                <h2 className="text-4xl font-bold text-yellow-400">Pros & Cons of Lamborghini Ownership</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-400">Pros</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>Unmatched road presence & design</li>
                            <li>Exhilarating engine sound & raw performance</li>
                            <li>Exclusivity and status symbol</li>
                            <li>Superb driving dynamics & latest tech</li>
                            <li>High resale value (especially limited editions)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-red-400">Cons</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>High purchase & maintenance costs</li>
                            <li>Limited practicality in supercars</li>
                            <li>Requires premium insurance</li>
                            <li>Fuel consumption is high</li>
                            <li>Ground clearance issues on Indian roads (for Aventador, Huracán)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Brand Philosophy */}
            <section className="bg-gray-900 py-16 px-6 text-center text-gray-200 space-y-6">
                <h2 className="text-4xl font-bold text-yellow-400">Lamborghini Philosophy</h2>
                <blockquote className="italic text-xl max-w-4xl mx-auto">
                    "Expect the unexpected. Push the limits of performance, design, and emotion."
                </blockquote>
                <p className="max-w-3xl mx-auto text-lg">
                    Every Lamborghini is engineered to challenge conventions and thrill the senses — from radical design language to the roar of a V12. It’s about creating automotive masterpieces that move hearts.
                </p>
            </section>

            {/* Final Thoughts + Visit Site */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-8 text-gray-100 text-center">
                <h2 className="text-4xl font-bold text-yellow-400">Final Thoughts</h2>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                    Whether it’s the brutally powerful Aventador, the agile Huracán, or the versatile Urus — Lamborghini represents a statement of individuality and excellence. It’s not just a car, but an experience. 
                    If you’re ready for that, welcome to the raging bull family.
                </p>

                {/* Visit Site Button */}
                <a
                    href="https://www.lamborghini.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-full shadow-lg transition transform hover:scale-105 hover:bg-yellow-300"
                >
                    Visit Official Site
                </a>
            </section>
        </div>
    );
};

export default LamborghiniPage;
