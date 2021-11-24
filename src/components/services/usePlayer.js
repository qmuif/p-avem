import {useStore} from 'vuex'
import {computed} from "vue";

export default function usePlayer() {
    const store = useStore()

    return {
        currentPlaylist: computed(() => store.getters["player/getCurrentPlaylist"]),
        currentPlayAudio: computed(() => store.getters["player/getCurrentPlayAudio"]),
        loadingProgress: computed(() => store.getters["player/getLoadingProgress"]),
        isPlaying: computed(() => store.getters["player/getIsPlaying"]),
        currentTime: computed(() => store.getters["player/getCurrentTime"]),
        currentTimeFormatted: computed(() => store.getters["player/getCurrentTimeFormatted"]),
        playAudio: (playlist, audio) => store.dispatch("player/playAudio", {
            playlist: playlist,
            audio: audio
        }),
        pauseAudio: () => store.dispatch("player/pauseAudio"),
        resumeAudio: async () => store.dispatch("player/resumeAudio"),
        nextAudio: async () => store.dispatch("player/handleNextAudio"),
        previousAudio: () => store.dispatch("player/handlePreviousAudio"),
        changeCurrentTime: (time) => store.dispatch("player/changeCurrentTime", time),
        clearPlayerData: () => store.dispatch("player/clearPlayerData")
    }
}
