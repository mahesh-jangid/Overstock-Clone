
import { KITCHEN_DATA } from "./action";

const InitialState = {

    KitchenDiningRoomSetsdata : [],

}

export const FurnitureKitchenDiningRoomSetsReducer = (store = InitialState, action) => {
    switch(action.type) {
        case KITCHEN_DATA : return { ...store, KitchenDiningRoomSetsdata : action.payload };

        default : return store;
    }
}