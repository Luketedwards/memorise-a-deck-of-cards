
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

const suits = ['H', 'S', 'D', 'C'];
const value = ['A', '2', '3', '4', '5', '6','7', '8', '9', '10', 'J', 'Q', 'K'];

let deck = [];
let shuffledDeck = [];


for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < value.length; x++) {
        let card = { Value: value[x], Suit: suits[i] };
        deck.push(card).concat;
    }
}


    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }


    console.log('The first five cards are:');
 
    // display 5 results
    for (let i = 0; i < 52; i++) {
        shuffledDeck.push(`${deck[i].Value}${deck[i].Suit}`).concat
    };    

    

      var number = 0; 
     $("#next").click(function(){
        $('#guess').css('background-image', `url(/assets/images/${shuffledDeck[parseInt(number)]}.png`);;
        number++;
        }); 
        
$('#next').click(function(){
    audioSuccess.play();
});
    
     
          
/*$('#guess').css('background-image', `url(/assets/images/${shuffledDeck[i]}.png`);*/

let modalBtn = document.getElementById("start-button")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}