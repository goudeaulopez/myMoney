// apiAxios.js
import axios from "axios"
import * as SecureStore from "expo-secure-store"

const instance = axios.create({
  baseURL: "http://localhost:3000" // <-- pon tu URL
})

instance.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync("token") // <-- async
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

export default instance
