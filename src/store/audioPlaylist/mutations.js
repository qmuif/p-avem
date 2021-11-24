export const setId = (state, id) => (state.id = id)
export const startLoading = (state) => (state.isLoading = true)
export const finishLoading = (state) => (state.isLoading = false)
export const setAccessKey = (state, accessKey) => (state.accessKey = accessKey)
export const setOwnerId = (state, ownerId) => (state.ownerId = ownerId)
export const setTitle = (state, title) => (state.title = title)
export const setArtist = (state, artists) => (state.artists = artists)
export const setDescription = (state, description) => (state.description = description)
export const setPhoto = (state, photos) => (state.photo = photos)
export const setAudios = (state, data) => (state.audios = data)
export const pushAudios = (state, data) => (state.audios.push(...data))
export const setTotalAudios = (state, totalAudios) => (state.totalAudios = totalAudios)
export const resetAudioOffset = (state) => (state.audioOffset = 0)
export const upAudioOffset = (state) => {
    if (state.audioOffset + 40 < state.totalAudios) {
        state.audioOffset += 40
    } else {
        state.audioOffset += (state.totalAudios - state.audioOffset)
    }
}
