<template>
  <q-page class="flex-center content-start window-width">
    <q-list class="q-mt-sm">
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Автоматическая тема</q-item-label>
          <q-item-label caption>Тема приложения будет установлена в зависимости от системной темы</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle color="blue" v-model="isAppAutoChangeTheme"/>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Офлайн режим</q-item-label>
          <q-item-label caption>Будут доступны только загруженные аудиозаписи</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle color="green" v-model="appMode"/>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple v-if="showStorageData">
        <q-item-section>
          <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="storageMemory"
              size="80px"
              :thickness="0.25"
              :color="storageMemory > 80 ? 'negative' : 'primary'"
              track-color="grey-3"
          >
            <q-icon :color="storageMemory > 80 ? 'negative' : 'primary'" size="50px" name="storage"/>
          </q-circular-progress>
        </q-item-section>

        <q-item-section avatar>
          <q-item-label>Память</q-item-label>
          <q-item-label caption>
            В данный момент занято {{ usageMemory.toFixed(2) }} МБ
          </q-item-label>
          <q-item-label caption>
            Всего доступно {{ quota.toFixed(1) }} ГБ
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-btn color="negative"
             class="q-ma-md"
             label="Очистить кэш аудиозаписей"
             @click="clearCache"
             icon="delete"
      />
      <q-btn color="warning"
             class="q-mx-md"
             label="Выйти из учетной записи"
             @click="appLogout"
             icon="logout"
      />
    </q-list>
  </q-page>
</template>

<script>
import useAuth from "components/services/useAuth";
import useAudioLoader from "components/services/useAudioLoader";
import usePlayer from "components/services/usePlayer";
import useSettings from "components/services/useSettings";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Settings",
  data() {
    return {
      notifications: false,
      quota: 0,
      usageMemory: 0
    }
  },
  computed: {
    ...mapGetters(["isAppOffline"]),
    storageMemory() {
      return (this.usageMemory / (this.quota * 1024)) * 100
    },
    appMode: {
      set(val) {
        this.setMode(val)
      },
      get() {
        return this.isAppOffline
      }
    },
    isAppAutoChangeTheme: {
      set(val) {
        this.setAutoChangeTheme(val)
      },
      get() {
        return this.isAutoChangeTheme
      }
    },
    showStorageData() {
      return 'storage' in navigator
    }
  },
  methods: {
    ...mapMutations(["setMode"]),
    async clearCache() {
      await this.clearPlayerData()
      await this.clearAllAudio()
      this.getMemoryStorageInfo()
    },
    getMemoryStorageInfo() {
      if ('storage' in navigator) {
        navigator.storage.estimate().then((data) => {
          this.quota = (data.quota / Math.pow(10, 9))
          this.usageMemory = (data.usage / Math.pow(10, 6))
        })
      }
    },
    appLogout() {
      this.clearPlayerData()
      this.logout()
    }
  },
  async created() {
    this.getMemoryStorageInfo()
  },
  setup() {
    const { clearAllAudio } = useAudioLoader()
    const { clearPlayerData } = usePlayer()
    const { isAutoChangeTheme, isDarkMode, setIsDark, setAutoChangeTheme } = useSettings()
    const { logout } = useAuth()


    return {
      isAutoChangeTheme,
      isDarkMode,
      setAutoChangeTheme,
      setIsDark,
      clearAllAudio,
      clearPlayerData,
      logout,
    }
  }
}
</script>

<style scoped>

</style>
