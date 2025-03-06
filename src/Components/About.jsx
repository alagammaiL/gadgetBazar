import Aboutdata from "./Aboutdata";
import classes from "../Styles/About.module.css";
import AboutInfo from "./AboutInfo";
export default function About() {
  return (
    <div className={classes.aboutGrid}>
      <Aboutdata />
      <AboutInfo />
    </div>
  );
}
