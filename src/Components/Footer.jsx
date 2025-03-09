import Grid from "@mui/material/Grid2";
import nav from "../assets/nav.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import { Link } from "react-router-dom";
import insta from "../assets/insta.png";
import social from "../assets/social.png";
import facebook from "../assets/facebook.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "../Styles/Footer.module.css";
import { Form } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Grid container className={classes.gridLayout} spacing={2}>
        <Grid item size={{ xs: 6, sm: 6, md: 3 }}>
          <div>
            <h1>Contact Us</h1>
            <div className={classes.alignFix}>
              <p>
                <img
                  src={nav}
                  alt="navigation"
                  className={classes.icongFooter}
                />
                <span>Naya Gaun, Pokhara-15, PKR-33700</span>
              </p>
              <p>
                <img src={phone} alt="phone" className={classes.icongFooter} />
                <span>+977 9806771233</span>
              </p>
              <p>
                <img src={email} alt="phone" className={classes.icongFooter} />
                <span>bazaratgadget2234@gmail.com</span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item size={{ xs: 6, sm: 6, md: 2 }}>
          <div>
            <h1>Quick Links</h1>
            <div className={classes.alignFix}>
              <li>
                <Link to="#">Home </Link>
              </li>
              <li>
                <Link to="#">About </Link>
              </li>
              <li>
                <Link to="#">Product </Link>
              </li>
              <li>
                <Link to="#">Contact </Link>
              </li>
            </div>
          </div>
        </Grid>
        <Grid item size={{ xs: 6, sm: 6, md: 3 }}>
          <div>
            <h1>Social Handles</h1>
            <div>
              <div className={classes.socialFix}>
                <div>
                  <Link to="#">
                    <img
                      src={insta}
                      alt="insta"
                      className={classes.icongFooter}
                    />
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <img
                      src={social}
                      alt="social"
                      className={classes.icongFooter}
                    />
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <img
                      src={facebook}
                      alt="facebook"
                      className={classes.icongFooter}
                    />
                  </Link>
                </div>
              </div>
              <div>
                <h1>Customer Service</h1>
                <div className={classes.alignFix}>
                  <div>
                    <Link to="#">Terms of Srvice</Link>
                  </div>
                  <div>
                    <Link to="#">FQA</Link>
                  </div>
                  <div>
                    <Link to="#">Report Issues</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item size={{ xs: 6, sm: 6, md: 4 }}>
          <div>
            <h1>Subscribe to our News Letter</h1>
            <div>
              <p style={{ marginBottom: "1.7rem" }}>
                Sign up to be the first to receive latest news about our
                products.
              </p>
              <Form method="">
                <div style={{ width: "80%", maxWidth: "100%" }}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Enter Your Email Address"
                    variant="outlined"
                    fullWidth
                    className={classes.MuiInputBase}
                  />
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
                  Subscribe
                </Button>
              </Form>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
