export function customerInput(data, key) {
  return {
    type: "customer_input",
    keyName: key,
    payload: data
  };
}
