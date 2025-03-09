import classes from "../Styles/Copyright.module.css";
import Grid from "@mui/material/Grid2";
export default function Copyright() {
  return (
    <Grid container className={classes.gridCopyright}>
      <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
        <div className={classes.Copyright}>
          <p>&copy;2024 GadgetBazar. Shop with us</p>
        </div>
      </Grid>
    </Grid>
  );
}
