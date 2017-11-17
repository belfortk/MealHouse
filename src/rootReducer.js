import { combineReducers } from 'redux';
import customerSign from './SignupPage/CustomerReducer';
import restaurantSign from './SignupPage/RestaurantReducer';
import search from './SearchReducer';
import SearchResultsReducer from './ResultsPage/ResultsReducer';
import restaurantProfile from './RestaurantProfile/RestaurantReducer';
import login from './Cookie/CookieReducer';
import editMenu from './EditMenu/MenuReducer'


const rootReducer = combineReducers({
    customerSign,
    restaurantSign,
    search,
    SearchResultsReducer,
    restaurantProfile,
    login,
    editMenu
});

export default rootReducer;
