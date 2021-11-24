export const setTrendData = (state, data) => (state.trendAudio = data)
export const setAudioData = (state, data) => (state.userAudio = data)
export const setUserPlaylists = (state, data) => (state.userPlaylists = data)
export const setUserPlaylistsCount = (state, data) => (state.userPlaylistsCount = data)
export const setIsLoading = (state, data) => (state.isLoading = data)
export const setSearchedUserAudio = (state, data) => (state.searchedUserAudio = data)
export const setUserAudioCount = (state, data) => (state.userAudioCount = data)
export const setSearchText = (state, data) => {
    state.searchText = data
    if (!data.length) {
        state.searchedUserAudio = {}
    }
}
export const pushAudioData = (state, data) => (state.userAudio.push(...data))
export const resetAudioOffset = (state) => (state.audioOffset = 0)
export const upAudioOffset = (state) => {
    if (state.audioOffset + 40 < state.userAudioCount) {
        state.audioOffset += 40
    } else {
        state.audioOffset += (state.userAudioCount - state.audioOffset)
    }
}
