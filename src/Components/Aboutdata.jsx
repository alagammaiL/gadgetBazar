import classes from "../Styles/Aboutdata.module.css";
export default function Aboutdata() {
  return (
    <div className={classes.flexContainer}>
      <h1>
        ABOUT Gadget<span style={{ color: "#3498db" }}>Bazar</span>
      </h1>
      <p className={classes.flexdata}>
        At GadgetBazar,we're passionate about bringing you the latest and
        greatest in electronics and gadgets.With our curated selection of high
        quality products and exceptional customer service, we strive to make
        your shopping experience enjoyable and hassle-free.
      </p>
    </div>
  );
}
