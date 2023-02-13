import '../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import { useState } from 'react';
import PlayBar from './PlayBar';
import Authentication from './Authentication';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Searchbar from './Searchbar';
import getSong from '../functions/getSong';

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

  async function play(songURL) {
    if(song) song.pause();

    if(songURL) {
      let thisSong = await getSong(songURL);
      await setSong(thisSong);
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
    {user &&
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage play={play} />}/>
        <Route path='/search' element={<Searchbar />}/>
      </Routes>
    </BrowserRouter>
    {isPlaying &&
      <PlayBar song={song} play={() => song.play()} pause={() => song.pause()} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/> 
  } 
    </div>
    }

    </div>

  );
}

export default App;
