import {ProductAction, ProductActionTypes} from "../../types/product";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS
            })
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
            console.log(response.data)
        } catch (e) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: "Error!"
            })
        }
    }
}