import { getAuth, signOut } from "firebase/auth"

export default function SignOut() {


    return(<div>
        <button onClick={() => {
            signOut(getAuth());
        }}>Sign Out</button>
    </div>)
}