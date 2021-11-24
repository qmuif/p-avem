<template>
  <q-page class="flex-center content-start window-width home">
    <div class="row justify-center">

      <Search class="col-12 col-md-8"/>

      <Playlists class="col-12 col-md-8"/>

      <AudiosList :audios="filteredUserAudio" />

      <div class="col-12 text-center q-my-md" v-if="isLoading">
        <q-spinner color="primary" name="dots" size="40px"/>
      </div>

      <div v-intersection="onIntersection"></div>

      <WelcomeModal/>

    </div>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex';

import useAudio from "components/services/useAudio";
import Search from "components/layouts/home/Search";
import Playlists from "components/layouts/home/Playlists";
import WelcomeModal from "components/layouts/home/WelcomeModal";
import AudiosList from "components/layouts/AudiosList";

export default {
  name: 'Home',
  components: {WelcomeModal, AudiosList, Playlists, Search},
  async created() {
    this.loadUserAudio()
  },
  computed: {
    ...mapGetters(["isAppOffline"]),
  },
  methods: {
    onIntersection(entry) {
      if (entry.isIntersecting && !this.isAppOffline) {
        this.loadMoreUserAudio()
      }
    }
  },
  setup() {
    const {filteredUserAudio, isLoading, searchText, loadUserAudio, loadMoreUserAudio} = useAudio()

    return {
      filteredUserAudio,
      isLoading,
      searchText,
      loadUserAudio,
      loadMoreUserAudio,
    }
  }
}
</script>
