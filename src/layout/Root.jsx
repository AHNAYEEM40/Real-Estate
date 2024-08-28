import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shered/Navbar";
import Footer from "../Pages/Footer/Footer";


const Root = () => {
    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;