import { combineReducers } from 'redux';
import customerSign from './SignupPage/CustomerReducer';
import SearchResultsReducer from './ResultsPage/ResultsReducer';


const rootReducer = combineReducers({
  restaurants: SearchResultsReducer
});

export default rootReducer;
