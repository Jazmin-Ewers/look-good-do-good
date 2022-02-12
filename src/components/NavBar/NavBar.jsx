import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { BsHandbag, BsHeart } from 'react-icons/bs';
import { IoPersonCircleOutline } from 'react-icons/io5'
import './NavBar.css';

{/* <BsHeart/> */}
export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="header">
		<Link to="/" style={{textDecoration: "none"}}><h1 className="logo">Look Good Do Good</h1> </Link>
      <ul className="main-nav">
          <li><Link to="/orders"style={{textDecoration: "none"}}><a>Order History</a></Link></li>
          <li><Link to="/orders/donate"style={{textDecoration: "none"}}><a>Donate</a></Link></li>
          <li><Link to=""style={{textDecoration: "none"}}><a><IoPersonCircleOutline/>Welcome {user.name}!</a></Link></li>
          <li><Link to="/cart"><a><BsHandbag/></a></Link></li>
          <li><Link onClick={() => handleLogOut()} to="" style={{textDecoration: "none"}}><a>Log Out</a></Link></li>
      </ul>
    </nav>
  )
}
