import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';
export const SET_SORT_METHOD = 'set_sort_method';
export const SET_CATEGORY = 'set_category';
// export const SET_SORT_METHOD = 'set_sort_method';

const ROOT_URL = 'http://localhost:8000';

export function setSortMethod(param) {
  return {
    type: SET_SORT_METHOD,
    payload: param
  };
}

export function setCategory(param) {
  return {
    type: SET_CATEGORY,
    payload: param
  };
}

export function fetchProducts(data) {
  const request = axios({
    url:`${ROOT_URL}/products`,
    method: 'get',
    params: data
  })

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}