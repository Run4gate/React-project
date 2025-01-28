import "./Header.css";
import Logo from "../../assets/logo";
import { NavLink } from "react-router";
import { PATHS } from "../../utils/constants";

type HeaderProps = {
  isAuth?: boolean;
  userName?: string;
};

export const Header = ({ isAuth, userName }: HeaderProps) => 
  (
    <header className="header">
      <div className="container header_wrapper">
        <NavLink to={PATHS.HOME}>
          <Logo />
        </NavLink>
        {isAuth ? (
          <div className="header_buttons">
            <NavLink className="header_button" to={PATHS.FAVORITES}>
              Favorites
            </NavLink>
            <NavLink className="header_button" to={PATHS.HISTORY}>
              History
            </NavLink>
            <p className="header_username">Hi, {userName}</p>
            <button className="header_button">Logout</button>
          </div>
        ) : (
          <div className="header_buttons">
            <NavLink className="header_button" to={PATHS.SIGNIN}>
              Sign in
            </NavLink>
            <NavLink className="header_button" to={PATHS.SIGNUP}>
              Sing up
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );