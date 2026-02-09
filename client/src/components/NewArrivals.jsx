import React, { useEffect, useContext } from 'react';
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const NewArrivals = ({ dummayArrival, title }) => {

  const navigate = useNavigate();
  const { cart, SetCart } = useContext(CartContext);

  const handleCartProducts = (products) => {
    SetCart(prevItems => {
      const existing = prevItems.find(item => item.id === products.id);

      if (existing) {
        return prevItems.map(item =>
          item.id === products.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * item.price
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          id: products.id,
          name: products.name,
          image: products.images[0].normal_img,
          price: products.price[0].price,
          quantity: 1,
          stock: products.stock,
          total: products.price[0].price
        }
      ];
    });
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="mt-22 mb-23">
      <div className="text-center text-gray-800 text-4xl">
        {title}
      </div>

      {/* ✅ GRID LAYOUT */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          mt-20
          mx-6
        "
      >
        {dummayArrival.map(items => (
          <div key={items.id}>
            {/* PRODUCT CARD */}
            <div
              onClick={() => navigate(`/products/${items.id}`)}
              className="w-[250px] h-[250px] group cursor-pointer relative"
            >
              <img
                src={items.images[0].normal_img}
                alt={items.name}
                className="
                  absolute inset-0 w-full h-full object-cover
                  opacity-100 group-hover:opacity-0
                  transition-opacity duration-300
                "
              />

              <img
                src={items.images[1].hover_img}
                alt={items.name}
                className="
                  absolute inset-0 w-full h-full object-cover
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              <FaRegHeart
                className="
                  w-[40px] h-[40px] p-2 bg-white absolute top-0 right-0
                  opacity-0 -translate-y-6
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300
                "
              />

              {/* SOLD OUT */}
              {items.stock === 0 && (
                <div className="absolute z-30 border m-2 px-2 py-0.5 text-white bg-red-600 text-[13px]">
                  Sold out
                </div>
              )}

              {/* ADD TO CART */}
              {items.stock !== 0 && (
                <div
                  className="
                    flex absolute z-30 opacity-0 group-hover:opacity-100
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    items-center gap-1.5 text-[14px]
                    py-1.5 px-2.5 bg-orange-800 text-white
                    hover:bg-gray-800 transition-opacity duration-300
                  "
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ prevent navigation
                    handleCartProducts(items);
                  }}
                >
                  <IoCartOutline className="size-5.5" />
                  Add to cart
                </div>
              )}
            </div>

            {/* PRODUCT INFO */}
            <div className="text-center my-4 text-gray-700">
              {items.name}
            </div>

            {items.star && (
              <div className="flex justify-center mb-4">
                {Array.from({ length: items.star }).map((_, index) => (
                  <FaStar key={index} className="fill-amber-300" />
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 justify-center">
              {items.price[1] && (
                <div className="line-through text-gray-400">
                  ${items.price[1].discount}.00
                </div>
              )}
              <div className="text-gray-700">
                ${items.price[0].price}.00
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
