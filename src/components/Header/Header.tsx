import "./Header.css";
import { SvgIcon } from "../../assets";
import { NavLink } from "react-router";
import { PATHS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { loginUser, isAuth } from "../../utils/selectors";


export const Header = () => {

  const user = useSelector(loginUser)
  const isAuthenticated = useSelector(isAuth)
  const dispatch = useDispatch()

  const username = user?.username ?? "Guest"

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className="header">
      <div className="container header_wrapper">
        <NavLink to={PATHS.HOME}>
          <SvgIcon />
        </NavLink>
        {isAuthenticated ? (
          <div className="header_buttons">
            <NavLink className="header_button" to={PATHS.FAVORITES}>
              Favorites
            </NavLink>
            <NavLink className="header_button" to={PATHS.HISTORY}>
              History
            </NavLink>
            <p className="header_username">Hi, {username}</p>
            <button onClick={handleLogout} className="header_button">Logout</button>
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
};