import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

const ShowAllDetails = () => {
  const Cart = useLoaderData();
  console.log(Cart);
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = Cart.find((card) => card.id == idInt);
  console.log(card);
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          className=" rounded-lg shadow-2xl h-[500px] w-1/3"
          src={card.Image}
        />
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{card.segment_name}</h2>
          <h1 className="text-xl font-semibold">{card.estate_title}</h1>
          <h1>{card.description}</h1>
          <div className="flex justify-between">
            <a className="flex space-x-1">
              <span className="text-2xl text-white font-bold">For: </span>
              <button className="bg-orange-500 w-14 h-8  rounded-xl text-center">
                <span className="text-white text-xl font-bold ">
                  {card.Status}
                </span>
              </button>
            </a>
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Price: <span className="text-orange-600">{card.Price}$</span></h1>
            </div>
          </div>
          <a className="flex ">
            <span className="text-orange-800 text-2xl mt-1 ">
              <FaLocationPin />
            </span>{" "}
            <h1 className="text-xl">{card.location}</h1>
          </a>
          <div>
            <h1 className="text-xl mb-2">Facilities:</h1>
            <div className="pl-10 space-y-2">
              <h1 className="flex gap-2">
                <span className="text-xl text-orange-600">
                  <FaArrowAltCircleRight />
                </span>
                {card.F1}
              </h1>
              <h1 className="flex gap-2">
                <span className="text-xl text-orange-600">
                  <FaArrowAltCircleRight />
                </span>
                {card.F2}
              </h1>
              <h1 className="flex gap-2">
                <span className="text-xl text-orange-600">
                  <FaArrowAltCircleRight />
                </span>
                {card.F3}
              </h1>
            </div>
            <div>
              <h1 className="btn w-80 bg-orange-600 h-10 rounded-2xl text-white text-center mt-2">Buy Now</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllDetails;
