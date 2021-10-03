import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name,img,price,star,seller,stock} = props.product
   /*  const features= props.product.features
    const [first,second,third,fourth,fifth]= props?.product?.features
    console.log(first)
 */
  
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className="title">{name}</h1>
                <div className="product-detail">
                    <div>
                        <p>by: {seller}</p>
                        <p>$ {price}</p>
                        <p>Only {stock} left in stock - order soon</p>
                        <button onClick={()=>props.handleBtn(props.product)} className="btn-regular">add to cart</button>
                        </div>
                    <div>
                    <Rating
                    initialRating={star}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"/>
                        <h2>Features</h2>
                        <ul>
                            {/* <li>{first.description}: {first.value}</li> */}
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;