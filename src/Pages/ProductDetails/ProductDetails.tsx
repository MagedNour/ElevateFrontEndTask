import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { product } from '../../Interfaces/Product';
import RatingStars from '../../Components/RatingStars/RatingStars';
import { getProducts } from '../../Services/productService';
import { toast } from 'react-toastify';
import Loading from '../../Components/LoadingScreen/Loading';

export default function ProductDetails() {

    const [product, setProduct] = useState<product>();
    const [isLoading, setIsLoading] = useState(true);
    let { id } = useParams()


    useEffect(() => {
        getSpecificProduct()
    }, [])

    async function getSpecificProduct() {

        try {
            setIsLoading(true)
            const data = await getProducts(id);
            setProduct(data);
            console.log(data);
            setIsLoading(false)

        } catch (error) {
            console.log("Failed to fetch products", error)
            //Toast to show errors
            toast.error("Failed to fetch products", {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                theme: "light",
            })
        } finally {
            setIsLoading(false);
        }

    }

    return (<>

        {!product ? <Loading /> : <div className="container mx-auto px-4 py-8">
            <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
                &larr; Back to Products
            </Link>

            {product && (
                <div className="flex flex-col lg:flex-row gap-8 p-6 bg-white shadow-lg rounded-md">
                    <div className="lg:w-1/3">
                        <img
                            alt={`Product Image of ${product.title}`}
                            src={product.image}
                            className="w-full h-auto object-contain rounded-md shadow-md"
                            loading="lazy"
                        />
                    </div>

                    <div className="lg:w-1/2 space-y-4">
                        <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
                        <p className="text-lg text-gray-700">{product.description}</p>
                        <div className="flex items-center space-x-4">
                            <RatingStars rating={product.rating.rate} />
                            <span className="text-gray-600">({product.rating.count} reviews)</span>
                        </div>
                        <p className="text-2xl font-semibold text-green-600">{product.price} E£</p>

                        <button className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-colors duration-200">
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>}
    </>


    )
}
