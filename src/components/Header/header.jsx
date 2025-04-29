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
          <div className="rightPanel2">
            <div className="signUpPanel" id="signUp">
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
              <div className="header_menu"></div>
            </div>
            <PopUser />
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowUserCard() {
  let ucCard = document.getElementsByClassName("userCard");
  let ucSing = document.getElementsByClassName("signUp");

  if (ucCard[0].style.display == "block") {
    ucCard[0].style.display = "none";
  } else {
    ucCard[0].style.display = "block";

  }
}
