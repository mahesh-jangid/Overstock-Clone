
export const DINING_DATA = "DINING_DATA";

export const addDiningProductData = (data) => {

    return {
        type : DINING_DATA,
        payload : data,
    }

}