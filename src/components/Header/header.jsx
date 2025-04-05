import "./header.css";
import "./logo.svg";
export function Header() {
  return (
    <div className="header">
      <div className="header_block">
        <div className="logo"></div>
        <div className="rightPanel">
          <div className="createTask">Создать новую задачу</div>
          <div className="signUp">Ivan Ivanov</div>
          <div className="header_menu"></div>
        </div>
      </div>
    </div>
  );
}
