
export const PRODUCT_DETAILS = "PRODUCT_DETAILS";

export const addProductDetails = (data) => {

    return {
        type : PRODUCT_DETAILS,
        payload : data,
    }

}