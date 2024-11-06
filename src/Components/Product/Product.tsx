import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '../RatingStars/RatingStars'
import { product } from '../../Interfaces/Product'

export default function Product({product}: {product:product}) {
    return (
        <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none  lg:h-80">
                <Link to={`/product/${product.id}`}>
                    <img
                        alt={"Product Image of" + product.title}
                        src={product.image}
                        className="h-full w-full object-contain object-center lg:h-full lg:w-full cursor-pointer hover:scale-110 transition-all duration-200"
                        loading='lazy'
                    />
                </Link>
            </div>
            <div className="mt-4">
                <div>
                    <h3 className="text-sm text-gray-700 cursor-pointer hover:text-black line-clamp-1">
                        <Link to={`/product/${product.id}`}>
                            {product.title }
                        </Link>
                    </h3>

                </div>
                <div className="flex mt-4 justify-between">
                    <RatingStars rating={product.rating.rate} />
                    < p className="text-sm font-medium text-gray-900">{product.price + " E£"}</p>
                </div>
            </div>
        </div>
    )
}
