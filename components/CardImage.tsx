import React, { FC } from "react";
import { Image } from "react-native";

interface CardImageProps {
  img: string | any;
}

const CardImage: FC<CardImageProps> = ({ img }) => {
  return <Image source={img} className="w-80 h-80 mt-8" />;
};

export default CardImage;
