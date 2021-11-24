export const getTrendAudio = (state) => state.trendAudio
export const getUserAudio = (state) => state.userAudio
export const getUserPlaylists = (state) => state.userPlaylists
export const getIsLoading = (state) => state.isLoading
export const getFilteredUserAudio = (state, getters) => {
    if (state.searchText.length) {
        return getters["audioForFilter"].filter((el) => {
            let searchText = state.searchText.toLowerCase()
            let title = el.title.toLowerCase().includes(searchText)
            let artist = el.artist.toLowerCase().includes(searchText)
            return title || artist
        })
    }
    return state.userAudio
}
export const getSearchText = (state) => state.searchText
export const getIsSearchAudio = (state) => state.searchText.length
export const getSearchedUserAudio = (state) => state.searchedUserAudio
export const audioForFilter = (state) => {
    if (state.searchText) {
        if (state.searchedUserAudio?.length) {
            return state.searchedUserAudio
        } else {
            return state.userAudio
        }
    }
    return state.userAudio
}
