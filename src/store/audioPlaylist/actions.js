import {api} from "boot/axios";
import router from "src/router";

export async function loadPlaylistAudio({commit, state}) {
    commit("resetAudioOffset")
    commit("startLoading")
    let data = await api.get("/audio/playlist", {
        params: {
            playlist_id: state.id,
            owner_id: state.ownerId,
            access_key: state.accessKey,
            audio_offset: state.audioOffset,
            audio_count: state.audioCount,
        },
    })
    data = data.data
    commit("setAudios", data.audios)
    commit("finishLoading")
}

export async function loadMorePlaylistAudio({commit, state}) {
    commit("upAudioOffset")
    if (state.audioOffset === state.totalAudios) {
        return
    }
    if (state.isLoading) {
        return
    }
    let data = await api.get("/audio/playlist", {
        params: {
            playlist_id: state.id,
            owner_id: state.ownerId,
            access_key: state.accessKey,
            audio_offset: state.audioOffset,
            audio_count: state.audioCount,
        },
    })
    data = data.data.audios
    commit("pushAudios", data)
}


export async function openPlaylist({commit, dispatch}, data) {
    commit("setId", data.original?.playlist_id ?? data.id)
    commit("setOwnerId", data.original?.owner_id ?? data.owner_id)
    commit("setAccessKey", data.original?.access_key ?? data.access_key)
    commit("setTitle", data.title)
    commit("setPhoto", data.photo)
    commit("setArtist", data.main_artists)
    commit("setDescription", data.description)
    commit("setTotalAudios", data.count)
    await router.push("/playlist")
    dispatch("loadPlaylistAudio")
}
