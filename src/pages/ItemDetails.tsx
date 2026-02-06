import React, { useState } from "react";
import {
  ArrowLeft,
  ShoppingCart,
  Heart,
  Star,
  Minus,
  Plus,
  Shield,
  Truck,
  RotateCcw,
  Tag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ItemDetails = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: 1,
    title: "Mint Meadow",
    subtitle: "Handcrafted Scented Candles",
    price: 200,
    originalPrice: 280,
    rating: 4.8,
    reviews: 127,
    pieces: 6,
    unit: "pcs.",
    description:
      "Experience the refreshing essence of mint meadows with our artisan-crafted candles. Each candle is meticulously hand-poured by skilled rural artisans, using natural soy wax and premium essential oils. The calming mint fragrance creates a serene atmosphere, perfect for meditation, relaxation, or enhancing your living space.",
    features: [
      "100% Natural Soy Wax",
      "Hand-poured by Rural Artisans",
      "Premium Essential Oils",
      "30-35 Hour Burn Time",
      "Eco-Friendly Packaging",
      "Fair Trade Certified",
    ],
    images: [
      "https://m.media-amazon.com/images/I/714WLj2xEnL.jpg",
      "https://content.instructables.com/FBA/PU1J/HX69QEIE/FBAPU1JHX69QEIE.jpg?auto=webp",
      "https://m.media-amazon.com/images/I/810LtnVH3jL._AC_UF894,1000_QL80_.jpg",
    ],
    artisan: {
      name: "Priya's Craft Collective",
      location: "Jaipur, Rajasthan",
      image:
        "https://thedesaifoundation.org/wp-content/uploads/unlimited_elements/Diya-Making2.jpg",
      story:
        "A women's collective creating sustainable livelihoods through traditional candle-making",
      detailedStory:
        "Founded in 2018, this collective empowers 45 women artisans from rural communities, providing them with fair wages, flexible working hours, and skill development programs. Each candle is crafted with generations of traditional knowledge combined with modern sustainable practices.",
      totalEmployed: 45,
      yearsActive: 6,
      productSold: "15K",
    },
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              className="flex items-center gap-2 text-gray-900 transition-colors hover:text-gray-400"
              onClick={navigateToHome}
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Shop</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 aspect-square relative group">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart
                  size={20}
                  className={
                    isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
                  }
                />
              </button>
              {product.originalPrice > product.price && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full text-sm">
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % OFF
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-xl overflow-hidden border-2 transition-all aspect-square ${
                    selectedImage === index
                      ? "border-yellow-400 ring-2 ring-yellow-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{product.subtitle}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">
                  {product.rating}
                </span>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">
                Pack of {product.pieces} {product.unit}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => updateQuantity(quantity - 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-16 text-center font-bold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-xl transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-sm hover:shadow-md">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="text-gray-700" size={20} />
                </div>
                <p className="text-xs font-medium text-gray-700">
                  Free Shipping
                </p>
                <p className="text-xs text-gray-500">On orders over ₹500</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <RotateCcw className="text-gray-700" size={20} />
                </div>
                <p className="text-xs font-medium text-gray-700">
                  Easy Returns
                </p>
                <p className="text-xs text-gray-500">30-day guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="text-gray-700" size={20} />
                </div>
                <p className="text-xs font-medium text-gray-700">
                  Quality Check
                </p>
                <p className="text-xs text-gray-500">100% inspected</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                About this product
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>
              <h3 className="font-bold text-gray-900 mb-2">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Artisan Story - Expanded */}
            <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                  <Tag className="text-gray-900" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    Meet the Artisan: {product.artisan.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                    <span className="text-base">📍</span>{" "}
                    {product.artisan.location}
                  </p>
                </div>
              </div>

              {/* Artisan Image */}
              <div className="bg-white rounded-xl overflow-hidden mb-4 border border-yellow-200">
                <img
                  src={product.artisan.image}
                  alt="Artisan at work"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Story */}
              <div className="space-y-3 mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {product.artisan.story}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {product.artisan.detailedStory}
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-white rounded-lg p-3 text-center border border-yellow-200">
                  <p className="text-2xl font-bold text-gray-900">
                    {product.artisan.totalEmployed}
                  </p>
                  <p className="text-xs text-gray-600">Artisans</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-yellow-200">
                  <p className="text-2xl font-bold text-gray-900">
                    {product.artisan.yearsActive}+
                  </p>
                  <p className="text-xs text-gray-600">Years Active</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-yellow-200">
                  <p className="text-2xl font-bold text-gray-900">
                    {product.artisan.productSold}+
                  </p>
                  <p className="text-xs text-gray-600">Products Sold</p>
                </div>
              </div>

              {/* Your Impact */}
              <div className="bg-white rounded-lg p-4 mb-4 border border-yellow-200">
                <h4 className="font-bold text-gray-900 mb-2 text-sm">
                  Your Purchase Impact:
                </h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>
                      Provides fair wages to women artisans in rural India
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>
                      Supports traditional craft preservation and skill transfer
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>
                      Contributes to sustainable livelihoods and community
                      development
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>
                      15% of profits go to education programs for artisan
                      children
                    </span>
                  </li>
                </ul>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-yellow-200">
                <span className="bg-white text-xs font-semibold text-gray-900 px-3 py-1 rounded-full border border-yellow-300">
                  Fair Trade Certified
                </span>
                <span className="bg-white text-xs font-semibold text-gray-900 px-3 py-1 rounded-full border border-yellow-300">
                  Women Empowerment
                </span>
                <span className="bg-white text-xs font-semibold text-gray-900 px-3 py-1 rounded-full border border-yellow-300">
                  Sustainable Practices
                </span>
                <span className="bg-white text-xs font-semibold text-gray-900 px-3 py-1 rounded-full border border-yellow-300">
                  Handcrafted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
