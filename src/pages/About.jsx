import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Contact from "./Contact";
import Location from "../components/Location/Location";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-40">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <Location />
        <BlogsComp />
        <Contact />
      </div>
    </div>
  );
}

const data = [
  {
    name: `Yuvraj Singh`,
    img: `/students/yuvraj.jpg`,
    review: `UG Student, CSE 3rd year
DEVELOPER AND MAINTAINER`,
  },
  {
    name: `Fateh Bahadur Singh`,
    img: `/students/papa.jpg`,
    review: `ADVISIOR, `,
  },
  {
    name: `Puja`,
    img: `/students/puja.jpg`,
    review: `Web Designer`,
  },
  {
    name: `Chombu Rumo`,
    img: `/students/chombu.jpg`,
    review: `UG Student, CSE 3rd year
FRONT-END, UI-UX`,
  },
  {
    name: `Rohit Ram`,
    img: `/students/rohit.jpg`,
    review: `UG Student, CSE 3rd year
WEB EDITOR AND DESIGNER`,
  },
];

export default About;
