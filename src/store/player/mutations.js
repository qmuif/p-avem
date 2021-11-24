export const initPlayer = (state, url) => {
    state.player = new Audio(url)
}
export const setCurrentPlaylist = (state, data) => (state.currentPlaylist = data)
export const setCurrentPlayAudio = (state, data) => (state.currentPlayAudio = data)
export const setCurrentTime = (state, data) => (state.currentTime = data)
// export const syncCacheData = async (state) => {
//     const data = await db.audios.toArray()
//     state.currentPlaylist = state.currentPlaylist.map((audio) => {
//         let cachedAudio = data.find(el => el.id === audio.id)
//         if (cachedAudio) {
//             return convertAudio(cachedAudio)
//         }
//         return audio
//     })
// }
export const setIsPlaying = (state, data) => (state.isPlaying = data)
export const incrementTimer = (state) =>  {
    if(state.currentTime + 1 <= state.player.currentTime) {
        state.currentTime++
    }
    let player = state.player
    let duration = state.player.duration;
    for (let i = 0; i < player.buffered.length; i++) {
        if (player.buffered.start(player.buffered.length - 1 - i) < player.currentTime) {
            state.loadingProgress = (player.buffered.end(player.buffered.length - 1 - i) / duration) * 100
            break
        }
    }
}
