import React from 'react';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);
    const handleRemove = (key) => {
        const addedProduct = cart.filter(product => product.key !== key);

        setCart(addedProduct)
        deleteFromDb(key);
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

            <Cart cart={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default OrderReview;