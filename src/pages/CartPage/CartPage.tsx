import React, {FormEvent, useEffect, useState} from 'react';

import classes from './CartPage.module.scss';
import CartListItem from "../../components/CartListItem/CartListItem";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchCart} from "../../store/action-creators/cart";
import {useActions} from "../../hooks/useActions";
import {useModal} from "../../hooks/useModal";
import Modal from "../../components/Modal/Modal";

const CartPage = () => {
    const {products, loading, error} = useTypedSelector(state => state.cart)
    const {fetchCart, addProduct} = useActions();
    const totalPrice = products.map(item => item.quantity * item.price).reduce((partialSum, a) => partialSum + a, 0);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [formError, setFormError] = useState(false);
    const {isOpen, toggle} = useModal();

    useEffect(() => {
        fetchCart();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error!</div>
    }

    const modalConfirmHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title && !price) {
            setFormError(true);
            return;
        }
        setFormError(false)
        addProduct({title, price})
        setTitle("");
        setPrice(0);
        toggle();
    }

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.page__title}>
                    Your cart
                </div>
                <div className={classes.card}>
                    <div className={classes.card__list}>
                        {
                            products.map(item => (
                                <CartListItem image={item.image} price={item.price} title={item.title} key={item.id} quantity={item.quantity} id={item.id}/>
                            ))
                        }
                    </div>
                    <div className={classes.total}>
                        Total: {totalPrice.toFixed(2)} $
                        <button className={classes.checkout__btn}>
                            Checkout!
                        </button>
                    </div>
                </div>
                <div role="add_product_btn" onClick={() => toggle()} className={classes.add__btn}>
                    Add product
                </div>
                <Modal isOpen={isOpen} toggle={toggle}>
                    <form className={classes.modal__form} onSubmit={(e) => modalConfirmHandler(e)}>
                        <div className={classes.modal__controls}>
                            <label className={classes.modal__label} htmlFor="name">Name:</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className={classes.modal__input} id="name" type="text"/>
                        </div>
                        <div className={classes.modal__controls}>
                            <label className={classes.modal__label} htmlFor="price">Price:</label>
                            <input value={price} onChange={(e) => setPrice(+e.target.value)} className={classes.modal__input} id="price" type="number"/>
                        </div>
                        {
                            formError ? <small>All fields are required!</small> : null
                        }
                        <button type="submit" className={classes.modal__confirm}>Confirm!</button>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default CartPage;