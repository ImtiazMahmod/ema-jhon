import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]= useState([])
    const [cart,setCart]=useState([])
    const [displayProduct,setDisplayProduct]= useState([])

    const handleBtn = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            product.quantity += 1
            newCart =[...rest,exists]
        }
        else {
            product.quantity = 1;
            newCart=[...cart,product]
        }
        setCart(newCart);
        addToDb(product.key);
    };

    useEffect(()=>{
        fetch('./products.json')
        .then(res=> res.json())
        .then(data=> {
            setProducts(data)
            setDisplayProduct(data)
        })
    }, []);

    useEffect(()=> {
        const savedCart = getStoredCart();        
        const storedCart=[];
        for(const key in savedCart)
        {          
              const detailSavedCart=  products.find(product=>product.key === key)

              if(detailSavedCart){
                const quantity = savedCart[key]
                detailSavedCart.quantity= quantity;
              storedCart.push(detailSavedCart);
              }
        }
        setCart(storedCart);
    },[products])

    const searchBox=event=>{
    const searchText=event.target.value
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProduct)
    }
    
    return (
        <>
        <div
        onChange={searchBox}
        className="input">
                <input type="text" placeholder="type here to search" />
                <i className="cartTotal fas fa-shopping-cart"></i> 
        <h2 className="cartTotal">4</h2>
    </div>
        <div className="shop-container">
            <div className="product-container">
                {
                    displayProduct.map(product=> <Product handleBtn={handleBtn}
                         key={product.key} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                        <button className="btn-regular review-btn">Review Your Products</button>
                        </Link>
                </Cart>
            </div>
            </div>
        </>///this is fragment
    );
};

export default Shop;