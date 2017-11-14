const initialState = {
  type: "",
  customerData: {
    firstName: "",
    lastName: "",

    street: "",
    town: "",
    state: "",
    zipcode: "",

    phone: "",
    email: "",
    password: ""
  },

  restaurantData: {
    ownerFirstName: "",
    ownerLastName: "",

    restaurantName: "",

    street: "",
    town: "",
    state: "",
    zipcode: "",

    phone: "",
    email: "",
    password: "",
    prepTime: 0
  }
};

export default function UserSignupReducer(store = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "": {
      return {
        ...initialState,

      };
    }

    case "": {
      return {
        ...store,


      };
    }

    case "": {
      return {
        ...store,


      };
    }

    default: {
      return store;
    }
  }
}
