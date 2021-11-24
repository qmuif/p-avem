<template>
  <q-item
      v-for="audio in audios"
      :key="audio.id"
      clickable
      :active="isCurrent(audio)"
      :active-class="$q.dark.isActive ? 'bg-blue-grey-7 text-white' : 'bg-blue-1'"
      class="col-12 col-md-8 audios"
  >
    <div
        class="flex fit"
        @click="actionAudio(audio)"
    >
      <q-item-section avatar>
        <q-img
            v-if="audio.album.thumb.photo_68"
            :src="audio.album.thumb.photo_68"
            style="height: 48px; width: 48px"
        />
        <q-icon v-else size="48px" name="library_music"/>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle1">{{ audio.title }}</q-item-label>
        <q-item-label caption>{{ audio.artist }}</q-item-label>
      </q-item-section>
    </div>
    <q-item-section side class="flex-center row no-wrap no-padding">
      <div class="row no-wrap justify-center flex-center">
        <q-icon name="check_circle"
                v-if="isAudioCached(audio)"
                size="20px"
                @click="removeAudio(audio)"
        />
        <q-circular-progress
            show-value
            font-size="8px"
            v-else-if="isAudioLoading(audio)"
            :value="getLoadingProgress(audio)"
            size="24px"
            color="primary"
        >
          {{ getLoadingProgress(audio) }}%
        </q-circular-progress>
        <q-icon name="system_update" v-else @click="saveAudio(audio)" size="20px"
        class="download_audio"/>
<!--        <q-icon name="more_vert" size="20px" class="q-ml-sm"/>-->
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import usePlayer from "components/services/usePlayer";
import useAudioLoader from "components/services/useAudioLoader";

export default {
  name: "AudiosList",
  props: {
    audios: {
      required: true,
      type: Object
    }
  },
  methods: {
    isCurrent(audio) {
      return audio.id === this.currentPlayAudio.id
    },
    actionAudio(audio) {
      if (this.isCurrent(audio) && this.isPlaying) {
        this.pauseAudio()
      } else {
        this.playAudio(this.audios, audio)
      }
    },
  },
  setup() {
    const {currentPlayAudio, isPlaying, playAudio, pauseAudio} = usePlayer()
    const {saveAudio, removeAudio, isAudioCached, isAudioLoading, getLoadingProgress} = useAudioLoader()

    return {
      currentPlayAudio,
      isPlaying,
      isAudioCached,
      isAudioLoading,
      playAudio,
      pauseAudio,
      saveAudio,
      removeAudio,
      getLoadingProgress
    }
  }
}
</script>

<style scoped>

</style>
