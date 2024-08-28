import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero lg:min-h-screen mx-auto rounded-2xl"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/4mt3b6L/photo-1605146769289-440113cc3d00.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold text-yellow-400">
            Buy Your Own Property
          </h1>
          <p className="mb-5 text-white">
            Property is a term describing anything that a person or a business
            has legal title over, affording owners certain enforceable rights
            over said items. Examples of property, which may be tangible or
            intangible, include automotive vehicles, industrial equipment,
            furniture,
          </p>
          <Link to="/">
            <button className="btn btn-primary">View Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
