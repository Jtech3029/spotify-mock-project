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
    if(!song) {
    let thisSong = await getSong(songURL);
    await setSong(thisSong);
    thisSong.play();
    }
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
        <Route path="/" element={<HomePage play={play}/>}/>
        <Route path='/search' element={<Searchbar />}/>
      </Routes>
    </BrowserRouter>
    <PlayBar />  
    </div>
    }

    </div>

  );
}

export default App;
