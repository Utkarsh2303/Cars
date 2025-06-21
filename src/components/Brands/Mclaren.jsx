import React from "react";

const McLarenPage = () => {
    return (
        <div className="font-sans text-gray-100 bg-gradient-to-b from-black via-gray-00 to-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="https://wallpapercave.com/wp/wp1822335.jpg"
                    alt="McLaren Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-200"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 flex items-center justify-center text-center px-6">
                    <div>
                        <h1 className="text-6xl md:text-7xl font-extrabold text-orange-400 mb-6">McLaren</h1>
                        <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto">
                            Engineering purity. Extreme performance. The art of lightweight innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* About McLaren */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-6 text-gray-100">
                <h2 className="text-4xl font-bold text-orange-400">About McLaren</h2>
                <p className="text-lg leading-relaxed">
                    McLaren Automotive, based in Woking, England, is a world-renowned manufacturer of high-performance sports cars and supercars. 
                    Born from McLaren’s racing heritage in Formula 1, the brand is known for pushing the boundaries of technology and design. 
                    Every McLaren is engineered with a focus on lightweight materials, aerodynamic efficiency, and sheer driving exhilaration.
                </p>
            </section>

            {/* Featured Models */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-12 text-gray-100">
                <h2 className="text-4xl font-bold text-orange-400">Featured McLaren Models</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "McLaren P1",
                            image: "https://www.classicdriver.com/sites/default/files/cars_images/feed_681175/mclaren-p1-033.jpg",
                            desc: "Hybrid hypercar icon — combining F1 tech with stunning design and explosive performance."
                        },
                        {
                            name: "McLaren 720S",
                            image: "https://www.motortrend.com/uploads/sites/5/2018/01/2018-McLaren-720S-front-three-quarter-in-motion-03-e1517261424651.jpg",
                            desc: "A breathtaking supercar offering class-leading power-to-weight ratio and dynamic precision."
                        },
                        {
                            name: "McLaren Artura",
                            image: "https://media.autoexpress.co.uk/image/private/s--Ee1vuzT6--/v1613482001/autoexpress/2021/02/McLaren%20Artura%202021-24.jpg",
                            desc: "The latest plug-in hybrid supercar — delivering agility, efficiency, and pure driver engagement."
                        },
                    ].map((model, index) => (
                        <div key={index} className="bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-500 shadow-lg">
                            <img src={model.image} alt={model.name} className="h-56 w-full object-cover" />
                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-orange-400">{model.name}</h3>
                                <p className="text-gray-300">{model.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* McLaren Philosophy */}
            <section className="bg-black/80 py-16 px-6 text-center text-gray-200 space-y-8">
                <h2 className="text-4xl font-bold text-orange-400">The McLaren Philosophy</h2>
                <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                    At McLaren, it’s not just about building fast cars — it’s about creating the most exciting driver-focused experience possible. 
                    From pioneering carbon fiber monocoques to F1-derived aerodynamics, every McLaren embodies the relentless pursuit of performance.
                </p>
                <blockquote className="italic text-xl max-w-3xl mx-auto text-orange-300">
                    "Everything for a reason — less weight, more speed, ultimate control."
                </blockquote>
            </section>

            {/* Pros & Cons */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">
                <h2 className="text-4xl font-bold text-orange-400">Pros & Cons of McLaren Ownership</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-400">Pros</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>Lightweight engineering = incredible performance</li>
                            <li>F1-inspired tech and aerodynamics</li>
                            <li>Unique and modern design language</li>
                            <li>Rare and exclusive ownership</li>
                            <li>Phenomenal handling and track capability</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-red-400">Cons</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>High cost of ownership and maintenance</li>
                            <li>Specialized service requirements</li>
                            <li>Limited practicality</li>
                            <li>Can feel harsh on rough roads</li>
                            <li>Availability — some models require waitlists</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final Section + Visit Site */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-center space-y-8 text-gray-100">
                <h2 className="text-4xl font-bold text-orange-400">Experience McLaren</h2>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                    Whether you crave the technological wonder of the P1, the balanced brilliance of the 720S, or the hybrid innovation of the Artura — McLaren delivers driving purity at its finest.
                    Explore the range and experience the thrill of McLaren.
                </p>

                <a
                    href="https://cars.mclaren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-8 py-4 bg-orange-400 text-black font-bold text-lg rounded-full shadow-lg transition transform hover:scale-105 hover:bg-orange-300"
                >
                    Visit Official McLaren Site
                </a>
            </section>
        </div>
    );
};

export default McLarenPage;
