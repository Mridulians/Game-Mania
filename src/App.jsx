import TicTacToe from "./components/tic-tac-toe/TicTacToe";

import Home from "./components/Home/Home";

import { Route, Routes } from "react-router-dom";
import Memory from "./components/MemoryBased/Memory";
import Weather from "./components/weather/Weather";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic" element={<TicTacToe />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
};

export default App;
