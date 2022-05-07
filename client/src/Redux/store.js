
import { legacy_createStore as createStore, combineReducers } from "redux";

import { ProductDetailsReducer } from "../components/ProductDetailsPage/reducer";
import { CartReducer } from "../components/Cart/reducer";
import { FurnitureDiningPageReducer } from "../components/ProductCategoriesPage/FurnitureCategoriesPage/DiningPage/reducer";
import { FurnitureLivingPageReducer } from "../components/ProductCategoriesPage/FurnitureCategoriesPage/LivingPage/reducer";
import { FurnitureKitchenDiningRoomSetsReducer } from "../components/ProductCategoriesPage/FurnitureCategoriesPage/DiningPage/DiningCategoriesPage/KitchenDiningRoom/reducer";
import { FurnitureBedroomPageReducer } from "../components/ProductCategoriesPage/FurnitureCategoriesPage/BedroomPage/reducer";
import { FurnitureKitchenPageReducer } from "../components/ProductCategoriesPage/FurnitureCategoriesPage/KitchenPage/reducer";

const rootReducer = combineReducers({
    ProductDetails : ProductDetailsReducer,
    CartDetails : CartReducer,
    FurnitureDiningPage : FurnitureDiningPageReducer,
    FurnitureLivingPage : FurnitureLivingPageReducer,
    FurnitureBedroomPage : FurnitureBedroomPageReducer,
    FurnitureKitchenPage : FurnitureKitchenPageReducer,
    KitchenDiningRoomSets : FurnitureKitchenDiningRoomSetsReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



store.subscribe(() => {
    console.log("Subscribe : ", store.getState());
})