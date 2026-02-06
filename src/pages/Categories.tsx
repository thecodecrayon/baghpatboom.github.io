import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const categoryData = [
    {
      id: 1,
      title: "Diyas & Candles",
      image:
        "https://imgcdn.floweraura.com/luminous-brocade-diya-set-of-3-9763017gf-A_0.jpg",
      count: 156,
      color: "from-amber-500/80 to-orange-600/80",
    },
    {
      id: 2,
      title: "Bakery Items",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
      count: 243,
      color: "from-rose-500/80 to-pink-600/80",
    },
    {
      id: 3,
      title: "Handlooms",
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800",
      count: 189,
      color: "from-purple-500/80 to-indigo-600/80",
    },
    {
      id: 4,
      title: "Home Furnishing",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      count: 312,
      color: "from-teal-500/80 to-cyan-600/80",
    },
    {
      id: 5,
      title: "Incense Sticks",
      image:
        "https://m.media-amazon.com/images/I/61VZkbnzy3L._AC_UF894,1000_QL80_.jpg",
      count: 98,
      color: "from-violet-500/80 to-purple-600/80",
    },
    {
      id: 6,
      title: "Grocery",
      image:
        "https://content.jdmagicbox.com/v2/comp/bangalore/n7/080pxx80.xx80.191221180027.s8n7/catalogue/families-hypermart-nagawara-bangalore-supermarkets-xsecfgrfig.jpg",
      count: 427,
      color: "from-emerald-500/80 to-green-600/80",
    },
    {
      id: 7,
      title: "Vegetables",
      image:
        "https://foodtank.com/wp-content/uploads/2021/09/gemma-stpjHJGqZyw-unsplash.jpg",
      count: 186,
      color: "from-lime-500/80 to-green-600/80",
    },
  ];

  const navigate = useNavigate();

  const handleNavigation = (id: number) => {
    navigate(`/categories/${id}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 px-6 md:px-12 lg:px-20 py-20">
      {/* HEADER; */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          ✨ Discover Our Collections
        </div>
        <h2 className="font-bold text-5xl md:text-6xl text-gray-900 mb-4">
          Shop By Category
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Explore handcrafted treasures from talented artisans across India
        </p>
      </div>

      {/* CATEGORIES GRID; */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-5">
        {categoryData.map((category, index) => {
          const sizeClasses = [
            "lg:col-span-2 lg:row-span-2 min-h-[500px]",
            "min-h-[280px]",
            "min-h-[280px]",
            "lg:col-span-2 min-h-[280px]",
            "min-h-[320px]",
            "min-h-[280px]",
            "min-h-[320px]",
          ];

          return (
            <div
              key={category.id}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${sizeClasses[index]}`}
              onClick={() => handleNavigation(category.id)}
            >
              {/* IMAGE; */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* COLOURED GRADIENT OVERLAY; */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-30 group-hover:opacity-70 transition-opacity duration-300`}
              ></div>

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                    {category.count} Products
                  </div>
                </div>

                {/* BOTTOM CONTENT; */}
                <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                  <h3
                    className={`font-bold text-white mb-3 ${
                      index === 0
                        ? "text-4xl md:text-5xl"
                        : "text-2xl md:text-3xl"
                    }`}
                  >
                    {category.title}
                  </h3>

                  {/* SHOP NOW BUTTON */}
                  <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                      Shop Now
                    </span>
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* HOVER GLOW EFFECT; */}
              <div className="absolute inset-0 border-4 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl shadow-2xl"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
