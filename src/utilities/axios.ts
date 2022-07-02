/* eslint-disable indent */
/* eslint-disable no-param-reassign */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
// import NProgress from 'nprogress';
import API_URL from '../constants/domains';
import { LANGUAGE, TOKEN } from '../constants/cookies';

// import 'nprogress/nprogress.css';

// let requestsCounter = 0;

const instance: AxiosInstance = axios.create({
  baseURL: `${API_URL}/`,
});

// Set the AUTH token for any request
instance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  // requestsCounter += 1;
  // NProgress.start();

  // eslint-disable-next-line operator-linebreak

  const token = Cookies.get(TOKEN);

  const language = Cookies.get(LANGUAGE) || 'en';

  const newConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: token ? `Bearer ${token}` : '',
      'Accept-Language': language,
    },
  };

  return newConfig;
});

// Add a response interceptor
instance.interceptors.response.use(
  // eslint-disable-next-line arrow-body-style
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // requestsCounter -= 1;
    // if (requestsCounter <= 0) {
    //   NProgress.done();
    // }

    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log('err', error.toJSON());

    // Object.entries(error).map(([label, value], idx) => {
    //   console.log(`idx ${idx}`, label, value);
    // });

    // requestsCounter -= 1;
    // if (requestsCounter === 0) {
    //   NProgress.done();
    // }

    const { status } = error.response;

    // let url;
    switch (status) {
      case 401:
        // url = `${authPath.login}?continue=${window.location.href}`;
        // window.location.href = url;
        break;
      case 403:
        // todo
        break;
      default:
        // other case
        break;
    }

    return Promise.reject(error);
  }
);

// const calculatePercentage = (loaded, total) => Math.floor(loaded * 1.0) / total;
// const updateProgress = (e) => NProgress.inc(calculatePercentage(e.loaded, e.total));

// instance.defaults.onDownloadProgress = updateProgress;
// instance.defaults.onUploadProgress = updateProgress;

export default instance;
