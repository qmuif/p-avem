export const addCachedAudiosIds = (state, data) => (state.cachedAudiosIds.push(data))
export const addDownloadingAudiosId = (state, id) => (state.downloadingAudiosIds.push(id))
export const addDownloadingAudiosProgress = (state, data) => {
    state.downloadingAudiosProgress[data.id] = data.progress;
}
export const deleteCachedAudiosIds = (state, id) => {
    const index = state.cachedAudiosIds.findIndex(el => el === id);
    if (index > -1) {
        state.cachedAudiosIds.splice(index, 1);
    }
}
export const deleteDownloadingAudiosProgress = (state, id) => {
    const index = state.downloadingAudiosIds.findIndex(el => el.id === id);
    if (index > -1) {
        state.downloadingAudiosProgress.splice(index, 1);
    }
}
export const deleteDownloadingAudiosId = (state, id) => {
    const index = state.downloadingAudiosIds.indexOf(id);
    if (index > -1) {
        state.downloadingAudiosIds.splice(index, 1);
    }
}
export const clearDownloadingAudiosId = (state) => (state.downloadingAudiosIds = [])
export const clearCachedAudiosIds = (state) => (state.cachedAudiosIds = [])
export const clearDownloadingProcessAudiosId = (state) => (state.downloadingAudiosProgress = {})
