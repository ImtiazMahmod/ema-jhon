import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"

const useCart = products => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedProduct = []
        for (const key in savedCart) {
            const addedProduct = products.find(product => product.key === key);

            if (addedProduct) {
                addedProduct.quantity = savedCart[key];
                storedProduct.push(addedProduct);
            }
        }
        setCart(storedProduct);
    }, [products])
    
    return [cart,setCart]
}

export default useCart;