import { useState } from "react";
import { NextIcon, PreviousIcon } from "../icons";
import HorizontalSlider from "./HorizontalSlider";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";
import useCart from "../context/useCart";
import type { Product } from "../types";

type sellDataProps = {
  sold: number;
  total: number;
};

type Item = {
  id: number;
  unit: string;
  price: number;
  title: string;
  image: string;
  pieces: number;
  description: string;
  sellData: sellDataProps;
};

type Props = {
  id: number;
  title: string;
  items: Item[];
  bgColor: string;
};

const ShowItemsSection = ({ id, title, items, bgColor }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = items.length - itemsPerView;
  const { addToCart, isAddedToCart } = useCart();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/categories/${id}`);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: Product
  ) => {
    event.stopPropagation();

    if (!isAddedToCart(item.id)) {
      addToCart({ ...item, quantity: 1 });
    }
  };

  return (
    <div className={`px-25 py-15 ${bgColor}`}>
      {/* TITLE */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-4xl font-bold text-gray-800">{title}</h3>
        <div className="flex gap-6">
          {/* PREVIOUS */}
          <div
            className={`group border-2 px-4 py-1 rounded 
                transition duration-200 ease-in-out ${
                  currentIndex === 0 ? "" : "hover:bg-black hover:text-white"
                }`}
            onClick={handlePrev}
          >
            <PreviousIcon
              size={40}
              className={`${
                currentIndex === 0
                  ? "group-hover:text-black"
                  : "group-hover:text-white"
              } text-current transition duration-200 ease-in-out`}
            />
          </div>

          {/* NEXT */}
          <div
            className={`group border-2 px-8 py-1 rounded
                transition duration-200 ease-in-out ${
                  currentIndex === maxIndex
                    ? ""
                    : "hover:bg-black hover:text-white"
                }`}
            onClick={handleNext}
          >
            <NextIcon
              size={40}
              className={`text-current transition duration-200 ease-in-out ${
                currentIndex === maxIndex
                  ? "group-hover:text-black"
                  : "group-hover:text-white"
              }`}
            />
          </div>

          <div
            className="bg-black flex items-center justify-center text-white px-6 py-1 rounded cursor-pointer"
            onClick={handleNavigate}
          >
            <p className="uppercase text-[16px] font-bold tracking-wide">
              Show More
            </p>
          </div>
        </div>
      </div>

      <HorizontalSlider
        items={items}
        Component={ItemCard}
        sliderData={{
          currentIndex,
          itemsPerView,
        }}
        operations={{
          handleAddToCart,
          isAddedToCart,
        }}
      />
    </div>
  );
};

export default ShowItemsSection;
