import {api} from 'boot/axios'
import router from "src/router";

export function initAudio({commit}) {
    commit("resetAudioOffset")
}

export async function loadTrendAudio({commit, state}) {
    api.get("/audio/trend", {
        params: {
            audio_offset: state.audioOffset,
            audio_count: state.audioCount,
        },
    })
        .then((data) => {
            data = data.data
            commit("setTrendData", data)
        })
}

export async function loadUserAudio({commit, state}) {
    commit("resetAudioOffset")
    try {
        commit("setIsLoading", true)
        let data = await api.get("/audio/my", {
            params: {
                audio_offset: state.audioOffset,
                audio_count: state.audioCount,
            },
        })
        data = data.data
        commit("setAudioData", data.audios.items)
        commit("setUserPlaylists", data.playlists.items)
        commit("setUserPlaylistsCount", data.playlists.count)
        commit("setUserAudioCount", data.audios.count)
        commit("setOnlineMode", {}, {root: true})
        commit("setIsLoading", false)
    } catch (e) {
        console.log(e.response)
        if (e.response?.status) {
            switch (e.response.status) {
                case 400:
                    await router.push("/closed-profile")
            }
        } else {
            commit("setOfflineMode", {}, {root: true})
        }
    }
}

export async function loadMoreUserAudio({commit, state}) {
    commit("upAudioOffset")
    if (state.audioOffset === state.userAudioCount) {
        return
    }
    if (state.isLoading) {
        return
    }
    commit("setIsLoading", true)
    api.get("/audio/my", {
        params: {
            audio_offset: state.audioOffset,
            audio_count: state.audioCount,
        },
    })
        .then((data) => {
            data = data.data.audios
            commit("pushAudioData", data.items)
        })
        .catch((err) => {
            console.log(err)
        }).finally(() => {
        commit("setIsLoading", false)
    })
}

export function searchUserAudio({state, commit}) {
    if (state.searchText) {
        state.isLoading = true
        api.get("/audio/my/search", {
            params: {
                query: state.searchText,
            },
        })
            .then((data) => {
                state.isLoading = false
                data = data.data.audios
                commit("setSearchedUserAudio", data.items)
            })
    }
}
