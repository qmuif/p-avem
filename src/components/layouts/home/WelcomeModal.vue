<template>
  <q-dialog
      v-model="dialog"
      persistent
      :maximized="$q.platform.is.mobile"
      transition-show="slide-up"
      transition-hide="slide-down"
  >
    <q-card class="q-pa-sm shadow-2 justify-center column no-wrap">
      <q-card-section class="row full-width q-pb-none">
        <div class="text-h6">Добро пожаловать!</div>
        <q-space />
      </q-card-section>

      <q-card-section class="text-start q-pt-none">

        <span class="text-positive">Avem</span> - минималистичный плеер для музыки ВКонтакте

      </q-card-section>

      <q-carousel
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          v-model="slide"
          navigation
          padding
          :arrows="!$q.platform.has.touch"
          control-color="positive"
          class="shadow-1 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <q-icon name="cloud_off" size="56px"/>
          <div class="q-mt-md text-center">
            <p class="text-h5">Автономность</p>
            <p class="text-caption">Вы сможете открыть эту страницу без доступа к интернету</p>
            <p class="text-caption">Для прослушивания вам будут доступны скачанные аудиозаписи</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <q-icon name="system_update" size="56px"/>
          <div class="q-mt-md text-center">
            <p class="text-h5">Загрузка аудиозаписей</p>
            <p class="text-caption">Аудиозапись загружается на ваше устройство, вы сможете прослушать ее только в этом плеере</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <q-icon name="keyboard_double_arrow_right" size="56px"/>
          <div class="q-mt-md text-center">
            <p class="text-h5">Элементы управления</p>
            <p class="text-caption">В панели управления вы сможете взаимодействовать с плеером</p>
            <q-img src="~assets/guide/controls.jpeg" height="150px" class="shadow-3" style="border-radius: 20px"/>
          </div>
        </q-carousel-slide>
      </q-carousel>

      <div class="flex column flex-center">
        <q-banner dense class="bg-grey-3 q-mb-sm" v-if="slide < 3">
          <template v-slot:avatar>
            <q-icon name="info" color="primary" />
          </template>
          Просмотрите все слайды
        </q-banner>
        <q-btn label="Приступить к использованию"
               no-caps
               color="positive"
               :disable="slide !== 3"
               @click="closeWelcomeModal"
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { useStore } from "vuex";
import {computed} from "vue";

export default {
  name: "WelcomeModal",
  data() {
    return {
      slide: 1,
    }
  },
  computed: {
    dialog: {
      set(val) {
        this.setIsGuideShowed(val)
      },
      get() {
        return !this.isGuideShowed
      }
    }
  },
  methods: {
    closeWelcomeModal() {
      this.setIsGuideShowed(true)
    }
  },
  setup() {
    const store = useStore()

    return {
      isGuideShowed: computed(() => store.getters["isGuideShowed"]),
      setIsGuideShowed: (data) => store.commit("setGuideShowed", data),
    }
  }
}
</script>

<style scoped>

</style>
