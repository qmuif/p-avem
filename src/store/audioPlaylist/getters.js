export const getInfo = (state) => {
    return {
        id: state.id,
        title: state.title,
        photo: state.photo,
        artists: state.artists,
        description: state.description,
    }
}
export const getAudios = (state) => state.audios
export const getIsLoading = (state) => state.isLoading
