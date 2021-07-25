export default ({ $axios }) => {
  $axios.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem("token");
      if (token) {
        const token = JSON.parse(token);
        config.header["access-token"] = token["access-token"];
        config.header["client"] = token.client;
        config.header["uid"] = token.uid;
      }
      return config;
    },
    (error) => {
      console.log("request error", error);
      return error;
    }
  );
  $axios.interceptors.response.use(
    (response) => {
      // auth系のAPIの場合、response headerからtokenを取得する必要あり
      if (
        response.config.url === "/auth" ||
        response.config.url === "/auth/sign_in"
      ) {
        const headers = response.headers;
        const token = {
          token: headers["access-token"],
          client: headers.client,
          uid: headers.uid,
        };
        window.localStorage.setItem("token", JSON.stringify(token));
      }
      return response.data;
    },
    (error) => {
      const apiError = normalizeError(error);
      console.log("response error", apiError);
      return apiError;
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
