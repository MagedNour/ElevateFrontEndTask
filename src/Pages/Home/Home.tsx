import axios from 'axios';
import { useEffect, useState } from 'react'
import { product } from '../../Interfaces/Product';
import Product from '../../Components/Product/Product';
import Loading from '../../Components/LoadingScreen/Loading';
import { toast } from 'react-toastify';
import { getProducts } from '../../Services/productService';


export default function Home() {

    const [products, setProducts] = useState<product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllProducts()
    }, [])

    async function getAllProducts() {

        try {
            setIsLoading(true)
            const data = await getProducts();
            setProducts(data);
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
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

                    {isLoading ? <Loading /> : (
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </>

    )
}
