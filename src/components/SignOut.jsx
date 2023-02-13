import { getAuth, signOut } from "firebase/auth"

export default function SignOut() {


    return(<div>
        <button id="sign-out"onClick={() => {
            signOut(getAuth());
        }}>Sign Out</button>
    </div>)
}