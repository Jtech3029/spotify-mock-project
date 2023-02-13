import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import "../styles/Item.css";

export default function Item(props) {
    const [imageURL, setImageURL] = useState();

    //get the image link on load
    useEffect(() => {
        getDownloadURL(ref(getStorage(), props.image))
        .then((url) => {
            setImageURL(url);
        })
        .catch((error) => {
            console.error(error);
        });
    },[])
    return(
        <div className="song-item">
            <img src={imageURL} alt="the cover" className="song-item-image"/>
            <div onClick={() => {
                props.play(props.songUrl);
            }}>
                <img  alt="a play button" src={require("../imgs/green-play.png")} data-testid="play" className="item-play"/>
            </div>
        </div>
    )
}