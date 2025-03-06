import classes from "../Styles/Special.module.css";
import SpecialityImg1 from "../assets/SpecialityImg1.png";
import SpecialityImg2 from "../assets/SpecialityImg2.png";
import SpecialityImg3 from "../assets/SpecialityImg3.png";
import shopNow from "../assets/Shop_Now.png";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

export default function Special() {
  return (
    <div>
      <h1 className={classes.specials}>Our Specials</h1>
      <Box sx={{ flexGrow: 1 }} className={classes.boxContent}>
        <Grid
          container
          spacing={7}
          md={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid item size={{ xs: 4, sm: 4, md: 4 }}>
            <div className={classes.divPseudo1}>
              <img
                src={SpecialityImg1}
                alt="specilaity1"
                className={`${classes.specialityImg} `}
              />
            </div>
            <p className={classes.splImgText}>
              Experience unparalleled wireless freedom with AirPods-your perfect
              companion for immersive sound, seamless connectivity, and all-day
              comfort.
            </p>
            <button className={classes.specialButton}>
              More Information
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
          </Grid>
          <Grid size={{ xs: 4, sm: 4, md: 4 }} item>
            <div className={classes.divPseudo2}>
              <img
                src={SpecialityImg2}
                alt="SpecialityImg2"
                className={`${classes.specialityImg2}`}
              />
            </div>
          </Grid>
          <Grid size={{ xs: 4, sm: 4, md: 4 }} item>
            <div className={classes.flexImg}>
              <img src={shopNow} alt="shop now" className={classes.shopnow} />

              <div className={classes.divPseudo3}>
                <img
                  src={SpecialityImg3}
                  alt="SpecialityImg3"
                  className={`${classes.SpecialityImg3}`}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
