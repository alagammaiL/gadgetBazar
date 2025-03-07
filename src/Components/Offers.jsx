import ExclusiveOffers from "./ExclusiveOffers";
import NextGadget from "./NextGadget";
import Grid from "@mui/material/Grid2";
import classes from "../Styles/Offers.module.css";
export default function Offers() {
  return (
    <Grid container className={classes.gridLayout} spacing={10}>
      <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
        <NextGadget />
      </Grid>
      <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
        <ExclusiveOffers />
      </Grid>
    </Grid>
  );
}
