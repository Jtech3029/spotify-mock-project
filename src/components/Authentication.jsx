import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase";

export default function Authentication(props) {
    async function signIn() {
        const provider = new GoogleAuthProvider();

        try{
            await signInWithPopup(getAuth(), provider);
        }
        catch{

        }
    }
    return (
        <div>
            <button onClick={signIn}>
                Sign in
            </button>
        </div>
    )
}