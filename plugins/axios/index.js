export default ({ $axios }) => {
  console.log('plugin axios');
  $axios.create({
    baseURL: process.env.API_ENDPOINT,
    timeout: 600000,
  });

  $axios.interceptors.request.use(
    (config) => {
      // Todo: config.headerにauthorizationを付ける
      return config;
    },
    (error) => {
      console.log('request error', error);
      return Promise.reject(error);
    }
  );
  $axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      const apiError = normalizeError(error);
      return Promise.reject(apiError);
    }
  );
};

const normalizeError = (error) => {
  return {
    status: error.response && error.response.status,
    message: error.message,
    raw: error,
  };
};
