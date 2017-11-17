const defaultState = {
    name: "",
    price: "",
    type: "Appetizer",
    description: "",
    active: true,
    items:[]
}

export default function editMenu(state = defaultState, action) {
    const { type, payload, keyName } = action;
    switch(type) {
        case 'user_input': {
            return {
                ...state,
                [keyName]: payload
            }
        }

        case 'menu_list':{
            return {
                ...state,
                items: payload
            }
        }

        default: {
            return state;
        }
    }
}