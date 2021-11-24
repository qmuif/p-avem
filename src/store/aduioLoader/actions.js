import {db} from 'boot/dexie'
import {api} from 'boot/axios'

import {Dialog, Notify} from 'quasar'

export async function saveAudio({commit}, data) {
    commit("addDownloadingAudiosId", data.id)
    try {
        let album = {
            thumb: {}
        }
        album.thumb.photo_68 = await downloadImage(data.album.thumb.photo_68)
        album.thumb.photo_300 = await downloadImage(data.album.thumb.photo_300)
        let response = await api.get(data.url, {
            onDownloadProgress: progressEvent => {
                commit("addDownloadingAudiosProgress", {
                    id: data.id,
                    progress: parseInt((progressEvent.loaded / progressEvent.total) * 100)
                })
            },
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'audio/mp3'
            }
        })
        commit("deleteDownloadingAudiosProgress", data.id)
        await db.audios.put({
            id: data.id,
            title: data.title,
            artist: data.artist,
            duration: data.duration,
            url: data.url,
            data: response.data,
            album: album
        })
        commit("deleteDownloadingAudiosId", data.id)
        commit("addCachedAudiosIds", data.id)
    } catch (err) {
        commit("deleteDownloadingAudiosId", data.id)
        Notify.create({
            position: 'top',
            type: 'negative',
            message: `Не удалось загрузить аудиозапись`,
            caption: `"${data.title} - ${data.artist}"`
        })
    }
}

export async function removeAudio({commit}, audio) {
    Dialog.create({
        title: 'Вы уверены?',
        message: 'После удаления вы не сможете прослушать аудиозапись в офлайн режиме',
        ok: {
            push: true,
            label: "Удалить файл",
            color: 'negative',
            flat: true
        },
        cancel: {
            push: true,
            label: "Отмена",
            flat: true
        },
        persistent: true
    }).onOk(async () => {
        await db.audios.where("id").equals(audio.id).delete()
        commit("deleteCachedAudiosIds", audio.id)
    })

}

export async function clearAllAudios({commit}) {
    await db.audios.clear()
    commit("clearCachedAudiosIds")
    Notify.create({
        position: 'top',
        type: 'positive',
        message: 'Кэш успешно очищен',
    })
}

async function downloadImage(image_url) {
    if (image_url) {
        const url = new URL(
            image_url
        );
        const proxy = process.env.VUE_APP_VK_PROXY_URL
        let image = await api.get(proxy + `?url=${url.href.split('?')[0]}`, {
            baseURL: '',
            params: {
                size: url.searchParams.get('size'),
                quality: url.searchParams.get('quality'),
                sign: url.searchParams.get('sign'),
                c_uniq_tag: url.searchParams.get('c_uniq_tag'),
                type: url.searchParams.get('type'),
            },
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'image/jpg'
            }
        })
        return image.data
    }
}
