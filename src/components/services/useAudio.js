import {useStore} from 'vuex'
import {computed} from "vue";

export default function useAudio() {
    const store = useStore()

    return {
        // Загрузка
        userAudio: computed(() => store.getters["audio/getUserAudio"]),
        userPlaylists: computed(() => store.getters["audio/getUserPlaylists"]),
        searchedUserAudio: computed(() => store.getters["audio/getSearchedUserAudio"]),
        isLoading: computed(() => store.getters["audio/getIsLoading"]),
        filteredUserAudio: computed(() => store.getters["audio/getFilteredUserAudio"]),
        trendAudio: computed(() => store.getters["audio/getTrendAudio"]),
        searchText: computed(() => store.getters["audio/getSearchText"]),
        loadUserAudio: async () => store.dispatch("audio/loadUserAudio"),
        searchUserAudio: () => store.dispatch("audio/searchUserAudio"),
        setSearchText: (text) => store.commit("audio/setSearchText", text),
        loadMoreUserAudio: async () => store.dispatch("audio/loadMoreUserAudio"),
        loadTrendAudio: () => store.dispatch("audio/loadTrendAudio"),
    }
}
