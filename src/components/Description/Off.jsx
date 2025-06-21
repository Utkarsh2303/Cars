import React from "react";

const OffRoadVehiclesPage = () => {
    return (
        <div className="p-6 space-y-12 max-w-7xl mx-auto font-sans">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://wallpapercave.com/wp/wp6984790.jpg"
                    alt="Off-Road Adventure"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/30 flex flex-col items-start justify-center text-white px-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">Built for the Wild</h1>
                    <p className="text-xl mt-3 font-medium">Where the road ends, the fun begins</p>
                </div>
            </section>

            {/* What is an Off-Road Vehicle */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">What is an Off-Road Vehicle?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Off-road vehicles are engineered to traverse tough terrains — from steep hills to muddy trails. They are equipped with high ground clearance, all-terrain tires, and four-wheel-drive systems for unmatched durability.
                    </p>
                </div>
                <img
                    src="https://fourwheeltrends.com/wp-content/uploads/2021/03/35483735_l-scaled.jpg"
                    alt="Off-Road Vehicle"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
            </section>

            {/* Why Choose an Off-Road Vehicle */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src="https://car-images.bauersecure.com/wp-images/161078/1752x1168/jeepoffroad_01.jpg?mode=max&quality=90&scale=down"
                    alt="Why Off-Road"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose an Off-Road Vehicle?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Whether you're exploring the mountains or fording rivers, off-road vehicles deliver power, durability, and freedom. They're perfect for outdoor enthusiasts and adventure seekers.
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
                            <li>Excellent for rugged terrain</li>
                            <li>Powerful towing capacity</li>
                            <li>High seating and visibility</li>
                            <li>Enhanced safety features</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Lower fuel economy</li>
                            <li>Bulky for city driving</li>
                            <li>Higher maintenance costs</li>
                            <li>Expensive initial cost</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Off-Road Vehicle Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[{
                        name: "Jeep",
                        logo: "http://www.carlogos.org/logo/Jeep-logo-3D-2560x1440.png",
                        link: "https://www.jeep.com",
                    }, {
                        name: "Toyota",
                        logo: "https://www.pnguniverse.com/wp-content/uploads/2020/10/Toyota.png",
                        link: "https://www.toyota.com",
                    }, {
                        name: "Ford",
                        logo: "https://www.pngmart.com/files/22/Ford-Logo-PNG-Clipart.png",
                        link: "https://www.ford.com",
                    }, {
                        name: "Land Rover",
                        logo: "https://logos-world.net/wp-content/uploads/2021/09/Land-Rover-Logo-1986-present.png",
                        link: "https://www.landrover.in",
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
                        name: "Mahindra Thar",
                        img: "https://www.livemint.com/lm-img/img/2023/05/22/1600x900/Mahindrathar_1604486465203_1604486476898_1684738538587.jpg",
                    }, {
                        name: "Force Gurkha",
                        img: "https://cdni.autocarindia.com/ExtraImages/20210915094850_Gurkha_front.jpg",
                    }, {
                        name: "Suzuki Jimny",
                        img: "https://cdni.autocarindia.com/ExtraImages/20210517030249_Maruti_Suzuki_Jimny.jpg",
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
                            src="https://paultan.org/image/2023/04/2024-Land-Rover-Defender-Outbound-01-e1682560448660.jpg"
                            alt="Land Rover Defender"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Feature-Rich Pick: Land Rover Defender</h3>
                        <p>Rugged yet refined, this off-roader blends luxury with legendary capability.</p>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://moparinsiders.com/wp-content/uploads/2023/02/2023-Jeep%C2%AE-Wrangler-Unlimited-Rubicon-392-20th-Anniversary-Edition.-Jeep.-7-scaled.jpeg"
                            alt="Jeep Wrangler Rubicon"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Luxury Pick: Jeep Wrangler Rubicon</h3>
                        <p>Iconic and unstoppable — the Rubicon delivers unmatched off-road prowess and tech.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-green-800 to-green-600 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                <h2 className="text-3xl font-bold">Ready for Adventure?</h2>
                <p className="text-lg max-w-2xl mx-auto">Off-road vehicles are your gateway to untouched landscapes. Rugged, reliable, and made for thrill — your journey begins beyond the pavement.</p>
            </section>
        </div>
    );
};

export default OffRoadVehiclesPage;