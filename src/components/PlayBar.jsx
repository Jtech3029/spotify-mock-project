import "../styles/PlayBar.css";

export default function PlayBar(props) {
    return(
        <div id="playbar"> 
            <div class="slidecontainer">
                <input onInput={(e) => {
                    e.target.innerHTML = e.target.value;
                }}type="range" min="1" max="100" value="45" class="slider" id="myRange"></input>
            </div>
        </div>
    )
}