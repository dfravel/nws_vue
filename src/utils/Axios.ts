import axios from "axios";
const baseURL = import.meta.env.VITE_APP_API_URL;

//set the default timeout to 5 seconds
const apiClient = axios.create({
  baseURL,
  timeout: 5000
});

// send information along with the request
apiClient.interceptors.request.use(
  (response) => {
    return response;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// package the response
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
