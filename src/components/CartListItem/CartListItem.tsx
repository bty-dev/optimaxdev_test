import React from 'react';

import classes from './CartListItem.module.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {useActions} from "../../hooks/useActions";

interface CartListItemProps {
    id: number;
    title: string;
    quantity: number;
    image: string;
    price: number;
}

const CartListItem = ({id, title, quantity, price, image}: CartListItemProps) => {

    const {products} = useTypedSelector(state => state.cart);
    const {removeProduct, addQuantity, minusQuantity} = useActions();

    const currentProduct = products.find(item => item.id);

    const removeQuantity = () => {
        if (quantity === 1) return;
        minusQuantity(id);
    }

    return (
        <div className={classes.main}>
            <img src={image} className={classes.preview}/>
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.price}>
                {price} $
            </div>
            <div className={classes.quantity}>
                <button onClick={() => removeQuantity()} className={classes.quantity__controls}>-</button>
                <div>{quantity}</div>
                <button onClick={() => addQuantity(id)} className={classes.quantity__controls}>+</button>
            </div>
            <div className={classes.total}>
                <div className={classes.price__total}>
                    {(price * quantity).toFixed(2)} $
                </div>
                <button className={classes.remove__btn} onClick={() => removeProduct(id)}>
                    Remove from cart
                </button>
            </div>

        </div>
    );
};

export default CartListItem;