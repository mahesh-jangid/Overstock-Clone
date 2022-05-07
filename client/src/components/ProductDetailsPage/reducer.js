
import { PRODUCT_DETAILS } from "./action";

const InitialState = {

    productdetailsdata : {},

}

export const ProductDetailsReducer = (store = InitialState, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS : return { ...store, productdetailsdata : action.payload };

        default : return store;
    }
}