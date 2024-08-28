import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providder/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const email = from.get("email");
    const password = from.get("password");
    const Photo = from.get("Photo");
    const name = from.get("name");
    console.log(name, email, password, Photo);
    // create User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
    e.target.reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="Text"
                placeholder="Photo Url"
                name="Photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="ml-4 mb-4 text-xl">
            Already have accout? Please
            <Link className="text-green-700" to="/login">
              {" "}
              Login
            </Link>
          </p>
          <div className="border border-sky-200 rounded-2xl text-center h-10 w-80 mx-auto flex mb-4 ml-4 ">
            <FaGoogle className="text-2xl mt-2 ml-4 "></FaGoogle>
            <h1 className="text-2xl ml-20">Google</h1>
          </div>
          <div className="border border-sky-200 rounded-2xl text-center h-10 w-80 mx-auto flex mb-4 ml-4 ">
            <FaGithub className="text-2xl mt-2 ml-4 "></FaGithub>
            <h1 className="text-2xl ml-20">Github</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
