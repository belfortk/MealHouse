const defaultState = {
    search_place_id: "",
    search_place_formatted: "",
    search_place_location: ""
}

export default function homeSearch(state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'search_place_id': {
            return {
                ...state,
                search_place_id: payload
            };
        }
        case 'search_place_formatted': {
            return {
                ...state,
                search_place_formatted: payload
            };
        }
        case 'search_place_location': {
            return {
                ...state,
                search_place_location: payload
            }
        }
        default: {
            return state;
        }
    }
}