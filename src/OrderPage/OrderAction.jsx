export function OrderList(data) {
  return {
    type: "order_List",
    payload: data
  };
}

export function DataList(data) {
    return {
        type: "data_List",
        payload: data
    }
}

export function ShowTotal(subtotal, total){
    return {
        type: "show_Total",
        payload: {
            subtotal: subtotal,
            total: total
        }
    }
}