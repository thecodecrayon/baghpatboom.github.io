import type { ComponentType } from "react";
import CategoryBubble from "./CategoryBubble";

type Item = {
  id: number;
  image: string;
  title: string;
  icon: ComponentType;
};

const CategoryBelt = ({ items }: { items: Item[] }) => {
  return (
    <div className="px-25 py-15 flex gap-5">
      {items.map((item: Item) => {
        const link = item.id >= 8 ? "/categories" : `/categories/${item.id}`;
        return (
          <CategoryBubble
            image={item.image}
            title={item.title}
            icon={item.icon}
            link={link}
          />
        );
      })}
    </div>
  );
};

export default CategoryBelt;
