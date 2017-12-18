let buttonAdd = document.querySelector('.add');
let fileInput = document.querySelector('#load-file');
let listSongs = document.querySelector('.list_songs');

synchrPlayList();

buttonAdd.addEventListener('click', chooseSong);
fileInput.addEventListener('change', addSong);


function chooseSong() {
    fileInput.click();
}

function addSong() {
    let song = fileInput.value;
    fileInput.value = '';
    addToLocalStorage(song);
    synchrPlayList();
}

function addToLocalStorage(song) {
    let playList = localStorage.getItem('playList');
    if(playList){
        playList = JSON.parse(playList);
        playList.push(song);
    }else{
        playList = [];
        playList.push(song)
    }
    playList = JSON.stringify(playList);
    localStorage.setItem('playList', playList);
}

function synchrPlayList(song) {
    let playList = localStorage.getItem('playList');
    listSongs.innerHTML = '';
    playList = JSON.parse(playList);
    if(playList){
        playList.forEach((song)=>{
            listSongs.insertAdjacentHTML('beforeEnd', '<li>' + song + '</li>');
        });
    }
}

