import NavBar from "./Navbar";
import "../styles/HomePage.css"
import Item from "./Item";
import SignOut from "./SignOut";

export default function HomePage(props) {
    return(<div id="home-page">
        <NavBar/>
        <div>
            I contain homepage features
            <Item url="gs://faketify-8d4b2.appspot.com/ballroom-extravaganza.jpeg" play={props.play} image="gs://faketify-8d4b2.appspot.com/ballroom-extravaganza.jpeg"></Item>
            <SignOut></SignOut>
        </div>
    </div>)
}