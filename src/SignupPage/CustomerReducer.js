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
    console.log(keyName);
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