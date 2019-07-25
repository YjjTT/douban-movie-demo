import * as types from './actionTypes'

const defaultState = {
    hotMovieTagList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_HOT_MOVIE_TAGS:
            return {
                hotMovieTagList: action.data
            }
        default:
            return state
    }
}