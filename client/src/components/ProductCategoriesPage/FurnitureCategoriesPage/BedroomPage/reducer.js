
import { BEDROOM_DATA } from "./action";

const InitialState = {

    bedroomdata : [],

}

export const FurnitureBedroomPageReducer = (store = InitialState, action) => {
    switch(action.type) {
        case BEDROOM_DATA : return { ...store, bedroomdata : action.payload };

        default : return store;
    }
}