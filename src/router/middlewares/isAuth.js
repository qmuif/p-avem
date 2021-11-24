export default function isAuth({ next, store }) {
    if (store.getters["auth/getAccessToken"]) {
        return next()
    }
    return next({
        name: 'login'
    })
}