import {db} from 'boot/dexie'
import convertAudio from "src/plugins/blob";

export function initAudio() {

}

export async function loadUserAudio({commit}) {
    const audios = await db.audios.toArray();
    audios.forEach((audio) => {
        return convertAudio(audio)
    })
    commit("setAudioData", audios)
}
