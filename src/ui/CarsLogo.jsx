import React from "react";

const logos = [
  {
    id: 1,
    src: "./images/logos/bmw.png",
  },
  {
    id: 2,
    src: "./images/logos/benz.jpg",
  },
  {
    id: 3,
    src: "./images/logos/jeep.png",
  },
  {
    id: 4,
    src: "./images/logos/toyota.png",
  },
  {
    id: 5,
    src: "./images/logos/hyundai.jpg",
  },
  {
    id: 6,
    src: "./images/logos/lexsus.png",
  },
  {
    id: 7,
    src: "./images/logos/honda.png",
  },
  {
    id: 8,
    src: "./images/logos/honda.png",
  },
  {
    id: 9,
    src: "./images/logos/landover.png",
  },
  {
    id: 10,
    src: "./images/logos/nissan.png",
  },
];

function CarsLogo() {
  return (
    <div className=" w-full flex justify-between items-center">
      {logos.map((item) => (
        <img key={item.id} src={item.src} className=" w-32 h-32"/>
      ))}
    </div>
  );
}

export default CarsLogo;
