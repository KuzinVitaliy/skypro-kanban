import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { cards } from "./data.js";
import { Card } from "./components/Card/card.jsx";
import { header } from "./components/Header/header.jsx";
import { main } from "./components/Main/main.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div classname="content">
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
