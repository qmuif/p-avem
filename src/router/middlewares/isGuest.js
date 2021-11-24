export default function isGuest({ next, store }) {
    if (store.getters["auth/getAccessToken"]) {
        return next({name: "home"})
    }
    return next()
}