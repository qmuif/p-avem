<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import initAudio from "components/services/initAudio";
import initAudioLoader from "components/services/initAudioLoader";
import initMediaSession from "components/services/initMediaSession";
import initSettings from "components/services/initSettings";

export default defineComponent({
  name: 'App',
  setup() {
    initSettings()
    initAudio()
    initAudioLoader()
    initMediaSession()
  }
})
</script>
