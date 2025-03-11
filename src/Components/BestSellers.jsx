import BestSellerData from "./BestSellerData";
import BestSellerContent from "./BestSellerContent";
import Grid from "@mui/material/Grid2";
import classes from "../Styles/BestSellers.module.css";
import Button from "@mui/material/Button";
export default function BestSellers() {
  return (
    <Grid container>
      <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
        <BestSellerData />
      </Grid>
      <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
        <Grid
          container
          spacing={{ xs: 5, sm: 5 }}
          md={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          xs={{ justifyContent: "flex-start" }}
          sm={{ justifyContent: "flex-start" }}
        >
          <BestSellerContent />
        </Grid>
      </Grid>
      <div className={classes.buttonAlignment}>
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
          Shop Here
        </Button>
      </div>
    </Grid>
  );
}
