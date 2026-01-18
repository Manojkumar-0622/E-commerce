import React from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const DetailPageNav = ({
    PreviousItem,
    NextItem,
    Products
}) => {

    const navigate = useNavigate();

    const goToProduct = (id) => {
        navigate(`/products/${id}`);
    };

    return (
        <div className="flex justify-between items-center">
            
            {/* Categories */}
            <div className="flex gap-2">
                {Products?.Categories?.map((item, index) => (
                    <div key={index} className="text-[16px] text-gray-600">
                        {item}
                        {index !== Products.Categories.length - 1 && (
                            <span className="px-2">/</span>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 mr-5 text-[14px] text-gray-600">

                {/* PREVIOUS */}
                {PreviousItem && (
                    <div
                        className="group relative cursor-pointer"
                        onClick={() => goToProduct(PreviousItem.id)}
                    >
                        <div className="flex items-center gap-1 group-hover:text-orange-600 transition">
                            <IoIosArrowDropleft className="size-4" />
                            <span>PREVIOUS</span>
                        </div>

                        {/* Hover Card */}
                        <div className="absolute top-10 left-0 z-20">
                            <div className="
                                flex bg-white shadow-2xl rounded
                                opacity-0 translate-y-6 pointer-events-none
                                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                                transition-all duration-200 ease-out
                                w-[200px]
                            ">
                                <img
                                    src={PreviousItem.images?.[0]?.normal_img}
                                    alt={PreviousItem.name}
                                    className="w-20 h-20 p-2 object-cover"
                                />
                                <div className="p-2 text-sm">{PreviousItem.name}</div>
                            </div>
                        </div>
                    </div>
                )}

                <span>|</span>

                {/* NEXT */}
                {NextItem && (
                    <div
                        className="group relative cursor-pointer"
                        onClick={() => goToProduct(NextItem.id)}
                    >
                        <div className="flex items-center gap-1 group-hover:text-orange-600 transition">
                            <span>NEXT</span>
                            <IoIosArrowDropright className="size-4" />
                        </div>

                        {/* Hover Card */}
                        <div className="absolute top-10 right-0 z-20">
                            <div className="
                                flex bg-white shadow-2xl rounded
                                opacity-0 translate-y-6 pointer-events-none
                                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                                transition-all duration-200 ease-out
                                w-[200px]
                            ">
                                <img
                                    src={NextItem.images?.[0]?.normal_img}
                                    alt={NextItem.name}
                                    className="w-20 h-20 p-2 object-cover"
                                />
                                <div className="p-2 text-sm">{NextItem.name}</div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default DetailPageNav;
