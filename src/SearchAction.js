export function searchPlaceId(data) {
    return {
        type: 'search_place_id',
        payload: data
    }
}

export function searchPlaceFormatted(data) {
    return {
        type: 'search_place_formatted',
        payload: data
    }
}

export function searchPlaceLocation(data) {
    return {
        type: 'search_place_location',
        payload: data
    }
}