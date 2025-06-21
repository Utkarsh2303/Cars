import React from "react";

const RoadsterPage = () => {
    return (
        <div className="p-6 space-y-10 max-w-7xl mx-auto">

            {/* Hero Section */}
            <section className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="https://www.dmarge.com/wp-content/uploads/2018/07/1953-Ferrari-250-MM-Vignale-Spyder-0326MM-3243.jpg"
                    alt="Roadsters"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Speed Meets Style</h1>
                    <p className="text-lg md:text-xl mt-2">Discover the World of Roadsters</p>
                </div>
            </section>

            {/* What is a Roadster */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">What is a Roadster?</h2>
                    <p className="text-lg text-gray-700">
                        A roadster is a two-seater sports car without a fixed roof. Known for their open-top driving experience and nimble handling, roadsters are built for driving pleasure, combining sleek design with performance.
                    </p>
                </div>
                <img
                    src="https://www.rcnmag.com/resources/images/Cavaliere-250GT-A4.jpg"
                    alt="What is a Roadster"
                    className="w-full h-72 object-cover rounded-xl"
                />
            </section>

            {/* Why Choose a Roadster */}
            <section className="grid md:grid-cols-2 gap-6 items-center">
                <img
                    src="https://img.freepik.com/premium-vector/sleek-one-line-drawing-modern-sports-car-roadster-design_1323048-6987.jpg"
                    alt="Roadster Design"
                    className="w-full h-72 object-cover rounded-xl"
                />
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Why Choose a Roadster?</h2>
                    <p className="text-lg text-gray-700">
                        Roadsters are perfect for driving enthusiasts who crave open-air freedom, sporty performance, and stylish design. They're light, agile, and provide a unique connection between driver and road.
                    </p>
                </div>
            </section>

            {/* Pros and Cons */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-4 rounded-xl">
                        <h3 className="text-xl font-bold mb-2">Pros</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Exceptional handling and driving feel</li>
                            <li>Sporty and stylish appearance</li>
                            <li>Open-top freedom</li>
                            <li>Lightweight for better performance</li>
                        </ul>
                    </div>
                    <div className="bg-red-100 p-4 rounded-xl">
                        <h3 className="text-xl font-bold mb-2">Cons</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Limited storage space</li>
                            <li>Not ideal for families or long trips</li>
                            <li>Less protection in harsh weather</li>
                            <li>Higher insurance costs</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Roadster Brands */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Top Roadster Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {[
                        {
                            name: "Mazda",
                            logo: "https://logosmarcas.net/wp-content/uploads/2020/05/Mazda-Logo.png",
                            link: "https://www.mazda.com",
                        },
                        {
                            name: "BMW",
                            logo: "http://logos-download.com/wp-content/uploads/2016/02/BMW_logo_big_transparent_png.png",
                            link: "https://www.bmw.com",
                        },
                        {
                            name: "Porsche",
                            logo: "https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png",
                            link: "https://www.porsche.com",
                        },
                        {
                            name: "Tesla",
                            logo: "https://www.freepnglogos.com/uploads/tesla-logo-png-13.png",
                            link: "https://www.tesla.com",
                        },
                    ].map((brand) => (
                        <a
                            key={brand.name}
                            href={brand.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-xl shadow hover:bg-gray-50 flex flex-col items-center space-y-2"
                        >
                            <img src={brand.logo} alt={brand.name} className="h-12 object-contain" />
                            <span className="text-center font-medium">{brand.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Budget-Friendly Picks */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Budget-Friendly Picks (Under ₹30L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Mazda MX-5 Miata",
                            img: "https://media.ed.edmunds-media.com/mazda/mx-5-miata/2022/oem/2022_mazda_mx-5-miata_convertible_club_fq_oem_1_815.jpg",
                        },
                        {
                            name: "Mini Convertible",
                            img: "https://st.automobilemag.com/uploads/sites/11/2016/02/2016-Mini-Convertible-Cooper-S-front-three-quarter-03-1.jpg",
                        },
                        {
                            name: "Fiat 124 Spider",
                            img: "https://s1.cdn.autoevolution.com/images/gallery/FIAT-124-Abarth-Spider-5767_28.jpg",
                        },
                    ].map((car) => (
                        <div key={car.name} className="bg-white p-3 rounded-xl shadow space-y-2">
                            <img src={car.img} alt={car.name} className="w-full h-40 object-cover rounded" />
                            <p className="text-center font-medium">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Luxury Picks */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Luxury & Performance Picks</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-100 p-4 rounded-xl shadow space-y-3">
                        <img
                            src="https://car-images.bauersecure.com/wp-images/168443/porsche_718_spyder_rs_1.jpg"
                            alt="Porsche 718 Spyder"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Feature-Rich Pick: Porsche 718 Spyder</h3>
                        <p>Combines open-top driving with exhilarating performance and precision handling.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-xl shadow space-y-3">
                        <img
                            src="https://images.hdqwalls.com/wallpapers/tesla-roadster-2020-3p.jpg"
                            alt="Tesla Roadster"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-xl font-bold">Luxury Pick: Tesla Roadster</h3>
                        <p>Blistering speed, futuristic design, and electric efficiency in a high-end package.</p>
                    </div>
                </div>
            </section>

            {/* CTA / Suggestion Box */}
            <section className="bg-gray-500 p-6 rounded-xl text-center space-y-3 shadow-inner">
                <h2 className="text-2xl font-bold text-white">Love the Thrill of Driving?</h2>
                <p className="text-gray-200">Roadsters offer raw excitement, elegant design, and a deep connection to the road—perfect for purists.</p>
            </section>

        </div>
    );
};

export default RoadsterPage;
