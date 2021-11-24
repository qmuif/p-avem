import {useStore} from 'vuex'
import {computed} from 'vue'
import router from "src/router";

export default function useAuth() {
    const store = useStore()

    return {
        // access a state in computed function
        access_token: computed(() => store.getters["auth/getAccessToken"]),
        refresh_token: computed(() => store.getters["auth/getRefreshToken"]),
        registerUser: async (code) => store.dispatch("auth/registerUser", code),
        logout: () => {
            store.commit("auth/setAccessToken", null)
            store.commit("auth/setRefreshToken", null)
            store.commit("audio/setAudioData", {})
            store.commit("audio/setUserPlaylists", [])
            router.push("/login")
        }
    }
}
