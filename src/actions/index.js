import axios from 'axios';
import {
  FETCH_COMICS_FAILURE,
  FETCH_COMICS_SUCCESS,
  FETCH_PUBLISHERS_FAILURE,
  FETCH_PUBLISHERS_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  ADD_READ_FAILURE,
  ADD_READ_SUCCESS,
  REMOVE_READ_FAILURE,
  REMOVE_READ_SUCCESS,
  ADD_WISH_FAILURE,
  ADD_WISH_SUCCESS,
  REMOVE_WISH_FAILURE,
  REMOVE_WISH_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from './types';


const session = axios.create({
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
});


const makeFetchActionCreator = (typeSuccess, typeFailure, url) => () => (dispatch) => {
   return session.get(url)
     .then(response => dispatch({
       type: typeSuccess,
       data: response.data,
     })).catch(error => dispatch({
       type: typeFailure,
       error: error,
     }))
}

const makeUpdateActionCreator = (typeSuccess, typeFailure) => (url, data) => (dispatch) => {
   return session.patch(url, data)
     .then(response => dispatch({
       type: typeSuccess,
       data: response.data,
     })).catch(error => dispatch({
       type: typeFailure,
       error: error,
     }))
}

export const login = (username, password) => (dispatch) => {
  return session.post('/api/v1/login/', { username, password })
    .then(response => dispatch({
      type: 'LOGIN_SUCCESS',
      data: response.data,
    })).catch(error => dispatch({
      type: 'LOGIN_FAILURE',
      error: error,
    }))
}


export const logout = makeFetchActionCreator(LOGOUT_SUCCESS, LOGOUT_FAILURE, '/api/v1/logout/')
export const fetchComics = makeFetchActionCreator(FETCH_COMICS_SUCCESS, FETCH_COMICS_FAILURE, '/api/v1/comics/')
export const fetchPublishers = makeFetchActionCreator(FETCH_PUBLISHERS_SUCCESS, FETCH_PUBLISHERS_FAILURE, '/api/v1/publishers/')
export const fetchProfile = makeFetchActionCreator(FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE, '/api/v1/profiles/me/')

export const addRead = makeUpdateActionCreator(ADD_READ_SUCCESS, ADD_READ_FAILURE)
export const removeRead = makeUpdateActionCreator(REMOVE_READ_SUCCESS, REMOVE_READ_FAILURE)
export const addWish = makeUpdateActionCreator(ADD_WISH_SUCCESS, ADD_WISH_FAILURE)
export const removeWish = makeUpdateActionCreator(REMOVE_WISH_SUCCESS, REMOVE_WISH_FAILURE)
