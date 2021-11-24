import {register} from 'register-service-worker'
import {Notify} from 'quasar'
import store from "src/store";

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
    // The registrationOptions object will be passed as the second argument
    // to ServiceWorkerContainer.register()
    // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

    // registrationOptions: { scope: './' },

    ready(/* registration */) {
        console.log('Service worker is active.')
    },

    registered(/* registration */) {
        //online
        store.commit("setOnlineMode")
        console.log('Service worker has been registered.')
    },

    cached(/* registration */) {
        console.log('Content has been cached for offline use.')
    },

    updatefound(/* registration */) {
        console.log('New content is downloading.')
    },

    updated(/* registration */) {
        Notify.create({
            position: 'top',
            type: 'positive',
            progress: true,
            message: 'Загружена новая версия приложения',
            actions: [
                {
                    label: 'Установить', noCaps: true, color: 'white', handler: () => {
                        window.location.reload(true)
                    }
                },
                {
                    label: 'Уйди', noCaps: true, color: 'yellow', handler: () => {
                    }
                }
            ]
        })
    },

    offline() {
        //ofline
        store.commit("setOfflineMode")
        console.log('No internet connection found. App is running in offline mode.')
    },

    error(err) {
        console.error('Error during service worker registration:', err)
        Notify.create({
            position: 'top',
            type: 'negative',
            message: 'Возникла ошибка при регистрации приложения',
            caption: 'Офлайн режим станет недоступен',
        })
    }
})
