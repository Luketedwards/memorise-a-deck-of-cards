
const suits = ['H', 'S', 'D', 'C'];
const value = ['A', '2', '3', '4', '5', '6','7', '8', '9', '10', 'J', 'Q', 'K'];
const Word = 'Card-';

let deck = [];
let shuffledDeck = [];



for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < value.length; x++) {
        let card = {Value: value[x], Suit: suits[i] };
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
        $('#guess').css('background-image', `url(/assets/images/Card-${shuffledDeck[parseInt(number)]}.png`);;
        number++;
        }); 
        
$('#next').click(function(){
    audioSuccess.play();
});
    
     
var audioSuccess = new Audio('/assets/audio/Card-flip-sound-effect.mp3');
var audioFail = new Audio('/assets/audio/denied.mp3');
$('#cards-container div').click(function(){
    if(this.classList.contains("card-is-flipped")){
        audioFail.play()
        alert('Already flipped!');
        }else{
    const selectedCard = (this.id);
    console.log(selectedCard);
    let i = 0;
  while (i < 51){
      if (selectedCard === 'Card-' + shuffledDeck[i]){
        console.log('it worked!');
        i++;
    } 
  
    $(this).addClass('card-is-flipped' + " " + 'card-face--back');
    audioSuccess.play();}}
    
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

let cardClick = document.getElementById('cards-container div').addEventListener('click', cardValue);

function cardValue(cardClick){
  $('#cards-container div').click(function(){
    console.log(this.value);
  });
}

function onClick(event){
  alert(this.innerHTML)
}
