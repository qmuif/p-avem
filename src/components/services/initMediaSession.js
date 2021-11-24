import {useStore} from 'vuex'
import {computed, watch} from "vue";

export default function initMediaSession() {
    const store = useStore()
    const currentPlayAudio = computed(() => store.getters["player/getCurrentPlayAudio"])
    watch(currentPlayAudio, (audio) => {
        if ('mediaSession' in navigator && audio.title) {
            // eslint-disable-next-line no-undef
            navigator.mediaSession.metadata = new MediaMetadata({
                title: audio.title,
                artist: audio.artist,
                artwork: [
                    {src: audio.album.thumb.photo_300, sizes: '96x96', type: 'image/png'},
                    {src: audio.album.thumb.photo_300, sizes: '128x128', type: 'image/png'},
                    {src: audio.album.thumb.photo_300, sizes: '192x192', type: 'image/png'},
                    {src: audio.album.thumb.photo_300, sizes: '256x256', type: 'image/png'},
                    {src: audio.album.thumb.photo_300, sizes: '384x384', type: 'image/png'},
                    {src: audio.album.thumb.photo_300, sizes: '512x512', type: 'image/png'},
                ]
            });

            navigator.mediaSession.setActionHandler('play', () => {
                store.dispatch("player/resumeAudio")
            })
            navigator.mediaSession.setActionHandler('pause', () => {
                store.dispatch("player/pauseAudio")
            })

            navigator.mediaSession.setActionHandler('previoustrack', () => {
                store.dispatch("player/handlePreviousAudio")
            });

            navigator.mediaSession.setActionHandler('nexttrack', () => {
                store.dispatch("player/handleNextAudio")
            });

            navigator.mediaSession.setActionHandler('seekto', (e) => {
                store.dispatch("player/changeCurrentTime", e.seekTime)
            });

        }
    })
}
