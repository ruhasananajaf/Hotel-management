
import React from "react";
// import img from "./hero.png";
import img from "../assets/hero.png"
import kaghan from "../assets/kaghan.png"


const Cards = () => {
    const tours = [
  {
    id: 1,
    title: "Hunza Valley",
    image: kaghan,
    location: "Gilgit Baltistan",
  },
  {
    id: 2,
    title: " title",
    image:img,
    location: "",
  },
  {
    id: 3,
    title: "title",
    image: img,
    location: "",
  },
  {
    id: 4,
    title: "title",
    image: img,
    location: "",
  },
  {
    id: 5,
    title: "title",
    image: img,
    location: "",
  },
  {
    id: 6,
    title: "title",
    image: img,
    location: "",
  },
  {
    id: 7,
    title: "title",
    image: img,
    location: "",
  },
  {
    id: 8,
    title: "title",
    image: img,
    location: "",
  },
  
];
console.log(tours);
  return (
    <div className="bg-gray-50 min-h-screen py-14 px-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center ">
        <h1 className="text-4xl font-bold text-gray-900">
          Explore Destinations
        </h1>
        <p className="text-gray-500 mt-3">
          Discover premium travel experiences across Pakistan
        </p>
      </div>

      {/* Grid */}
      <div className="
        max-w-7xl mx-auto
        grid gap-8
            grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        
      ">
        {/* tours.map((tour) => (t.name) */}
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer"
          >
            {/* Image */}
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient from-black/70 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-10 w-full">
              <p className="text-xs ps-10 text-gray-300">
                {tour.location}
              </p>

              <h2 className="text-xl font-semibold text-white">
                {tour.title}
              </h2>

              <button className="btn cursor-pointer mt-3 px-6 py-4 text-xs bg-white text-black rounded-full hover:bg-gray-200 transition">
                View Tour
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>  
  );
};

export default Cards;