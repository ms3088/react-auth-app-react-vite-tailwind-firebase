import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { saveUser } from "../utils/authStorage";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();

    const login = async()=>{
      //  const provider=new GoogleAuthProvider();
        try{
              const provider=new GoogleAuthProvider();
            const result  = await signInWithPopup(auth, provider);

            const userData = {
                uid:result.user.uid,
                name:result.user.displayName,
                email:result.user.email,
                photo:result.user.photoURL,
            };
            saveUser(userData);
            navigate("/dashboard");
        }catch(err){
            console.log(err);
        }
    };
    return (
        <div className="bg-white p-8 rounded-2x1 shadow-x1 w-96">
            <h2 className="text-3x1 font-bold text-center mb-6">
                Create Account
            </h2>

            <input type= "text"
            placeholder="UserName"
            className="w-full p-3 border rounded-lg mb-4"/>

            <input type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-4" />

            <button
            className="w-full bg-green-600 text-white py-3 rounded-lg mb-4 cursor-pointer hover:bg-green-700">Register</button>
            <div className="text-center text-gray-500 mb-4">Or</div>

            <button onClick={login} className="w-full bg-blue-600 text-white py-3 rounded-lg cursor-pointer hover:bg-blue-700">Continue with Google</button>
        </div>
    );
}