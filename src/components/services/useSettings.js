import {useStore} from 'vuex'
import {computed} from "vue";

export default function useSettings() {
    const store = useStore()

    return {
        isAutoChangeTheme: computed(() => store.getters["settings/getIsAutoChangeTheme"]),
        isDarkMode: computed(() => store.getters["settings/getIsDarkMode"]),
        setAutoChangeTheme: (data) => store.commit("settings/setAutoChangeMode", data),
        setIsDark: (data) => store.commit("settings/setIsDark", data)
    }
}
