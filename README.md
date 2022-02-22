# Pokergraphic Memory!
"Pokergraphic Memory!" is both a powerful and memory training tool and a fun recall game. This project utilises the incredible techniques of the ancient "Loci" system, and the "PAO" system to help users memorise and recall the order of an entire deck of 52 cards; a feat many people would think impossible. This is the same set of techniques that memory athletes use to perform unbelievable cognitive achievements such as recalling Pi to 67,890 digits.

---

**put image here**

---

**put walkthrough video here**

---

##  Experience (UX)
---
### User Stories

- As a first time user I want to:

1. Quickly understand the purpose and layout of the game
2. Understand how to play the game
3. Receive tips and guidance on how to improve my score

- As a returning visitor I want to:

1. Have different levels of difficulty to challenge myself
2. Have a system to track my previous score so that I can try and improve my skill
3. Have tools to help me develop a method to learn the skills of memorisation

## 1. Strategy
---
## Project purpose
- To provide a fun game to challenge and quantify the skill of memorisation through a card memorising game
- To provide a comprenhensive breakdown of the skills needed to learn this incredible ability, and to give the user the tools to learn
- To provide a varying level of difficulty for the user to challenge themselves at different stages in their memory journey
- To provide a system to compare users current scores to their previous efforts

## 2. Scope
---
- I wanted a simple and intuitive user experience.
- I wanted all content to be displayed in a slick and aesthetic manner.
- I wanted a fun game that tracks several metrics such as score and time, as well as providing a system to compare previous efforts.
- I wanted to create a fun game like experience with sound effects and animations.
- I wanted to provide the user with tools and explanation as to how to develop the skills needed to beat the game and improve their memory.
- I wanted a slick looking experience that functions well on a variety of screen sizes.

## 3. Structure
---
- The site features a clear and minimalistic navigation bar that takes users to either the central game area, or the two supporting resource pages.
- The game layout is clear and intuitive, providing three main buttons; A start game button to begin playing, a mute button to silence the audio, and a previous scores button to compare against previous efforts.
- Functions of the three main pages:
1. The main game page is where the game is operated. It also displays previous scores, information about the users time and score, and game over/ game won messages.
2. The memory tips page gives a comprehensive and detailed history and breakdown of the techniques needed to beat the game. It also features a table to create your own PAO system and save it to your computer as a PDF.
3. The game instructions page is a simple page that provides clear instructions for playing the game.

## 4. Skeleton 
---

### Wireframes

Wire frames were generated using Balsamiq, and can be viewed below.

- [Game Page](https://www.example.com)
- [Memory Tips](https://www.example.com)
- [Game instructions](https://www.example.com)

## 5. Surface 
---

### Colour Scheme

The main colours I used in developing this website are ...
I chose these as I felt they gave the website a warm and inviting aesthetic. I also used another colour scheme once the game has began, opting for a green felt like texture behind the cards, and a wooden texture for the nav and footer. I did this to imitate the appearance of a poker table. 

### Typography

The two fonts I used throughout the website are ... and .. 


### Imagery and Theme

The main themes and imagery used throughout the website are strongly related to both poker and in one case, the brain. The buttons used to start the game, display previous scores, and mute audio are all designed in the form of a poker chip. During the game the main game page is transformed to have a green felt background and wooden borders to mimic the appearance of a poker table. Imagery of card suits and playing cards are also used throughout the design of the site. 

## 5. Features 
---
### General
---

#### Nav Bar & Footer

### Game Page
---

#### Card Flip Animation
On the main game page the player is presented with a layout of all 52 playing cards. Initially these are face down, however once the game has began and all shuffled cards have been presented to the player, the relevant cards flip over to be revealed.

Upon clicking a correct card the flipping animation plays backwards to hide the card from view and present only the remaining cards to the player.

#### Previous Score System
Upon clicking the "Previous Score" button players will be presented the results of their last game in a modal. 
If the player has no previous game results they will be informed of this and prompted to start a game. 

These results are stored in local storage at the end of each game and persist across browser sessions.

#### Card Shuffling System
Each time the web page is loaded a deck of playing cards is generated and stored into an array. This array is then shuffled into a random order.
There is also an "Easy" and "Medium" shuffled deck created, with 10 and 25 cards stored. 

#### Audio Sound effects
Almost every action the player undertakes in the game has an associated sound effect. I did this to 'gamefy' the experience. Examples of these include:
* Error sound for clicking a flipped card
* Card flipping sound
* Shuffling sound when first starting the game
* Sound for opening previous scores
* Sound for un-muting the audio with the "Audio Mute" button
* Game over sound
* Game won sound
* Remaining cards sound
* A sound encouraging players to "Try Again" at the end of a lost game

#### Audio Muting
To provide the user with the option of turning off the sound effects there is a "Mute Audio" button on the main page. By default the audio is enabled but can be muted at any time. When the audio is muted, the "Mute Audio" button is replaced with an "Un-mute Audio" button. 
The players choice of audio is saved into local storage and is persistent across browser sessions. It can also be changed at any time.

#### A Range of Difficulty settings 
When the player first presses the "Start Game" button they will be presented with three colour coded buttons to choose a dificulty setting. Their choice then determines how many cards need to be memorised, how many cards will be revealed to the player, the numbers inside the score and card progress counter, and the values stored in the "Previous Scores" section.

The three difficulties are easy for 10 cards, medium for 25 cards, and hard for all 52 cards in the deck.

#### Score and Timer Tracking


#### Remaining Cards Reminder

### Supporting Pages
---

#### Collapsing Instructions Buttons

#### PAO System Generator