var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '380',
        width: '360',
        videoId: 'BSYMpArcQCM',
        playerVars: {
            rel: 0,
            controls: 0,
            showinfo: 0
        }
    });
}