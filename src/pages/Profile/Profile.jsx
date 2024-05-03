import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify';
import { MdCancel } from "react-icons/md";
import Loader from '../../components/loader/Loader';




export default function Profile() {
    
    const [loader, setLoader] = useState(true);
    const [userProfile, setUserProfile] = useState({});
    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem('userToken');
    const getUserProfile = async () => {
        const profile = await axios.get(`https://ecommerce-node4-five.vercel.app/user/profile`, {
            headers: {
                Authorization: `Tariq__${token}`
            }
        });
        setUserProfile(profile.data.user);
        console.log(profile.data);
        setLoader(false);
    }

    useEffect(() => {
        getUserProfile();
    }, {});
    useEffect(() => {
        getOrders();
    }, {});
    const getOrders = async () => {
        const gorders = await axios.get(`https://ecommerce-node4-five.vercel.app/order`, {
            headers: {
                Authorization: `Tariq__${token}`
            }
        });
        console.log(gorders.data.orders);
        setOrders(gorders.data.orders);
        setLoader(false);
    }
    const cancelOrder = async (orderId) => {
        const { data } = await axios.patch(`https://ecommerce-node4-five.vercel.app/order/cancel/${orderId}`, {},
            {
                headers: {
                    Authorization: `Tariq__${token}`

                }
            });
        toast.success('order canelled successfully', {
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
        getOrders();

    }
    if (loader) {
        return <Loader />
    }


    return (
        <div className='allprofile'>
            {(userProfile) ? <div className='mainprofile'>
                <div className='Profile'>
                    <div className='left'>
                        <h2>User Name: {userProfile.userName}</h2>
                        <p>email: {userProfile.email}</p>
                    </div>
                    <div className='right'>
                    <img src={userProfile.image.secure_url} />
                    </div>
                </div>
                <div className='Orders'>
                    <h2>Your last Orders</h2>
                    
                        <div>
                            {orders.map(order =>
                                (order.status != 'cancelled') ?

                                    <div className='Ordercart order' key={order._id}>
                                        <div className='first'>
                                            <div className='firstinfo'>
                                                <p>address: {order.address}</p>
                                                <p>finalPrice: {order.finalPrice} $</p>
                                                <p>status: {order.status}</p>
                                            </div>
                                            {(order.status == 'pending') ? <button onClick={() => cancelOrder(order._id)}><MdCancel fill="white" /></button> : <></>}
                                            <h2> Order's Products: </h2>
                                        </div>


                                        
                                            {order.products.map(product =>
                                            <div key={product.id} className='profileProduct'>
                                                    <p>{product.productId.name}</p>
                                                    <div className='info'>
                                                        <span>price: {product.productId.price} $</span>
                                                        <span>discount: {product.productId.discount} %</span>
                                                        <span>finalPrice: {product.productId.finalPrice} $</span>
                                                        <span>quantity: {product.quantity}</span>
                                                        <span>total: {product.productId.finalPrice * product.quantity} $</span>

                                                    </div>
                                            </div>
                                

                                            )}


                                    </div>
                                    : <>
                                    </>

                            )}
                        </div> 
                </div>
            </div>
                :<></>
            }

        </div>

    )
}
