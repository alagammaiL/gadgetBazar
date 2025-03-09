import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import customer from "../assets/customer.png";
import classes from "../Styles/CustomerReview.module.css";
import Dialog from "../Components/Dialog";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        marginRight: "40px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        marginLeft: "40px",
        zIndex: 999999,
      }}
      onClick={onClick}
    />
  );
}
const data = [
  {
    id: 0,
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    id: 1,
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    id: 2,
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    id: 3,
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    id: 4,
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    id: 5,
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
  {
    id: 6,
    image: "../assets/customer.png",
    name: "JethaLal Gada",
    review:
      "Love my new Apple Airpods! Its sleek packed with features, and has great battery life.Highly recommend!",
  },
];
export default function CustomerReview(props) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleClickOpen = (item) => {
    setOpen(true);
    console.log(item);
    setSelectedValue(item);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Grid container className={classes.gridLayout} spacing={5}>
        <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
          <h1 className={classes.heading}>Our Customer Says</h1>
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
          <Slider {...settings}>
            {data.map((item) => {
              return (
                <Grid conatiner>
                  <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
                    <Card
                      variant="outlined"
                      onClick={() => handleClickOpen(item)}
                    >
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
                </Grid>
              );
            })}
          </Slider>
          <Dialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </Grid>
      </Grid>
    </>
  );
}
