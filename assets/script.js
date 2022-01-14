
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



    for (let i = 0; i < 52; i++) {
        shuffledDeck.push(`${deck[i].Value}${deck[i].Suit}`).concat
    };    
      let numberOfClicks = 0;
      let cardProgress = 0;
      var myInterval; 
      
      function interval(){
        myInterval = setInterval(incrementSeconds, 1000);}

        $('#next').click(function(){
          numberOfClicks ++;
          cardProgress ++;
          if (numberOfClicks < 53){
            cardsProgression();
          }
          console.log(numberOfClicks);
          if (numberOfClicks == 1){
              interval();
            }
          if (numberOfClicks == 53){
              clearInterval(myInterval);
          }  
          
});


  

function cardsProgression(){
  cardProgress = parseInt(cardProgress);
  document.getElementById('card-progress').innerText = `${cardProgress}/52`;
}
    
      var number = 0; 
     $("#next").click(function(){
        $('#guess').css('background-image', `url(/assets/images/Card-${shuffledDeck[parseInt(number)]}.png`);;
        number++;
        }); 
        
$('#next').click(function(){
  if (cardProgress < 53){
    audioSuccess.play();}
});
    
     
var audioSuccess = new Audio('/assets/audio/Card-flip-sound-effect.mp3');
var audioFail = new Audio('/assets/audio/denied.mp3');
var audioGameOver = new Audio('/assets/audio/game-over-sound.mp3');
var cardChoice = 'Card-' + shuffledDeck[number];

$('#cards-container div').click(function(){
  if (cardProgress > 52 && selectedCard === cardChoice){
    if(this.classList.contains("card-is-flipped")){
        audioFail.play()
        alert('Already flipped!');
        }else {
    const selectedCard = (this.id);
    console.log(selectedCard);
    $(this).addClass('card-is-flipped' + " " + 'card-face--back');
    audioSuccess.play();
  }
} else{audioFail.play();}
});

let number2 = 0;


var cardClicked = $('.cards').click(function(event){
  var selectedCard = (this.id);
  if (cardProgress > 52){
    if (selectedCard === cardChoice){
      console.log("success!");
      number2 ++;
      return number2;
    } else {
      console.log('wrong card');
      audioGameOver.play();
      alert('Sorry you lose. Try again!');
    } 
  }else{
    alert('You must start the game and view all shuffled cards before playing!');
  }
})

  
/*$('#guess').css('background-image', `url(/assets/images/${shuffledDeck[i]}.png`);*/
function correctCard(selectedCard){
  let j = 0;
      if (selectedCard === 'Card-' + shuffledDeck[j]){
        console.log('it worked!');
        j++;}
  }; 


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



