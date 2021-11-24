export default function () {
  return {
    currentPlayAudio: {},
    loadingProgress: 0,
    currentTime: 0,
    isPlaying: false,
    timer: null,
    player: new Audio(),
    currentPlaylist: {},
  }
}
