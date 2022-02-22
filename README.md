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

- [Game Page Desktop](assets/wireframes/Game-Page-Desktop.png)
- [Game Page Mobile](assets/wireframes//Game-page-mobile.png)

## 5. Surface 
---

### Colour Scheme

The main colours I used in developing this website are a darker and lighter shade of green, a soft purple and a warm white. I chose these colours as I felt they gave the website a warm and inviting aesthetic. I also used another colour scheme once the game has began, opting for a green felt like texture behind the playing cards, and a wooden texture for the nav bar and footer. I did this to imitate the appearance of a poker table. 

### Typography

The two fonts I used throughout the website are ... and .. 


### Imagery and Theme

The main themes and imagery used throughout the website are strongly related to both poker and in one case, the brain. The buttons used to start the game, display previous scores, and mute audio are all designed in the form of a poker chip. During the game the main game page is transformed to have a green felt background and wooden borders to mimic the appearance of a poker table. Imagery of card suits and playing cards are also used throughout the design of the site. 

## 5. Features 
---
### General
---

#### Nav Bar & Footer
Each page on the site contains the same simple navbar and footer to easily traverse to the intended page.

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
Once the game has began the score and time of the player is tracked by various functions. These are then presented to the player at the end of the game and saved into the "Previous Scores" section to compare to later.

#### Remaining Cards Reminder
If the player fails a game the game over message provides them the option to view the correct order of the remaining cards. This is a useful tool as it is likely that the player will spend some time memorising the deck, and knowing what the correct choice was may help remind them of where they went wrong in their "Memory Journey" technique.

#### Contextual theme
Once a game has been started the theme of the main game page transforms to resemble a poker table. The score counter is also hidden by default until the player has viewed all the shuffled cards.

### Supporting Pages
---

#### Collapsing Instructions Buttons
The memory tips page contains a great deal of text and information. Because of this I have stored each section inside a toggle button which collpases or expands upon click. This allows the player to hide or reveal information to prevent the page from being too cluttered.

#### PAO System Generator
The memory tips page provides the player with a table to generate their own PAO system to help them win the game. Once the player has created their PAO they can save it to their computer by clicking the "Save" button.

## Technologies Used 
---

### Languages Used

* HTML5
* CSS3
* Javascript

### Framework, Software & Libraries Used

1. [Bootstrap 4.4.1](https://getbootstrap.com/):
  * Bootstrap was utilised to quickly build a responsive framework for the website, before being overwritten with a custom CSS stylesheet to add my own style.

2. [Google Fonts](https://fonts.google.com/):
   * 

3. [Font Awesome](https://fontawesome.com/):
   * Font Awesome was used to provide icons for the toggle buttons on the memory tips page.

4. [Git](https://git-scm.com/):
   * Git was used for version control to backup my project. I did this through terminal commands to commit to Git and push externally to GitHub.

5. [GitHub](https://github.com/):
   * GitHub was used to store all of my project code after being pushed from Git.

6. [Affinity Photo/Publisher](https://affinity.serif.com/en-gb/photo/):
  * Affinity software was used to create my poker chip buttons and favicon image.

7. [Figma](https://figma.com/):
  * The Figma free trial was used to generate my wireframes to guide my design process.

8. [Real Favicon Generator](https://realfavicongenerator.net):
   * Real Favicon Generator was used to turn the image I created into a favicon.ico file.

9. [Website Mockup Generator](https://websitemockupgenerator.com)
   * Website Mockup Generator was used to create the website mockup at the start of this README.

10.  [JQUERY](https://jquery.com)  
    * JQUERY was used throughout the process of creating my Javascript code.

11.  [HTML2PDF](https://github.com/spipu/html2pdf)  
    * HTML2PDF library was used to convert the table data on the memory tips into a saveable PDF file.

12.  [Sweet Alert 2](https://sweetalert2.github.io)   
    * Sweet alert 2 was used to create attractive looking modals to house my game difficulty, game won/lost message, and previous scores section on the main game page.

# Testing User Stories from the User Experience (UX) Section
- As a first time user I want to:

1. Q.  Quickly understand the purpose and layout of the game
      * The website features a very streamlined and simple navigation bar that quickly allows users to access a clear set of game instructions. The game itself is also well equipped with user messages, buttons with contextual text, and informative pop-ups and modals.

2. Q. Understand how to play the game
      * The game features access to both a clear instructions page which detail exactly how to play the game, and also a very in-depth resource that both explains the techniques needed to beat the game and also allows users to generate the necessary tools to win.

3. Q .Receive tips and guidance on how to improve my score
      * The "Memory Tips" page both gives a comprehensive history of the techniques of memorisation, along with detailed instructions as to how the user can quickly improve their memory. This page also has a tool that allows the user to generate their own PAO system and save it to their computer. The ability to play at differing difficulty levels, and to track previous scores also aid the player in improving their scores.

- As a returning visitor I want to:

1. Q. Have different levels of difficulty to challenge myself
      * The game features three seperate dificulty levels. Easy: 10 cards, Medium: 25 cards, Hard: 52 cards.

2. Q. Have a system to track my previous score so that I can try and improve my skill
      * The game has a "Previous Scores" button that saves the users previous efforts to local storage for them to keep track of their last attempt tempt across browser sessions.

3. Q. Have tools to help me develop a method to learn the skills of memorisation
      * The "Memory Tips" page contains both detailed historical information surrounding the pursit of memory techniques, along with detailed instructions on how to best memorise the deck of cards among other things. It also has a PAO generator section to allow the user to create their own memory tool to beat the game.

## Further Testing
---
### Validator Results

### Manual Testing
* The website was tested on multiple web-browsers including Safari, Chrome, Firefox and Brave.

* The website was viewed on multiple devices with varying screen sizes. These include multiple iPhone 11's, an iPad air, an iPad pro, a 16 inch Macbook pro and a 13 inch Acer laptop.

* All links and pages were tested thoroughly across various browsers and screen sizes.

* Family members trialled the website on their own devices to both give feedback and look for bugs. 

### Known Bugs
* On my current version of Safari browser, at certain screen sizes some of the cards become slightly misaligned.
* On the iPhones that I tested the site on, the sound files all work perfectly for their first play, however subsequent plays have the very start clipped off. This is a minor issue and is only noticeable when looking for it.

### Notable Solved Bugs
* After first deploying my site to Github pages, when the game was started and the poker theme was introduced, on ipads the entire interface of the game would rotate and become unusable. This only happened on iPad, not on any phone or computer, however it was present on multiple iPads. 
This fix for this turned out to be a CSS rule to rotate the background image of the Nav and Footer by 90 deg. I did this to change the alignment of the wood grain in the image, however it seemed the iPad misinterpreted this as "Rotate the nav and footer 90 deg". This is now solved.

* On certain screen sizes the cards would become misaligned when flipped. I fixed this through very tedious testing of media queries to compensate at different screen sizes. This all appears to function correctly now on every screen size I have tried.

## Deployment
---

### GitHub Pages

 The project was deployed to GitHub Pages using the following steps...

 1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Luketedwards/memorise-a-deck-of-cards)
 2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
     - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
 3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
 4. Under "Source", click the dropdown called "None" and select "Master Branch".
 5. The page will automatically refresh.
 6. Scroll back down through the page to locate the now published site [link](https://luketedwards.github.io/memorise-a-deck-of-cards/index.html) in the "GitHub Pages" section.

 ### Forking the GitHub Repository

 By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

 1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Luketedwards/memorise-a-deck-of-cards)
 2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
 3. You should now have a copy of the original repository in your GitHub account.

 ### Making a Local Clone

 1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Luketedwards/memorise-a-deck-of-cards)
 2. Under the repository name, click "Clone or download".
 3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
 4. Open Git Bash
 5. Change the current working directory to the location where you want the cloned directory to be made.
 6. Type `git clone`, and then paste the URL you copied in Step 3.

 ```
 $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
 ```

 7. Press Enter. Your local clone will be created.

 ```
 $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
 > Cloning into `CI-Clone`...
 > remote: Counting objects: 10, done.
 > remote: Compressing objects: 100% (8/8), done.
 > remove: Total 10 (delta 1), reused 10 (delta 1)
 > Unpacking objects: 100% (10/10), done.
 ```

 Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

 # Credits

## Code 
* Bootstrap4: Bootstrap library was used during the inital setup of my site to help quickly create a responsive design. I also used their code in creating one of the modals on the page.
* Sweet alert 2: I used several of their templates to create an aestheticly pleasing modal for my game, before altering it to suit my requirements.
## Content

## Media

### Images
---
* All poker chip buttons were created in Affinity Photo by the developer using this background provided by [SVG Repo](https://www.svgrepo.com/svg/4886/poker-chip).
* Images for the playing cards were downloaded from [Google Code Archive](https://code.google.com/archive/p/vector-playing-cards/).
* Images of the card suits were downloaded using a free trial from [Adobe](https://stock.adobe.com/images/set-poker-cards-symbols-vector/323996998?as_campaign=TinEye&as_content=tineye_match&epi1=323996998&tduid=f877f64edb5850dacc9d98bf4bac7909&as_channel=affiliate&as_campclass=redirect&as_source=arvato).
* Image for poker table wooden background from [Joshua Bartell on Unsplash](https://unsplash.com/photos/6vvIBTvL90A).
* Green felt poker table background from [Engin Akyurt on Unsplash](https://unsplash.com/photos/HEMIBJ8QQuA).
* Image of brain on "Memory tips" page were downloade using a free trial from [Adobe](https://stock.adobe.com/images/human-brain-on-white-background/26636186?as_campaign=TinEye&as_content=tineye_match&epi1=26636186&tduid=f877f64edb5850dacc9d98bf4bac7909&as_channel=affiliate&as_campclass=redirect&as_source=arvato).
* Image of playing cards from "Game Instructions" page from [Eyestetix on Unsplash](https://unsplash.com/@eyestetix).
 ### Audio
 ---
 * "Try again" sound effect [javapimp on freesound](https://freesound.org/people/javapimp/sounds/439187/).
 * Card flip sound effect [notification sounds](https://notification-sounds.com/1433-card-flip-sound-effect.html).
 * "Congratulations" sound effect [dersuperanton on freesound](https://freesound.org/people/dersuperanton/sounds/433702/) 
 * Card shuffle sound effect [SoundJay](https://www.soundjay.com/misc/sounds/shuffling-cards-1.mp3).
 * Error sound effect [Freesoundeffect](http://freesoundeffect.net/sound/multimedia-error-08-sound-effect).
 * Un-mute audio sound [Freesound](https://freesound.org/people/dland/sounds/320181/).
 * Game Won sound effect [Freesound](https://freesound.org/people/FunWithSound/sounds/456966/).
 * Previous Score sound effect [Freesound](https://freesound.org/people/shinephoenixstormcrow/sounds/337049/).
 * Game Over sound effect [Orangefreesounds](https://orangefreesounds.com/you-lose-game-over/).
 * "Completed Memorising Cards" sound [Freesound](https://freesound.org/people/shinephoenixstormcrow/sounds/337049/).

## Acknowledgements
---

* My mentor Rahul Lakhanpal for his support and invaluable advice throughout my project.

* Code Institute for their excellent learning platform and student support.

* [W3C Schools](https://www.w3schools.com/) and [Stack Overflow](https://stackoverflow.com/) for being valuable resources when I encountered problems in my code. 

* mrGcoding for this Youtube tutorial: https://www.youtube.com/watch?v=seApG3uwjAs which was very useful when figuring out how to shuffle a deck of cards.