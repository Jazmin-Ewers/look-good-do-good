import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { BsHandbag, BsHeart } from 'react-icons/bs';
import { IoPersonCircleOutline } from 'react-icons/io5'


function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/"><h1>Look Good Do Good</h1></Link>
      <Link to="/orders">Orders</Link>
      &nbsp; | &nbsp;
      <Link to="/cart"><BsHandbag/></Link>
      &nbsp; | &nbsp;
      <Link to="/orders/favorites"><BsHeart/></Link>
      &nbsp; | &nbsp;
      <span><IoPersonCircleOutline/>Hi, {user.name}!</span>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  )
}

export default NavBar;