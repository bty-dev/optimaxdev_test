export interface CartState {
    products: IProduct[];
    loading: boolean;
    error: null | string;
}
export interface IProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

export enum CartActionTypes {
    FETCH_CART = "FETCH_CART",
    FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS",
    FETCH_CART_ERROR = "FETCH_CART_ERROR",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
    ADD_PRODUCT = "ADD_PRODUCT",
    PLUS_QUANTITY = "PLUS_QUANTITY",
    MINUS_QUANTITY = "MINUS_QUANTITY",
}

interface FetchCartAction {
    type: CartActionTypes.FETCH_CART;
}
interface FetchCartSuccessAction {
    type: CartActionTypes.FETCH_CART_SUCCESS;
    payload: any[];
}
interface FetchCartErrorAction {
    type: CartActionTypes.FETCH_CART_ERROR;
    payload: string;
}
interface RemoveProduct {
    type: CartActionTypes.REMOVE_PRODUCT;
    payload: number;
}
interface AddProduct {
    type: CartActionTypes.ADD_PRODUCT;
    payload: IProduct;
}
interface AddQuantity {
    type: CartActionTypes.PLUS_QUANTITY;
    payload: number;
}
interface MinusQuantity {
    type: CartActionTypes.MINUS_QUANTITY;
    payload: number;
}

export type CartAction = FetchCartAction | FetchCartSuccessAction | FetchCartErrorAction | RemoveProduct | AddProduct | AddQuantity | MinusQuantity;