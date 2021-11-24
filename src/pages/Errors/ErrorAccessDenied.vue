<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="text-h4 q-mb-sm" style="opacity:.6">
        Ты отказался предоставить данные плееру
      </div>

      <div class="text-h5" style="opacity:.6">
        Мы не собираем твои личные данные
      </div>

      <div class="text-h6" style="opacity:.6">
        Все что нужно, это твой User ID, для поиска твоих аудиозаписей бро
      </div>

      <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/login"
          label="Попробовать снова"
          no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorAccessDenied'
})
</script>
