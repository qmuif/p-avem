import {useStore} from 'vuex'
import {computed} from "vue";

export default function useAudioLoader() {
    const store = useStore()
    const cachedAudiosIds = computed(() => store.getters["audioLoader/getCachedAudiosIds"])
    const loadedAudiosIds = computed(() => store.getters["audioLoader/getDownloadingAudiosIds"])
    const loadedAudiosProgress = computed(() => store.getters["audioLoader/getDownloadingAudiosProgress"])

    return {
        saveAudio: async (data) => store.dispatch("audioLoader/saveAudio", data),
        removeAudio: (audio) => store.dispatch("audioLoader/removeAudio", audio),
        clearAllAudio: async () => store.dispatch("audioLoader/clearAllAudios"),
        loadedAudio: loadedAudiosIds,
        cachedAudiosIds: cachedAudiosIds,
        isAudioCached: (audio) => cachedAudiosIds.value.includes(audio.id),
        isAudioLoading: (audio) => loadedAudiosIds.value.includes(audio.id),
        getLoadingProgress: (audio) => {
            const data = loadedAudiosProgress.value[audio.id]
            return data ? data : 0
        },
    }
}
