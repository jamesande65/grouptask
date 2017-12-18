let playButton = document.querySelector('.audio__button');
let stopButton = document.querySelector('.player__button');
let progressLine = document.querySelector('.progress__filled');
let progressParent = document.querySelector('.progress');
let theAudio = document.querySelector('audio');
let songList = document.querySelectorAll('li');




function togglePlay(ev) {
    let method = theAudio.paused ? 'play': 'pause';
    theAudio[method]();
}

function progress() {
    const persent = (theAudio.currentTime / theAudio.duration ) * 100;
    progressLine.style.flexBasis = `${persent}%`;
}

function handleProgress(ev) {
    let current = ((ev.offsetX / progressParent.offsetWidth) * theAudio.duration);
    setCurrentTime(current);
}

function setCurrentTime(current) {
    if (!isNaN(theAudio.duration)) {
        theAudio.currentTime = current;
    }
    console.log(theAudio);
    console.log(theAudio.duration);
    console.log(theAudio.currentTime);
}

function togglePlayButton() {
    playButton.innerHTML = theAudio.paused ? '►' : '❚❚';
}

function stopAudio() {
    let method = 'pause';
    theAudio[method]();
    theAudio.load();
    progressLine.style.flexBasis = 0;
}

function playChosenSong(ev) {
    let cleanUrl = this.innerText;
    cleanUrl = cleanUrl.replace('C:\\fakepath\\', '');
    cleanUrl = '..\\audio\\' + cleanUrl;
    theAudio.src = cleanUrl;
    theAudio.play();
}

playButton.addEventListener('click', togglePlay);
stopButton.addEventListener('click', stopAudio);
stopButton.addEventListener('click', togglePlayButton);
theAudio.addEventListener('click', togglePlay);
theAudio.addEventListener('play', togglePlayButton);
theAudio.addEventListener('pause', togglePlayButton);

theAudio.addEventListener('timeupdate', progress);
progressParent.addEventListener('mousedown', handleProgress);

songList.forEach((li) => {li.addEventListener('click', playChosenSong)});