import axios
  from 'axios';

export default ({Vue}) => {
  Vue.prototype.$axios = axios.create({
    baseURL: 'http://localhost:8000/api/'
  });
}
