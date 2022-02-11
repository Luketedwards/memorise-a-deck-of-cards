/*All audio files being initially defined */
var audioSuccess = new Audio('assets/audio/Card-flip-sound-effect.mp3');
var audioFail = new Audio('assets/audio/denied.mp3');
var audioGameOver = new Audio('assets/audio/You-lose-game-over.mp3');
var audioCompletedMemorising = new Audio('assets/audio/completed-cards.mp3');
var audioGameWon = new Audio('assets/audio/Finale-sound-effect.mp3');
var audioCardShuffle = new Audio('assets/audio/shuffling-cards.mp3');
var audioTryAgain = new Audio('assets/audio/try-again-new.mp3');
var audioCorrectCards = new Audio('assets/audio/Success-sound-effect.mp3')
var audioPreviousScore = new Audio('assets/audio/previous-score-sound.mp3')

/* Array storing suits and values of cards to be assembled below upon page load.
"Word" is used to insert shuffled deck images when presenting the order to the player. E.G. First card is "AC" in the shuffled deck, and the corresponding image for this card is name assets/images/Card-AC.
"gamescores" and "gametimes" are used to store results of the game before passing them to local storage*/
const suits = ['H', 'S', 'D', 'C'];
const value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const Word = 'Card-';


var gameScores = [];
var gameTimes = [];
/*Deck is used to store the compiled order of the deck, shuffledDeck is used to store the new shuffled order */

let deck = [];
let shuffledDeck = [];


