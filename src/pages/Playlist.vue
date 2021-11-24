<template>
  <div class="row justify-center">

    <q-btn icon="arrow_back_ios"
           label="Назад"
           flat
           color="primary"
           @click="$router.back()"
           align="left"
           class="col-12 col-md-8 q-ma-sm"
           no-caps
    />


    <q-breadcrumbs class="col-12 col-md-8 q-pa-sm">
      <q-breadcrumbs-el icon="headphones" to="/" label="Аудио"/>
      <q-breadcrumbs-el icon="queue_music" label="Плейлисты" disable/>
      <q-breadcrumbs-el :label="info.title"/>
    </q-breadcrumbs>

    <div class="col-12 col-md-8 q-pa-sm">
      <q-card>
        <q-card-section horizontal>
          <q-img
              v-if="info.photo.photo_300"
              :src="info.photo.photo_300"
              width="150px"
              style="min-width: 150px"
          />
          <q-icon v-else size="150px" name="library_music"/>
          <q-card-section>
            <div class="text-h6">{{ info.title }}</div>
            <div class="text-h7">{{ getArtists }}</div>
            <div class="text-subtitle2">{{ info.description }}</div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-8" v-if="isLoading">
      <q-item v-for="n in 15" :key="n">
        <q-item-section avatar :class="n">
          <q-skeleton type="QAvatar"/>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text"/>
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" width="65%"/>
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <AudiosList :audios="audios" v-else/>
    <div v-intersection="onIntersection"></div>
  </div>
</template>

<script>
import usePlaylist from "components/services/usePlaylist";
import AudiosList from "components/layouts/AudiosList";

export default {
  name: "Playlist",
  components: {AudiosList},
  computed: {
    getArtists() {
      return this.info.artists?.map(el => el.name).join(" ")
    }
  },
  methods: {
    onIntersection(entry) {
      if (entry.isIntersecting) {
        this.loadMorePlaylistAudio()
      }
    }
  },
  setup() {
    const {info, audios, isLoading, loadMorePlaylistAudio} = usePlaylist()

    return {
      info,
      audios,
      isLoading,
      loadMorePlaylistAudio
    }
  }
}
</script>

<style scoped>

</style>
