import classes from "../Styles/NavBar.module.css";
import { Link } from "react-router-dom";
import LogoImg from "../assets/Logo.png";
import search from "../assets/Vector.png";
import Cart from "../assets/Cart.png";
export default function NavBar() {
  return (
    <>
      <nav className={classes.flexContainer}>
        <Link to="">
          <img src={LogoImg} alt="logo" className={classes.logoImg} />
        </Link>
        <div className={classes.flexLayoutNav}>
          <Link to=""> Home</Link>
          <Link to=""> About</Link>
          <Link to=""> Product</Link>
          <Link to=""> Contact</Link>
        </div>
        <div className={classes.flexLayoutNavIcons}>
          <img src={search} alt="search" />
          <img src={Cart} alt="cart" />
          <button className={classes.navButton}>Get Started</button>
        </div>
      </nav>
    </>
  );
}
