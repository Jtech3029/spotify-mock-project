import NavBar from "./Navbar";
import "../styles/HomePage.css"
import Item from "./Item";
import randomSong from "../functions/randomSong";
import { useEffect, useState } from "react";
import uniqid from "uniqid";

export default function HomePage(props) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const getSongs = async () => {
            let copy = songs.slice(0);
            for(let i = 0; i < 8; i++) {
                let x = await randomSong();
                const clone = structuredClone(x[1]);

                x[1] = clone;

                copy.push(x);
            }
            setSongs(copy);
        }
        getSongs();

    }, [])
    return(<div id="home-page">
        <NavBar/>
        <div>
            <div className="song-list">
            {songs.map((x) => {
                return(
                    <Item songUrl={x[1].location} image={x[1].image} play={props.play} key={uniqid()}></Item>
            )})}
            </div>
        </div>
    </div>)
}