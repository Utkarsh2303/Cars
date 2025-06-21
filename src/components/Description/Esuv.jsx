import React from "react";

const ElectricSUVPage = () => {
    return (
        <div className="p-6 space-y-12 max-w-7xl mx-auto font-sans">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://car-images.bauersecure.com/wp-images/4020/best-electric-suvs-kia-ev9-front-blue.jpg"
                    alt="Electric SUVs"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 flex flex-col items-start justify-center text-white px-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
                        Electric SUVs
                    </h1>
                    <p className="text-xl mt-3 font-medium">Sustainable power meets family comfort and space.</p>
                </div>
            </section>

            {/* What is an Electric SUV */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">What is an Electric SUV?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Electric SUVs combine the spaciousness and safety of traditional sport utility vehicles with the eco-friendly and cost-efficient benefits of electric powertrains. They're perfect for modern families and conscious commuters alike.
                    </p>
                </div>
                <img
                    src="https://cdni.autocarindia.com/ExtraImages/20240301051252_Toyota_Urban_SUV_Concept_2023_1280_01_RED.jpg"
                    alt="Electric SUV"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
            </section>

            {/* Why Choose an Electric SUV */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src="https://www.cartoq.com/wp-content/uploads/2024/01/2025-tata-sierra-electric-suv.jpg"
                    alt="Why Electric SUV"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose an Electric SUV?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Electric SUVs offer a powerful yet clean driving experience with lower running costs, impressive torque, and government incentives. With increasing charging infrastructure and battery range, they're a smart investment for the future.
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
                            <li>Zero emissions and environmentally friendly</li>
                            <li>Lower running and maintenance costs</li>
                            <li>Instant torque and smooth acceleration</li>
                            <li>Government subsidies and tax benefits</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Higher upfront cost</li>
                            <li>Charging infrastructure still growing</li>
                            <li>Longer refueling time than petrol/diesel</li>
                            <li>Battery degradation over time</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Electric SUV Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Electric SUV Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                        { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/512px-Tesla_Motors.svg.png", link: "https://www.tesla.com/" },
                        { name: "Hyundai", logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png", link: "https://www.hyundai.com/" },
                        { name: "Kia", logo: "https://www.pngarts.com/files/3/Kia-Motors-Logo-PNG-Image.png", link: "https://www.kia.com/" },
                        { name: "Volvo", logo: "https://cdn.freebiesupply.com/logos/large/2x/volvo-logo-png-transparent.png", link: "https://www.volvocars.com/" },
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

            {/* Budget Electric SUV Options */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Best Electric SUVs (₹15L - ₹40L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: "Tata Nexon EV", img: "https://www.cartoq.com/wp-content/uploads/2023/09/tata-nexon-ev-1.jpg" },
                        { name: "MG ZS EV", img: "https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/05/2023-MG-ZS-EV-Long-Range-38.jpg" },
                        { name: "Hyundai Kona Electric", img: "https://www.carscoops.com/wp-content/uploads/2023/02/Hyundai-Kona-Electric-2.jpg" },
                    ].map((car) => (
                        <div key={car.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Electric SUV Picks</h2>
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Feature-Rich Pick */}
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4 w-full md:w-1/2">
                        <img
                            src="https://cdn-ds.com/media/sz_459883/3427/Kia/EV6/kia_EV6_2024_asset-carousel-9.jpg"
                            alt="Kia EV6"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Kia EV6</h3>
                        <p>
                            A futuristic crossover EV with 500+ km range, ultra-fast charging, dual motors, and striking design.
                        </p>
                    </div>

                    {/* Luxury Electric SUV */}
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4 w-full md:w-1/2">
                        <img
                            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Range_Desktop-LHD.jpg"
                            alt="Tesla Model X"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Tesla Model X</h3>
                        <p>
                            The benchmark in electric luxury SUVs with falcon-wing doors, 1000+ HP (Plaid), and 580+ km range.
                        </p>
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="bg-gradient-to-r from-green-700 to-gray-900 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                <h2 className="text-3xl font-bold">Drive Into the Future, Silently</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Electric SUVs are shaping tomorrow's roads. Spacious, powerful, and green—choose a ride that cares for both your family and the planet.
                </p>
            </section>
        </div>
    );
};

export default ElectricSUVPage;
