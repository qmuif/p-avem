<template>
  <div class="register flex flex-center justify-center column">
    <h2 class="text-center">Авторизуем тебя через ВК</h2>
    <h4 class="text-center">Пожалуйста подожди</h4>
    <q-circular-progress
        indeterminate
        size="50px"
        color="blue"
        class="q-ma-md"
    />
  </div>
</template>

<script>
import useAuth from "components/services/useAuth";

export default {
  name: "Register",
  async created() {
    if (this.query.code) {
     await this.registerUser(this.query.code)
     await this.$router.push("/")
    } else if (this.query.error) {
      switch (this.query.error) {
        case "access_denied":
          //@TODO очистить стор
          await this.$router.push("/access-denied")
      }
    }
  },
  computed: {
    query () {
      return this.$route.query
    }
  },
  setup() {
    const {access_token, registerUser} = useAuth()
    return {
      access_token,
      registerUser
    }
  }
}
</script>

<style scoped>

</style>
