import React from "react";

const MuscleCarPage = () => {
    return (
        <div className="p-6 space-y-12 max-w-7xl mx-auto font-sans">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://wallpaperaccess.com/full/20721.jpg"
                    alt="Muscle Cars"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 flex flex-col items-start justify-center text-white px-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">Raw Power. Iconic Design.</h1>
                    <p className="text-xl mt-3 font-medium">Step into the roar of the Muscle Car legacy</p>
                </div>
            </section>

            {/* What is a Muscle Car */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">What is a Muscle Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Muscle cars are high-performance American coupes with powerful V8 engines, bold styling, and a focus on straight-line speed. Born in the 1960s, these beasts remain a symbol of rebellion and automotive thrill.
                    </p>
                </div>
                <img
                    src="https://wallpaperaccess.com/full/39405.jpg"
                    alt="What is a Muscle Car"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
            </section>

            {/* Why Choose a Muscle Car */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src="http://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Muscle-Car-Photo-Download.jpg"
                    alt="Why Choose Muscle Cars"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose a Muscle Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Muscle cars are all about emotion — the deep rumble of a V8, the adrenaline rush of pure torque, and timeless road presence. They blend performance, design, and attitude into a thrilling package.
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
                            <li>Unmatched engine performance</li>
                            <li>Distinctive, aggressive styling</li>
                            <li>Deep cultural heritage</li>
                            <li>High fun-to-drive factor</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Poor fuel efficiency</li>
                            <li>Heavier than modern sports cars</li>
                            <li>Less practical for daily use</li>
                            <li>Higher emission levels</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Muscle Car Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Muscle Car Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[{
                        name: "Ford",
                        logo: "https://www.pngmart.com/files/22/Ford-Logo-PNG-Clipart.png",
                        link: "https://www.ford.com",
                    }, {
                        name: "Dodge",
                        logo: "https://pngimg.com/uploads/dodge/dodge_PNG51.png",
                        link: "https://www.dodge.com",
                    }, {
                        name: "Chevrolet",
                        logo: "https://logos-world.net/wp-content/uploads/2021/03/Chevrolet-Logo.png",
                        link: "https://www.chevrolet.com",
                    }, {
                        name: "Pontiac",
                        logo: "https://logos-world.net/wp-content/uploads/2021/04/Pontiac-Logo.png",
                        link: "https://www.pontiac.com",
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

            {/* Budget-Friendly Picks */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Budget-Friendly Picks (Under ₹30L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[{
                        name: "Dodge Challenger SXT",
                        img: "http://www.thedetroitbureau.com/wp-content/uploads/2019/03/2019-Dodge-Challenger-SXT.jpg",
                    }, {
                        name: "Ford Mustang EcoBoost",
                        img: "https://www.hdcarwallpapers.com/download/2020_ford_mustang_ecoboost_convertible_high_performance_package_4k_8k-5120x2880.jpg",
                    }, {
                        name: "Chevrolet Camaro LT",
                        img: "https://cdn.dealeraccelerate.com/adrenalin/1/2176/58115/1920x1440/2013-chevrolet-camaro-2dr-cpe-lt-w-2lt",
                    }].map((car) => (
                        <div key={car.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Luxury Picks */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Luxury & Performance Picks</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://www.motortrend.com/uploads/2021/11/2022-Ford-Mustang-Shelby-GT500-Heritage-Edition-14.jpg"
                            alt="Mustang Shelby GT500"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Feature-Rich Pick: Mustang Shelby GT500</h3>
                        <p>Supercharged performance and iconic styling, packed with modern tech.</p>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://s1.cdn.autoevolution.com/images/news/gallery/for-sale-2018-dodge-challenger-srt-demon-shows-only-483-miles-from-new_8.jpg"
                            alt="Dodge Challenger SRT Demon 170"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Luxury Pick: Dodge Challenger SRT Demon 170</h3>
                        <p>Top-of-the-line performance beast with jaw-dropping acceleration and presence.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                <h2 className="text-3xl font-bold">Crave Power and Legacy?</h2>
                <p className="text-lg max-w-2xl mx-auto">Muscle cars blend heritage, horsepower, and head-turning design. Whether it's nostalgia or thrill you're after — they're built to impress.</p>
            </section>
        </div>
    );
};

export default MuscleCarPage;
