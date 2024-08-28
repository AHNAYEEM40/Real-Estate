import { useContext } from "react";
import { AuthContext } from "../Pages/Providder/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivetRoute = ({children}) => {
    const {user ,Loading} =useContext(AuthContext);
    if(Loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};
PrivetRoute.propTypes ={
    children:PropTypes.node
}

export default PrivetRoute;