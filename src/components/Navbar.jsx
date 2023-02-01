import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import getSong from "../firebase/getSong";
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
        <div>
            <img alt="the logo"></img>
        </div>
        <div className="nav-bar-option" onClick={() => {
            console.log("hi")
            getSong().then((audio) => audio.play());
        }}>
        Home
        </div>
        <div className="nav-bar-option" onClick={() => navigate("/search")}>
        Search
        </div>
        <div className="nav-bar-option" onClick={() => navigate("/playlists")}>
        Your Playlists
        </div>

        <div className="nav-bar-option" onClick={() => navigate("/create-playlist")}>
        Create Playlist
        </div>
        <div className="nav-bar-option" onClick={() => navigate("/favorites")}>
        Favorites
        </div>

        </div>)
}