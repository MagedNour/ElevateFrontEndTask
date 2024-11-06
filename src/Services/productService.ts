import axios from 'axios';

export const getProducts = async (id?:string|undefined) => {

    if (id == undefined) {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        return data;
    }else{
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return data;
    }

};