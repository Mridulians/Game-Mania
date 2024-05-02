import TicTacToe from "./components/tic-tac-toe/TicTacToe";

import Home from "./components/Home/Home";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic" element={<TicTacToe />} />
      </Routes>
    </div>
  );
};

export default App;
