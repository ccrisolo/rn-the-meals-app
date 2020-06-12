export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

//action creator, go to reducers meals.js to add as a case
export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
};


//action creator, go to reducers meals.js to add as a case
export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings };
};