import { combineReducers } from 'redux';
import customerSign from './SignupPage/CustomerReducer';
import restaurantSign from './SignupPage/RestaurantReducer';
import search from './SearchReducer';
import SearchResultsReducer from './ResultsPage/ResultsReducer';


const rootReducer = combineReducers({
    customerSign,
    restaurantSign,
    search,
    restaurants: SearchResultsReducer
});

export default rootReducer;
