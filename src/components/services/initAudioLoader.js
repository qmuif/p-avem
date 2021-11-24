import {useStore} from "vuex";
import {onBeforeMount } from "vue";

export default function initAudioLoader() {
    const store = useStore()

    onBeforeMount(() => {
        store.commit("audioLoader/clearDownloadingAudiosId")
        store.commit("audioLoader/clearDownloadingProcessAudiosId")
    })
}
