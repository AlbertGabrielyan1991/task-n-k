import axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL = 'https://rocky-temple-83495.herokuapp.com/';

export default function getData (config) {
    return instance({ ...config });
};
