import {Notify, Platform} from 'quasar'
import * as Sentry from "@sentry/vue";
import {db} from 'boot/dexie'

export function initMediaSession({state, dispatch}) {
    if ('mediaSession' in navigator) {
        if (state.currentPlayAudio.title) {
            // eslint-disable-next-line no-undef
            navigator.mediaSession.metadata = new MediaMetadata({
                title: state.currentPlayAudio.title,
                artist: state.currentPlayAudio.artist,
                artwork: [
                    {src: state.currentPlayAudio.album.thumb.photo_300, sizes: '96x96', type: 'image/png'},
                    {src: state.currentPlayAudio.album.thumb.photo_300, sizes: '128x128', type: 'image/png'},
                    {src: state.currentPlayAudio.album.thumb.photo_300, sizes: '192x192', type: 'image/png'},
                    {src: state.currentPlayAudio.album.thumb.photo_300, sizes: '256x256', type: 'image/png'},
                    {src: state.currentPlayAudio.album.thumb.photo_300, sizes: '384x384', type: 'image/png'},
                    {src: state.currentPlayAudio.album.thumb.photo_300, sizes: '512x512', type: 'image/png'},
                ]
            });
        } else {
            // eslint-disable-next-line no-undef
            navigator.mediaSession.metadata = new MediaMetadata({})
        }

        navigator.mediaSession.setActionHandler('play', () => {
            dispatch("resumeAudio")
        })
        navigator.mediaSession.setActionHandler('pause', () => {
            dispatch("pauseAudio")
        })

        navigator.mediaSession.setActionHandler('previoustrack', () => {
            dispatch("handlePreviousAudio")
        });

        navigator.mediaSession.setActionHandler('nexttrack', () => {
            dispatch("handleNextAudio")
        });

        navigator.mediaSession.setActionHandler('seekto', (e) => {
            dispatch("changeCurrentTime", e.seekTime)
        });
    }
}

/**
 * Инициализация плеера в приложении
 * @returns {Promise<void>}
 */
export async function initPlayer({commit, state, dispatch}) {
    if (state.currentPlayAudio.id) {
        const audio = await db.audios.where("id").equals(
            state.currentPlayAudio.id
        ).first();
        if (audio) {
            let blob = new Blob([audio.album.thumb.photo_300], {type: 'image/jpg'})
            state.currentPlayAudio.album.thumb.photo_300 = audio.album.thumb.photo_300 ? URL.createObjectURL(blob) : "";
            blob = new Blob([audio.album.thumb.photo_68], {type: 'image/jpg'})
            state.currentPlayAudio.album.thumb.photo_68 = audio.album.thumb.photo_68 ? URL.createObjectURL(blob) : "";
            blob = new Blob([audio.data], {type: 'audio/mp3'})
            state.currentPlayAudio.url = URL.createObjectURL(blob);
        }
    }
    commit("initPlayer", state.currentPlayAudio.url)
    state.player.currentTime = state.currentTime
    commit("setIsPlaying", false)
    dispatch("initActionHandlers")
}

/**
 * Очистка плеера
 * @returns {Promise<void>}
 */
export async function clearPlayerData({commit, dispatch}) {
    dispatch("pauseAudio")
    commit("setCurrentPlaylist", {})
    commit("setCurrentPlayAudio", {})
}

/**
 * Начало проигрывания аудиозаписи
 * @param data - плейлист для очереди и аудиозапись для воспроизведения
 * @returns {Promise<void>}
 */
export function playAudio({commit, state, dispatch}, data) {
    if (data.audio.id === state.currentPlayAudio.id) {
        dispatch("resumeAudio")
    } else {
        commit("setCurrentPlaylist", data.playlist)
        dispatch("startPlaying", data.audio)
    }
}

/**
 * Поиставить воспроизведение на паузу
 * @returns {Promise<void>}
 */
export function pauseAudio({commit, state}) {
    clearInterval(state.timer)
    state.player.pause()
    commit("setIsPlaying", false)
}

/**
 * Продолжить воспроизведение трека
 * @returns {Promise<void>}
 */
