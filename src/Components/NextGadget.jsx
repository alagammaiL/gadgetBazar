import Grid from "@mui/material/Grid2";
import classes from "../Styles/NextGadget.module.css";
import headphone from "../assets/headphonez.png";
import Button from "@mui/material/Button";
export default function NextGadget() {
  return (
    <Grid container className={classes.layout}>
      <Grid
        item
        size={{ xs: 12, sm: 12, md: 6 }}
        className={classes.layoutgrid}
      >
        <div className={classes.headerContent}>
          <h1 className={classes.heading}>Get your next must-have Gadget</h1>
          <p>Collect the innovation you love.</p>
          <p className={classes.paragraphWidth}>
            Explore our curated section of high-tech wonders, designed to
            elevate your daily life and inspire your passions.
          </p>
        </div>
        <Button
          variant="contained"
          endIcon={
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
          }
          className={classes.buttonDesign}
        >
          Buy Now
        </Button>
      </Grid>
      <Grid
        item
        size={{ xs: 12, sm: 12, md: 6 }}
        className={classes.layoutgrid}
      >
        <div className={classes.backroundImg}>
          <img
            src={headphone}
            alt="headphone"
            className={classes.imageSizeFix}
          />
        </div>
      </Grid>
    </Grid>
  );
}
