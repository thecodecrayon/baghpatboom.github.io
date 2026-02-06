import { useNavigate } from "react-router-dom";

type sellDataProps = {
  sold: number;
  total: number;
};

type Props = {
  id: number;
  title: string;
  price: number;
  unit: string;
  image: string;
  pieces: number;
  description: string;
  sellData: sellDataProps;
  isAddedToCart: (id: number) => boolean;
  handleAddToCart: (event: React.MouseEvent) => void;
};

const ItemCard = ({
  id,
  title,
  image,
  unit,
  price,
  pieces,
  description,
  sellData,
  isAddedToCart,
  handleAddToCart,
}: Props) => {
  const { sold, total } = sellData;
  const progressPercentage = Math.round((sellData.sold / sellData.total) * 100);
  const navigate = useNavigate();

  const navigateToDetailPage = () => {
    navigate("/item/1");
  };

  const isAdded = isAddedToCart(id);

  return (
    <div
      className="h-110 w-70 shadow-md flex flex-col rounded-2xl overflow-hidden bg-white"
      onClick={navigateToDetailPage}
    >
      {/* IMAGE */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src={image}
          alt="item-image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* DETAILS */}
      <div className="flex-1 flex flex-col gap-2 p-3">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-semibold">{title}</h2>
          <p className="text-gray-500 font-medium text-[13px] w-16 text-right">
            {pieces} {unit}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-gray-600 text-sm">
          {description.length <= 100
            ? description
            : `${description.slice(0, 100)}...`}
        </p>

        {/* Bottom Section */}
        <div className=" mt-auto flex items-center justify-between">
          <p className="text-3xl font-bold">₹ {price}</p>

          <button
            className={`font-medium px-3 py-1 ${
              isAdded
                ? "bg-gray-300 text-black"
                : "bg-yellow-300 text-black hover:bg-yellow-500"
            } rounded-md transition`}
            onClick={handleAddToCart}
          >
            {isAdded ? "Added" : "Add To Cart"}
          </button>
        </div>

        {/* ITEMS SOLD PROGRESS; */}
        <div className="mt-auto flex items-center gap-3 border-t border-gray-300 pt-4 pb-2">
          <div className="w-40 h-3 bg-gray-300 rounded-full overflow-hidden flex-1">
            {/* FILLED PORTION; */}
            <div
              className={`h-full ${
                progressPercentage <= 65
                  ? "bg-green-400"
                  : progressPercentage > 65 && progressPercentage < 80
                  ? "bg-yellow-400"
                  : "bg-red-400"
              } rounded-full`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* LABEL */}
          <span className="text-gray-700 text-sm">
            {sold}/{total} Sold
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
