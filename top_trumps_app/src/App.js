import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerContainer from './player/container/PlayerContainer';
import GameContainer from './game/containers/GameContainer';
import HomePageContainer from './HomePageContainer';



function App() {

  return (

    <Router>
      <Routes>
        <Route exact path='/' element={< HomePageContainer />} />
        <Route exact path='/game' element={< GameContainer />} />
        <Route exact path= '/player' element={<PlayerContainer />} />
      </Routes>
      
    </Router>
  );
};

export default App;
