import Aboutdata from "./Aboutdata";
import classes from "../Styles/About.module.css";
import AboutInfo from "./AboutInfo";
import Grid from "@mui/material/Grid2";
export default function About() {
  return (
    <Grid container className={classes.marginTop}>
      <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
        <Aboutdata />
      </Grid>
      <Grid
        item
        size={{ xs: 12, sm: 12, md: 12 }}
        className={classes.AboutInfoOuter}
      >
        <AboutInfo />
      </Grid>
    </Grid>
  );
}
