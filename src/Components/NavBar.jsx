import classes from "../Styles/NavBar.module.css";
import { Link } from "react-router-dom";
import LogoImg from "../assets/Logo.png";
import search from "../assets/Vector.png";
import Cart from "../assets/Cart.png";
import Grid from "@mui/material/Grid2";
export default function NavBar() {
  return (
    <Grid container spacing={{ xs: 2 }}>
      <Grid item size={{ xs: 12, sm: 12, md: 4 }} className={classes.selfAlign}>
        <Link to="">
          <img src={LogoImg} alt="logo" className={classes.logoImg} />
        </Link>
      </Grid>
      <Grid item size={{ xs: 12, sm: 6, md: 4 }} className={classes.selfAlign}>
        <div className={classes.flexLayoutNav}>
          <Link to=""> Home</Link>
          <Link to=""> About</Link>
          <Link to=""> Product</Link>
          <Link to=""> Contact</Link>
        </div>
      </Grid>
      <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
        <div className={classes.flexLayoutNavIcons}>
          <img src={search} alt="search" />
          <img src={Cart} alt="cart" />
          <button className={classes.navButton}>Get Started</button>
        </div>
      </Grid>
    </Grid>
  );
}