/*Code to assemble ordered deck and then shuffle the deck. This code was inspired by this Youtube tutorial: https://www.youtube.com/watch?v=seApG3uwjAs */
for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < value.length; x++) {
    let card = {
      Value: value[x],
      Suit: suits[i]
    };
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

/*Code adds mute button which when pressed prevents any audio from playing.
The mute decision is stored in local storage and is persistent across games. */
var muted ;
var muteDecision = JSON.parse(localStorage.getItem('muteDecision'));

$('#mute-button').click(function(){
  let muteBtn = document.getElementById('mute-button');
  let muteBtnImage = document.getElementById('mute-button');
  if (muted == false){
    muted = true;
    muteBtnImage.src = "assets/images/un-mute-audio.png"
    localStorage.setItem('muteDecision', JSON.stringify(muted));
    muteDecision = JSON.parse(localStorage.getItem('muteDecision'));
  console.log(muteDecision);
    return {muted, muteDecision}
    
  }
  if (muted == true){
    muted = false;
    muteBtnImage.src = "assets/images/mute-audio.png"
    localStorage.setItem('muteDecision', JSON.stringify(muted));
    muteDecision = JSON.parse(localStorage.getItem('muteDecision'));
  console.log(muteDecision);
    return {muted, muteDecision}
  }
  
  })

window.onload = function(){
  let startBtn = document.getElementById('start-button');
  startBtn.src = "assets/images/poker-chip-start-game.png";
  let previousScoreBtn = document.getElementById('score-button');
  previousScoreBtn.src = "assets/images/previous-score-chip.png";
  if (muteDecision == null){
    let muteBtnImage = document.getElementById('mute-button');
    muted = false;
    muteBtnImage.src = "assets/images/mute-audio.png"
    return muted
  } 
  
  if (muteDecision == false){
    let muteBtnImage = document.getElementById('mute-button');
    muted = false;
    muteBtnImage.src = "assets/images/mute-audio.png"
    return muted
  } 
  
  if (muteDecision == true){
    let muteBtnImage = document.getElementById('mute-button');
    muted = true;
    muteBtnImage.src = "assets/images/un-mute-audio.png"
    return muted
  } 
  }


/*Initial decleration of a few important parameters. 
numberOfClicks is used to ensure the game doesn't start until all the shuffled cards have been presented to the player.
cardProgress is used to track how many shuffled cards remain.*/ 
let numberOfClicks = 0;
let cardProgress = 0;

/*Code for timer function in shuffled cards modal.
Once the numberOfClicks exceeds 1, the timer function is called. Once the numberOfClicks == 53, the timer is stopped.*/
var myInterval;

function interval() {
  myInterval = setInterval(incrementSeconds, 1000);
}

$('#next').click(function () {
  numberOfClicks++;
  cardProgress++;
  if (numberOfClicks < 53) {
    cardsProgression();
  }
  console.log(numberOfClicks);
  if (numberOfClicks == 1) {
    interval();
  }
  if (numberOfClicks == 53) {
    clearInterval(myInterval);
  }

});

/*Function to update card progress counter */
function cardsProgression() {
  cardProgress = parseInt(cardProgress);
  document.getElementById('card-progress').innerText = `${cardProgress}/52`;
}

/*Code displays next image of card in the shuffled deck each time the button is clicked */
var number = 0;
$("#next").click(function () {
  $('#guess').css('background-image', `url(assets/images/Card-${shuffledDeck[parseInt(number)]}.png`);;
  number++;
});

/*Collection of if statements that dynamicaly change the text of the button depending on the current state of the game.
The code also displays the end of guess message once all cards have been viewed.
Finally the code causes all the cards to flip face-up once the guessing begins */

$('#next').click(function () {
  if (cardProgress == 1) {
    let btn = document.getElementById('next');
    btn.innerHTML = 'Next Card';
  }
  if (cardProgress == 52) {
    let btn = document.getElementById('next');
    btn.innerHTML = 'Finish Memorising!';
  }
  if (cardProgress < 53) {
    if(muted == false){
    audioSuccess.play();}
  }
  if (cardProgress == 53) {
    let btn = document.getElementById('next');
    btn.innerHTML = 'Start Guessing!';
    $("#end-of-guess").css({
      display: "inline"
    });
    if (muted == false){
    audioCompletedMemorising.play();}

  }
  if (cardProgress == 54) {
    modal.style.display = "none";
    if (muted == false){
    audioSuccess.play();}
    $('#cards-container div').removeClass('card-face--back-start card-is-flipped-start');
    $('#score-progress').removeClass('hidden');
  }
});

/*Code that determines whether a card is to be flipped or not. If the card is currently unflipped it will flip, if it is already flipped
it will play an error sound and display a message */
$('#cards-container div').click(function () {
  if (cardProgress >= 54) {
    if (this.classList.contains("card-is-flipped")) {
      if (muted == false){
      audioFail.play()}
      alert('Already flipped!');
    } else {
      const selectedCard = (this.id);
      console.log(selectedCard);
      $(this).addClass('card-is-flipped' + " " + 'card-face--back');
      if (muted == false){
      audioSuccess.play();}
    }
  } else {
    if (muted == false){
    audioFail.play();}
  }
});

var number2 = 0;
var score = 0;
var cardsLeft = 52;

/*Code that determines if the card choice is correct or incorrect. If correct it updates the players score and the score count display.
if card is not correct the game ends and displays a loser alert informing player of their score and time. It also presents the option
to view the correct remaining sequence of cards.
The players score and time are then saved to local storage to view in the 'Previous Score' section.

If the player correctly recalls all cards a game won message is displayed and their score and time is logged to local storage.
*/
var cardClicked = $('.cards').click(function (event) {
  var selectedCard = (this.id);
  if (cardProgress >= 54 && cardsLeft > 1) {
    if (selectedCard === 'Card-' + shuffledDeck[number2]) {
      console.log("success!");
      number2++;
      score++;
      cardsLeft--;
      document.getElementById('score-count').innerText = `${score}/52`;
      return number2;

    }
    if (selectedCard != 'Card-' + shuffledDeck[number2] && $(selectedCard).not(".card-is-flipped .card-face--back")) {
      console.log('wrong card');
      if (muted == false){
      audioGameOver.play();}
      let remainingCards = shuffledDeck.slice(score);
      Swal.fire({
        icon: 'error',
        title: 'Game Over!',
        text: `Sorry that was the wrong card! You got ${score} out of 52 cards correct and your time to memorise the deck was ${seconds} seconds. Thanks for playing!`,
        showCancelButton: true,
        cancelButtonText: `View Correct Order`

      }).then((result) => {

        if (result.isDismissed) {
          if (muted == false){
          audioCorrectCards.play();}
          Swal.fire({
              icon: 'success',
              text: `The remaining cards were: ${remainingCards}`

            })
            .then(() => {
              if (muted == false){
              audioTryAgain.play();}
              setTimeout(function () {
                window.location.href = 'index.html';
              }, 1500);

            });
        } else {
          if (muted == false){
          audioTryAgain.play();}
          setTimeout(function () {
            window.location.href = 'index.html';
          }, 1500);
        }

      })
      gameScores.push(score);
      gameTimes.push(seconds);
      localStorage.setItem('previousScore3', JSON.stringify(gameScores));
      localStorage.setItem('previousTime3', JSON.stringify(gameTimes));
      score = 0;
      seconds = 0;
      cardProgress = 0;
    }
    if ($(selectedCard).hasClass('card-is-flipped')) {
      if (muted == false){
      audioFail.play()}
      alert('Already flipped!');
    }
  }
  if (cardsLeft == 1) {
    score = 52;
    gameScores.push(score);
    gameTimes.push(seconds);
    localStorage.setItem('previousScore3', JSON.stringify(gameScores));
    localStorage.setItem('previousTime3', JSON.stringify(gameTimes));
    document.getElementById('score-count').innerText = `52/52`;
    if (muted == false){
    audioGameWon.play();}
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
/*Code to log score and time to local storage */
var previousScore3 = JSON.parse(localStorage.getItem('previousScore3'));
var previousTime3 = JSON.parse(localStorage.getItem('previousTime3'));

/*Code to display users previous score and time.
If no scores have yet been logged it prompts the user to play a game */
function scoreList() {
  if (muted == false){
  audioPreviousScore.play();}
  if (previousScore3 == null) {
    Swal.fire({
      title: '<strong>Previous Score</strong>',
      icon: 'info',
      html: "You have no previous score! Play a game to record a previous score and time.",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',

    })
  } else {

    Swal.fire({
      title: '<strong>Previous Score</strong>',
      icon: 'info',
      html: `Your previous score last round was 
        <ol> 
        <li>${previousScore3}/52 cards and your time was ${previousTime3}s</li>
        </ol>`,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',

    })
  }
}

/*Code to determine if the card clicked is equal to the next card in the shuffled deck. */
function correctCard(selectedCard) {
  let j = 0;
  if (selectedCard === 'Card-' + shuffledDeck[j]) {
    console.log('it worked!');
    j++;
  }
};

/*Initial decleration of various variables related to the modals */
let modalBtn = document.getElementById("start-button")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
let startClickCount = 0;

/*Code to cause a shuffling cards sound, and to make the game themed like a poker table upon first click of the start game button.
Code also causes the card guessing modal to become visible. Base code for the modal was taken from the Bootstrap website. */
modalBtn.onclick = function () {
  modal.style.display = "block"
  startClickCount++;
  if (startClickCount == 1) {
    if (muted == false){
    audioCardShuffle.play();}
    setTimeout(function () {
      $('#tableContainer').css('background-color', '#89b5af');
      $('#game-area').addClass('game-area');
      $('nav, #tableContainer, footer').addClass('wood');
      $('#suits-images-1, #suits-images-2 ').removeClass('hidden');
    }, 700);
  }

}
closeBtn.onclick = function () {
  modal.style.display = "none"
}
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none"
  }
}

