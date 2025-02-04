import "./Header.css";
import { SvgIcon } from "../../assets/logo";
import { NavLink } from "react-router";
import { PATHS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { loginUser, isAuth as auth } from "../../utils/selectors";

export const Header = () => {

  const user = useSelector(loginUser)
  const isAuth = useSelector(auth)
  const dispatch = useDispatch()

  const username = user?.username ?? "Guest"

  const handleLogout = () => {
    dispatch(logout())
  }

  const getNavLinkClass = ({isActive} : {isActive: boolean}) => isActive ? "header_button active" : "header_button"

  return (
    <header className="header">
      <div className="container header_wrapper">
        <NavLink to={PATHS.HOME}>
          <SvgIcon />
        </NavLink>
        {isAuth ? (
          <div className="header_buttons">
            <NavLink className={getNavLinkClass} to={PATHS.FAVORITES}>
              Favorites
            </NavLink>
            <NavLink className={getNavLinkClass} to={PATHS.HISTORY}>
              History
            </NavLink>
            <p className="header_username">Hi, {username}</p>
            <button onClick={handleLogout} className="header_button">Logout</button>
          </div>
        ) : (
          <div className="header_buttons">
            <NavLink className={getNavLinkClass} to={PATHS.SIGNIN}>
              Sign in
            </NavLink>
            <NavLink className={getNavLinkClass} to={PATHS.SIGNUP}>
              Sing up
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};