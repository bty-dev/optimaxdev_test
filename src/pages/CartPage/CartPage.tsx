import React, {useEffect} from 'react';

import classes from './CartPage.module.scss';
import CartListItem from "../../components/CartListItem/CartListItem";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchProducts} from "../../store/action-creators/product";
import {useActions} from "../../hooks/useActions";

const CartPage = () => {
    const {products, loading, error} = useTypedSelector(state => state.product)
    const {fetchProducts} = useActions();

    useEffect(() => {
        fetchProducts();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error!</div>
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
                                <CartListItem/>
                            ))
                        }
                        <CartListItem/>
                    </div>
                    <div className={classes.total}>
                        Total: 1400$
                        <button className={classes.checkout__btn}>
                            Checkout!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;