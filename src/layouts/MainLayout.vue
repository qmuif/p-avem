<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
<!--        <q-btn-->
<!--          flat-->
<!--          dense-->
<!--          round-->
<!--          icon="menu"-->
<!--          aria-label="Menu"-->
<!--          @click="toggleLeftDrawer"-->
<!--        />-->

        <q-toolbar-title>
          <q-icon name="play_circle" /> Avem
        </q-toolbar-title>

        <q-btn
               v-if="$route.name !== 'settings'"
               flat
               round
               dense
               icon="settings"
               :to="{name: 'settings'}"
        />
        <q-btn
            v-else
            flat
            round
            dense
            icon="home"
            :to="{name: 'home'}"
        />
      </q-toolbar>
    </q-header>

<!--    <q-drawer-->
<!--      v-model="leftDrawerOpen"-->
<!--      show-if-above-->
<!--      bordered-->
<!--    >-->
<!--      <q-list>-->
<!--        <q-item-label-->
<!--          header-->
<!--        >-->
<!--          Essential Links-->
<!--        </q-item-label>-->

<!--        <EssentialLink-->
<!--          v-for="link in essentialLinks"-->
<!--          :key="link.title"-->
<!--          v-bind="link"-->
<!--        />-->
<!--      </q-list>-->
<!--    </q-drawer>-->

    <q-page-container style="padding-bottom: 75px">
      <router-view />
    </q-page-container>

    <player/>
  </q-layout>
</template>

<script>
//import EssentialLink from 'components/EssentialLink.vue'

import Player from "components/layouts/Player";

import { ref } from 'vue'

export default {
  name: 'MainLayout',
  components: {Player},
  // components: {
  //   EssentialLink
  // },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
