
var audio = new Audio('/assets/audio/Card-flip-sound-effect.mp3');
$('#cards-container div').click(function(){
    console.log('you clicked' + " " + this.id);
    $(this).addClass('card' + '-is-flipped' + " " + 'card-face--back');
    audio.play();
});