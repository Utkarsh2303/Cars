import React from "react";

const LimousineCarPage = () => {
    return (
        <div className="p-6 space-y-12 max-w-7xl mx-auto font-sans">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://www.miami305limos.com/img/1.JPG"
                    alt="Limousines"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 flex flex-col items-start justify-center text-white px-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl">Luxury on Wheels.</h1>
                    <p className="text-xl mt-3 font-medium">Where comfort meets class – the essence of limousine travel</p>
                </div>
            </section>

            {/* What is a Limousine */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">What is a Limousine?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Limousines are the epitome of luxury transportation. Known for their stretched body, plush interiors, and chauffeur-driven appeal, they’re built for grand events, executive travel, and VIP experiences. With spacious cabins and high-end amenities, limousines redefine travel elegance.
                    </p>
                </div>
                <img
                    src="https://images.squarespace-cdn.com/content/v1/59a18fe46b8f5be647f23512/1632505327446-WJNBNRF1LUOLVY9TKWER/VIP+Limo+Service+Rolls+Royce+Phantom+Stretch+Limo+Exterior+09.jpg"
                    alt="Limousine"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
            </section>

            {/* Why Choose a Limousine */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src="https://i.pinimg.com/originals/e5/76/ec/e576ecb58b5c4455e7d265415e8768e5.jpg"
                    alt="Luxury Ride"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose a Limousine?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Limousines provide unparalleled prestige and comfort. Perfect for weddings, VIP airport transfers, and corporate events, they offer features like leather seating, privacy dividers, minibars, and ambient lighting — all tailored for a first-class experience.
                    </p>
                </div>
            </section>

            {/* Pros and Cons */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-green-700 mb-3">Pros</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Unmatched luxury and comfort</li>
                            <li>Spacious interiors and high-end features</li>
                            <li>Ideal for events and VIP services</li>
                            <li>Strong road presence</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>High purchase and maintenance cost</li>
                            <li>Low fuel efficiency</li>
                            <li>Limited drivability in crowded areas</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Limousine Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Limousine Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[{
                        name: "Mercedes-Benz",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
                        link: "https://www.mercedes-benz.com",
                    }, {
                        name: "Cadillac",
                        logo: "https://logos-world.net/wp-content/uploads/2021/03/Cadillac-Logo.png",
                        link: "https://www.cadillac.com",
                    }, {
                        name: "Rolls-Royce",
                        logo: "https://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png",
                        link: "https://www.rolls-roycemotorcars.com",
                    }, {
                        name: "Lincoln",
                        logo: "https://logosmarken.com/wp-content/uploads/2021/09/Lincoln-Emblem.png",
                        link: "https://www.lincoln.com",
                    }].map((brand) => (
                        <a
                            key={brand.name}
                            href={brand.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl flex flex-col items-center space-y-3"
                        >
                            <img src={brand.logo} alt={brand.name} className="h-12 object-contain" />
                            <span className="text-center font-medium text-gray-800">{brand.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Budget Limousine Alternatives */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Entry-Level Luxury Sedans (Under ₹50L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[{
                        name: "Mercedes-Benz E-Class",
                        img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/mercedes-benz-e-class-front-three-quarter.jpg",
                    }, {
                        name: "BMW 5 Series",
                        img: "https://performancedrive.com.au/wp-content/uploads/2023/05/2024-BMW-5-Series.jpeg",
                    }, {
                        name: "Audi A6",
                        img: "https://paultan.org/image/2023/06/2024-Audi-A6-A7-facelift-debut-21.jpg",
                    }].map((car) => (
                        <div key={car.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Premium Picks */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Ultra-Luxury Picks</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://1.bp.blogspot.com/-2JiphXYABoU/X20tvc5NtDI/AAAAAAAAjPM/V786Q47Ixik8uIM8V8g2TYCW1iXDwFTdQCLcBGAsYHQ/s2048/Rolls-Royce-Ghost-Extended%2B%25286%2529.jpg"
                            alt="Rolls-Royce Ghost"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Rolls-Royce Ghost</h3>
                        <p>The pinnacle of luxury sedans – iconic design, unmatched craftsmanship, and supreme ride comfort.</p>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://cdn.motor1.com/images/mgl/Boz9M/s1/mercedes-maybach-gls-2020.jpg"
                            alt="Mercedes-Maybach GLS"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Mercedes-Maybach GLS</h3>
                        <p>Luxury SUV-limo hybrid with first-class rear seats, ambient tech, and elite chauffeur-ready presence.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-gray-900 to-purple-900 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                <h2 className="text-3xl font-bold">Ride the Prestige</h2>
                <p className="text-lg max-w-2xl mx-auto">Limousines are not just vehicles — they’re a statement. Perfect for the unforgettable moments in life.</p>
            </section>
        </div>
    );
};

export default LimousineCarPage;
