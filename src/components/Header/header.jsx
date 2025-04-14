import "./header.css";
import "./logo.svg";
import { PopUser } from "../../components/Popups/PopUser/PopUser.jsx";
export function Header() {
  return (
    <div className="header">
      <div className="header_block">
        <div className="logo"></div>
        <div className="rightPanel">
          <div className="createTask">Создать новую задачу</div>
          <div
            className="signUp"
            id="signUp"
            onClick={() => {
              ShowUserCard();
            }}
          >
            {" "}
            Ivan Ivanov
          </div>
          <PopUser />
          <div className="header_menu"></div>
        </div>
      </div>
    </div>
  );
}

function ShowUserCard() {
  let ucCard = document.getElementsByClassName("userCard");

 
  if (ucCard[0].style.display == "block") {
    ucCard[0].style.display = "none";
  } else {
    ucCard[0].style.display = "block";
    ucCard[0].style.position = "absolute";
    ucCard[0].style.top = "60px";
    ucCard[0].style.left = "800px";
  }
}
