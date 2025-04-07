import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { cards } from "./data.js";
import { Card } from "./components/Card/card.jsx";
import { Header } from "./components/Header/header.jsx";
import { Main } from "./components/Main/main.jsx";
import { PopNewCard } from "./components/Popups/PopNewCard/PopNewCard.jsx";
import { Calendar } from "./components/Calendar/Calendar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="content">
        <div>
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
