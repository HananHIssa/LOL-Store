import React, { useEffect,useState } from 'react'
let [CategoryCard , setCategotyCards]=useState([]);
const getData = async () =>{
const {data} =await axios .get('https://ecommerce-node4.vercel.app/categories/active?page=1&limit=7');
setCategotyCards(data.categories);
console.log(data.categories);
}
useEffect(()=> {
    getData();
},[]);
function Home() {
  return (
    <>
    CategoryCard.map(categorie =>
    
    )
    </>
  )
}

export default Home