import { useParams } from "react-router-dom";
import { homeData } from "../data";
import ListingCard from "../components/ListingCard";
import useCart from "../context/useCart";
import type { Product } from "../types";

const CategoryListing = () => {
  const { id: categoryId } = useParams();
  const { addToCart, isAddedToCart } = useCart();

  const listingData = homeData.find((item) => item.id === Number(categoryId));

  const handleAddToCart = (
    event: React.MouseEvent<Element, MouseEvent>,
    item: Product
  ) => {
    event.stopPropagation();

    if (!isAddedToCart(item.id)) {
      addToCart({ ...item, quantity: 1 });
    }
  };

  return (
    <div className="px-25">
      <div className="pt-20 flex flex-col gap-5 justify-center">
        <p className="font-medium text-6xl">{listingData?.title}</p>
        <p className="">
          {listingData?.data?.length} results out of 16,500 results.
        </p>
      </div>

      <div className="my-20 grid grid-rows-3 grid-cols-4 gap-14">
        {listingData?.data.map((item) => (
          <ListingCard
            id={item.id}
            addToCart={(event) => handleAddToCart(event, item)}
            isAddedToCart={isAddedToCart}
            title={item.title}
            image={item.image}
            unit={item.unit}
            price={item.price}
            pieces={item.pieces}
            description={item.description}
            sellData={item.sellData}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryListing;
