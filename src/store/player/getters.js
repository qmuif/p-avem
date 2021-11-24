import {secondsToHms} from "src/plugins/converter";

export const getCurrentPlaylist = (state) => state.currentPlaylist
export const getCurrentPlayAudio = (state) => state.currentPlayAudio
export const getLoadingProgress = (state) => state.loadingProgress
export const getCurrentPlayAudioIdxInPlaylist = (state) => state.currentPlaylist
    .findIndex(
        el => el.id === state.currentPlayAudio.id
    )
export const getIsPlaying = (state) => state.isPlaying
export const getCurrentTime = (state) => state.currentTime
export const getCurrentTimeFormatted = (state) => secondsToHms(state.currentTime)
