const defaultState = {
    email: "",
    password: "",
    invalid: ""
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