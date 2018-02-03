const initialState = {
restaurants: [  {
  "ownerName": "Jason Mason",
  "restaurantName": "Tacos Emporium",
  "restaurantPhone": "123456533",
  "restaurantEmail": "google@gmail.com",
  "password": "jbngfskjlb",
  "location": {
    "place_formatted": "225 Main St, Ramona, CA 92065, USA",
    "place_id": "EiIyMjUgTWFpbiBTdCwgUmFtb25hLCBDQSA5MjA2NSwgVVNB",
    "place_location": "(33.0490623, -116.85745859999997)"
  },
  "prepTime": 10,
  "hoursOfOperation": [
    {
      "Mon": {
        "start": "11:11",
        "end": "11:11"
      }
    },
    {
      "Tues": {
        "start": "11:11",
        "end": "11:11"
      }
    },
    {
      "Wed": {
        "start": "11:11",
        "end": "11:11"
      }
    },
    {
      "Thu": {
        "start": "11:11",
        "end": "11:11"
      }
    },
    {
      "Fri": {
        "start": "11:11",
        "end": "01:01"
      }
    },
    {
      "Sat": {
        "start": "11:11",
        "end": "11:11"
      }
    },
    {
      "Sun": {
        "start": "11:11",
        "end": "11:11"
      }
    }
  ],
  "priceRange": 2,
  "minDeliveryCharge": 16,
  "id": 1
},
{
  "ownerName": "Chris BBQ",
  "restaurantName": "BBQ Town",
  "restaurantPhone": "8975732452",
  "restaurantEmail": "chrisbbq@gmail.com",
  "password": "noknug",
  "location": {
    "street": "",
    "town": "",
    "state": "null",
    "zipcode": "",
    "place_id": "ChIJd13Xl6dU2YARIRz5a3gl8dk",
    "place_formatted": "1055 Fifth Ave, San Diego, CA 92101, USA",
    "place_location": "(32.71636350000001, -117.15969769999998)"
  },
  "prepTime": 0,
  "hoursOfOperation": [
    {
      "willAddLater": true
    }
  ],
  "priceRange": 1,
  "minDeliveryCharge": 5,
  "id": 2
}]
};

export default function SearchResultsReducer(store = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_RESTAURANTS' : {
      return {
        ...store
      };
    }

    default: {
      return store;
    }
  }
}

