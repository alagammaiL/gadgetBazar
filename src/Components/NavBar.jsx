import classes from "../Styles/NavBar.module.css";
import { Link } from "react-router-dom";
import LogoImg from "../assets/Logo.png";
import search from "../assets/Vector.png";
import Cart from "../assets/Cart.png";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className={classes.flexLayoutNavBarMbl}>
        <Link to=""> Home</Link>
        <Link to=""> About</Link>
        <Link to=""> Product</Link>
        <Link to=""> Contact</Link>
      </div>
    </Box>
  );
  return (
    <Grid container spacing={{ xs: 2 }}>
      <Grid item size={{ xs: 12, sm: 12, md: 4 }} className={classes.selfAlign}>
        <Link to="">
          <img src={LogoImg} alt="logo" className={classes.logoImg} />
        </Link>
      </Grid>
      <Grid
        item
        size={{ xs: 12, sm: 6, md: 4 }}
        className={`${classes.selfAlign} ${classes.displayDrawer}`}
      >
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
          <div className={classes.hideDrawer}>
            <Button onClick={toggleDrawer(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={classes.iconSize}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
              {DrawerList}
            </Drawer>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
