export function restaurantProfileInput(data, key) {
  return {
    type: "restaurant_profile_input",
    payload: data,
    keyName: key
  };
}

export function restaurantProfileRange(data) {
  return {
    type: "restaurant_profile_range",
    payload: data
  };
}

export function restaurantProfilePlaceId(data) {
  return {
    type: "restaurantProfilePlaceId",
    payload: data
  };
}

export function restaurantProfilePlaceFormatted(data) {
    return {
      type: "restaurantProfilePlaceFormatted",
      payload: data
    };
  }

  export function restaurantProfilePlaceLocation(data) {
    return {
      type: "restaurantProfilePlaceLocation",
      payload: data
    };
  }

  export function restaurantAddress(data) {
      return {
      type: "restaurantProfileAddress",
      payload: data
      }
  }