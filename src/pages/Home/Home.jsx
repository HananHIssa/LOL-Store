import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';

function Home() {


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
    <div className=" container parent">
          {
            CategoryCard.map(category =>
              <div key={category.id}> 
                  <img src={category.image.secure_url} />
                  <h2>{category.name}</h2>
               </div>
            )
          }
     </div>
  </>
  )
}

export default Home