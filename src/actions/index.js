import axios from 'axios';
import {
  FETCH_COMICS_REQUEST,
  FETCH_COMICS_FAILURE,
  FETCH_COMICS_SUCCESS,
  FETCH_PUBLISHERS_REQUEST,
  FETCH_PUBLISHERS_FAILURE,
  FETCH_PUBLISHERS_SUCCESS,
} from './types';

/*export const fetchComics = () => ({
  type: FETCH_COMICS_REQUEST,
  payload: [],
});*/

export const fetchComics = () => (dispatch) => {
   axios.get('/api/v1/comics')
     .then(response => dispatch({
       type: FETCH_COMICS_SUCCESS,
       data: response.data
     })).catch(error => dispatch({
       type: FETCH_COMICS_FAILURE,
       error: error
     }))
}

export const fetchPublishers = () => (dispatch) => {
   axios.get('/api/v1/publishers')
     .then(response => dispatch({
       type: FETCH_PUBLISHERS_SUCCESS,
       data: response.data
     })).catch(error => dispatch({
       type: FETCH_PUBLISHERS_FAILURE,
       error: error
     }))
}
