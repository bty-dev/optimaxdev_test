import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CartActionCreators from '../store/action-creators/cart';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(CartActionCreators, dispatch);
}