import { Navigate } from "react-router-dom";
import { getUser } from "../utils/authStorage";

export default function ProtectedRouter({children}){
const user= getUser();
console.log("user:",user)
return user? children:<Navigate to="/"replace/>;
/*
if (!user){
    return<Navigate to= "/"/>;
}
return children;*/
}