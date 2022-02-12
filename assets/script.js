/*All audio files being initially defined */
var audioSuccess = new Audio('assets/audio/Card-flip-sound-effect.mp3');
var audioFail = new Audio('assets/audio/denied.mp3');
var audioGameOver = new Audio('assets/audio/You-lose-game-over.mp3');
var audioCompletedMemorising = new Audio('assets/audio/completed-cards.mp3');
var audioGameWon = new Audio('assets/audio/Finale-sound-effect.mp3');
var audioCardShuffle = new Audio('assets/audio/shuffling-cards.mp3');
var audioTryAgain = new Audio('assets/audio/try-again-new.mp3');
var audioCorrectCards = new Audio('assets/audio/Success-sound-effect.mp3');
var audioPreviousScore = new Audio('assets/audio/previous-score-sound.mp3');
var audioMuteButton = new Audio('assets/audio/mute-button.mp3');

/*Initial decleration of various variables related to the modals */
let modalBtn = document.getElementById("start-button")
var modalBtn2 = document.getElementById("start-button");
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
let startClickCount = 0;
var difficultyChosen = false;
var difficulty;
var canOpen = false;

/*Code to cause a shuffling cards sound, and to make the game themed like a poker table upon first click of the start game button.
Code also causes the card guessing modal to become visible. Base code for the modal was taken from the Bootstrap website. */






if (difficultyChosen == false){
modalBtn.onclick = function () {
   
  if (startClickCount == 0){
    Swal.fire({
      title: '<strong>Choose Difficulty</strong>',
      icon: 'info',
      html: "Choose a difficulty level!",
      showCloseButton: false,
      showCancelButton: true,
      showDenyButton: true,
      focusConfirm: false,
      confirmButtonText: 'Easy: 10 Cards',
      denyButtonText: 'Medium: 25 Cards',
      cancelButtonText: 'Hard: 52 Cards',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      allowOutsideClick: false,
      allowEscapeKey: false,
      

    }).then((result) => {

      if (result.isDismissed) {
        difficultyChosen = true;
         difficulty = 0
        startClickCount ++;
        modalOpen();
        canOpen = true;
        cardsProgression();
        buttoncards();
        timerFunction();
        cardDisplay();
        cardClicked();
        flipCardOnClick();
          }
      if (result.isDenied) {
        difficultyChosen = true;
        difficulty = 1
        startClickCount ++;
        modalOpen();
        canOpen = true;
        cardsProgression();
        buttoncards();
        timerFunction();
        cardDisplay();
        cardClicked();
        flipCardOnClick();

              }    
      if (result.isConfirmed) {
          difficultyChosen = true;
          difficulty = 2
          startClickCount ++;
          modalOpen();
          canOpen = true;
          cardsProgression();
          buttoncards();
          timerFunction();
          cardDisplay();
          cardClicked();
          flipCardOnClick();

           }
          })
  
  }
  else{
   modalOpen();
  }
} 
  
}

function modalOpen (){  
  modal.style.display = "block";

  if (startClickCount == 1) {
    startClickCount++;
    if (muted == false){
    audioCardShuffle.play();}
      $('#tableContainer').addClass('game-area');
      $('nav, footer').addClass('wood');
      $('#suits-images-1, #suits-images-2 ').removeClass('hidden');
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
let easyShuffledDeck = [];
let mediumShuffledDeck = [];

setTimeout(function(){
  for (let i = 0; i < 10; i++) { 
  easyShuffledDeck[i] = shuffledDeck[i];
}
 for (let i = 0; i < 25; i++) { 
  mediumShuffledDeck[i] = shuffledDeck[i];
}
  console.log(shuffledDeck[9])
  console.log(easyShuffledDeck[9])
  console.log(mediumShuffledDeck[9])

}, 2000);



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
    audioMuteButton.play();
    localStorage.setItem('muteDecision', JSON.stringify(muted));
    muteDecision = JSON.parse(localStorage.getItem('muteDecision'));
  console.log(muteDecision);
    return {muted, muteDecision}
  }
  
  })

window.onload = function(){
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

function timerFunction(){
if (difficulty == 0){
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

})};

if (difficulty == 1){
  $('#next').click(function () {
    numberOfClicks++;
    cardProgress++;
    if (numberOfClicks < 26) {
      cardsProgression();
    }
    console.log(numberOfClicks);
    if (numberOfClicks == 1) {
      interval();
    }
    if (numberOfClicks == 26) {
      clearInterval(myInterval);
    }
  
  })};

  if (difficulty == 2){
    $('#next').click(function () {
      numberOfClicks++;
      cardProgress++;
      if (numberOfClicks < 11) {
        cardsProgression();
      }
      console.log(numberOfClicks);
      if (numberOfClicks == 1) {
        interval();
      }
      if (numberOfClicks == 11) {
        clearInterval(myInterval);
      }
    
    })};  
  }
