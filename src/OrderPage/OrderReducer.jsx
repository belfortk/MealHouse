const defaultState = {
   itemList:[]
}

export default function orderItemList(state = defaultState, action) {
    const { type, payload } = action;
    switch(type) {
        case 'order_itemList': {
            return {
                ...state,
                itemList: payload
            }
        }

        default: {
            return state;
        }
    }
}