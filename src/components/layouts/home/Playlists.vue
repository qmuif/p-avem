<template>
  <q-virtual-scroll
      v-if="isMobile"
      :items="userPlaylists"
      virtual-scroll-horizontal
      class="q-pa-sm playlists"
  >
    <template v-slot="{ item, index }">
      <div
          :key="index"
          class="rounded-borders col-6 full-height"
      >
        <div class="flex column q-mx-sm">
          <q-img
              v-if="item.photo.photo_300"
              :src="item.photo.photo_300"
              width="150px"
              @click="openPlaylist(item)"
          />
          <q-icon v-else size="150px" name="library_music"/>
          <q-item class="no-padding" style="width: 150px">
            <q-item-section>
              <q-item-label lines="1" class="text-subtitle1">{{ item.title }}</q-item-label>
              <q-item-label lines="1" class="text-caption">{{ getArtists(item) }}</q-item-label>
              <q-item-label lines="1" caption v-if="item.year">{{ item.year }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </template>
  </q-virtual-scroll>
  <div class="col-12 col-md-8 q-mb-sm playlists" v-else>
    <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        arrows
        padding
        height="250px"
        v-if="carouselPlaylists.length"
        :class="$q.dark.isActive ? 'transparent' : 'bg-white'"
    >
      <q-carousel-slide :name="index+1" v-for="(playlists, index) in carouselPlaylists"
                        :key="index">
        <div class="row items-start no-wrap">
          <div class="playlist col-3 flex flex-center q-pa-sm"
               v-for="playlist in playlists" :key="playlist.id"
               @mouseenter="playlist.hover = true"
               @mouseleave="playlist.hover = false"
               @click="openPlaylist(playlist)"
          >
            <q-img
                v-if="playlist.photo.photo_300"
                :src="playlist.photo.photo_300"
                width="150px"
            >
              <transition
                  appear
                  enter-active-class="animated fadeIn"
                  mode="out-in"
              >
                <div
                    v-if="playlist.hover"
                    class="absolute-full text-subtitle2 flex flex-center"
                >
                  <q-icon name="play_arrow" size="64px"/>
                </div>
              </transition>
            </q-img>
            <q-icon v-else size="150px" name="library_music"/>
            <q-item class="no-padding" style="width: 150px">
              <q-item-section class="q-my-sm">
                <q-item-label lines="1" class="text-subtitle1">{{ playlist.title }}</q-item-label>
                <q-item-label lines="1" class="text-caption">{{ getArtists(playlist) }}</q-item-label>
                <q-item-label caption v-if="playlist.year">{{ playlist.year }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import useAudio from "components/services/useAudio";
import usePlaylist from "components/services/usePlaylist";
import {useQuasar} from 'quasar'
import {computed} from "vue";

export default {
  name: "Playlists",
  data() {
    return {
      slide: 1,
    }
  },
  computed: {
    carouselPlaylists() {
      let i;
      const newObj = []
      for (i = 0; i * 4 < this.userPlaylists.length; i += 1) {
        newObj.push(this.userPlaylists.slice(i * 4, i * 4 + 4))
      }
      return newObj
    }
  },
  methods: {
    getArtists(playlist) {
      return playlist.main_artists?.map(el => el.name).join(" ")
    }
  },
  setup() {
    const {userPlaylists} = useAudio()

    const { openPlaylist } = usePlaylist()

    const $q = useQuasar()

    return {
      userPlaylists,
      openPlaylist,
      isMobile: computed(() => $q.platform.has.touch)
    }
  }
}
</script>

<style scoped>

</style>
