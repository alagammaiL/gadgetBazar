import BestSellerData from "./BestSellerData";
import BestSellerContent from "./BestSellerContent";
import Grid from "@mui/material/Grid2";
import classes from "../Styles/BestSellers.module.css";
export default function BestSellers() {
  return (
    <Grid container className={classes.layout}>
      <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
        <BestSellerData />
      </Grid>
      <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
        <BestSellerContent />
      </Grid>
    </Grid>
  );
}
