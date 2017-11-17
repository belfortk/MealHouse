import { combineReducers } from 'redux';
import customerSign from './SignupPage/CustomerReducer';
import restaurantSign from './SignupPage/RestaurantReducer';
import search from './SearchReducer';
import SearchResultsReducer from './ResultsPage/ResultsReducer';
import restaurantProfile from './RestaurantProfile/RestaurantReducer';
import editMenu from './EditMenu/MenuReducer'


const rootReducer = combineReducers({
    customerSign,
    restaurantSign,
    search,
    SearchResultsReducer,
    restaurantProfile,
    editMenu
});

export default rootReducer;
