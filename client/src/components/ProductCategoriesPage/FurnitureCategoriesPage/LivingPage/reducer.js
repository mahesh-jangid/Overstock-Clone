
import { LIVING_DATA } from "./action";

const InitialState = {

    livingdata : [],

}

export const FurnitureLivingPageReducer = (store = InitialState, action) => {
    switch(action.type) {
        case LIVING_DATA : return { ...store, livingdata : action.payload };

        default : return store;
    }
}