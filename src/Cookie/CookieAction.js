export function cookieInput(data, key) {
    return {
        type: 'cookie',
        payload: data,
        keyName: key
    }
}