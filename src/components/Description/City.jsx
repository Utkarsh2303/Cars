import React from "react";

const CityCarPage = () => {
    return (
        <div className="p-6 space-y-12 max-w-7xl mx-auto font-sans">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://car-images.bauersecure.com/pagefiles/99067/hyundaii10.jpg"
                    alt="City Cars"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 flex flex-col items-start justify-center text-white px-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
                        City Cars
                    </h1>
                    <p className="text-xl mt-3 font-medium">Compact, efficient, and built for everyday city life.</p>
                </div>
            </section>

            {/* What is a City Car */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">What is a City Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        City cars are compact vehicles designed for urban environments. They offer easy maneuverability,
                        excellent fuel efficiency, and convenient parking in tight spaces—perfect for daily commutes and short trips.
                    </p>
                </div>
                <img
                    src="https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2016/11/f04ba4f6b7218ab0178bee8a932a6fad/16c916_012.jpg"
                    alt="City Car"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
            </section>

            {/* Why Choose a City Car */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src="https://assets-eu-01.kc-usercontent.com/bb5aba31-d98c-0160-8548-418b3723c58e/5de6b34e-aa0a-48bf-b088-e97c9cd4d8d2/Smart%20EQ%20Forfour%20(4).jpg?fm=jpg&auto=format&width=1600"
                    alt="Why City Car"
                    className="rounded-2xl w-full h-72 object-cover shadow-xl"
                />
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose a City Car?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        City cars are cost-effective, fuel-efficient, and low-maintenance. Their small size and zippy handling
                        make them ideal for congested traffic and narrow city roads, offering a practical solution for urban mobility.
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
                            <li>Great fuel efficiency and low emissions</li>
                            <li>Easy to drive and park in cities</li>
                            <li>Affordable price and maintenance</li>
                            <li>Perfect for short trips and daily use</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Limited space for passengers and luggage</li>
                            <li>Not suitable for long highway drives</li>
                            <li>Fewer safety features than larger cars</li>
                            <li>Lower performance capabilities</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top City Car Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top City Car Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                        { name: "Maruti Suzuki", logo: "https://pngimg.com/uploads/suzuki/suzuki_PNG12291.png", link: "https://www.marutisuzuki.com/" },
                        { name: "Hyundai", logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png", link: "https://www.hyundai.com/" },
                        { name: "Tata", logo: "https://logohistory.net/wp-content/uploads/2023/01/Tata-Emblem.png", link: "https://www.tatamotors.com/" },
                        { name: "Renault", logo: "https://pngimg.com/uploads/renault/renault_PNG39.png", link: "https://www.renault.co.in/" },
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

            {/* Best Budget City Cars */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top City Cars (₹4L - ₹8L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: "Maruti Suzuki Alto K10", img: "https://stat.overdrive.in/wp-content/odgallery/2014/11/21362_02.jpg" },
                        { name: "Renault Kwid", img: "https://motorshow.com.br/wp-content/uploads/sites/2/2022/01/kwid-outsider02-1920x1269.jpg" },
                        { name: "Tata Tiago", img: "https://gaadiwaadi.com/wp-content/uploads/2023/10/tata-tiago-1280x640.jpg" },
                    ].map((car) => (
                        <div key={car.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="flex flex-col md:flex-row gap-8">

                {/* Feature-Rich Pick Section */}
                <section className="flex-1">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">Feature-Rich Pick</h2>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://www.prathammotors.com/pm/images/baleno/header/b1.jpg"
                            alt="Maruti Suzuki Baleno"
                            className="w-full h-80 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Maruti Suzuki Baleno</h3>
                        <p>
                            A premium hatchback with advanced infotainment, safety features, and fuel efficiency—ideal for city and weekend drives.
                        </p>
                    </div>
                </section>

                {/* Luxury City Car Section */}
                <section className="flex-1">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">Luxury City Car</h2>
                    <div className="bg-slate-100 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://media.ed.edmunds-media.com/mini/hardtop-4-door/2017/oem/2017_mini_hardtop-4-door_4dr-hatchback_cooper-s_fq_oem_3_1280.jpg"
                            alt="Mini Cooper Hatch"
                            className="w-full h-80 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Mini Cooper Hatch</h3>
                        <p>
                            A premium compact car with iconic design, spirited performance, and high-end features—luxury for urban streets.
                        </p>
                    </div>
                </section>

            </div>


            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-700 to-gray-900 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                <h2 className="text-3xl font-bold">Small in Size, Big on Convenience</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    City cars are your perfect urban companions—easy to own, drive, and park. Embrace stress-free city commuting with style and efficiency.
                </p>
            </section>
        </div>
    );
};

export default CityCarPage;
