import TicImg from "../../assets/tic.png";
import MemoryImg from "../../assets/memory.png";
import Weather from "../../assets/Weather.png"
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/tic");
  };
  const handleRoute2 = () => {
    navigate("/memory");
  };
  const handleRoute3 = () => {
    navigate("/weather");
  };

  return (
    <div className="home">
      <h1 className="heading">Game Mania</h1>

      <div className="game_posters">
        <img
          src={TicImg}
          alt=""
          className="game_posters_img"
          onClick={handleRoute}
        />
        <img src={MemoryImg} alt="" className="game_posters_img"   onClick={handleRoute2}/>
        <img src={Weather} alt="" className="game_posters_img"   onClick={handleRoute3}/>
        
      </div>
    </div>
  );
};

export default Home;
