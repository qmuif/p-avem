import isAuth from "src/router/middlewares/isAuth";
import isGuest from "src/router/middlewares/isGuest";
const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      middleware: [
        isGuest
      ]
    },
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      middleware: [
        isGuest
      ]
    },
    component: () => import('pages/Register.vue'),
  },
  {
    path: '/',
    name: 'main',
    meta: {
      middleware: [
        isAuth
      ]
    },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: "home", component: () => import('pages/Home.vue') },
      { path: '/settings', name: "settings", component: () => import('pages/Settings.vue') },
      { path: '/playlist', name: "playlist", component: () => import('pages/Playlist.vue') },
    ]
  },
  {
    path: '/closed-profile',
    meta: {
      middleware: [
        isAuth
      ]
    },
    component: () => import('pages/Errors/NotAudioAccess.vue')
  },
  {
    path: '/access-denied',
    component: () => import('pages/Errors/ErrorAccessDenied.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Errors/Error404.vue')
  }
]

export default routes
