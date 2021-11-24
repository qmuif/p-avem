import {useStore} from "vuex";
import {computed, onBeforeMount, watch} from "vue";
import audioOffline from "src/store/audioOffline";
import audioOnline from "src/store/audioOnline";

export default function initAudio() {
    const store = useStore()

    const isAppOffline = computed(() => store.getters["isAppOffline"])

    if (isAppOffline.value) {
        store.registerModule('audio', audioOffline)
    } else {
        store.registerModule('audio', audioOnline)
    }

    watch(isAppOffline, () => {
        if (isAppOffline.value) {
            store.unregisterModule('audio')
            store.registerModule('audio', audioOffline)
            store.dispatch("audio/loadUserAudio")

        } else {
            store.unregisterModule('audio')
            store.registerModule('audio', audioOnline)
            store.dispatch("audio/loadUserAudio")
        }
    })

    onBeforeMount(() => {
        store.dispatch("audio/initAudio")
    })
}
