import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from './auth'
import player from './player'
import audioLoader from './aduioLoader'
import settings from './settings'
import audioPlaylist from "./audioPlaylist";

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    offlineMode: false,
    guideShowed: false,
  },
  mutations: {
    setOfflineMode: (state) => (state.offlineMode = true),
    setOnlineMode: (state) => (state.offlineMode = false),
    setMode: (state, data) => (state.offlineMode = data),
    setGuideShowed: (state, data) => (state.guideShowed = data),
  },
  modules: {
    settings: settings,
    auth: auth,
    player: player,
    audioPlaylist: audioPlaylist,
    audioLoader: audioLoader,
  },
  getters: {
    isAppOffline: (state) => state.offlineMode,
    isGuideShowed: (state) => state.guideShowed,
  }
  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
})


export default store
