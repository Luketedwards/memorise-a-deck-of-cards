
var audioSuccess = new Audio('/assets/audio/Card-flip-sound-effect.mp3');
var audioFail = new Audio('/assets/audio/denied.mp3');
$('#cards-container div').click(function(){
    if(this.classList.contains("card-is-flipped")){
        audioFail.play()
        alert('Already flipped!');
        }else{
    console.log('you clicked' + " " + this.id);
    $(this).addClass('card-is-flipped' + " " + 'card-face--back');
    audioSuccess.play();}
    
});