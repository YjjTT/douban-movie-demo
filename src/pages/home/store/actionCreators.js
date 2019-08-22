/*
 * @Author: yjjtt 
 * @Date: 2019-07-25 10:52:43 
 * @Last Modified by: yjjtt
 * @Last Modified time: 2019-08-22 13:32:54
 */
import axios from 'axios';
import {actionTypes} from './index';

/**
 * 热门标签
 */
export const getHotMovieTags = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/apb/j/search_tags?type=movie&source=index'
        }).then(res=>{
            if(res.status === 200){
                const action = {
                    type: actionTypes.GET_HOT_MOVIE_TAGS,
                    data: res.data.tags
                }
                dispatch(action)
            }
        })
    }
}