/*Function to update card progress counter */
function cardsProgression() {
  if (difficulty == 0){
  cardProgress = parseInt(cardProgress);
  document.getElementById('card-progress').innerText = `${cardProgress}/52`;
  }

  if (difficulty == 1){
    cardProgress = parseInt(cardProgress);
    document.getElementById('card-progress').innerText = `${cardProgress}/25`;
    }  

  if (difficulty == 2){
      cardProgress = parseInt(cardProgress);
      document.getElementById('card-progress').innerText = `${cardProgress}/10`;
   }   
}

/*Code displays next image of card in the shuffled deck each time the button is clicked */
function cardDisplay(){
 var number = 0; 
if (difficulty == 0){
$("#next").click(function () {
  $('#guess').css('background-image', `url(assets/images/Card-${shuffledDeck[parseInt(number)]}.png`);;
  number++;
});
}

if (difficulty == 1){
  $("#next").click(function () {
    $('#guess').css('background-image', `url(assets/images/Card-${mediumShuffledDeck[parseInt(number)]}.png`);;
    number++;
  });
  }

  if (difficulty == 2){
    $("#next").click(function () {
      $('#guess').css('background-image', `url(assets/images/Card-${easyShuffledDeck[parseInt(number)]}.png`);;
      number++;
    });
    }
}    
/*Collection of if statements that dynamicaly change the text of the button depending on the current state of the game.
The code also displays the end of guess message once all cards have been viewed.
Finally the code causes all the cards to flip face-up once the guessing begins */
function buttoncards (){
    if (difficulty == 0){
          $('#next').click(function () {
            if (cardProgress == 1) {
              let btn = document.getElementById('next');
              btn.innerHTML = 'Next Card';
            }
            if (cardProgress == 51) {
              let btn = document.getElementById('next');
              btn.innerHTML = 'Finish Memorising!';
            }
            if (cardProgress < 52) {
              if(muted == false){
              audioSuccess.play();}
            }
            if (cardProgress == 52) {
              let btn = document.getElementById('next');
              btn.innerHTML = 'Start Guessing!';
              $("#end-of-guess").css({
                display: "inline"
              });
              if (muted == false){
              audioCompletedMemorising.play();}

            }
            if (cardProgress == 53) {
              modal.style.display = "none";
              if (muted == false){
              audioSuccess.play();}
              $('#cards-container div').removeClass('card-face--back-start card-is-flipped-start');
              $('#score-progress').removeClass('hidden');
            }
          })
    }


    if (difficulty == 1){
            $('#next').click(function () {
              if (cardProgress == 1) {
                let btn = document.getElementById('next');
                btn.innerHTML = 'Next Card';
              }
              if (cardProgress == 24) {
                let btn = document.getElementById('next');
                btn.innerHTML = 'Finish Memorising!';
              }
              if (cardProgress < 25) {
                if(muted == false){
                audioSuccess.play();}
              }
              if (cardProgress == 25) {
                let btn = document.getElementById('next');
                btn.innerHTML = 'Start Guessing!';
                $("#end-of-guess").css({
                  display: "inline"
                });
                if (muted == false){
                audioCompletedMemorising.play();}
            
              }
              if (cardProgress == 26) {
                modal.style.display = "none";
                if (muted == false){
                audioSuccess.play();}
                $('#cards-container div').removeClass('card-face--back-start card-is-flipped-start');
                $('#score-progress').removeClass('hidden');
              }
            })
      }
      
    if (difficulty == 2){
          $('#next').click(function () {
            if (cardProgress == 0) {
              let btn = document.getElementById('next');
              btn.innerHTML = 'Next Card';
            }
            if (cardProgress == 9) {
              let btn = document.getElementById('next');
              btn.innerHTML = 'Finish Memorising!';
            }
            if (cardProgress < 10) {
              if(muted == false){
              audioSuccess.play();}
            }
            if (cardProgress == 10) {
              let btn = document.getElementById('next');
              btn.innerHTML = 'Start Guessing!';
              $("#end-of-guess").css({
                display: "inline"
              });
              if (muted == false){
              audioCompletedMemorising.play();}
          
            }
            if (cardProgress == 11) {
              modal.style.display = "none";
              if (muted == false){
              audioSuccess.play();}
              $('#cards-container div').removeClass('card-face--back-start card-is-flipped-start');
              $('#score-progress').removeClass('hidden');
            }
          })
        }  
        
  }    
