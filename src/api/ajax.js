import axios from "axios";
import qs from "qs";

/**
 * ajax 请求封装
 */
class Ajax {
  constructor(baseURL) {
    this.header = {};
    this.request = axios.create();
    this.request.defaults.baseURL = baseURL;
    this.request.defaults.headers.post["Content-Type"] = "application/json";
    this.request.defaults.headers.put["Content-Type"] = "application/json";
    this.request.interceptors.request.use(
      config => config,
      error => Promise.reject(error)
    );
    this.request.interceptors.response.use(
      response => response,
      error => Promise.reject(error)
    );
  }

  setHeader(headers) {
    this.headers = headers || {};
    return this;
  }

  get(url) {
    return this.request.get(url, { headers: this.headers });
  }

  post(url, data) {
    return this.request.post(url, data, { headers: this.headers });
  }

  delete(url) {
    return this.request.delete(url, { headers: this.headers });
  }

  put(url, data) {
    return this.request.put(url, data, { headers: this.headers });
  }

  formPost(url, data) {
    return this.request.post(
      url,
      qs.stringify(data, { arrayFormat: "repeat" }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ...this.headers
        }
      }
    );
  }

  formGet(url) {
    return this.request.get(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        ...this.headers
      }
    });
  }

  upload(url, formData) {
    return this.request.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        ...this.headers
      }
    });
  }
}

export default Ajax;
