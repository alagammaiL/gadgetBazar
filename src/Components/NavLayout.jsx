import classes from "../Styles/NavLayout.module.css";
import RightArrow from "../assets/RightArrow.png";
import WatchHero from "../assets/WatchHero.png";
import Rectangle13 from "../assets/Rectangle13.png";
import FitnessImg from "../assets/fitness.png";
import Music from "../assets/music.png";
import compatability from "../assets/compatability.png";
import gps from "../assets/gps.png";
export default function NavLayout() {
  return (
    <>
      <div className={classes.gridLayout}>
        <div className={classes.headerContent}>
          <h1 className={classes.heading}>
            Introducing Our Top Pick of the Week
          </h1>
          <p className={classes.paragraph}>
            Behold the <span style={{ color: "#3498db" }}>TechFit</span> Pro
            Smartwatch, the ultimate companion for modern living.
          </p>
          <button className={classes.navButton}>
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={classes.rightarrowSvg}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className={classes.buttonContainer}>
          <img src={WatchHero} alt="watch-hero" className={classes.watchHero} />

          <button
            className={`${classes.fitnessTracking} ${classes.functionality}`}
          >
            <div className={classes.ImgIconOuter}>
              <img src={FitnessImg} alt="fitness" className={classes.imgIcon} />
            </div>
            Fitness Tracking
          </button>

          <button
            className={`${classes.musicControl} ${classes.functionality}`}
          >
            <div className={classes.ImgIconOuter}>
              <img src={Music} alt="fitness" className={classes.imgIcon} />
            </div>
            Music Control
          </button>
          <button
            className={`${classes.compatability} ${classes.functionality}`}
          >
            <div className={classes.ImgIconOuter}>
              <img
                src={compatability}
                alt="fitness"
                className={classes.imgIcon}
              />
            </div>
            Compatability
          </button>
          <button className={`${classes.gpsTracking} ${classes.functionality}`}>
            <div className={classes.ImgIconOuter}>
              <img src={gps} alt="fitness" className={classes.imgIcon} />
            </div>
            GPS Tracking
          </button>
        </div>
      </div>
    </>
  );
}
