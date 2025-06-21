import React from 'react'
import Type from './Type'
import CarBuyingGuidePage from './Guide'
import { Link } from 'react-router-dom'
import CarBrandCards from './Brands'



export default function Classification() {
    return (
        <div> <section class="bg-gray-100 py-16 px-6 md:px-16">
            <div class="max-w-5xl mx-auto text-center">

                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Discover the World of Cars – One Type at a Time.
                </h1>


                <p class="text-lg md:text-xl text-gray-700 mb-8">
                    From city cruisers to electric beasts, learn everything about car types, features, and what makes each ride unique. Explore, compare, and fall in love with the machines that move the world.
                </p>


                <a href="#car-types" class="inline-block mt-4 text-gray-600 font-semibold hover:underline">
                    👇 Scroll down to explore car types
                </a>
            </div>


            <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">


                <Link to="/service-types" class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                    <h3 class="text-xl font-semibold text-gray-800">Explore by Type</h3>
                    <p class="text-gray-600 mt-2">Hatchbacks, Sedans, SUVs, EVs, Sports Cars</p>
                </Link>



                <Link to="/Brand" class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                    <h3 class="text-xl font-semibold text-gray-800">Top Car Brands</h3>
                    <p class="text-gray-600 mt-2">Toyota, Tesla, BMW, Hyundai, and more</p>
                </Link>

                <Link to="/car-buying-guide" className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-800">Car Buying Guide</h3>
                    <p className="text-gray-600 mt-2">Smart tips, costs & care — all in one place.</p>
                </Link>

            </div>
        </section>


            <div className='pt-10'>



                <section
                    className="max-w-4xl mx-auto pt-24 pb-16 px-8 text-center space-y-6 rounded-xl"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(147,197,253,0.15) 0%, rgba(191,219,254,0.15) 50%, rgba(255,255,255,0.15) 100%)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                >
                    <h2 className="text-4xl font-extrabold text-blue-900 drop-shadow-sm">
                        🚗 Why <span className="text-blue-700 underline decoration-yellow-400 decoration-4">RideVerse</span>?
                    </h2>
                    <p className="text-xl text-gray-800 font-semibold max-w-3xl mx-auto leading-relaxed">
                        Thousands of car lovers visit <span className="font-bold text-blue-800">RideVerse</span> to explore car types, learn care tips, <br />
                        and discover the history & future of automobiles. <br />
                        Whether you are a beginner or an enthusiast, <span className="text-yellow-600 font-extrabold">RideVerse</span> is your trusted guide to the world of cars.
                    </p>
                </section>
            </div>




            <section className="max-w-5xl mx-auto py-12 px-6">
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">💬 What Readers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <p className="text-gray-700 italic">"Best car site for beginners! 🚗"</p>
                        <p className="mt-4 text-sm text-gray-500">— Avid Car Lover</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <p className="text-gray-700 italic">"Loved the Evolution of Cars page! 🔥"</p>
                        <p className="mt-4 text-sm text-gray-500">— Auto Enthusiast</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <p className="text-gray-700 italic">"Easy to understand car tips 👍"</p>
                        <p className="mt-4 text-sm text-gray-500">— New Car Owner</p>
                    </div>
                </div>
            </section>



            <section className="max-w-6xl mx-auto py-12 px-6 space-y-12 bg-gray-50 rounded-xl shadow-inner">
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">🎬🚗 Fun Facts & Famous Cars</h2>

                {/* Row 1 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
                    <div className="md:w-1/2 space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-800">⚙️ The first electric car was built in 1884!</h3>
                        <p className="text-gray-700 text-md">Early electric cars were surprisingly popular in the late 19th century before gas-powered cars took over.</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://cdn.readeverything.co/wp-content/uploads/sites/66/2019/03/baker-electric-car-1.jpg" alt="First Electric Car" className="rounded-lg shadow" />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse space-y-6 md:space-y-0">
                    <div className="md:w-1/2 space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-800">🎬 DeLorean DMC-12 — Back to the Future</h3>
                        <p className="text-gray-700 text-md">One of the most famous cars in movie history, the DeLorean time machine stole the show!</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="http://www.supercars.net/blog/wp-content/uploads/2016/04/DeLorean-DMC-12.jpg" alt="DeLorean DMC-12" className="rounded-lg shadow" />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
                    <div className="md:w-1/2 space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-800">🏎️ Bugatti Chiron Super Sport 300+</h3>
                        <p className="text-gray-700 text-md">This beast can hit speeds over 490 km/h — currently the fastest production car in the world!</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://moneyinc.com/wp-content/uploads/2020/07/Bugatti-Chiron-Super-Sport-300.jpg" alt="Bugatti Chiron Super Sport 300+" className="rounded-lg shadow" />
                    </div>
                </div>

                {/* Row 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse space-y-6 md:space-y-0">
                    <div className="md:w-1/2 space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-800">🚙 Mini Cooper — The Italian Job</h3>
                        <p className="text-gray-700 text-md">Famous chase scenes with the Mini Cooper in this movie made it an icon!</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://cdn.motor1.com/images/custom/mini-cooper-s-john-cooper-works-package-876.jpg" alt="Mini Cooper" className="rounded-lg shadow" />
                    </div>
                </div>

                {/* Row 5 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
                    <div className="md:w-1/2 space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-800">🎬 Ford Mustang — Gone in 60 Seconds</h3>
                        <p className="text-gray-700 text-md">The Ford Mustang GT500, aka "Eleanor," became one of the most iconic movie cars thanks to this film!</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://www.carscoops.com/wp-content/uploads/2020/11/Ford-Mustang-Eleanor-6c-1024x555.jpg" alt="Ford Mustang Eleanor" className="rounded-lg shadow" />
                    </div>
                </div>

            </section>






            <section className="max-w-4xl mx-auto py-12 px-6 text-center space-y-4 bg-blue-50 rounded-xl shadow mt-10">
                <h2 className="text-3xl font-bold text-blue-900">🚗 Join the RideVerse Community</h2>
                <p className="text-lg text-gray-700">
                    Love cars? Bookmark RideVerse today and share it with your friends!
                    Stay updated with the latest in the world of cars.
                </p>
            </section>


        </div>
    )
}
