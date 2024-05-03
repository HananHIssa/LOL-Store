import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bounce, toast } from 'react-toastify';
export default function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce-node4-five.vercel.app/products?page=1&limit=10`
      );
      const data = response.data;
      setProducts(data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = async (productId) => {
    const token = localStorage.getItem('userToken');
    if (token) {
        try {
            const { data } = await axios.post(`https://ecommerce-node4-five.vercel.app/cart`, {
                productId
            }, {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            console.log(data);
            toast.success('one product added to the cart', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        } catch (error) {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    } else {
        toast.error('please sign In ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }



};


  return (
    <div className="container d-flex">
      {products.map((product) => (
        <div className="" key={product._id}>
          <img src={product.mainImage.secure_url} />
          <p>{product.name}</p>
          <button onClick={() => addToCart(product._id)}>add to cart</button>
        </div>
      ))}
    </div>
  );
}
