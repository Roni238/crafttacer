import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Levels from './component/Levels/Levels';
import PlayPage from './component/PlayPage/PlayPage';
import StartMenu from './component/StartMenu/StartMenu';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        
              <Routes>
                <Route path="//*" element={<StartMenu/>} />
                <Route path="/levels/*" element={<Levels/>} />
                <Route path="/level1/*" element={<PlayPage state={props.state.level1} />} />
                <Route path="/level2/*" element={<PlayPage state={props.state.level2} />} />
                <Route path="/level3/*" element={<PlayPage state={props.state} />} />
              </Routes>
        
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
