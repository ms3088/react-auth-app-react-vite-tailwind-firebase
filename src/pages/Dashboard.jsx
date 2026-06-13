import { getUser, clearUser } from "../utils/authStorage";
import { useNavigate } from "react-router-dom";

export default function Dashboard (){
    const user = getUser();
    const naviagate = useNavigate();

    const logout = ()=>{
        clearUser();
        naviagate("/");
    };
    return (
        <div className="p-10">
            <h1 className="text-3x1 font-bold">
                Dashboard
            </h1>
            <div className="mt-5">
                <p>Name:{user?.name}</p>
                <p>Email:{user?.email}</p>
            </div>

            <button onClick={logout}
            className="bg-red-500 text-wite px-4 py-2 mt-5 rounded cursor-pointer">Logout</button>
        </div>
    );
}