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
export default function HomePage() {
  return (
    <>
      <div>
        <div className={classes.backgroundImg}>
          <div className={classes.Container}>
            <NavBar />
            <NavLayout />
          </div>
        </div>
        <div className={classes.contaienr}>
          <About />
          <Special />
          <BestSellers />
          <Offers />
          <CustomerReview />
          <Footer />
        </div>
        <Copyright />
      </div>
    </>
  );
}
