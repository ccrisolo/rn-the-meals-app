//This file manages meals reducer state 
//updating logic for marking meal as favorite and
//for filtering meals

//any file that imports MEALS data can now be replaced with the store that holds this state
import { MEALS } from '../../data/dummy-data';

//set up initial state
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}


const mealsReducer = (state = initialState, action) => {
    return state;
}

export default mealsReducer;