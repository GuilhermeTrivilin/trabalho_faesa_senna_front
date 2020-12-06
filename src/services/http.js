import axios from "axios";
const server = "http://localhost:3001"

export const get = async (endpoint = "") => {
  try {
    const response = await axios.get(`${server}/${endpoint}`);
    return successObject(response);
  } catch (error) {
    return errorObject(error);
  }
};

export const post = async (endpoint = "", body = {}) => {
  try {
    const response = await axios.post(`${server}/${endpoint}`, body);
    return successObject(response);
  } catch (error) {
    return errorObject(error);
  }
};

export const put = async (endpoint = "", body = {}) => {
  try {
    const response = await axios.put(`${server}/${endpoint}`, body);
    return successObject(response);
  } catch (error) {
    return errorObject(error);
  }
};

export const destroy = async (endpoint = "", body) => {
  try {
    const response = await axios.delete(`${server}/${endpoint}`, body);
    return successObject(response);
  } catch (error) {
    return errorObject(error);
  }
};

const successObject = (response) => {
  return {
    success: true,
    status: response.status,
    data: response.data,
  };
};

const errorObject = (error) => {
  return {
    success: false,
    status: error.request.status,
    data: errorsResponse(error),
  };
};

const errorsResponse = (error) => {
  try {
    return JSON.parse(error.request.response)
  } catch {
    return "error undefinied"
  }
};

export const setDefaultHeaders = (token) => {
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete axios.defaults.headers.common["Authorization"]
    }
}