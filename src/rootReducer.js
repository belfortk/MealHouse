import { combineReducers } from 'redux';
import customerSign from './SignupPage/CustomerReducer';
import restaurantSign from './SignupPage/RestaurantReducer'


const rootReducer = combineReducers({
    customerSign,
    restaurantSign
});

export default rootReducer;