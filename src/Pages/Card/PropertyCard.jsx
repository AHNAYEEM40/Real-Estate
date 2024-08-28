import { Link } from "react-router-dom";
import { FaBath, FaBed, FaLocationPin } from "react-icons/fa6";
import { MdOutlineScore } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";

const PropertyCard = ({ card }) => {
  const {
    id,
    Image,
    segment_name,
    Price,
    Status,
    location,
    Baths,
    Bed,
    Area,
    F1,
    F2,
    F3,
  } = card;
  return (
    <div className="card card-compact lg:w-96 shadow-xl mb-4 mt-6 hover:bg-transparent border">
      <figure>
        <img
          className="mt-4 rounded-2xl lg:border border-2 border-orange-700 lg:w-72  h-64 "
          src={Image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{segment_name}</h2>
        <div className="flex justify-between">
          <a className="flex space-x-1">
            <span className="text-2xl text-white font-bold">For: </span>
            <button className="bg-orange-500 w-14 h-8  rounded-xl text-center">
              <span className="text-white text-xl font-bold ">{Status}</span>
            </button>
          </a>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Price:<span className="text-orange-700">{Price}$</span></h1>
          </div>
        </div>
        <a className="flex ">
          <span className="text-orange-800 text-2xl mt-1 ">
            <FaLocationPin />
          </span>{" "}
          <h1 className="text-xl">{location}</h1>
        </a>
        <div>
          <h1 className="text-xl mb-2">Facilities:</h1>
          <div className="pl-10 space-y-2">
            <h1 className="flex gap-2">
              <span className="text-xl text-orange-600">
                <FaArrowAltCircleRight />
              </span>
              {F1}
            </h1>
            <h1 className="flex gap-2">
              <span className="text-xl text-orange-600">
                <FaArrowAltCircleRight />
              </span>
              {F2}
            </h1>
            <h1 className="flex gap-2">
              <span className="text-xl text-orange-600">
                <FaArrowAltCircleRight />
              </span>
              {F3}
            </h1>
          </div>
        </div>
  {/* bed/bath */}
        <div className="flex justify-between ">
          <h1 className="flex gap-2">
            <span className="text-xl text-orange-600">
              <FaBed />
            </span>
            {Bed}
          </h1>
          <h1 className="flex gap-2">
            <span className="text-xl text-orange-600">
              <FaBath />
            </span>
            {Baths}
          </h1>
          <h1 className="flex gap-2">
            <span className="text-xl text-orange-600">
              <MdOutlineScore />
            </span>
            {Area} sq ft
          </h1>
        </div>
{/* button */}
        <div className="card-actions justify-center-center ">
          <Link to={`/card/${id}`}>
            {" "}
            <p className="bg-orange-500 h-8 w-44 text-white rounded-xl text-center mt-1">View Property</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
