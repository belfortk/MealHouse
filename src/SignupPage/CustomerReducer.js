const defaultState = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "null",
    zip: "",
    phone: "",
    email: "",
    password: ""
}

export default function customerSignUp(state = defaultState, action) {
    const { type, payload, keyName } = action;
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