import React from 'react';

import classes from './CartListItem.module.scss';

const CartListItem = () => {
    return (
        <div className={classes.main}>
            <div className={classes.preview}>
                Image
            </div>
            <div className={classes.title}>
                Apple juice
            </div>
            <div className={classes.price}>
                100$
            </div>
            <div className={classes.quantity}>
                <button className={classes.quantity__controls}>-</button>
                <div>3</div>
                <button className={classes.quantity__controls}>+</button>
            </div>
            <div className={classes.total}>
                <div className={classes.price__total}>
                    300$
                </div>
                <button className={classes.remove__btn}>
                    Remove from cart
                </button>
            </div>

        </div>
    );
};

export default CartListItem;