import { combineReducers } from 'redux';
import customerSign from './SignupPage/CustomerReducer';
import restaurantSign from './SignupPage/RestaurantReducer';
import search from './SearchReducer';
import SearchResultsReducer from './ResultsPage/ResultsReducer';
import restaurantProfile from './RestaurantProfile/RestaurantReducer';
import login from './Cookie/CookieReducer';


const rootReducer = combineReducers({
    customerSign,
    restaurantSign,
    search,
    SearchResultsReducer,
    restaurantProfile,
    login
});

export default rootReducer;
