import React, { useState } from 'react'
import { full_product } from '../assets/assets.js';
import NewArrivals from '../components/NewArrivals.jsx';

const FullItems = () => {

  const ITEMS_PER_PAGE = 8;

  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const getPrice = (item) => item.price?.[0]?.price ?? 0;

  let sortedProducts = [...full_product];

  if (sort === "low-high") {
    sortedProducts.sort((a, b) => getPrice(a) - getPrice(b));
  }

  if (sort === "high-low") {
    sortedProducts.sort((a, b) => getPrice(b) - getPrice(a));
  }

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div>
      <div className='bg-gray-200 py-15 text-center text-2xl'>
        All Items
        <div className='text-[18px] mt-2'>shop/dress</div>
      </div>

      {/* SORT DROPDOWN */}
      <div className='relative'>
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setCurrentPage(1); // reset to page 1 on sort
          }}
          className="border-2 px-3 py-2 rounded bg-gray-100 top-10 left-3 relative"
        >
          <option value="" disabled hidden>
            Select price order
          </option>
          <option value="low-high">Price – Low to High</option>
          <option value="high-low">Price – High to Low</option>
        </select>
      </div>

      {/* PRODUCTS */}
      <div>
        <NewArrivals dummayArrival={paginatedProducts} title={""} />
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 my-10">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 border rounded
              ${currentPage === index + 1 ? "bg-black text-white" : ""}
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>

    </div>
  )
}

export default FullItems;
