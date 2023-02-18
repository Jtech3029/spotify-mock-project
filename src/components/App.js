import '../styles/App.css';
import {  HashRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import { useState } from 'react';
import PlayBar from './PlayBar';
import Authentication from './Authentication';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Searchbar from './Searchbar';
import getSong from '../functions/getSong';
import randomSong from '../functions/randomSong';
import SignOut from './SignOut';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [user, setUser] = useState(getAuth());
  const [song, setSong] = useState();

  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setUser(user);
    } 
    else {
      setUser(null);
    }
  });

  async function finishedSong() {
   let url = await randomSong();
   url = url[1].location;
   play(url);
  }
  async function play(songURL) {
    if(song) song.pause();

    if(songURL) {
      let thisSong = await getSong(songURL);
      setSong(thisSong);
      thisSong.play();
    }
    else{
      song.play();
    }
    setIsPlaying(true);
  }
  return (
    <div>
    {user === null &&
    <Authentication />
    }
    {user !== null &&
      <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage play={play} />}/>
          <Route path='/search' element={<Searchbar />}/>
        </Routes>
      </HashRouter>
      {isPlaying &&
        <PlayBar song={song} play={() => song.play()} pause={() => song.pause()} isPlaying={isPlaying} finishedSong={finishedSong} setIsPlaying={setIsPlaying}/> 
      } 
      </div>
    }
  <SignOut></SignOut>
    </div>

  );
}

export default App;
