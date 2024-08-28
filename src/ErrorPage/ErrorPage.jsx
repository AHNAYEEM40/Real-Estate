import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate=useNavigate()
    const back = ()=>{
        navigate('/')
    }
    return (
        <div className="max-w-6xl mx-auto border-2 border-green-400 w-96 h-72 mt-4 text-center">
            <h1 className="text-2xl font-bold mt-8">404 Error</h1>
            <p className="text-3xl mt-4">Your are the wrong way </p>
            <button onClick={back} className="btn btn-outline mt-4" >Go back to home</button>
        </div>
    );
};

export default ErrorPage;