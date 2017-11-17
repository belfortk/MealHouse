export function userInput(data, key) {
  return {
    type: "user_input",
    keyName: key,
    payload: data
  };
}

export function menuList(data){
    return{
        type: "menu_list",
        payload: data
    }
}