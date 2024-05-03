import axios from 'axios';
import './product.css'
import { Bounce, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa';
export default function Product() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
   
    const { data } = await axios.get(`https://ecommerce-node4-five.vercel.app/products/category/${id}`);      
    setProducts(data.products);
    console.log(data);
  }

    useEffect(() => {
      getData();
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
              toast.success('added one item to the cart', {
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
          navigate('/Signin');
      }



  };
    
       return(
       <>
        <div className='product-container'>
        {
            products.map(product =>
              <div key={product.id} className='product'>
                <img  src={product.mainImage.secure_url} />
                <h5  > {product.name}</h5>
                <h5 > {product.price}$ </h5>
                <h5  > {product.description}</h5>
                <button className="add" onClick={() => addToCart(product._id)}><span>Add to cart</span><FaCartPlus color='white' /></button>
              </div>
            )
          }
</div>
</>
       );
}
