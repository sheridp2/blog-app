import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts'
export const FETCH_POST = 'fetch_post'
export const CREATE_POST = 'create_post'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const RANDOM_STRING = '?key=PATSKEY123'

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${RANDOM_STRING}`);

  return{
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${RANDOM_STRING}`, values)
    .then(() => callback())

  return{
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${RANDOM_STRING}`);

  return{
    type: FETCH_POST,
    payload: request
  }
}
