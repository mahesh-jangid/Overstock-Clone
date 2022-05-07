
export const BEDROOM_DATA = "BEDROOM_DATA";

export const addBedroomProductData = (data) => {

    return {
        type : BEDROOM_DATA,
        payload : data,
    }

}