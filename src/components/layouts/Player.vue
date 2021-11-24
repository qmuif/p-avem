<template>
  <q-page-sticky expand position="bottom" v-if="currentPlayAudio.title">
    <q-toolbar class="player flex-center justify-between justify-md-center shadow-up-10 no-padding"
               :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
    >
      <transition
          appear
          enter-active-class="animated slideInUp"
          mode="out-in"
      >
        <div class="col-12" v-if="isExpand"
             v-touch-swipe.mouse.down="handleSwipe"
        >
          <div class="col-12 flex justify-center justify-md-start text-blue-grey">
            <q-icon size="48px" name="expand_more" @click="isExpand = false"/>
          </div>
          <div class="row q-px-lg q-pb-lg">
            <div class="col-12 flex justify-center">
              <q-img
                  v-if="currentPlayAudio.album.thumb.photo_300"
                  :src="currentPlayAudio.album.thumb.photo_300"
                  spinner-color="white"
                  style="max-height: 250px; max-width: 250px"
                  class="shadow-5"
              />
              <q-icon name="library_music" size="250px" v-else/>
            </div>
            <q-item class="no-padding col-12">
              <q-item-section>
                <q-item-label class="text-subtitle1 text-center"
                              lines="1"
                >{{ currentPlayAudio.title }}
                </q-item-label>
                <q-item-label class="text-center" caption lines="1">{{ currentPlayAudio.artist }}</q-item-label>
              </q-item-section>
            </q-item>
            <div class="col-12 q-mb-lg">
              <q-slider
                  :model-value="seeker"
                  @change="val => { seeker = val }"
                  :min="0" :max="currentPlayAudio.duration"
                  label
                  :label-value="currentTimeFormatted"
              />
              <p class="col-2 no-margin text-center">{{ currentTimeFormatted }}</p>
            </div>
            <!--          <div class="col-3 flex justify-center">-->
            <!--            <q-icon size="32px" name="repeat"/>-->
            <!--          </div>-->
            <div class="col-4 flex justify-center">
              <q-icon size="32px" name="fast_rewind" @click="previousAudio"/>
            </div>
            <div class="col-4 flex justify-center" v-if="isPlaying">
              <q-icon size="32px" name="pause_circle" @click="pauseAudio"/>
            </div>
            <div class="col-4 flex justify-center" v-else>
              <q-icon size="32px" name="play_circle" @click="resumeAudio"/>
            </div>
            <div class="col-4 flex justify-center">
              <q-icon size="32px" name="fast_forward" @click="nextAudio"/>
            </div>
          </div>
        </div>
        <div class="col-12" v-else>
          <div class="row">
            <q-linear-progress
                :value="currentTimePercent"
                :buffer="loadingProgress / 100" color="primary"
                class="mobile-only"
            />
            <q-item class="col-8 col-md-4 expand_player"
                    clickable
                    @click.stop="isExpand = true"
            >
              <q-item-section avatar>
                <q-img
                    v-if="currentPlayAudio.album.thumb.photo_68"
                    :src="currentPlayAudio.album.thumb.photo_68"
                    style="height: 48px; width: 48px"
                />
                <q-icon v-else size="48px" name="library_music"/>
              </q-item-section>
              <q-item-section class="player__audio-info">
                <q-item-label class="text-subtitle1"
                              lines="1"
                >{{ currentPlayAudio.title }}
                </q-item-label>
                <q-item-label caption lines="1">{{ currentPlayAudio.artist }}</q-item-label>
              </q-item-section>
            </q-item>
            <div class="col-6 mobile-hide">
              <div class="row fit justify-center flex-center">
                <p class="col-2 no-margin text-center">{{ currentTimeFormatted }}</p>
                <q-slider
                    class="col-10"
                    :model-value="seeker"
                    @change="val => { seeker = val }"
                    :min="0" :max="currentPlayAudio.duration"
                    label
                    :label-value="currentTimeFormatted"
                />
              </div>
            </div>
            <div class="col-4 col-md-2">
              <div class="flex fit justify-center flex-center">
                <q-icon size="40px" name="pause" @click="pauseAudio" v-if="isPlaying"/>
                <q-icon size="40px" name="play_arrow" @click="resumeAudio" v-else/>
                <q-icon size="40px" name="fast_forward" @click="nextAudio"/>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </q-toolbar>
  </q-page-sticky>
</template>

<script>
import initPlayer from "components/services/initPlayer";
import usePlayer from "components/services/usePlayer";

export default {
  name: "Player",
  data() {
    return {
      isExpand: false,
    }
  },
  computed: {
    seeker: {
      get() {
        return this.currentTime
      },
      set(val) {
        this.changeCurrentTime(val)
      }
    },
    currentTimePercent() {
      return this.currentTime / this.currentPlayAudio.duration
    },
  },
  methods: {
    handleSwipe() {
      this.isExpand = false
    }
  },
  setup() {
    initPlayer()
    const {
      currentPlayAudio, currentTime,
      isPlaying, currentTimeFormatted, loadingProgress,
      changeCurrentTime, pauseAudio, resumeAudio,
      nextAudio, previousAudio
    } = usePlayer()
    return {
      currentPlayAudio,
      currentTime,
      isPlaying,
      currentTimeFormatted,
      loadingProgress,
      changeCurrentTime,
      pauseAudio,
      resumeAudio,
      nextAudio,
      previousAudio
    }
  }
}
</script>

<style scoped>

</style>
