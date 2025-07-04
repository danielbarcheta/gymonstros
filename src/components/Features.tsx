import React from "react";
import {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature6,
} from "../assets";

const features = [
  {
    id: 1,
    image: Feature1,
    text: "RESPONSABILIDADE",
  },
  {
    id: 2,
    image: Feature2,
    text: "VARIEDADE",
  },
  {
    id: 3,
    image: Feature3,
    text: "SUPORTE",
  },
  {
    id: 4,
    image: Feature4,
    text: "MOTIVAÇÃO",
  },
  {
    id: 5,
    image: Feature5,
    text: "RESULTADOS GARANTIDOS",
  },
  {
    id: 6,
    image: Feature6,
    text: "AMBIENTE SOCIAL",
  },
];


const SingleFeature = (image: string | undefined, text: string, id: number) => {
  return (
    <div className="flex flex-col justify-center items-center" key={id}>
      <img
        src={image}
        alt={text}
        className="w-20 h-20 md:w-40 md:h-40 hover:scale-105 transform transition duration-500 ease-in-out"
      />
      <div className="flex justify-center items-center font-poppins text-white text-lg md:text-2xl font-bold text-center mt-5 mb-5">
        {text.toUpperCase()}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-secondary py-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 mt-20 justify-evenly">
        {features.map((feature) => {
          return SingleFeature(feature.image, feature.text, feature.id);
        })}
      </div>
    </div>
  );
};

export default Features;
