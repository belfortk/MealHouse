import { combineReducers } from 'redux';
import customerSign from './SignupPage/CustomerReducer';
import restaurantSign from './SignupPage/RestaurantReducer';
import search from './SearchReducer';


const rootReducer = combineReducers({
    customerSign,
    restaurantSign,
    search
});

export default rootReducer;