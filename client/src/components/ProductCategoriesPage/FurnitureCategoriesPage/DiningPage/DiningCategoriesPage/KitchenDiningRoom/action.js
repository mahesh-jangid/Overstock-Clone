
export const KITCHEN_DATA = "KITCHEN_DATA";

export const addKitchenDiningRoomSetsData = (data) => {

    return {
        type : KITCHEN_DATA,
        payload : data,
    }

}