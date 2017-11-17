const defaultState = {
    email: "",
    password: ""
}

export default function cookie(state = defaultState, action) {
    const { type, payload, keyName } = action;

    switch(type) {
        case 'cookie': {
            return {
                ...state,
                [keyName]: payload
            }
        }
        default: {
            return state;
        }
    }
}