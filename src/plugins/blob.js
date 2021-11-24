export default function convertAudio(audio) {
    let blob = new Blob([audio.album.thumb.photo_300], { type: 'image/jpg'})
    audio.album.thumb.photo_300 = audio.album.thumb.photo_300 ? URL.createObjectURL(blob) : "";
    blob = new Blob([audio.album.thumb.photo_68], { type: 'image/jpg'})
    audio.album.thumb.photo_68 = audio.album.thumb.photo_68 ? URL.createObjectURL(blob) : "";
    audio.data = null
    return audio
}
