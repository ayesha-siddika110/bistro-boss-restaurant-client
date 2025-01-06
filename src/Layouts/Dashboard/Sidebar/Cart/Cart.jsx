import React from 'react';
import useCart from '../../../../Hooks/useCart';

const Cart = () => {
    const [cart] = useCart()
    console.log(cart);
    
    return (
        <div>
            my cart
        </div>
    );
};

export default Cart;