import React from "react";

const FerrariPage = () => {
    return (
        <div className="font-sans text-gray-100 bg-gradient-to-b from-black via-red-900 to-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src="https://wallpapercave.com/wp/wp6953085.jpg"
                    alt="Ferrari Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-6xl md:text-7xl font-extrabold text-red-500 mb-6">Ferrari</h1>
                    <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto italic">
                        The art of performance. The spirit of racing. The heart of Italy.
                    </p>
                </div>
            </section>

            {/* About Ferrari */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-6 text-gray-100">
                <h2 className="text-4xl font-bold text-red-500">About Ferrari</h2>
                <p className="text-lg leading-relaxed">
                    Ferrari S.p.A. is a globally renowned Italian luxury sports car manufacturer founded by Enzo Ferrari in 1939. Rooted deeply in motorsport history, Ferrari stands as an icon of speed, craftsmanship, and innovation. 
                    Its cars blend cutting-edge technology with timeless Italian design, and the unmistakable prancing horse badge symbolizes a tradition of excellence both on the road and the racetrack.
                </p>
            </section>

            {/* Legendary Models */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-12 text-gray-100">
                <h2 className="text-4xl font-bold text-red-500">Legendary Ferrari Models</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Ferrari LaFerrari",
                            image: "https://s1.cdn.autoevolution.com/images/gallery/FERRARILaFerrari-4797_9.jpg",
                            desc: "A cutting-edge hybrid hypercar — Ferrari’s most ambitious expression of technology and design."
                        },
                        {
                            name: "Ferrari F8 Tributo",
                            image: "https://www.hdcarwallpapers.com/walls/ferrari_f8_tributo_2019_4k_5k_2-HD.jpg",
                            desc: "A mid-engine V8 masterpiece, celebrating Ferrari’s racing DNA and award-winning design."
                        },
                        {
                            name: "Ferrari Roma",
                            image: "https://www.completecar.ie/img/testdrives/10300_large.jpg",
                            desc: "A contemporary GT car — pure elegance meets exhilarating performance for the modern Ferrari enthusiast."
                        },
                    ].map((model, index) => (
                        <div key={index} className="bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500 shadow-lg">
                            <img src={model.image} alt={model.name} className="h-56 w-full object-cover"/>
                            <div className="p-6 space-y-3">
                                <h3 className="text-2xl font-bold text-red-400">{model.name}</h3>
                                <p className="text-gray-300">{model.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ferrari Experience */}
            <section className="bg-black/80 py-16 px-6 text-center text-gray-200 space-y-8">
                <h2 className="text-4xl font-bold text-red-500">Owning a Ferrari</h2>
                <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                    Owning a Ferrari is not just about driving — it’s about joining a passionate community that reveres performance, design, and racing legacy. Whether it’s for thrilling drives, elegant grand touring, or pure automotive art, Ferrari ownership is an exclusive lifestyle.
                </p>
                <blockquote className="italic text-xl max-w-3xl mx-auto text-red-300">
                    "If you can dream it, you can do it." — Enzo Ferrari
                </blockquote>
            </section>

            {/* Pros & Cons */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">
                <h2 className="text-4xl font-bold text-red-500">Pros & Cons of Ferrari Ownership</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-400">Pros</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>Prestige of the Ferrari brand</li>
                            <li>Exceptional driving dynamics and performance</li>
                            <li>Hand-crafted Italian design</li>
                            <li>Strong racing heritage</li>
                            <li>Potential collectible value of certain models</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-red-400">Cons</h3>
                        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300">
                            <li>High cost of ownership & maintenance</li>
                            <li>Waitlists for popular models</li>
                            <li>Strict maintenance schedules</li>
                            <li>High insurance premiums</li>
                            <li>Low practicality for everyday driving</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Visit Official Site */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-center space-y-8 text-gray-100">
                <h2 className="text-4xl font-bold text-red-500">Ready to Drive the Dream?</h2>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                    Ferrari cars are more than machines — they are living, breathing expressions of art and passion. If you’re ready to become part of the Ferrari legacy, explore their latest models and create your dream Ferrari today.
                </p>

                <a
                    href="https://www.ferrari.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-8 py-4 bg-red-500 text-black font-bold text-lg rounded-full shadow-lg transition transform hover:scale-105 hover:bg-red-400"
                >
                    Visit Official Ferrari Site
                </a>
            </section>
        </div>
    );
};

export default FerrariPage;
