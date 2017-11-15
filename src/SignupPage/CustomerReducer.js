const defaultState = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    email: "",
    password: ""
}

export default function customerSignUp(state = defaultState, action, keyName) {
    const { type, payload } = action;

    switch(type) {
        case 'customer_input': {
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