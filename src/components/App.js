import '../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import { useState } from 'react';
import PlayBar from './PlayBar';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
    <PlayBar />
    </div>

  );
}

export default App;
