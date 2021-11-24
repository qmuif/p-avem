<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="text-h4" style="opacity:.6">
        У тебя закрыт профиль и/или твои аудиозаписи на странице :c
      </div>

      <div class="text-h5 q-mt-lg" style="opacity:.6">
        Попробуй разобраться в чем дело
      </div>

      <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/"
          label="Попробовать снова"
          no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotAudioAccess'
})
</script>
