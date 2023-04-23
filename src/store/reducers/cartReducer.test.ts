import {cartReducer} from "./cartReducer";
import {CartActionTypes} from "../../types/cart";

describe("Cart reducer test", () => {
    test("fetch cart", () => {
        expect(cartReducer({products: [], loading: false, error: null}, {type: CartActionTypes.FETCH_CART})).toEqual({products: [], loading: true, error: null})
    })
    test("fetch cart error", () => {
        expect(cartReducer({products: [], loading: false, error: null}, {type: CartActionTypes.FETCH_CART_ERROR, payload: "Error!"})).toEqual({products: [], loading: false, error: "Error!"})
    })
    test("plus quantity", () => {
        expect(cartReducer({products: [{id: 1, quantity: 1, price: 100, title: "title", image: ""}], loading: false, error: null}, {type: CartActionTypes.PLUS_QUANTITY, payload: 1})).toEqual({products: [{id: 1, quantity: 2, price: 100, title: "title", image: ""}], loading: false, error: null})
    })
    test("minus quantity with quantity equals one", () => {
        expect(cartReducer({products: [{id: 1, quantity: 1, price: 100, title: "title", image: ""}], loading: false, error: null}, {type: CartActionTypes.MINUS_QUANTITY, payload: 1})).toEqual({products: [{id: 1, quantity: 1, price: 100, title: "title", image: ""}], loading: false, error: null})
    })
    test("remove product from cart", () => {
        expect(cartReducer({products: [{id: 1, quantity: 1, price: 100, title: "title", image: ""}], loading: false, error: null}, {type: CartActionTypes.REMOVE_PRODUCT, payload: 1})).toEqual({products: [], loading: false, error: null})
    })
})