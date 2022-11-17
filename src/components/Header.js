import classes from './Header.module.css';
import { useSelector , useDispatch } from 'react-redux';
import {authActions} from "../store/index"

const Header = () => {
  const authStatus = useSelector((state) => state.Authentication.isAuthenticate)
  const dispatch = useDispatch()
  const loggedStatusHandler = () => {
    dispatch(authActions.loggedOut())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authStatus && <nav>
         <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={loggedStatusHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
