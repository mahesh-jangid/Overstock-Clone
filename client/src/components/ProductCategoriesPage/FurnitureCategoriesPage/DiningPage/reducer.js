
import { DINING_DATA } from "./action";

const InitialState = {

    diningdata : [],

}

export const FurnitureDiningPageReducer = (store = InitialState, action) => {
    switch(action.type) {
        case DINING_DATA : return { ...store, diningdata : action.payload };

        default : return store;
    }
}