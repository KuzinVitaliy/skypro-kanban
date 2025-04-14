import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { PopNewCard } from "./components/Popups/PopNewCard/PopNewCard.jsx";
import { Calendar } from "./components/Calendar/Calendar.jsx";
import { PopUser } from "./components/Popups/PopUser/PopUser.jsx";

function App() {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="content">
        <div>
          <Main loading={loading} />
        </div>
      </div>
    </>
  );
}

export default App;
