import React from "react";

const PickupSuvPage = () => {
    return (
        <div className="p-6 space-y-16 max-w-7xl mx-auto font-sans bg-gray-50">

            {/* Hero Section */}
            <section className="relative h-[30rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://cdn.motor1.com/images/mgl/ZpRkr/s1/toyota-corolla-cross-pickup-rendering-by-kdesign-ag.jpg"
                    alt="Pickup SUVs"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-yellow-800/40 flex flex-col items-start justify-end text-white px-10 py-10">
                    <h1 className="text-6xl md:text-7xl font-black drop-shadow-lg">
                        Pickup SUVs
                    </h1>
                    <p className="text-lg mt-2 text-gray-200 max-w-xl">
                        Built for utility, strength, and off-road adventures—pickup SUVs combine performance with practicality.
                    </p>
                </div>
            </section>

            {/* What is a Pickup SUV */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                    <h2 className="text-4xl font-bold text-gray-900">What is a Pickup SUV?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Pickup SUVs offer the ruggedness of trucks with the comfort of SUVs. Designed for load-carrying,
                        towing, and off-road utility, these vehicles are ideal for work, long trips, and rural terrain.
                    </p>
                </div>
                <img
                    src="https://rare-gallery.com/uploads/posts/878479-Gladiator-Overland-2019-Jeep-Sunrises-and-sunsets.jpg"
                    alt="Pickup SUV"
                    className="rounded-2xl w-full h-80 object-cover shadow-xl"
                />
            </section>

            {/* Pros and Cons */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-6 rounded-2xl shadow-md">
                        <h3 className="text-2xl font-bold text-green-800 mb-3">Pros</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Strong towing and hauling capacity</li>
                            <li>Rugged build for all terrains</li>
                            <li>Spacious cabins and versatile usage</li>
                            <li>Great for adventure and utility</li>
                        </ul>
                    </div>
                    <div className="bg-red-100 p-6 rounded-2xl shadow-md">
                        <h3 className="text-2xl font-bold text-red-800 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Larger size makes city driving tough</li>
                            <li>Lower mileage compared to compact SUVs</li>
                            <li>Higher maintenance costs</li>
                            <li>Limited maneuverability in tight spaces</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Pickup SUV Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Pickup SUV Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                        { name: "Toyota", logo: "https://clipground.com/images/toyota-logo-png-9.png", link: "https://www.toyota.com" },
                        { name: "Ford", logo: "https://www.pngmart.com/files/22/Ford-Logo-PNG-Clipart.png", link: "https://www.ford.com" },
                        { name: "Isuzu", logo: "https://www.pikpng.com/pngl/b/379-3791559_isuzu-logo-png-images-isuzu-logo-clipart.png", link: "https://www.isuzu.in" },
                        { name: "Tata", logo: "https://logohistory.net/wp-content/uploads/2023/01/Tata-Emblem.png", link: "https://cars.tatamotors.com" },
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

            {/* Top Models */}
            <section>
                <h2 className="text-4xl font-bold mb-8 text-gray-800">Best Pickup SUVs in India</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Isuzu D-Max V-Cross",
                            img: "https://gaadiwaadi.com/wp-content/uploads/2020/04/2020-customised-isuzu-v-cross-1-2.jpg"
                        },
                        {
                            name: "Tata Yodha",
                            img: "https://media.zigcdn.com/media/model/2020/Feb/side-view-378964858_930x620.jpg"
                        },
                        {
                            name: "Toyota Hilux",
                            img: "https://paultan.org/image/2023/07/Toyota-Hilux-GR-Sport-Australia-1.jpg"
                        }
                    ].map((car) => (
                        <div key={car.name} className="bg-white p-5 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-48 object-cover rounded-xl" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Utility Picks */}
            <div className="flex flex-col md:flex-row gap-10">

                {/* Feature-Rich Option */}
                <section className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Best for Work & Play</h2>
                    <div className="bg-slate-100 p-6 rounded-2xl shadow space-y-4">
                        <img
                            src="https://www.motorbiscuit.com/wp-content/uploads/2024/01/2024-Ford-F-150-2.jpg?w=2048&h=1136"
                            alt="Ford F-150"
                            className="w-full h-80 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Ford F-150</h3>
                        <p>
                            A global icon for utility pickups—strong towing capacity, luxurious interior, and unmatched off-road capability.
                        </p>
                    </div>
                </section>

                {/* Premium Lifestyle Pick */}
                <section className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Premium Lifestyle Pickup</h2>
                    <div className="bg-slate-100 p-6 rounded-2xl shadow space-y-4">
                        <img
                            src="https://images.hindustantimes.com/auto/img/2023/10/19/1600x900/Toyota_Hilux_GR_Sport_1697697463746_1697697469335.jpg"
                            alt="Toyota Hilux"
                            className="w-full h-80 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Toyota Hilux</h3>
                        <p>
                            Legendary durability, go-anywhere confidence, and bold styling make it the top choice for explorers and urban adventurers alike.
                        </p>
                    </div>
                </section>
            </div>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-yellow-700 to-black text-white p-10 rounded-2xl text-center space-y-5 shadow-xl">
                <h2 className="text-3xl font-bold">Ready for Anything</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Whether you're hauling, exploring, or cruising highways, Pickup SUVs offer unmatched toughness and versatility. Discover your adventure companion today.
                </p>
            </section>
        </div>
    );
};

export default PickupSuvPage;
