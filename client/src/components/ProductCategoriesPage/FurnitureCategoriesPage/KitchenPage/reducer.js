
import { KITCHEN_DATA } from "./action";

const InitialState = {

    kitchendata : [],

}

export const FurnitureKitchenPageReducer = (store = InitialState, action) => {
    switch(action.type) {
        case KITCHEN_DATA : return { ...store, kitchendata : action.payload };

        default : return store;
    }
}