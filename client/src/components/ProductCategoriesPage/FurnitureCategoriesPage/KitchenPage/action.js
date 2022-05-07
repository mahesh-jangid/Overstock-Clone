
export const KITCHEN_DATA = "KITCHEN_DATA";

export const addKitchenProductData = (data) => {

    return {
        type : KITCHEN_DATA,
        payload : data,
    }

}