import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/NavBar.css"

export default function NavBar() {
    useEffect(() => {
        let options = document.getElementsByClassName("nav-bar-option");

        for(let i = 0; i < options.length; i++) {
            options[i].addEventListener("mouseover", changeColor);
            options[i].addEventListener("mouseleave", changeColor);
        }

        return () => {
            let options = document.getElementsByClassName("nav-bar-option");

            for(let i = 0; i < options.length; i++) {
                options[i].removeEventListener("mouseover", changeColor);
                options[i].removeEventListener("mouseleave", changeColor);
            }
        }
    },[])

    function changeColor(e) {
        if(e.target.style.color === "white") {
            e.target.style.color = "#d3d3d3";
        }
        else{
            e.target.style.color = "white";
        }
    }

    const navigate = useNavigate();

    return(<div id="nav-bar">
        <div id="logo">
            <img alt="the logo" src={require("../imgs/spotify-logo.jpg")} id="spotify-logo"></img>
            <div>
                Faketify
            </div>
        </div>
        <div className="nav-bar-option" onClick={() => navigate("/")}>
        Home
        </div>
        <div className="nav-bar-option" onClick={() => navigate("/search")}>
        Search
        </div>
        <div className="nav-bar-option" onClick={() => navigate("/")}>
        Your Playlists
        </div>

        <div className="nav-bar-option" onClick={() => navigate("/")}>
        Create Playlist
        </div>
        <div className="nav-bar-option" onClick={() => navigate("/")}>
        Favorites
        </div>

        </div>)
}