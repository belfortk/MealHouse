const defaultState = {
    firstName: "",
    lastName: "",
    restaurantName: "",
    phone: "",
    email: "",
    password: "",
    place_id: "",
    prepTime: "",
    place_formatted: "",
    place_location: ""
}

export default function restaurantSign(state = defaultState, action) {
    const { type, payload, keyName} = action;

    switch(type) {
        case "restaurant_input": {
            return {
                ...state,
                [keyName]: payload
            };
        }
        case 'placeId': {
            return {
                ...state,
                place_id: payload
            };
        }
        case 'placeFormatted': {
            return {
                ...state,
                place_formatted: payload
            };
        }
        case 'placeLocation': {
            return {
                ...state,
                place_location: payload
            };
        }
        default: {
            return state;
        }
    }
}