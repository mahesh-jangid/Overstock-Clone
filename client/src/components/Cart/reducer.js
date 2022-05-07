
import { CART_DATA } from "./action";

import { CART_QUANTITY } from "./action";

const InitialState = {

    cartdata : [],
    cartquantity : 0,

}


export const CartReducer = (store = InitialState, action) => {
    console.log('action:', action)
    console.log(typeof action.payload);
    switch(action.type) {
        case CART_DATA : return { ...store, cartdata : action.payload };
        case CART_QUANTITY : return { ...store, cartquantity : action.payload};
        default : return store;
    }
}