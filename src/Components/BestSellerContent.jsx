import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import smartWatch from "../assets/SmartWatch.png";
import Headphone from "../assets/Headphone.png";
import DigitalCamera from "../assets/DigitalCamera.png";
import classes from "../Styles/BestSellerContent.module.css";
import Grid from "@mui/material/Grid2";
const data = [
  {
    id: "1",
    title: "Smart Watch",
    image: smartWatch,
    price: "$300",
  },
  {
    id: "2",
    title: "Head Phone",
    image: Headphone,
    price: "$300",
  },
  {
    id: "3",
    title: "Digital Camera",
    image: DigitalCamera,
    price: "$300",
  },
];

export default function BestSellerContent() {
  return (
    <>
      {data.map((item) => {
        console.log(item);
        return (
          <Grid item size={{ xs: 4, sm: 4, md: 4 }}>
            <Card
              sx={{ maxWidth: 257 }}
              style={{
                borderRadius: "12px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              key={item.id}
            >
              <CardMedia
                sx={{ height: 315 }}
                image={item.image}
                title={item.title}
              />
              <CardContent className={classes.CardContentOuter}>
                <div className={classes.CardContent}>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}
