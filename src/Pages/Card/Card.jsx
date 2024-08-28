import PropertyCard from "./PropertyCard";
import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Card = () => {
const [card ,SetCard] =useState([]);
useEffect(() =>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data =>SetCard(data))
},[])
  return (
    <div>
      <div className="lg:w-full mx-auto mt-4 border-2 rounded-xl">
        <h1 className="text-3xl font-bold text-center py-3">
          Choose Your Property
        </h1>
       <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 lg:p-14  ">
       {
        card.map(property => <PropertyCard key={property.id} card ={property}></PropertyCard>)
        }
       </div>
      </div>
    </div>
  );
};

export default Card;
