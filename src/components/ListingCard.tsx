import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NOOP } from "../utils";
import type { ListingCardProps } from "../types";

const ListingCard = ({
  id,
  title,
  image,
  unit,
  price,
  pieces,
  sellData,
  addToCart = NOOP,
  isAddedToCart,
}: ListingCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const soldPercentage = (sellData.sold / sellData.total) * 100;
  const navigate = useNavigate();

  const navigateToDetailPage = () => {
    navigate("/item/1");
  };

  const isAdded = isAddedToCart(id);

  return (
    <div
      className="group h-auto w-full flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
      onClick={navigateToDetailPage}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden w-full aspect-square bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Favorite Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm absolute z-10 right-3 top-3 hover:bg-white transition-all duration-300 shadow-md"
        >
          <Heart
            size={18}
            className={`transition-all duration-300 ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-700"
            }`}
          />
        </button>

        {/* Stock Badge */}
        {soldPercentage > 70 && (
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
            {soldPercentage >= 90 ? "Almost Gone!" : "Selling Fast"}
          </div>
        )}
      </div>

      {/* DETAILS */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Title & Quantity */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-lg font-bold text-gray-900 line-clamp-2 flex-1">
            {title}
          </h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
            {pieces} {unit}
          </span>
        </div>

        {/* Spacer to push content to bottom */}
        <div className="flex-1"></div>

        {/* Progress Bar */}
        <div className="space-y-1 mt-auto">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>{sellData.sold} sold</span>
            <span>{sellData.total - sellData.sold} left</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-400 rounded-full transition-all duration-500"
              style={{ width: `${soldPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Price</span>
            <p className="text-2xl font-bold text-gray-900">₹{price}</p>
          </div>

          <button
            className={`flex items-center gap-2 font-semibold px-5 py-3 ${
              isAdded
                ? "bg-gray-300 text-gray-900"
                : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
            }  rounded-xl  transition-all duration-300 shadow-sm hover:shadow-md active:scale-95`}
            onClick={addToCart}
            disabled={isAdded}
          >
            <ShoppingCart size={18} />
            <span>{isAdded ? "Added" : "Add"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
