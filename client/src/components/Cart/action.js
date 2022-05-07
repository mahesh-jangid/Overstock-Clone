
export const CART_DATA = "CART_DATA";

export const CART_QUANTITY = "CART_QUANTITY"
export const addCartData = (data) => {

    return {
        type : CART_DATA,
        payload : data,
    }

}

export const addCartQuantity = (data) => {
    console.log('data:', data)
    return {
        type : CART_QUANTITY,
        payload : data,
    }
}


