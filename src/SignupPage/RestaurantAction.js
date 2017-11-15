export function restaurantInput(data, key) {
  return {
    type: "restaurant_input",
    payload: data,
    keyName: key
  };
}

export function placeId(data) {
  return {
    type: "placeId",
    payload: data
  };
}

export function placeFormatted(data) {
  return {
    type: "placeFormatted",
    payload: data
  };
}

export function placeLocation(data) {
  return {
    type: "placeLocation",
    payload: data
  };
}
