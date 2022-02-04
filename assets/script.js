
const suits = ['H', 'S', 'D', 'C'];
const value = ['A', '2', '3', '4', '5', '6','7', '8', '9', '10', 'J', 'Q', 'K'];
const Word = 'Card-';


var gameScores = [];
var gameTimes = [];

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
        $('#guess').css('background-image', `url(assets/images/Card-${shuffledDeck[parseInt(number)]}.png`);;
        number++;
        }); 
        
$('#next').click(function(){
  if(cardProgress == 1){
    let btn = document.getElementById('next');
    btn.innerHTML = 'Next Card';
  }
  if(cardProgress == 52){
    let btn = document.getElementById('next');
    btn.innerHTML = 'Finish Memorising!';
  }
  if (cardProgress < 53){
    
    audioSuccess.play();}
  if(cardProgress == 53){
    let btn = document.getElementById('next');
      btn.innerHTML = 'Start Guessing!';
      $("#end-of-guess").css({ display : "inline" });
      audioCompletedMemorising.play();
      
  }
  if (cardProgress == 54){
    modal.style.display = "none";
    audioSuccess.play();
    $('#cards-container div').removeClass('card-face--back-start card-is-flipped-start');
    $('#score-progress').removeClass('hidden');
  }
});
    
   
var audioSuccess = new Audio('assets/audio/Card-flip-sound-effect.mp3');
var audioFail = new Audio('assets/audio/denied.mp3');
var audioGameOver = new Audio('assets/audio/You-lose-game-over.mp3');
var audioCompletedMemorising = new Audio('assets/audio/completed-cards.mp3');
var audioGameWon = new Audio('assets/audio/Finale-sound-effect.mp3');
var audioCardShuffle = new Audio('assets/audio/shuffling-cards.mp3');
var audioTryAgain = new Audio('assets/audio/try-again-new.mp3');
var audioCorrectCards = new Audio('assets/audio/Success-sound-effect.mp3')

$('#cards-container div').click(function(){
  if (cardProgress >= 54 ){
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

var number2 = 0; 
var score = 0;
var cardsLeft = 52;

var cardClicked = $('.cards').click(function(event){
  var selectedCard = (this.id);
  if (cardProgress >= 54 && cardsLeft > 1){
      if (selectedCard === 'Card-' + shuffledDeck[number2]){
        console.log("success!");
        number2 ++;
        score ++; 
        cardsLeft --;
        document.getElementById('score-count').innerText = `${score}/52`;
        return number2;
          
      } if(selectedCard != 'Card-' + shuffledDeck[number2] && $(selectedCard).not(".card-is-flipped .card-face--back")) {
        console.log('wrong card');
        audioGameOver.play();
        let remainingCards = shuffledDeck.slice(score);
        Swal.fire({
          icon: 'error',
          title: 'Game Over!',
          text: `Sorry that was the wrong card! You got ${score} out of 52 cards correct and your time to memorise the deck was ${seconds} seconds. Thanks for playing!`,
          showCancelButton: true,
          cancelButtonText: `View Correct Order`
          
        }).then((result) => {
         
          if (result.isDismissed) {
            audioCorrectCards.play();
            Swal.fire({
              icon: 'success',            
              text: `The remaining cards were: ${remainingCards}`
              
            })
            .then(() => { 
              audioTryAgain.play();
              setTimeout(function(){
              window.location.href = 'index.html'; 
              }, 1500);
            
          });
          } else{
            audioTryAgain.play();
            setTimeout(function(){
            window.location.href = 'index.html'; 
            }, 1500);
          }
      
        })
      gameScores.push(score);
      gameTimes.push(seconds);
      localStorage.setItem('previousScore3', JSON.stringify(gameScores));
      localStorage.setItem('previousTime3', JSON.stringify(gameTimes));
        score =0;
        seconds = 0;
        cardProgress = 0;
      } 
      if($(selectedCard).hasClass('card-is-flipped')){
        audioFail.play()
        alert('Already flipped!');
      }
    }
    if (cardsLeft == 1){
      score = 52;
      gameScores.push(score);
      gameTimes.push(seconds);
      localStorage.setItem('previousScore3', JSON.stringify(gameScores));
      localStorage.setItem('previousTime3', JSON.stringify(gameTimes));
      document.getElementById('score-count').innerText = `52/52`;
      audioGameWon.play();
      Swal.fire({
        icon: 'success',
        title: 'You Win!',
        text: `Congratulations! You successfully memorised all 52 cards in a time of ${seconds} seconds. Amazing work! Play again to try and beat your time.`,
        footer: '<a href="index.html">Play Again?</a>'

      })
      .then(() => {
        window.location.href = 'index.html';
      });
      } 
    })

document.getElementById('score-button').addEventListener('click', scoreList);

var previousScore3 = JSON.parse(localStorage.getItem('previousScore3'));
var previousTime3 = JSON.parse(localStorage.getItem('previousTime3'));

    function scoreList(){ 
    if(previousScore3 == null){
      Swal.fire ({
      title: '<strong>Previous Score</strong>',
      icon: 'info',
      html:
        "You have no previous score! Play a game to record a previous score and time.",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
    }  else{

    Swal.fire ({
      title: '<strong>Previous Score</strong>',
      icon: 'info',
      html:
        `Your previous score last round was 
        <ol> 
        <li>${previousScore3}/52 cards and your time was ${previousTime3}s</li>
        </ol>`,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })}}
    /* else {
      Swal.fire({
      title: '<strong>Previous Scores</strong>',
      icon: 'info',
      html:
        `You have no previous scores. Play a game to log a score.`, 
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
  }) */
    


/*$('#guess').css('background-image', `url(/images/${shuffledDeck[i]}.png`);*/
function correctCard(selectedCard){
  let j = 0;
      if (selectedCard === 'Card-' + shuffledDeck[j]){
        console.log('it worked!');
        j++;}
  }; 

  
let modalBtn = document.getElementById("start-button")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
let startClickCount = 0;
modalBtn.onclick = function(){
    modal.style.display = "block"
    startClickCount ++;
  if(startClickCount == 1){
    audioCardShuffle.play();
  setTimeout(function(){  
  $('#tableContainer').css('background-color', '#89b5af');
  $('#game-area').addClass('game-area'); 
  $('nav, #tableContainer, footer').addClass('wood');
  $('#suits-images-1, #suits-images-2 ').removeClass('hidden');
 },700 );}
 
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}



