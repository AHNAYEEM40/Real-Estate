import { Link } from "react-router-dom";

const Property = () => {
    return (
        <div >
        <h1 className="text-2xl font-bold text-center mt-4 mb-4">This is Our Most Expensive Property 
        </h1>
        <div>
        <img className="w-full mx-auto rounded-2xl" src="https://i.ibb.co/GpVSsdH/Stock-Modern-House-In-Twilight-Adobe-Stock-368976934-copy.jpg" alt="" />
        </div>
      <div className="text-center ">
      <h1 className="text-2xl font-bold">Its Price more about 24000$ Dollar</h1>
        <p className="text-xl font-semibold">You Can Pursecs By EMI system,We Provide full fasilitis</p>
        <Link to='/card'>
        <button className="btn btn-outline text-cyan-600 mb-4 mt-2">See Resonable Property</button>
        </Link>
     
      </div>
     
      </div>
    );
};

export default Property;