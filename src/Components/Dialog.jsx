import Dialog from "@mui/material/Dialog";
import customer from "../assets/customer.png";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import classes from "../Styles/Dialog.module.css";
export default function Dialogs(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Grid conatiner className={classes.gridLayout}>
        <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
          <Card variant="outlined">
            <CardContent>
              <div className={classes.designCard}>
                <img
                  alt={selectedValue.name}
                  src={customer}
                  className={classes.avatar}
                />
                <h1>{selectedValue.name}</h1>
                <center>
                  <p className={classes.review}>
                    &ldquo;{selectedValue.review}&rdquo;
                  </p>
                </center>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Dialog>
  );
}
