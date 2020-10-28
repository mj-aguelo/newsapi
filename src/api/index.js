import axios from 'axios';
import Moment from 'moment';

const API = 'http://newsapi.org';
const API_KEY = '68cf7a5fca1142d195c2d4404ad6223f';

const createApi = () => {
  let api, headers;

  headers = {
    'Content-Type': 'application/json',
  };

  api = axios.create({
    baseURL: API,
    responseType: 'json',
    headers: headers,
  });

  return api;
};

const handleErrors = async (error) => {
  let result = {};
  const data = error && error.response && error.response.data;
  const status = error && error.response && error.response.status;

  result = {
    status: status,
    data: data,
    error: true,
  };
  return result;
};

const handleResponse = (res) => {
  return res && res.data;
};

const getCurrentDate = () => {
  Moment.locale('en');
  // return Moment(new Date()).format('YYYY-MM-DD');

  return '2020-10-28';
};

const requests = {
  get: (url) =>
    createApi().get(`${API}${url}`).then(handleResponse).catch(handleErrors),
};

const News = {
  getMostRecent: () =>
    requests.get(
      `/v2/everything?from=${getCurrentDate()}&sortBy=publishedAt&apiKey=${API_KEY}&q=sports`,
    ),
};

export default {
  News,
};
