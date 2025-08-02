import { useAuth } from "./src/context/AuthContext";
import { Navigate } from "react-router-dom";


export default function PrivateRoute({children})  {
    const { isAuthenticated, loading } = useAuth();

    if(loading){
        return <div>Loading...</div>
    }

    return isAuthenticated ? children : <Navigate to="/login"/>
}