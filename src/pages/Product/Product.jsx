import axios from 'axios';
import './product.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
export default function Product() {
  const [products, setProducts] = useState([]);
  const {  id } = useParams();
  const getData = async () => {
   
    const { data } = await axios.get(`https://ecommerce-node4-five.vercel.app/products/category/${id}`);      
    setProducts(data.products);
  }
    useEffect(() => {
      getData();
    }, []);
    
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
    
              </div>
            )
          }
</div>
</>
       );
}
