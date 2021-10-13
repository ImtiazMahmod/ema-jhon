import React from 'react';
import './Cart.css'

const Cart = (props) => {
   
    // console.log(props)
    const {cart}=props
    /* const reducerFn = (previous,current)=>previous+current.price
    const total  = cart.reduce(reducerFn,0) */
    let total= 0;
    let totalQuantity = 0
    for (const item of cart) {
      /*  if(!item.quantity){
           item.quantity = 1;
       } */
       item.quantity = item.quantity? item.quantity:1;
        total= total+ item.price*item.quantity;
        totalQuantity = totalQuantity + item.quantity;
    }
    // console.log(totalQuantity)
    const shipping=total>100?((total*0.05)):0;
    const tax = (total+ shipping)*0.1;
    const grandTotal = shipping+ tax + total;
    return (
        <div>
            <h1 className="cart-heading">Order Summery</h1>
            <p className="cart-heading">Items Orderd: {totalQuantity}</p>
            <p>Items: ${totalQuantity}</p>
            <p>Shiping & Handling: ${shipping.toFixed(2)}</p>
            <p>Total Before Tax: ${total.toFixed(2)}</p>
            <p>Estimated Tax: ${tax.toFixed(2)}</p>
            <h4 className="total">Order Total:  ${grandTotal.toFixed(2)}</h4>
            {props.children}
           
        </div>
    );
};

export default Cart;