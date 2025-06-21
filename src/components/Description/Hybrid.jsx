import React from "react";

const HybridCarPage = () => {
    return (
        <div className="p-6 space-y-14 max-w-7xl mx-auto font-sans">
            {/* Hero Section */}
            <section className="relative h-[30rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://www.toyota.com.au/-/media/toyota/main-site/newsroom/2020/20200108_toyotahybrids.jpg?h=1080&w=1920&la=en&hash=5349B26BA5A8D14BE3113BD1C2689786"
                    alt="Hybrid Cars"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-500/30 flex flex-col items-start justify-center text-white px-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl">Efficiency Meets Innovation</h1>
                    <p className="text-xl mt-4 font-medium">Explore the intelligent world of Hybrid Cars</p>
                </div>
            </section>

            {/* What is a Hybrid Car */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                    <h2 className="text-4xl font-bold text-gray-800">What is a Hybrid Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Hybrid cars use a combination of a petrol/diesel engine and an electric motor to optimize fuel efficiency while reducing emissions. They switch seamlessly between or combine both power sources for maximum performance and economy.
                    </p>
                </div>
                <img
                    src="https://techcentral.co.za/wp-content/uploads/2020/07/toyota-prius-2156-1120.jpg"
                    alt="What is a Hybrid Car"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
            </section>

            {/* Why Choose a Hybrid Car */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://fastcompanyme.com/wp-content/uploads/2024/03/Hybrid-cars-have-never-been-more.jpg"
                    alt="Why Choose Hybrid Cars"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
                <div className="space-y-5">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose a Hybrid Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Hybrid cars are perfect for eco-conscious drivers who don’t want to compromise on range or comfort. Enjoy smoother drives, lower running costs, and a step toward a sustainable future.
                    </p>
                </div>
            </section>

            {/* Pros and Cons */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-green-800 mb-3">Pros</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Excellent fuel efficiency</li>
                            <li>Lower CO₂ emissions</li>
                            <li>Quieter driving experience</li>
                            <li>Tax and incentive benefits</li>
                        </ul>
                    </div>
                    <div className="bg-red-100 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-800 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Higher upfront cost</li>
                            <li>Battery replacement cost</li>
                            <li>Less power than traditional engines</li>
                            <li>Not ideal for long high-speed trips</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Hybrid Car Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Hybrid Car Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[{
                        name: "Toyota",
                        logo: "https://www.pnguniverse.com/wp-content/uploads/2020/10/Toyota.png",
                        link: "https://www.toyota.com",
                    }, {
                        name: "Honda",
                        logo: "https://www.carlogos.org/logo/Honda-logo.png",
                        link: "https://www.honda.com",
                    }, {
                        name: "Hyundai",
                        logo: "https://www.carlogos.org/logo/Hyundai-logo.png",
                        link: "https://www.hyundai.com",
                    }, {
                        name: "Kia",
                        logo: "https://www.carlogos.org/logo/Kia-logo.png",
                        link: "https://www.kia.com",
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
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Budget-Friendly Picks (Under ₹25L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[{
                        name: "Toyota Prius",
                        img: "https://media.ed.edmunds-media.com/toyota/prius/2023/oem/2023_toyota_prius_4dr-hatchback_limited_fq_oem_1_1600.jpg",
                    }, {
                        name: "Honda Insight",
                        img: "https://www.motortrend.com/uploads/sites/5/2019/02/2019-Honda-Insight-EX-front-three-quarter-5.jpg",
                    }, {
                        name: "Hyundai Ioniq Hybrid",
                        img: "https://cdn.motor1.com/images/mgl/EV6rM/s1/2017-hyundai-ioniq-hybrid.jpg",
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
                            src="https://images.hgmsites.net/hug/lexus-es_100789279_h.jpg"
                            alt="Lexus ES 300h"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Feature-Rich Pick: Lexus ES 300h</h3>
                        <p>Premium comfort, smooth hybrid tech, and incredible reliability.</p>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://car-images.bauersecure.com/wp-images/13337/1752x1168/sphev_101.jpg?mode=max&quality=90&scale=down"
                            alt="Mercedes-Benz S-Class Hybrid"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Luxury Pick: Mercedes-Benz S-Class Hybrid</h3>
                        <p>Unmatched luxury meets intelligent hybrid performance in this flagship sedan.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                <h2 className="text-3xl font-bold">Drive Smart. Drive Hybrid.</h2>
                <p className="text-lg max-w-2xl mx-auto">Hybrid cars offer a cleaner, quieter, and smarter way to travel — ideal for a sustainable tomorrow.</p>
            </section>
        </div>
    );
};

export default HybridCarPage;