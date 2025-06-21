
import React from "react";
import { Link } from "react-router-dom";

const carTypes = [
  { name: "Sports Cars", description: "High-performance and thrilling." , pathName:"/Sportcars"},
  { name: "Hatchbacks", description: "Compact and efficient city cars." , pathName:"/Hatchback"},
  { name: "Sedans", description: "Spacious and stylish for families." , pathName:"/Sedan"},
  { name: "SUVs", description: "Bold and versatile for any terrain." , pathName:"/Suv"},
  { name: "Electric Vehicles", description: "Eco-friendly and futuristic." , pathName:"/Electric"},
  { name: "Convertibles", description: "Stylish cars with retractable roofs." , pathName:"/Convertible"},
  { name: "Coupes", description: "Two-door cars with sporty appeal." , pathName:"/Coupe"},
  { name: "Station Wagons", description: "Extended rear cargo space." , pathName:"/Wagon"},
  { name: "Crossovers", description: "Blend of SUV and sedan features." , pathName:"/Crossover"},
  { name: "Luxury Cars", description: "High-end comfort and technology." , pathName:"/Luxury"},
  { name: "Pickup Trucks", description: "Robust trucks with open cargo beds." , pathName:"/Pickup"},
  { name: "Minivans", description: "Spacious vehicles for families." , pathName:"/Minivan"},
  { name: "Microcars", description: "Ultra-compact city vehicles." , pathName:"/Micro"},
  { name: "Roadsters", description: "Two-seat open-top sports cars." , pathName:"/Roadster"},
  { name: "Muscle Cars", description: "Powerful American performance cars." , pathName:"/Muscle"},
  { name: "Off-Road Vehicles", description: "Built for rugged terrain." , pathName:"/Off"},
  { name: "Diesel Cars", description: "Efficient diesel-powered vehicles." , pathName:"/Diesel"},
  { name: "Hybrid Cars", description: "Combining electric and gasoline engines." , pathName:"/Hybrid"},
  { name: "Taxis", description: "Vehicles designed for public hire." , pathName:"/Taxi"},
  { name: "Limousines", description: "Extended luxury vehicles." , pathName:"/Limo"},
  { name: "Supercars", description: "Extreme high-performance vehicles." , pathName:"/Super"},
  { name: "Electric SUVs", description: "Electric-powered sport utility vehicles." , pathName:"/Esuv"},
  { name: "City Cars", description: "Small cars ideal for urban use." , pathName:"/City"},
  { name: "Family Cars", description: "Designed for family comfort and space." , pathName:"/Family"},
  { name: "Grand Tourers", description: "Luxury performance long-distance cars." , pathName:"/Grand"},
  { name: "Formula Cars", description: "Single-seat racing cars." , pathName:"/Formula"},
  { name: "Pickup SUVs", description: "SUVs with pickup-style cargo areas." , pathName:"/Pisuv"},
  { name: "Electric Hatchbacks", description: "Electric compact hatchbacks." , pathName:"/EVh"},
  { name: "Electric Sedans", description: "Electric-powered sedans." , pathName:"/Esed"},
  { name: "Commercial Vehicles", description: "Vehicles designed for business use." , pathName:"/Comm"},
];

const Type = () => {
  return (
    <div className="pt-20">
      <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dkd5a7u9g/image/upload/v1748592566/Untitled_design_2_mwzjdi.png')`,
      }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-md">
        Explore Car Types
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {carTypes.map((type, idx) => (
          <Link to={type.pathName}
            key={idx}
            className="bg-white/80 backdrop-blur-md shadow-md rounded-xl p-6 hover:shadow-lg transition text-center cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-800">{type.name}</h2>
            <p className="text-gray-600 mt-2">{type.description}</p>
            
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Type;