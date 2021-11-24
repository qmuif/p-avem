import {useStore} from "vuex";
import { computed, watch } from "vue";
import { useQuasar } from 'quasar'

export default function initSettings() {
    const store = useStore()
    const $q = useQuasar()
    const isAutoChangeTheme = computed(() => store.getters["settings/getIsAutoChangeTheme"])
    const isDarkTheme = computed(() => store.getters["settings/getIsDarkMode"])
    $q.dark.set(isAutoChangeTheme.value ? 'auto' : isDarkTheme.value)

    watch(isAutoChangeTheme, () => {
        $q.dark.set(isAutoChangeTheme.value ? 'auto' : isDarkTheme.value)
    })
}
