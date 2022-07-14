import axios from "axios"

const request = axios.create({
  baseURL: "http://liufusong.top:8080",
  timeout: 3000,
})

request.interceptors.request.use(
  function (config) {
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
