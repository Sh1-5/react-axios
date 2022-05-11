import axios from 'axios'

// const devBaseURL = '/api'
// const prodBaseURL = 'http://152.136.185.210:5000'

const request = axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? devBaseURL : prodBaseURL,
  baseURL: process.env.REACT_APP_API,
  timeout: 100000
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
