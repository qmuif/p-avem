import {useStore} from "vuex";
import {computed, onBeforeMount } from "vue";
import {useMeta} from 'quasar'

export default function initPlayer() {
    const store = useStore()
    const currentPlayAudio = computed(() => store.getters["player/getCurrentPlayAudio"])

    useMeta(() => {
        return {
            title: currentPlayAudio.value,
            titleTemplate: title => title.title ? `${title.title} | Avem` : "Avem"
        }
    })

    onBeforeMount(async () => {
        await store.dispatch("player/initPlayer")
        await store.dispatch("player/initMediaSession")
    })
}
