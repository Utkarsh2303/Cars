import React from "react";

const SuperCarPage = () => {
    return (
        <div className="p-6 space-y-12 max-w-7xl mx-auto font-sans">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://www.hdcarwallpapers.com/walls/mclaren_p1_supercars_4k-HD.jpg"
                    alt="Supercars"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 flex flex-col items-start justify-center text-white px-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
                        Supercars: Power Meets Prestige
                    </h1>
                    <p className="text-xl mt-3 font-medium">Built to dominate streets and racetracks alike.</p>
                </div>
            </section>

            {/* What is a Supercar */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">What is a Supercar?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Supercars are ultra-high-performance vehicles engineered for extraordinary speed, acceleration, handling, and exclusivity. They're the pinnacle of automotive innovation—often blending luxury and race-ready performance into one thrilling machine.
                    </p>
                </div>
                <img
                    src="https://www.hdcarwallpapers.com/walls/lamborghini_terzo_millennio_ev_supercar_4k-HD.jpg"
                    alt="Supercar"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
            </section>

            {/* Why Choose a Supercar */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src="https://images.hindustantimes.com/auto/img/2022/11/07/1600x900/Lamborghini-Huracan_Tecnica_1667819015934_1667819016071_1667819016071.jpg"
                    alt="Why Supercar"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose a Supercar?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Supercars are more than just fast cars—they’re rolling pieces of art. From jaw-dropping design to cutting-edge technology and roaring engines, supercars offer an unmatched blend of status, adrenaline, and passion for speed.
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
                            <li>Unrivaled performance and speed</li>
                            <li>Prestige and exclusivity</li>
                            <li>State-of-the-art engineering and design</li>
                            <li>Collector's value and brand heritage</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Extremely expensive</li>
                            <li>High insurance and maintenance costs</li>
                            <li>Low practicality for daily use</li>
                            <li>Attracts too much attention for some</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Supercar Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Supercar Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                        {
                            name: "Bugatti",
                            logo: "https://www.pngmart.com/files/22/Bugatti-Logo-PNG-Image.png",
                            link: "https://www.bugatti.com/",
                        },
                        {
                            name: "Ferrari",
                            logo: "https://logos-world.net/wp-content/uploads/2020/06/Ferrari-Logo.png",
                            link: "https://www.ferrari.com",
                        },
                        {
                            name: "McLaren",
                            logo: "https://pngimg.com/uploads/Mclaren/Mclaren_PNG49.png",
                            link: "https://cars.mclaren.com/",
                        },
                        {
                            name: "Koenigsegg",
                            logo: "https://static.wixstatic.com/media/f2bf43_179328483f634f938a5a638b192b6005~mv2.png",
                            link: "https://www.koenigsegg.com/",
                        },
                    ].map((brand) => (
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

            {/* Budget Options (Relative) */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Entry-Level Supercars (₹1-2 Cr)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Porsche 911 Turbo",
                            img: "https://www.hdwallpapers.in/download/topcar_porsche_911_turbo_s_stinger_gtr_carbon_edition_2021_4k_5k_hd_cars-HD.jpg",
                        },
                        {
                            name: "Chevrolet Corvette Z06",
                            img: "https://cdn.motor1.com/images/mgl/P3onNL/s1/2023-chevrolet-corvette-z06.jpg",
                        },
                        {
                            name: "Nissan GT-R",
                            img: "https://cdn.motor1.com/images/mgl/JJkj4/s3/nissan-gt-r-t-spec.jpg",
                        },
                    ].map((car) => (
                        <div key={car.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Flagship Supercars */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Ultimate Supercars</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://www.topgear.com/sites/default/files/2023/08/Bugatti%20Chiron%20Super%20Sport%20Golden%20Era_material%20under%20embargo%20(1).jpg"
                            alt="Bugatti Chiron Super Sport"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Bugatti Chiron Super Sport</h3>
                        <p>1,600 HP and a top speed over 490 km/h—one of the fastest production cars ever built.</p>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://www.supercars.net/blog/wp-content/uploads/2020/10/david-baylis-01-rtx-on-scaled.jpg"
                            alt="Koenigsegg Jesko"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Koenigsegg Jesko</h3>
                        <p>A Swedish marvel with a revolutionary engine and transmission pushing the limits of physics.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-gray-900 to-red-700 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                <h2 className="text-3xl font-bold">Rule the Roads & the Track</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Supercars are the crown jewels of the automobile world. Own one and enter a realm where design, prestige, and raw power converge.
                </p>
            </section>
        </div>
    );
};

export default SuperCarPage;
