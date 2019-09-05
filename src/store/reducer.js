import { combineReducers } from 'redux';
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as moreReducer } from '../pages/more/store'

const reducer = combineReducers({
    home: homeReducer,
    more: moreReducer
})
export default reducer;