/*Code that determines whether a card is to be flipped or not. If the card is currently unflipped it will flip, if it is already flipped
it will play an error sound and display a message */
function flipCardOnClick (){
if (difficulty == 0){
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
}

if (difficulty == 1){
  $('#cards-container div').click(function () {
    if (cardProgress >= 27) {
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
  }

  if (difficulty == 2){
    $('#cards-container div').click(function () {
      if (cardProgress >= 12) {
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
    }  
  }
var number2 = 0;
var score = 0;
var cardsLeft = 52;

/*Code that determines if the card choice is correct or incorrect. If correct it updates the players score and the score count display.
if card is not correct the game ends and displays a loser alert informing player of their score and time. It also presents the option
to view the correct remaining sequence of cards.
The players score and time are then saved to local storage to view in the 'Previous Score' section.

If the player correctly recalls all cards a game won message is displayed and their score and time is logged to local storage.
*/
function cardClicked (){
if (difficulty == 0){
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
      localStorage.setItem('totalCardsNumber', JSON.stringify(52));
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
    localStorage.setItem('totalCardsNumber', JSON.stringify(52));
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
}



if (difficulty == 1){
  var cardClicked = $('.cards').click(function (event) {
    var selectedCard = (this.id);
    if (cardProgress >= 27 && cardsLeft > 1) {
      if (selectedCard === 'Card-' + shuffledDeck[number2]) {
        console.log("success!");
        number2++;
        score++;
        cardsLeft--;
        document.getElementById('score-count').innerText = `${score}/25`;
        return number2;
  
      }
      if (selectedCard != 'Card-' + shuffledDeck[number2] && $(selectedCard).not(".card-is-flipped .card-face--back")) {
        console.log('wrong card');
        if (muted == false){
        audioGameOver.play();}
        let remainingCards = mediumShuffledDeck.slice(score);
        Swal.fire({
          icon: 'error',
          title: 'Game Over!',
          text: `Sorry that was the wrong card! You got ${score} out of 25 cards correct and your time to memorise the deck was ${seconds} seconds. Thanks for playing!`,
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
        localStorage.setItem('totalCardsNumber', JSON.stringify(25));
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
      score = 25;
      gameScores.push(score);
      gameTimes.push(seconds);
      localStorage.setItem('previousScore3', JSON.stringify(gameScores));
      localStorage.setItem('previousTime3', JSON.stringify(gameTimes));
      localStorage.setItem('totalCardsNumber', JSON.stringify(25));
      document.getElementById('score-count').innerText = `25/25`;
      if (muted == false){
      audioGameWon.play();}
      Swal.fire({
          icon: 'success',
          title: 'You Win!',
          text: `Congratulations! You successfully memorised all 25 cards in a time of ${seconds} seconds. Amazing work! Play again to try and beat your time.`,
          footer: '<a href="index.html">Play Again?</a>'
  
        })
        .then(() => {
          window.location.href = 'index.html';
        });
    }
  })
  }



if (difficulty == 2){
  var cardClicked = $('.cards').click(function (event) {
    var selectedCard = (this.id);
    if (cardProgress >= 12 && cardsLeft > 1) {
      if (selectedCard === 'Card-' + shuffledDeck[number2]) {
        console.log("success!");
        number2++;
        score++;
        cardsLeft--;
        document.getElementById('score-count').innerText = `${score}/10`;
        return number2;
  
      }
      if (selectedCard != 'Card-' + shuffledDeck[number2] && $(selectedCard).not(".card-is-flipped .card-face--back")) {
        console.log('wrong card');
        if (muted == false){
        audioGameOver.play();}
        let remainingCards = easyShuffledDeck.slice(score);
        Swal.fire({
          icon: 'error',
          title: 'Game Over!',
          text: `Sorry that was the wrong card! You got ${score} out of 10 cards correct and your time to memorise the deck was ${seconds} seconds. Thanks for playing!`,
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
        localStorage.setItem('totalCardsNumber', JSON.stringify(10));
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
      score = 10;
      gameScores.push(score);
      gameTimes.push(seconds);
      localStorage.setItem('previousScore3', JSON.stringify(gameScores));
      localStorage.setItem('previousTime3', JSON.stringify(gameTimes));
      localStorage.setItem('totalCardsNumber', JSON.stringify(10));
      document.getElementById('score-count').innerText = `10/10`;
      if (muted == false){
      audioGameWon.play();}
      Swal.fire({
          icon: 'success',
          title: 'You Win!',
          text: `Congratulations! You successfully memorised all 10 cards in a time of ${seconds} seconds. Amazing work! Play again to try and beat your time.`,
          footer: '<a href="index.html">Play Again?</a>'
  
        })
        .then(() => {
          window.location.href = 'index.html';
        });
    }
  })
  }
}
document.getElementById('score-button').addEventListener('click', scoreList);
/*Code to log score and time to local storage */
var previousScore3 = JSON.parse(localStorage.getItem('previousScore3'));
var previousTime3 = JSON.parse(localStorage.getItem('previousTime3'));
var totalCardsNumber = JSON.parse(localStorage.getItem('totalCardsNumber'));

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
        <li>${previousScore3}/${totalCardsNumber} cards and your time was ${previousTime3}s</li>
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
