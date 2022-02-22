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

7. [Balsamiq](https://balsamiq.com/):
  * Balsamiq was used to generate my wireframes to guide my design process.

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

## Further Testing
---
### Validator Results

### Manual Testing

### Known Bugs

### Notable Solved Bugs

## Deployment
---

### GitHub Pages

 The project was deployed to GitHub Pages using the following steps...

 1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
 2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
     - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
 3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
 4. Under "Source", click the dropdown called "None" and select "Master Branch".
 5. The page will automatically refresh.
 6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

 ### Forking the GitHub Repository

 By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

 1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
 2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
 3. You should now have a copy of the original repository in your GitHub account.

 ### Making a Local Clone

 1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
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

## Content

## Media

## Acknowledgements
---

* My mentor Rahul Lakhanpal for his support and invaluable advice throughout my project.

* Code Institute for their excellent learning platform and student support.

* [W3C Schools](https://www.w3schools.com/) and [Stack Overflow](https://stackoverflow.com/) for being valuable resources when I encountered problems in my code. 