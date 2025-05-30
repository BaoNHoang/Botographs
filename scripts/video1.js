function changeVideoOnLoad() {
    const videoSources = [
  'BahamaDocks.mp4',
  'BahamBench.mp4',
  'BlueOcean.mp4',
  'ShipFront.mp4'
    ];

    const videoElement = document.getElementById('myVideo');

    const lastPlayedIndex = sessionStorage.getItem('lastPlayedIndex');

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * videoSources.length);
    } while (randomIndex === lastPlayedIndex);

    const randomVideoSource = videoSources[randomIndex];
    videoElement.src = randomVideoSource;

    sessionStorage.setItem('lastPlayedIndex', randomIndex);
}