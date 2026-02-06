export type sellDataType = {
  sold: number;
  total: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  unit: string;
  price: number;
  pieces: number;
  sellData: sellDataType;
};

export type CartItem = Product & {
  quantity: number;
};

export type ListingCardProps = Product & {
  addToCart: (event: React.MouseEvent) => void;
  isAddedToCart: (id: number) => boolean;
};