export async function resumeAudio({commit, state, dispatch}) {
    try {
        await state.player.play()
        state.timer = setInterval(() => {
            commit("incrementTimer")
        }, 1000)
        state.player.onended = () => {
            dispatch("handleNextAudio");
        }
        commit("setIsPlaying", true)
    } catch (err) {
        Notify.create({
            position: 'top',
            type: 'negative',
            message: 'Некоторые аудиозаписи не работают',
            caption: 'Таков путь',
            timeout: 7000
        })
    }
}

/**
 * Обработчик окончания воспроизведения аудиозаписи
 * @returns {Promise<void>}
 */
export function handleNextAudio({state, dispatch, getters, rootGetters}) {
    clearInterval(state.timer)
    let currentAudioPosition = getters["getCurrentPlayAudioIdxInPlaylist"] + 1
    if (!rootGetters["audio/getIsSearchAudio"]) {
        if (state.currentPlaylist.length - currentAudioPosition <= 5) {
            dispatch("audio/loadMoreUserAudio", null, {root: true})
        }
    }
    if (currentAudioPosition === state.currentPlaylist.length) {
        dispatch("repeatPlaylist")
    } else {
        dispatch("nextAudio")
    }
}

export function handlePreviousAudio({state, commit, getters, dispatch}) {
    let currentAudioIdx = getters["getCurrentPlayAudioIdxInPlaylist"]
    if (state.currentTime / state.currentPlayAudio.duration * 100 > 50) {
        state.player.currentTime = 0
        commit("setCurrentTime", 0)
    } else if (currentAudioIdx !== 0) {
        let audio = state.currentPlaylist[currentAudioIdx - 1]
        dispatch("startPlayingAsync", audio)
    }
}

export function nextAudio({state, dispatch, getters}) {
    let currentAudioPosition = getters["getCurrentPlayAudioIdxInPlaylist"] + 1
    let audio = state.currentPlaylist[currentAudioPosition]
    dispatch("startPlayingAsync", audio);
}

export function repeatPlaylist({state, dispatch}) {
    let audio = state.currentPlaylist[0]
    dispatch("startPlayingAsync", audio)
}

/**
 * Начало проигрывания аудиозаписи
 * @param state
 * @param audio
 */
export function startPlaying({dispatch}, audio) {
    dispatch("startPlayingAsync", audio)
}

/**
 * Вынесено в отдельную функцию для корректной работы в safari
 * @param state
 * @param commit
 * @param dispatch
 * @param audio
 * @returns {Promise<void>}
 */
export async function startPlayingAsync({state, commit, dispatch}, audio) {
    try {
        commit("setCurrentTime", 0)
        clearInterval(state.timer)
        try {
            await state.player.pause()
        } catch (err) {
            console.log(err)
        }
        commit("setCurrentPlayAudio", audio)
        state.player = new Audio(audio.url)
        const cachedAudio = await db.audios.where("id").equals(
            audio.id
        ).first();
        if (cachedAudio) {
            const blob = new Blob([cachedAudio.data], {type: 'audio/mp3'})
            state.player.src = URL.createObjectURL(blob)
            state.player.load()
        }
        await state.player.play()
        commit("setIsPlaying", true)
        state.player.onended = () => {
            dispatch("handleNextAudio");
        }
        dispatch("initActionHandlers")
        state.timer = setInterval(() => {
            commit("incrementTimer")
        }, 1000)
    } catch (err) {
        if ((err.name === 'AbortError')
            || (err instanceof DOMException)) {
            return
        }
        Notify.create({
            position: 'top',
            type: 'negative',
            message: 'Некоторые аудиозаписи не работают',
            caption: 'Таков путь',
            timeout: 7000
        })
        Sentry.captureException(err);
        commit("setIsPlaying", false)
        commit("setCurrentTime", 0)
    }
}

export function changeCurrentTime({commit, state}, time) {
    commit("setCurrentTime", time)
    state.player.currentTime = time
}

export function initActionHandlers({state, dispatch}) {
    if (Platform.is.iphone) {
        state.player.oncanplay = () => {
            state.player.currentTime = state.currentTime
        }
        if (Platform.is.versionNumber < 15) {
            state.player.onseeking = () => {
                state.currentTime = state.player.currentTime
            }
            state.player.onpause = () => {
                dispatch("pauseAudio")
            }
            state.player.onplay = () => {
                dispatch("resumeAudio")
            }
        }
    }
}

export function handlePlaying() {
    //@TODO остановка таймера если аудиозапись остановилась из за непрогрузки
}
