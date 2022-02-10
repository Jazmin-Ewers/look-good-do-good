import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <h1>Look Good Do Good</h1>
      <Link to="/orders">Shop</Link>
      &nbsp; | &nbsp;
      <Link to="/checkout">Checkout</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/favorites">Favorites</Link>
      &nbsp; | &nbsp;
      <span>Hi, {user.name}!</span>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  )
}

export default NavBar;