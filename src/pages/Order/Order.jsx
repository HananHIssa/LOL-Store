import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify';
import './Order.css'

export default function Order() {
    const [cart, setCartProducts] = useState([]);
    const token = localStorage.getItem('userToken');

    const getCart = async () => {
        try {
            const token = localStorage.getItem('userToken');
            const { data } = await axios.get(`https://ecommerce-node4-five.vercel.app/cart`, {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            console.log(data.products);
            setCartProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCart();
    }, []);

    
    const [order, setOrder] = useState({
        couponName: '',
        address: '',
        phone: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({
            ...order,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`https://ecommerce-node4-five.vercel.app/order`,
                order, {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            setOrder({
                couponName: '',
                address: '',
                phone: '',
            });
            
            toast.success('order done successfully', {
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
            toast.error(error.message, {
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
        <div className="mainOrder">
            <h1 className='firstLabel'>Order</h1>
            <form onSubmit={handleSubmit}>
                <label>couponName</label>
                <input type="text" value={order.couponName} name="couponName" onChange={handleChange} />
                <label>address</label>
                <input type="text" value={order.address} name="address" onChange={handleChange} />
                <label>phone</label>
                <input type="text" value={order.phone} name="phone" onChange={handleChange} />
                <button type="submit">Order Now</button>
            </form>
        </div>
    )
}
