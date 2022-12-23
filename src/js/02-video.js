import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY = "videoplayer-current-time"

player.on('timeupdate', throttle(onPlay, 1000));
    
function onPlay(data) {
    const seconds = Number.parseInt(data.seconds)
    console.log(seconds)
    const current = localStorage.setItem(KEY, seconds)
    // player.setCurrentTime(current)
}
const result = localStorage.getItem(KEY)

// console.log(result)

player.setCurrentTime(result)
