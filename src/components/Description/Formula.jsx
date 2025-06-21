import React from "react";

const FormulaCarPage = () => {
    return (
        <div className="p-6 space-y-16 max-w-7xl mx-auto font-sans">

            {/* Hero Section */}
            <section className="relative h-[30rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://cdn.motor1.com/images/mgl/OPp7Y/s1/formula-1-vision-concept-2025-by-antonio-paglia-design.jpg"
                    alt="Formula Car"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-red-700/30 flex flex-col items-start justify-end text-white px-10 py-10">
                    <h1 className="text-6xl md:text-7xl font-black tracking-tight drop-shadow-xl">
                        Formula Cars
                    </h1>
                    <p className="text-lg mt-3 max-w-xl text-gray-200">
                        Precision machines built for pure speed, agility, and adrenaline.
                    </p>
                </div>
            </section>

            {/* What is a Formula Car */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                    <h2 className="text-4xl font-bold text-gray-900">What is a Formula Car?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Formula cars are purpose-built racing machines engineered for track dominance. With open wheels, lightweight bodies, and advanced aerodynamics, they are capable of mind-blowing acceleration and cornering precision.
                    </p>
                </div>
                <img
                    src="https://s1.cdn.autoevolution.com/images/news/gallery/audi-teases-first-ever-formula-one-racer-with-help-from-ea-s-f1-22_5.jpg"
                    alt="Formula Car"
                    className="rounded-2xl w-full h-80 object-cover shadow-xl"
                />
            </section>

            {/* Pros and Cons */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-2xl shadow-md">
                        <h3 className="text-2xl font-bold text-green-700 mb-3">Pros</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Extreme speed and acceleration</li>
                            <li>Precision handling and control</li>
                            <li>Top-tier motorsport engineering</li>
                            <li>Built for competitive performance</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow-md">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Not road-legal</li>
                            <li>Very expensive and high maintenance</li>
                            <li>Requires professional driving skills</li>
                            <li>Not practical for daily use</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Formula Car Teams */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Formula Racing Teams</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                        { name: "Ferrari", logo: "https://purepng.com/public/uploads/large/purepng.com-ferrari-logoferrariferrari-carsferrari-automobilescarssportferrari-logo-17015274809730h2ic.png", link: "https://www.ferrari.com/en-EN/formula1" },
                        { name: "Red Bull Racing", logo: "https://pngimg.com/uploads/red_bull/red_bull_PNG26.png", link: "https://www.redbullracing.com" },
                        { name: "Mercedes-AMG", logo: "https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo.png", link: "https://www.mercedesamgf1.com" },
                        { name: "McLaren", logo: "https://pngimg.com/uploads/Mclaren/Mclaren_PNG47.png", link: "https://www.mclaren.com/racing" },
                    ].map((team) => (
                        <a
                            key={team.name}
                            href={team.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl flex flex-col items-center space-y-3"
                        >
                            <img src={team.logo} alt={team.name} className="h-12 object-contain" />
                            <span className="text-center font-medium text-gray-800">{team.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Famous Formula Cars */}
            <section>
                <h2 className="text-4xl font-bold mb-8 text-gray-800">Iconic Formula Cars</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Mercedes W11",
                            img: "https://wallpapercave.com/wp/wp6962041.jpg",
                            desc: "Dominant car in 2020 F1 season with Lewis Hamilton."
                        },
                        {
                            name: "Ferrari F2004",
                            img: "https://lh3.googleusercontent.com/-nSKybrtP1IE/UFnt-owTIRI/AAAAAAAARYU/ndlv_QnSSwQVAbrv6j2YIOn_oBV_BECagCCoYBhgL/d/F1-Fansite.com%2B2004%2BHD%2Bwallpaper%2BF1%2BGP%2BGermany_14.jpg",
                            desc: "Michael Schumacher’s legendary F1 title-winning car."
                        },
                        {
                            name: "Red Bull RB19",
                            img: "https://cdn-9.motorsport.com/images/amp/YEQg7m5Y/s1000/formula-1-miami-gp-2023-sergio-2.jpg",
                            desc: "2023 championship-winning car driven by Max Verstappen."
                        }
                    ].map((car) => (
                        <div key={car.name} className="bg-white p-5 rounded-2xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-48 object-cover rounded-xl" />
                            <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                            <p className="text-sm text-gray-600">{car.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-red-800 to-gray-900 text-white p-10 rounded-2xl text-center space-y-5 shadow-xl">
                <h2 className="text-3xl font-bold">Feel the Speed. Live the Race.</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Formula cars represent the cutting edge of automotive engineering. Built for the elite and driven by legends, they deliver the ultimate thrill. Explore more about the world of Formula racing.
                </p>
            </section>
        </div>
    );
};

export default FormulaCarPage;
