import {api} from 'boot/axios'

export async function registerUser({commit}, code) {
    const res = await api.post("/users/sign-up", {
        code: code
    })
    let data = res.data
    api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
    commit("setAccessToken", data.accessToken)
    commit("setRefreshToken", data.refreshToken)
    commit("setUser", data.user)
}

