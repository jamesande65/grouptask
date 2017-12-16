let toggle = document.querySelector('.toggle');
let progressLine = document.querySelector('.progress__filled');
let progressParent = document.querySelector('.progress');
let audio = document.querySelector('.audio__link');


function togglePlay(ev) {
    let method = audio.paused ? 'play': 'pause';
    audio[method]();
}

function progress() {
    const persent = (audio.currentTime / audio.duration ) * 100;
    progressLine.style.flexBasis = `${persent}%`;
}

function handleProgress(ev) {
    let current = (ev.offsetX / progressParent.offsetWidth) * audio.duration;
    audio.currentTime = current;
}

function togglePlayButton() {
    let icon = audio.paused ? '►' : '❚❚';
    toggle.innerHTML = icon;
}

toggle.addEventListener('click', togglePlay);
audio.addEventListener('play', togglePlayButton);
audio.addEventListener('pause', togglePlayButton);

audio.addEventListener('timeupdate', progress);
progressParent.addEventListener('mousedown', handleProgress);