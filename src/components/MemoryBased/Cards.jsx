import { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/memory/react.png", stat: "" },
      { id: 1, img: "/memory/react.png", stat: "" },
      { id: 2, img: "/memory/nodejs.png", stat: "" },
      { id: 2, img: "/memory/nodejs.png", stat: "" },
      { id: 3, img: "/memory/css.png", stat: "" },
      { id: 3, img: "/memory/css.png", stat: "" },
      { id: 4, img: "/memory/js.png", stat: "" },
      { id: 4, img: "/memory/js.png", stat: "" },
      { id: 5, img: "/memory/angular.png", stat: "" },
      { id: 5, img: "/memory/angular.png", stat: "" },
      { id: 6, img: "/memory/html.png", stat: "" },
      { id: 6, img: "/memory/html.png", stat: "" },
      { id: 7, img: "/memory/scss.png", stat: "" },
      { id: 7, img: "/memory/scss.png", stat: "" },
      { id: 8, img: "/memory/vue.png", stat: "" },
      { id: 8, img: "/memory/vue.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  const handleClick = (id) => {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;
