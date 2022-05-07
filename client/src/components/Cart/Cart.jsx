
import { useState, useEffect } from "react";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { addCartData, addCartQuantity } from "./action";

import { AiFillLock } from "react-icons/ai";

import "./Cart.css";
export const Cart = (props) => {
  // const { cartItems, onAdd, onRemove } = props;
  
    const cartItems = [];
    const [cartdata, setCartData] = useState([]);
    const dispatch = useDispatch();
    const CartData = useSelector((store) => store.CartDetails.cartdata);
    const CartQuantity = useSelector((store) => store.CartDetails.cartquantity);
    console.log('CartQuantity:', CartQuantity)
    console.log('CartData:', CartData)
    const TotalQuantity = CartData?.reduce((amount, item) => {
        return (

            amount + Number(item.quantity)

        )

    },0)
    
    console.log('TotalQuantity:', TotalQuantity)
  const itemsPrice = CartData.reduce((c,v) => {
    return c + Number(v.furnitureId.price)
  },0);
  console.log('itemsPrice:', itemsPrice)

  const Total = TotalQuantity * itemsPrice;
  const Saving = (15 * Total)/100;
  const Discount = Total - Saving;
  console.log('Saving:', Saving)
  console.log('Total:', Total)
  const taxPrice = itemsPrice * 0.14;
  console.log('taxPrice:', taxPrice)
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  console.log('shippingPrice:', shippingPrice)
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  console.log('totalPrice:', totalPrice)

    console.log('cartdata:', cartdata)  

    const RemoveItem = (Product) => {
        console.log('Product:', Product)
        const id = Product._id;
        fetch("/cart/" + id, {
            method : "DELETE",
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => getData());
    }

    const IncreaseQuantity = (Product, Quantity) => {
        console.log('Quantity:', Quantity)
        console.log('Product:', Product)
        const id = Product._id;
        console.log('id:', id)
        fetch("/cart/" + id, {

            method : "PATCH",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                quantity : Quantity
            }),
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => getData());
    }

    useEffect(() => {
        getData();
    },[])

    const getData = () => {
        axios.get("/cart/tocart")
        // .then(res => setCartData(res.data))
        .then(res => dispatch(addCartData(res.data)))
        .catch(error => console.log("Error : ", error))
    }
    dispatch(addCartQuantity(TotalQuantity));
  return (
    <div className="Cart__Container">

        <h2>Shopping Cart</h2>
        <div className="Cart__Container-Items">
            <div className="Cart__Container-Items-Data">
                {CartData.map((element) => {
                    return (
                        <div>
                            <div className="Cart__Image-Box">
                                <img src={element.furnitureId.image} alt="" />
                            </div>
                            <div className="Cart__Content">
                                <p className="title">{element.furnitureId.title}</p>
                                <p className="white">Antique White</p>
                                <p className="price">{element.furnitureId.sale === "start" ? "Sale Start at INR " : "INR "} {element.furnitureId.price}</p>
                                <p className="saving">15 % Saving</p>
                                <select onChange={(event) => {
                                    console.log('event:', event.target.value)
                                    IncreaseQuantity(element, event.target.value);
                                }} name="quantity" id="">
                                    <legend>Qty</legend>
                                    <option value={element.quantity}>{element.quantity}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                </select>
                                <div>
                                    <p onClick={() => {
                                        RemoveItem(element);
                                    }}>Remove</p>
                                    <h5>Save For Later</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className="Cart__Container-Items-Checkout">
                <p><strong>({TotalQuantity}) Items : {Array(20).fill().map((_,i) => {
                    return (
                        <>&nbsp;</>
                    )
                })}INR {Total}</strong></p>
                <p><strong>Promotional 15 % Savings : {Array(5).fill().map((_,i) => {
                    return (
                        <>&nbsp;</>
                    )
                })}INR {Saving}</strong></p>
                <p><strong>Subtotal After : {Array(10).fill().map((_,i) => {
                    return (
                        <>&nbsp;</>
                    )
                })}INR</strong></p>
                <p><strong>Discounts : {Array(10).fill().map((_,i) => {
                    return (
                        <>&nbsp;</>
                    )
                })}{Discount}</strong></p>
                <p><strong>Your Total : {Array(4).fill().map((_,i) => {
                    return (
                        <>&nbsp;</>
                    )
                })}INR {Discount}</strong></p>
                <button onClick={() => {
                    window.location.href = "/Payment"
                }}><AiFillLock /> Check Out</button>
            </div>
        </div>
    </div>
  );
};