import React, { useEffect, useState } from 'react'
import './Categories.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
function Categories() {
  let [CategoryCard, setCategotyCards] = useState([]);
  const getData = async () => {

      const { data } = await axios.get("https://ecommerce-node4.vercel.app/categories/active?page=1&limit=9#");
      setCategotyCards(data.categories);
      console.log(data.categories);
  
  }

  useEffect(() => {
    getData();

  }, []);

  return (
    <>
      <div className="container ">
        {CategoryCard.map(category => (
          
          <Link to={`/Product/${category.id}`} key={category.id}className='linkStyle'>
            <img src={category.image.secure_url} alt={category.name} />
            <div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories