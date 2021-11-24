<template>
  <q-input v-model="input" label="Поиск аудио" class="q-pa-md search_audio">
    <template v-slot:append>
      <q-icon name="close" @click="input = ''" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script>
import useAudio from "components/services/useAudio";

export default {
  name: "Search",
  computed: {
    input: {
      get() {
        return this.searchText
      },
      set(val) {
        this.setSearchText(val)
        if (val.length) {
          const p = val;
          setTimeout(() => {
            if (p === this.searchText) {
              this.searchUserAudio()
            }
          }, 1000)
        }
      }
    }
  },
  setup() {
    const {setSearchText, searchUserAudio, searchText} = useAudio()

    return {
      setSearchText, searchText, searchUserAudio
    }
  }
}
</script>

<style scoped>

</style>
