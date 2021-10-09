import React from 'react';
import { Link } from 'react-router-dom';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);
    const handleRemove = (key) => {
        const addedProduct = cart.filter(product => product.key !== key);

        setCart(addedProduct)
        deleteFromDb(key);
    }
    const history = useHistory()

    const hanldeClick = () => {
            history.push('/place-order')
        setCart([])
        clearTheCart()
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">{
                    cart.map(product =>
                        
                        <ReviewItem
                            product={product}
                            handleRemove={handleRemove}
                        ></ReviewItem>
                    )
                }

                </div>
            <div className="cart-container">

                    <Cart cart={cart}>
                       
                        <button onClick={hanldeClick} className="btn-regular review-btn">Place Order</button>
                        
            </Cart>
            </div>
            </div>
        </div>
    );
};

export default OrderReview;