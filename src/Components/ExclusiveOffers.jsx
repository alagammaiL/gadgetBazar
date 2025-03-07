import Grid from "@mui/material/Grid2";
import classes from "../Styles/NextGadget.module.css";
import headphone from "../assets/headphonez.png";
import Button from "@mui/material/Button";
export default function ExclusiveOffers() {
  return (
    <Grid container className={classes.layout}>
      <Grid item size={{ xs: 6, sm: 6, md: 6 }} className={classes.layoutgrid}>
        <div className={classes.backroundImg}>
          <img
            src={headphone}
            alt="headphone"
            className={classes.imageSizeFix}
          />
        </div>
      </Grid>
      <Grid item size={{ xs: 6, sm: 6, md: 6 }} className={classes.layoutgrid}>
        <div className={classes.headerContent}>
          <h1 className={classes.heading}>Discover exclusive Offers</h1>

          <p style={{ width: "80%" }}>
            Take advantage of our limited-time offers and enjoy discounts of up
            to [percentage] off.Don't miss out -shop now and elevate your tech
            game today!
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
    </Grid>
  );
}
