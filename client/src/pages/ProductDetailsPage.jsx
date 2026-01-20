import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { futueItem } from '../assets/assets'
import DetailPageNav from '../components/ProductDetailsPage/DetailPageNav';
import ProductDetail from '../components/ProductDetailsPage/ProductDetail';

const ProductDetailsPage = () => {
    //geting id from NewArrivals to fetch only that produte datas
    const { id } = useParams();


    const [products,SetProdcuts] = useState();
    const [previousItem,SetPreviousItem] = useState();
    const [nextItem,SetNextItem] = useState();

    useEffect(()=>{
        const productId = Number(id);

        const Pro = futueItem.find(item => item.id == productId);
        const PreItem = futueItem.find(item => item.id == productId-1);
        const NexItem = futueItem.find(item => item.id == productId+1);

        SetProdcuts(Pro);
        SetPreviousItem(PreItem);
        SetNextItem(NexItem);
        
    },[id]);


    return (
        <>
            <div className='p-10 bg-gray-100 mt-5'>

                <DetailPageNav PreviousItem={previousItem}
                               NextItem={nextItem}
                               Products={products}
                />

                <ProductDetail products={products}/>

            </div>
        </>
    )
}

export default ProductDetailsPage