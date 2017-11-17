const defaultState = {
    FirstName: "",
    LastName: "",
    BusinessName: "",
    BusinessEmail: "",
    BusinessPhone: "",
    Address: "",
    PriceRange: "",
    Delivery: "",
    PrepTime: "",
    MonStart: "",
    MonEnd: "",
    TuesStart: "",
    TuesEnd: "",
    WedStart: "",
    WedEnd: "",
    ThuStart: "",
    ThuEnd: "",
    FriStart: "",
    FriEnd: "",
    SatStart: "",
    SatEnd: "",
    SunStart: "",
    SunEnd: "",
    place_id: "",
    place_formatted: "",
    place_location: "",
    password: ""
}

export default function restaurantProfile(state = defaultState, action) {
    const { type, payload, keyName } = action;

    switch(type) {
        case 'restaurant_profile_input': {
            return {
                ...state,
                [keyName]: payload
            }
        }
        case 'restaurant_profile_range': {
            return {
                ...state,
                PriceRange: payload
            }
        }
        case "restaurantProfilePlaceId": {
            return {
                ...state,
                place_id: payload
            }
        }
        case "restaurantProfilePlaceFormatted": {
            return {
                ...state,
                place_formatted: payload
            }
        }
        case "restaurantProfilePlaceLocation": {
            return {
                ...state,
                place_location: payload
            }
        }
        case "restaurantProfileAddress": {
            return {
                ...state,
                Address: {
                    place_formatted: state.place_formatted,
                    place_id: state.place_id,
                    place_location: state.place_location
                }
            }
        }
        default: {
            return state;
        }
    }
}