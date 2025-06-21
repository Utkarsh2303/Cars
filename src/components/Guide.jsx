import React from "react";
import { Link } from 'react-router-dom'

const CarBuyingGuidePage = () => {
    return (
        <div className="font-sans bg-white text-gray-800 leading-relaxed">
            <div className="max-w-6xl mx-auto">

                {/* Hero Section */}
                <section className="relative h-[90vh] w-full overflow-hidden">
                    <img
                        src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2019/07/car-buying-representational.jpg"
                        alt="Car Buying Guide"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-black drop-shadow-xl">
                            The Ultimate Car Buying Guide 🚗
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-900">
                            Everything you need — from choosing your dream car to care & maintenance tips — drive smart, drive happy!
                        </p>
                    </div>
                </section>


                {/* Content */}
                <div className="p-6 sm:p-10 space-y-12">

                   


                    {/* Smart Tips */}
                    <section>
                        <h2 className="text-4xl font-bold text-blue-400 mb-6 underline underline-offset-8">
                            💡 Smart Tips for Buying a Car
                        </h2>
                        <ul className="list-disc ml-6 space-y-3">
                            <li>Decide your total budget: on-road price + insurance + fuel + maintenance</li>
                            <li>Identify your needs: city car, family car, EV, luxury</li>
                            <li>Always test drive multiple cars</li>
                            <li>Check GNCAP safety ratings — prefer 4-star or 5-star</li>
                            <li>Festive seasons = best deals</li>
                        </ul>
                    </section>

                    {/* Financing & Insurance */}
                    <section>
                        <h2 className="text-4xl font-bold text-green-400 mb-6 underline underline-offset-8">
                            💰 Financing & Insurance Tips
                        </h2>
                        <div className="space-y-4 text-gray-700 text-base">
                            <p>
                                🚗 **Car Loan Tips:** Compare interest rates across banks and NBFCs. Look for lowest processing fees and flexible tenure (3-7 years). Pre-approved loans from your bank may offer better deals.
                            </p>
                            <p>
                                💳 **Down Payment:** Try to pay at least 20%-30% upfront — reduces EMI burden and overall interest.
                            </p>
                            <p>
                                🧾 **Insurance Must-Knows:** Always take comprehensive insurance. Choose key add-ons like:
                            </p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>✅ Zero Depreciation cover</li>
                                <li>✅ Roadside Assistance (RSA)</li>
                                <li>✅ Engine Protect</li>
                                <li>✅ Return to Invoice cover</li>
                            </ul>
                            <p>
                                🔍 **Renewal Tip:** At renewal, don’t blindly go with the dealer. Compare online quotes — you can save 15-25%!
                            </p>
                            <p>
                                🚦 **Final Tip:** Avoid unnecessary fancy covers or “dealer bundling” — take only what you need.
                            </p>
                        </div>
                    </section>




                    {/* Myths */}
                    <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
                        <h2 className="text-4xl font-bold text-pink-400 mb-6 underline underline-offset-8">
                            🧠 Car Buying Myths: Busted
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-gray-800 text-base">
                            {[
                                {
                                    myth: "Premium fuel gives more power in all cars",
                                    fact: "Only if your engine requires high-octane. Otherwise, it's just expensive."
                                },
                                {
                                    myth: "Bigger cars are always safer",
                                    fact: "Not true — safety ratings, build quality & airbags matter more."
                                },
                                {
                                    myth: "Diesel cars are always cheaper to run",
                                    fact: "Only if you drive over 1500-2000 km/month — else petrol or EVs make more sense."
                                },
                                {
                                    myth: "EVs are slow and boring",
                                    fact: "Many modern EVs outperform equivalent petrol cars with instant torque."
                                },
                                {
                                    myth: "Hatchbacks are unsafe for highways",
                                    fact: "Premium hatchbacks with good GNCAP ratings can cruise safely at highway speeds."
                                },
                                {
                                    myth: "Servicing at dealership is mandatory",
                                    fact: "During warranty — yes. After warranty, good local garages can be more affordable."
                                },
                                {
                                    myth: "New car = 0 maintenance",
                                    fact: "Even new cars require scheduled maintenance and occasional repairs."
                                },
                                {
                                    myth: "White cars need less care",
                                    fact: "All colors fade and collect swirl marks — regular care needed regardless of color."
                                },
                                {
                                    myth: "Top variants always give better mileage",
                                    fact: "Extra features add weight — sometimes lower trims are more fuel efficient."
                                },
                                {
                                    myth: "More airbags = guaranteed safety",
                                    fact: "Placement, car structure & GNCAP rating matter more than airbag count alone."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition space-y-2">
                                    <p className="text-red-600 font-semibold">❌ Myth: {item.myth}</p>
                                    <p className="text-green-700">✅ Truth: {item.fact}</p>
                                </div>
                            ))}
                        </div>
                    </section>



                    {/* Dream Garage */}
                    <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
                        <h2 className="text-4xl font-bold text-teal-400 mb-6 underline underline-offset-8">
                            🏎️ Dream Garage (By Budget)
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Maruti Suzuki Swift",
                                    image: "https://facts.net/wp-content/uploads/2025/05/38-facts-about-maruti-suzuki-swift-1746842081.jpeg",
                                    desc: "Fun to drive, reliable, and affordable — perfect hatchback under ₹10L."
                                },
                                {
                                    name: "Hyundai Creta",
                                    image: "https://img-ik.cars.co.za/images/2017/2/HyundaiCreta/tr:n-news_1200x/creta5.jpg",
                                    desc: "Stylish, feature-packed SUV — top pick for ₹10-15L budget."
                                },
                                {
                                    name: "Honda City",
                                    image: "http://images.summitmedia-digital.com/topgear/images/2023/03/03/2-1677813013.jpg",
                                    desc: "Elegant, spacious sedan — excellent choice in ₹15-20L range."
                                },
                                {
                                    name: "Toyota Fortuner",
                                    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg",
                                    desc: "Rugged, powerful SUV — great for ₹30-40L dream garage."
                                },
                                {
                                    name: "BMW 3 Series",
                                    image: "https://paultan.org/image/2022/05/2022-BMW-3-Series-Sedan-facelift-G20-LCI-debut-14.jpg",
                                    desc: "Iconic sports sedan — thrilling to drive, ₹50L+ bracket."
                                },
                                {
                                    name: "Audi Q5",
                                    image: "https://cdn.motor1.com/images/mgl/0eJWgm/s1/audi-q5-sportback-tfsie-2023.jpg",
                                    desc: "Luxury mid-size SUV — refined and capable, ₹60L+ premium choice."
                                }
                            ].map((car, i) => (
                                <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                                    <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                                    <div className="p-4 space-y-2">
                                        <h3 className="text-xl font-bold">{car.name}</h3>
                                        <p className="text-gray-600 text-sm">{car.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                    {/* Accessories */}
                    <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
                        <h2 className="text-4xl font-bold text-indigo-400 mb-6 underline underline-offset-8">
                            🎒 Must-Have Car Accessories
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { name: "Dash Cam", image: "https://ww1.prweb.com/prfiles/2018/04/12/15403371/blackvue-dr900s-2ch-4k-uhd-cloud-dash-cam-in-car.jpg" },
                                { name: "TPMS (Tyre Pressure Monitor)", image: "https://www.tyremarket.com/Images/Tyre-Pressure-Monitoring-System.jpg" },
                                { name: "Portable Tyre Inflator", image: "https://reviewed-com-res.cloudinary.com/image/fetch/s--wj-NzjpP--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/attachment/36a0b55d9cbd4cf4/Viair.jpg" },
                                { name: "Phone Mount & Fast Charger", image: "https://m.media-amazon.com/images/I/718chE5OA+L._AC_SS450_.jpg" },
                                { name: "Premium Floor Mats", image: "https://api.x1mats.com/vehicle-product-data/car/floormat/hybridline/mid/orange-orange.webp" },
                                { name: "Comfortable Seat Covers", image: "https://i.pinimg.com/originals/41/b7/8e/41b78e037b410a4187d5674281fad80b.jpg" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-44 object-cover" />
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold">{item.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                     {/* Cars That Made History */}
                    <section>
                        <h2 className="text-4xl font-bold text-yellow-500 mb-8 underline underline-offset-8">
                            🚘 Cars That Made History
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Maruti Suzuki 800",
                                    image: "https://3.bp.blogspot.com/-zG1ZM8mC-Qg/TppfzpNKHfI/AAAAAAAAG2o/F1ZJKDCpLfg/s1600/Maruti+800+%25281%2529.jpg",
                                    desc: "The car that put India on wheels — legendary for its affordability and simplicity."
                                },
                                {
                                    name: "Ford Mustang 1969",
                                    image: "https://wallpaperaccess.com/full/2572982.jpg",
                                    desc: "An American muscle icon — the original pony car with timeless appeal."
                                },
                                {
                                    name: "Chevrolet Impala (1959)",
                                    image: "https://cdn.dealeraccelerate.com/smt/1/356/940/1920x1440/1959-chevrolet-impala",
                                    desc: "A symbol of 50s American luxury and style — legendary in pop culture."
                                },
                                {
                                    name: "Volkswagen Beetle",
                                    image: "https://www.thehairpincompany.co.uk/assets/components/phpthumbof/cache/vw-beetle-custom-1955-1-a7306232-1.b7b4b5981c9b499bf77978e3e0461a07527.jpg",
                                    desc: "One of the best-selling cars ever — loved worldwide for its charm and durability."
                                },
                                {
                                    name: "Hindustan Ambassador",
                                    image: "https://automotive-heritage.com/upload/hindustan_ambassador_mark_ii_1-66.jpg",
                                    desc: "The original 'King of Indian Roads' — served as the official government and taxi car for decades."
                                },
                                {
                                    name: "Mini Cooper (Classic)",
                                    image: "https://i.pinimg.com/originals/ed/7e/be/ed7ebeb43fd16813688c7cbebd627a2f.jpg",
                                    desc: "An icon of British motoring — small but mighty, famous in racing and pop culture."
                                }
                            ].map((car, i) => (
                                <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                                    <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                                    <div className="p-4 space-y-2">
                                        <h3 className="text-xl font-bold">{car.name}</h3>
                                        <p className="text-gray-600 text-sm">{car.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>



                    {/* CTA */}
                    <section className="py-16 px-6 bg-gradient-to-r from-yellow-100 to-yellow-300 text-center space-y-6 rounded-xl shadow-inner mt-12">
                        <h2 className="text-4xl font-bold text-gray-900">
                            🚗 Ready to Hit the Road?
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            “Buying a car is not just a transaction — it’s the beginning of countless journeys. Choose smart, drive happy.” 🏁
                        </p>
                        <Link
                            to="/service-types"
                            className="inline-block px-10 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow hover:bg-yellow-400 transition transform hover:scale-105"
                        >
                            🚗 Explore Cars Now
                        </Link>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default CarBuyingGuidePage;

