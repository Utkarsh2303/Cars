import React from "react";

const ElectricHatchbackPage = () => {
    return (
        <div className="px-6 py-10 space-y-14 max-w-7xl mx-auto font-sans ">
            {/* Hero Section */}
            <section className="relative h-[26rem] w-full rounded-[2rem] overflow-hidden shadow-xl">
                <img
                    src="https://ssl.caranddriving.com/f2/images/new/big/peugeote2080420(2).jpg"
                    alt="Electric Hatchbacks"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-black/20 flex flex-col justify-center px-10 text-white">
                    <h1 className="text-6xl font-extrabold">Urban. Clean. Smart.</h1>
                    <p className="text-xl mt-3">Welcome to the future of compact electric driving</p>
                </div>
            </section>

            {/* What is an Electric Hatchback */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-gray-800">What is an Electric Hatchback?</h2>
                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                        Electric hatchbacks are compact, efficient EVs ideal for urban mobility. With zero emissions, instant torque, and smart tech integration, they are redefining everyday commuting.
                    </p>
                </div>
                <img
                    src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/kia-soul-ev.jpg?itok=1rXB9rss"
                    alt="Electric Hatchback"
                    className="rounded-3xl h-72 w-full object-cover shadow-lg"
                />
            </section>

            {/* Why Choose */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://lirp.cdn-website.com/189a5d04/dms3rep/multi/opt/MG4-fully-electric-hatchbackcar-charger-uk-news-1920w.jpg"
                    alt="Why Choose Electric Hatchbacks"
                    className="rounded-3xl h-72 w-full object-cover shadow-lg"
                />
                <div>
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose an Electric Hatchback?</h2>
                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                        Compact, efficient, and eco-friendly, electric hatchbacks offer low running costs, instant torque delivery, and are perfect for tight city spaces — all while being future-ready.
                    </p>
                </div>
            </section>

            {/* Pros & Cons */}
            <section>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-green-800 mb-3">Pros</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Eco-friendly with zero tailpipe emissions</li>
                            <li>Low maintenance and running costs</li>
                            <li>Great for city driving & compact parking</li>
                            <li>Instant torque and smooth acceleration</li>
                        </ul>
                    </div>
                    <div className="bg-red-100 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-800 mb-3">Cons</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Limited range compared to larger EVs</li>
                            <li>Charging infrastructure still developing</li>
                            <li>Higher initial purchase price</li>
                            <li>Less suitable for long road trips</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Electric Hatchback Brands */}
            <section>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Top Electric Hatchback Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[{
                        name: "Tesla",
                        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG16.png",
                        link: "https://www.tesla.com",
                    }, {
                        name: "Hyundai",
                        logo: "http://pluspng.com/img-png/hyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png",
                        link: "https://www.hyundai.com",
                    }, {
                        name: "Chevrolet",
                        logo: "https://logos-world.net/wp-content/uploads/2021/03/Chevrolet-Logo.png",
                        link: "https://www.chevrolet.com",
                    }, {
                        name: "BMW",
                        logo: "http://logos-download.com/wp-content/uploads/2016/02/BMW_logo_big_transparent_png.png",
                        link: "https://www.bmw.com",
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

            {/* Budget Picks */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Budget-Friendly Picks (Under ₹20L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[{
                        name: "Tata Tiago EV",
                        img: "https://images.hindustantimes.com/auto/auto-images/Tata/tiagoev/exterior_tata-tiago-ev_front-left-side_600x400.jpg",
                    }, {
                        name: "MG Comet EV",
                        img: "https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/64b814cace240.jpg",
                    }, {
                        name: "Citroën ë-C3",
                        img: "https://wp-pa.phonandroid.com/uploads/2023/10/citroen-eC3-19.jpg",
                    }].map((car) => (
                        <div key={car.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Luxury and Feature-Rich */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Luxury & Feature-Rich Picks</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://performancedrive.com.au/wp-content/uploads/2019/07/2019-MNI-Cooper-SE.jpg"
                            alt="Mini Cooper SE"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Feature-Rich Pick: Mini Cooper SE</h3>
                        <p>A blend of retro design and premium features with fully electric performance.</p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://media.autoexpress.co.uk/image/private/s--2Cm7A8Mh--/v1604683155/autoexpress/2020/11/BMW%20i4%20exclusive%20images.jpg"
                            alt="BMW i4"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Luxury Pick: BMW i4</h3>
                        <p>Luxury electric hatchback with cutting-edge performance and superior comfort.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-2xl text-center shadow-xl">
                <h2 className="text-3xl font-bold">Thinking Electric, Thinking Smart?</h2>
                <p className="text-lg max-w-2xl mx-auto">Electric hatchbacks are here to power your city rides with efficiency, technology, and a green footprint.</p>
            </section>
        </div>
    );
};

export default ElectricHatchbackPage;
