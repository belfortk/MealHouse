const defaultState = {
    subtotal: 0,
    deliveryfee: 5,
    total: 5,
    orderList:[],
    dataList:[]

}

export default function orderList(state = defaultState, action) {
    const { type, payload } = action;
    switch(type) {
        case 'order_List': {
            return {
                ...state,
                orderList: payload
            }
        }

        case 'data_List': {
            return {
                ...state,
                dataList: payload
            }
        }

        case 'show_Total':{
            return {
                ...state,
                subtotal: payload.subtotal,
                total: payload.total
            }
        }

        default: {
            return state;
        }
    }
}