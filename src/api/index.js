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

const getDate = () => {
  Moment.locale('en');
  let date = new Date();
  let dateBefore = new Date();
  dateBefore.setDate(dateBefore.getDate() - 1);

  return `from=${Moment(dateBefore).format('YYYY-MM-DD')}&to=${Moment(
    date,
  ).format('YYYY-MM-DD')}`;
};

const requests = {
  get: (url) =>
    createApi().get(`${API}${url}`).then(handleResponse).catch(handleErrors),
};

const News = {
  getMostRecent: () =>
    requests.get(
      `/v2/everything?${getDate()}&sortBy=publishedAt&apiKey=${API_KEY}&q=sports`,
    ),
};

export default {
  News,
};
