<template>
  <div class="login flex flex-center justify-center column">
    <h2 class="text-center">Лучший плеер для суеты</h2>
    <h4>Войти через</h4>
    <img src="~assets/vk/logo.svg" alt="Логотип вконтакте" @click="openVkAuth">
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      client_id: process.env.VUE_APP_VK_CLIENT_ID,
      redirect_uri: process.env.VUE_APP_VK_REDIRECT_URI,
    }
  },
  computed: {
    getVkUrl() {
      return `https://oauth.vk.com/authorize?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&scope=email&response_type=code&revoke=1`
    }
  },
  methods: {
    openVkAuth() {
      window.location = this.getVkUrl
    }
  }
}
</script>
