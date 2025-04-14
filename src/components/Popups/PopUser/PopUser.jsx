import "./popUser.css";

export function PopUser() {
  return (
    <div className="userCard">
      <div className="userCard_content">
        <div className="userCard_name">Ivan Ivanov </div>
        <div className="userCard_email">ivan.ivanov@gmail.com</div>
        <div className="userCard_theme">
          <div className="userCard_theme_selected">Темная тема</div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="userCard_exit">Выйти</div>
      </div>
    </div>
  );
}
