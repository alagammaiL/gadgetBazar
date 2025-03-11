import NavBar from "./Navbar";
import classes from "../Styles/HomePage.module.css";
import NavLayout from "./NavLayout";
import About from "./About";
import Special from "./Special";
import BestSellers from "./BestSellers";
import Offers from "./Offers";
import Footer from "./Footer";
import Copyright from "./Copyright";
import CustomerReview from "./CustomerReview";
import Grid from "@mui/material/Grid2";
export default function HomePage() {
  return (
    <>
      <Grid container className={`${classes.container} `}>
        <Grid
          item
          size={{ xs: 12, sm: 12, md: 12 }}
          className={classes.bgsetting}
        >
          <NavBar />
          <NavLayout />
        </Grid>

        <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
          <About />
          <Special />
          <BestSellers />
          <Offers />
          <CustomerReview />
          <Footer />
        </Grid>

        <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
          <Copyright />
        </Grid>
      </Grid>
    </>
  );
}
