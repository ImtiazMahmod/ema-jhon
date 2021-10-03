import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const {name,price,key,quantity,seller}= props.product
    return (
        <div className="product">
            <div>
            <h3 className="title">{name}</h3>
                <p className="product-detail">by: {seller}</p>
                <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>props.handleRemove(key)} className="btn-regular">Remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;