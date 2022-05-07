
export const LIVING_DATA = "LIVING_DATA";

export const addLivingProductData = (data) => {

    return {
        type : LIVING_DATA,
        payload : data,
    }

}