import Slider from "react-slick";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import customer from "../assets/customer.png";
import classes from "../Styles/CustomerReview.module.css";

const data = [
  {
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
];
export default function CustomerReview() {
  return (
    <>
      <Grid container className={classes.gridLayout} spacing={5}>
        <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
          <h1 className={classes.heading}>Our Customer Says</h1>
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
          <Grid container>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {data.map((item) => {
                return (
                  <SwiperSlide>
                    <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
                      <Card variant="outlined">
                        <CardContent>
                          <div className={classes.designCard}>
                            <img
                              alt={item.name}
                              src={customer}
                              className={classes.avatar}
                            />
                            <h1>{item.name}</h1>
                            <center>
                              <p className={classes.review}>
                                &ldquo;{item.review}&rdquo;
                              </p>
                            </center>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
