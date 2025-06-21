import React from "react";

const GrandTourerPage = () => {
    return (
        <div className="p-6 space-y-16 max-w-7xl mx-auto font-sans">

            {/* Hero Section */}
            <section className="relative h-[32rem] w-full rounded-3xl overflow-hidden shadow-xl">
                <img
                    src="https://www.classicdriver.com/sites/default/files/styles/full_width_slider/public/article_images/ferrari_812_superfast_1.jpg?itok=WqWcvwJq"
                    alt="Grand Tourers"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/30 flex flex-col items-start justify-end text-white px-10 py-10">
                    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-md">
                        Grand Tourers
                    </h1>
                    <p className="text-xl mt-4 max-w-xl font-light">
                        Powerful, stylish, and comfortable for long-distance luxury travel.
                    </p>
                </div>
            </section>

            {/* What is a Grand Tourer */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900">What is a Grand Tourer?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Grand Tourers (GTs) are performance-oriented luxury cars designed for high-speed, long-distance driving. They offer a perfect blend of powerful engines, plush interiors, and sleek design—ideal for weekend getaways or continent-spanning road trips.
                    </p>
                </div>
                <img
                    src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/09/corvette-Cropped.jpg"
                    alt="What is GT"
                    className="rounded-2xl w-full h-80 object-cover shadow-xl"
                />
            </section>

            {/* Pros and Cons */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-green-700 mb-3">Pros</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Excellent high-speed stability and performance</li>
                            <li>Luxurious, spacious cabins</li>
                            <li>Ideal for long-distance touring</li>
                            <li>Iconic, stylish designs</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Expensive to buy and maintain</li>
                            <li>Lower fuel economy</li>
                            <li>Large size may hinder city maneuvering</li>
                            <li>Not ideal for tight corners like sports cars</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Grand Tourer Brands */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Grand Tourer Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                        { name: "Aston Martin", logo: "https://1000logos.net/wp-content/uploads/2020/02/Aston-Martin-Logo-1939.png", link: "https://www.astonmartin.com" },
                        { name: "Ferrari", logo: "https://logos-world.net/wp-content/uploads/2020/06/Ferrari-Logo-1931.png", link: "https://www.ferrari.com" },
                        { name: "Bentley", logo: "https://logos-world.net/wp-content/uploads/2021/08/Bentley-Emblem.png", link: "https://www.bentleymotors.com" },
                        { name: "Porsche", logo: "https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png", link: "https://www.porsche.com" },
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

            {/* Best GT Cars by Tier */}
            <section>
                <h2 className="text-4xl font-bold mb-8 text-gray-800">Best Grand Tourers</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "BMW 8 Series",
                            img: "http://s1.paultan.org/image/2018/06/BMW-8-Series-39-e1529133103543-1200x628.jpg",
                            desc: "Balanced luxury and power for GT lovers."
                        },
                        {
                            name: "Aston Martin DB11",
                            img: "https://cdn.motor1.com/images/mgl/NROq2/s1/2020-aston-martin-db11.jpg",
                            desc: "A British icon with timeless style."
                        },
                        {
                            name: "Ferrari Roma",
                            img: "https://www.motortrend.com/uploads/2022/07/2022-Ferrari-Roma-40.jpg",
                            desc: "A stylish, grand expression of Ferrari elegance."
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
            <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-10 rounded-2xl text-center space-y-5 shadow-xl">
                <h2 className="text-3xl font-bold">Luxury Meets Performance</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Whether it's a weekend escape or a transcontinental journey, grand tourers offer a driving experience where power and comfort unite. Explore the best GTs and hit the road in style.
                </p>
            </section>
        </div>
    );
};

export default GrandTourerPage;
