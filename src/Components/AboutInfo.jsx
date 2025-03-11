import classes from "../Styles/AboutInfo.module.css";
import shipping from "../assets/shipping.png";
import hassle_free from "../assets/hassle_free.png";
import discount from "../assets/discounts.png";
import customerSupport from "../assets/customerSupport.png";
import watchbackground from "../assets/watchbackgrnd.png";
import Grid from "@mui/material/Grid2";
export default function AboutInfo() {
  return (
    <Grid container spacing={3} className={classes.AboutInfoLayout}>
      <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
        <div className={classes.card}>
          <div>
            <img src={shipping} alt="shipping" className={classes.imgSetUp} />
          </div>
          <p className={classes.InfoStyle}>
            Offering expedited shipping options and ensuring timely delivery of
            orders,with tracking information available for customers.
          </p>
        </div>
      </Grid>
      <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
        <div className={classes.card}>
          <div>
            <img
              src={customerSupport}
              alt="customer-support"
              className={classes.imgSetUp}
            />
          </div>
          <p className={classes.InfoStyle}>
            Providing multiple channels for customer support, including live
            chat, email and phone support,to address any queries or issues
            promptly.
          </p>
        </div>
      </Grid>
      <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
        <div className={classes.card}>
          <div>
            <img src={discount} alt="discounts" className={classes.imgSetUp} />
          </div>
          <p className={classes.InfoStyle}>
            Offering discounts,coupons and promotional offers to incentivize
            purchases and reward royal customers.
          </p>
        </div>
      </Grid>
      <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
        <div className={classes.card}>
          <div>
            <img
              src={hassle_free}
              alt="hassle-free"
              className={classes.imgSetUp}
            />
          </div>
          <p className={classes.InfoStyle}>
            Providing a hassle-free return policy and easy refund process for
            customers in case they are not satisfied with their purchases.
          </p>
        </div>
      </Grid>
    </Grid>
  );
}
