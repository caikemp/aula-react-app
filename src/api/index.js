import Axios from "axios";

const Api = {
  post: async ({ url, body }) => {
    return await Axios.post(url, body)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  },
  get: async ({ url }) => {
    return await Axios.get(url)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  },
};

export default Api;
