import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts'
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const RANDOM_STRING = '?key=PATSKEY123'

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${RANDOM_STRING}`);

  return{
    type: FETCH_POSTS,
    payload: request
  }
}
