import {useStore} from 'vuex'
import {computed} from "vue";

export default function usePlaylist() {
    const store = useStore()

    return {
        info: computed(() => store.getters["audioPlaylist/getInfo"]),
        isLoading: computed(() => store.getters["audioPlaylist/getIsLoading"]),
        audios: computed(() => store.getters["audioPlaylist/getAudios"]),
        openPlaylist: (data) => store.dispatch("audioPlaylist/openPlaylist", data),
        loadMorePlaylistAudio: () => store.dispatch("audioPlaylist/loadMorePlaylistAudio"),
    }
}
