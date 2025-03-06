import NavBar from "./Navbar";
import classes from "../Styles/HomePage.module.css";
import NavLayout from "./NavLayout";
import About from "./About";
import Special from "./Special";
import BestSellers from "./BestSellers";
export default function HomePage() {
  return (
    <div>
      <div className={classes.backgroundImg}>
        <div className={classes.Container}>
          <NavBar />
          <NavLayout />
          <About />
          <Special />
          <BestSellers />
        </div>
      </div>
    </div>
  );
}
