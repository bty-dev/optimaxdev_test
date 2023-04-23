import {CartAction, CartActionTypes, IProduct} from "../../types/cart";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchCart = () => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({
                type: CartActionTypes.FETCH_CART
            })
            const response = await axios.get("https://fakestoreapi.com/products?limit=10")
            const data = response.data.map((item: IProduct) => ({...item, quantity: 1}));
            console.log(data)
            dispatch({type: CartActionTypes.FETCH_CART_SUCCESS, payload: data})
            console.log(response.data)
        } catch (e) {
            dispatch({
                type: CartActionTypes.FETCH_CART_ERROR,
                payload: "Error!"
            })
        }
    }
}

export const removeProduct = (productId: number) => {
    return async (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CartActionTypes.REMOVE_PRODUCT,
            payload: productId,
        })
    }
}

type Product = {
    title: string;
    price: number;
}
export const addProduct = (newProduct: Product) => {
    return async (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CartActionTypes.ADD_PRODUCT,
            payload: {
                id: Date.now(),
                title: newProduct.title,
                price: newProduct.price,
                image: "",
                quantity: 1,
            }
        })
    }
}

export const addQuantity = (productId: number) => {
    return async (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CartActionTypes.PLUS_QUANTITY,
            payload: productId,
        })
    }
}
export const minusQuantity = (productId: number) => {
    return async (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CartActionTypes.MINUS_QUANTITY,
            payload: productId,
        })
    }
}