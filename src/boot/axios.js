import {boot} from 'quasar/wrappers'
import store from 'src/store'
import router from '../router'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' // если сборка для продакшена
        ? 'https://-.ru:8080/api/v1' // url обычный
        : 'http://localhost:9000/api/v1' // url локальный
})

function clearStore() {
    store.commit("auth/setAccessToken", null)
    store.commit("auth/setRefreshToken", null)
    store.commit("audio/setAudioData", {})
    store.commit("audio/setUserPlaylists", [])
}

async function errorResponseHandler(error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        if (store.getters["auth/getRefreshToken"]) {
            try {
                let data = await api.post("/users/auth/refresh", {
                    refresh_token: store.getters["auth/getRefreshToken"]
                })
                data = data.data
                store.commit("auth/setAccessToken", data.accessToken)
                store.commit("auth/setRefreshToken", data.refreshToken)
                originalRequest._retry = true
                api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
                originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                return api(originalRequest)
            } catch (err) {
                clearStore()
                return router.push("/login")
            }
        } else {
            clearStore()
            return router.push("/login")
        }
    }
    return Promise.reject(error);
}

api.interceptors.response.use(
    response => response,
    errorResponseHandler
);

// если есть токен, ставим его в headers
if (store.getters["auth/getAccessToken"]) {
    api.defaults.headers.common['Authorization'] = `Bearer ${store.getters["auth/getAccessToken"]}`;
}


export default boot(({app}) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api

    app.config.globalProperties.$axios = axios
    // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
    //       so you won't necessarily have to import axios in each vue file

    app.config.globalProperties.$api = api
    // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
    //       so you can easily perform requests against your app's API
})

export {api}
