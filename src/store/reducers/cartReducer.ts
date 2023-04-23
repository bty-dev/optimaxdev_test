import {CartAction, CartActionTypes, CartState, IProduct} from "../../types/cart";


const initialState: CartState = {
    products: [],
    loading: false,
    error: null
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionTypes.FETCH_CART:
            return {loading: true, error: null, products: []}
        case CartActionTypes.FETCH_CART_SUCCESS:
            return {loading: false, error: null, products: action.payload}
        case CartActionTypes.FETCH_CART_ERROR:
            return {loading: false, error: action.payload, products: []}
        case CartActionTypes.REMOVE_PRODUCT:
            return {loading: false, error: null, products: [...state.products.filter(item => item.id !== action.payload)]}
        case CartActionTypes.ADD_PRODUCT:
            return {loading: false, error: null, products: [action.payload, ...state.products]}
        case CartActionTypes.PLUS_QUANTITY:
            return {loading: false, error: null, products: cloneAndModifyArr(action.payload, state.products, 1)}
        case CartActionTypes.MINUS_QUANTITY:
            if (state.products.find(item => item.id === action.payload)?.quantity === 1) {
                return {loading: false, error: null, products: [...state.products]}
            }
            return {loading: false, error: null, products: cloneAndModifyArr(action.payload, state.products, -1)}
        default:
            return state
    }
}

const cloneAndModifyArr = (id: number, arr: IProduct[], diff: number): IProduct[] => {
    return arr.map(item => ({
        ...item,
        ...(item.id === id && {
            quantity: item.quantity + diff
        })
    }))
}