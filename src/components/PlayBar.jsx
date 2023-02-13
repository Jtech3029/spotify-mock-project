import { useEffect, useState } from "react";
import "../styles/PlayBar.css";

export default function PlayBar(props) {

    const [songTime, setSongTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    useEffect(() => {
        if(props.song.ended) {
            props.finishedSong();
        }
            const interval = setInterval(() => setSongTime((props.song.currentTime / props.song.duration) * 100)
            , 1000);
        return () => clearInterval(interval);
      });

    useEffect(() => {
        setIsPaused(false);
    }, [props.song])
    
    return(
        
        <div id="playbar">
        <div>
            <div id="top-playbar">
                {isPaused &&
                <div className="button-container">
                    <img onClick={() => {
                        setIsPaused(false);
                        props.play();
                        }} src={require("../imgs/play-button.png")} data-testid="play-button" className="buttons" alt="play button"></img>
                    </div>
                }
                {!isPaused &&
                <div className="button-container">
                    <img onClick={() => {
                        setIsPaused(true);
                        props.pause();
                        }} src={require("../imgs/pause.png")} data-testid="pause-button" className="buttons" alt="pause button"></img>
                </div>
                }
            </div>
            <img onClick={() => props.song.loop ? props.song.loop = false : props.song.loop = true} alt="loop"></img>
        </div>
            <div className="slidecontainer">
                <input onInput={(e) => {
                    props.song.currentTime = props.song.duration * (e.target.value / 100);
                    setSongTime(e.target.value);
                }}type="range" min="0" max="100" value={songTime ? songTime : 0} id="play-bar"></input>
            </div>
        </div>
    )
}