import React from "react";

const ElectricSedanPage = () => {
    return (
        <div className="px-6 py-10 space-y-14 max-w-7xl mx-auto font-sans bg-white">
            {/* Hero Section */}
            <section className="relative h-[28rem] w-full rounded-[2rem] overflow-hidden shadow-xl">
                <img
                    src="https://s2.paultan.org/image/2017/08/Lucid_Air_Exterior_03-e1503380465604.jpg"
                    alt="Electric Sedans"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/30 flex flex-col justify-center px-10 text-white">
                    <h1 className="text-6xl font-extrabold">Sleek. Silent. Sophisticated.</h1>
                    <p className="text-xl mt-3">Explore the world of modern Electric Sedans</p>
                </div>
            </section>

            {/* Intro */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-gray-800">What is an Electric Sedan?</h2>
                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                        Electric sedans combine traditional elegance with modern electric mobility. With aerodynamic designs, long ranges, and advanced tech, these cars offer a premium driving experience without emissions.
                    </p>
                </div>
                <img
                    src="https://cdn.motor1.com/images/mgl/zxp8j0/s1/chevrolet-fnr-xe-concept-sedan.jpg"
                    alt="Electric Sedan"
                    className="rounded-3xl h-72 w-full object-cover shadow-lg"
                />
            </section>

            {/* Why Choose */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://preview.thenewsmarket.com/Previews/ATFR/StillAssets/1920x1080/627757.jpg"
                    alt="Why Choose Electric Sedans"
                    className="rounded-3xl h-72 w-full object-cover shadow-lg"
                />
                <div>
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose an Electric Sedan?</h2>
                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                        Electric sedans are ideal for those seeking quiet refinement and extended range. They deliver exceptional ride quality, cutting-edge tech, and high performance—all without fuel stops.
                    </p>
                </div>
            </section>

            {/* Pros & Cons */}
            <section>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-green-800 mb-3">Pros</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Longer range compared to hatchbacks</li>
                            <li>Spacious and comfortable interiors</li>
                            <li>Advanced autonomous and safety features</li>
                            <li>Quiet and smooth high-speed cruising</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl shadow">
                        <h3 className="text-2xl font-bold text-red-800 mb-3">Cons</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Higher upfront cost</li>
                            <li>Requires more parking space than hatchbacks</li>
                            <li>Not ideal for rough or unpaved roads</li>
                            <li>Can be expensive to repair after warranty</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Top Electric Sedan Brands */}
            <section>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Top Electric Sedan Brands</h2>
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
                        name: "BMW",
                        logo: "http://logos-download.com/wp-content/uploads/2016/02/BMW_logo_big_transparent_png.png",
                        link: "https://www.bmw.com",
                    }, {
                        name: "BYD",
                        logo: "https://logosmarcas.net/wp-content/uploads/2021/08/BYD-Logo.png",
                        link: "https://www.byd.com",
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
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Affordable Electric Sedans (₹20L–₹40L)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[{
                        name: "Hyundai Ioniq 6",
                        img: "https://www.hyundai.com/eu/dam/sites/global/models/ce/launch/visualizer-update/20221222_hme_ce_basis_eviz_xb9-biophilicbluepearl_jpg/52910kl310/HME_CEBasis_EViz_Location_XB9-BiophilicBluePearl_52910KL310_C02_SHOT02.jpg",
                    }, {
                        name: "BYD Seal",
                        img: "https://www.byd.com/content/dam/byd-site/eu/press-release/detail-page/2023/0412seal/PC02.jpg",
                    }, {
                        name: "Tesla Model 3 (Expected)",
                        img: "https://www.vehiclesuggest.com/wp-content/uploads/2023/07/2024-Tesla-Model-3.jpg",
                    }].map((car) => (
                        <div key={car.name} className="bg-white p-4 rounded-xl shadow space-y-3">
                            <img src={car.img} alt={car.name} className="w-full h-44 object-cover rounded-lg" />
                            <p className="text-center font-semibold text-gray-800">{car.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Luxury & Feature-Rich */}
            <section>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Luxury & Feature-Rich Picks</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://car-images.bauersecure.com/pagefiles/89931/1752x1168/mercedes_eqs_100.jpg?mode=max&quality=90&scale=down"
                            alt="Mercedes-Benz EQS"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Luxury Pick: Mercedes-Benz EQS</h3>
                        <p>Flagship electric sedan with ultra-luxury interior, Hyperscreen, and ~700km range.</p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl shadow space-y-4">
                        <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivcw91diJgzHqzT85Aw1smRuHT85Fnvooz5PFoIYPgVw2eULoAdIJsGdR3cughJc_zEhu09lZCTaUxpqV2WmUsXFhiYFkwTxVH1Oh1OJAYjoQdDxkMDJYI-KHSyA6VbeLkIV0xOiF6hWqSkGI_nkRyagCjQhtBaOJkXfqoGHmAmo0CnNGzW8OZSiBIF2k/s1535/235129e619d157d5d21f9935c0a2eff7_1.jpg"
                            alt="BMW i7"
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <h3 className="text-2xl font-bold">Feature-Rich Pick: BMW i7</h3>
                        <p>Combines electric performance with unmatched tech and cinema-style rear seats.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-yellow-600 to-gray-500 text-white p-8 rounded-2xl text-center shadow-xl">
                <h2 className="text-3xl font-bold">Refined. Responsive. Responsible.</h2>
                <p className="text-lg max-w-2xl mx-auto">Electric sedans are perfect for those who value elegance and eco-conscious driving. Step into a quieter, smarter future.</p>
            </section>
        </div>
    );
};

export default ElectricSedanPage;
