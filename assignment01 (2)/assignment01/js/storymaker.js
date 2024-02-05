// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var btn1 = document.querySelector('button#noun1')
var btn2 = document.querySelector('button#verb')
var btn3 = document.querySelector('button#adjective')
var btn4 = document.querySelector('button#noun2')
var btn5 = document.querySelector('button#setting')

// Constants for p tag to display query selectors
var noun = document.querySelector('#choosenNoun1')
var verb = document.querySelector('#choosenVerb')
var adjective = document.querySelector('#choosenAdjective')
var noun2 = document.querySelector('#choosenNoun2')
var setting = document.querySelector('#choosenSetting')
var page = document.querySelector('html');

// Constants for final buttons and p tags
var output = document.querySelector('#story')
var id = document.querySelector('#student')


var finalBtn1 = document.querySelector('button#playback')
var finalBtn2 = document.querySelector('button#random')
var finalBtn3 = document.querySelector('button#studentID')


// Variables for pre-defined arrays
var nounArray = ['The Turkey','Mom','Dad','The Dog','My Teacher','The Cat']
var verbArray = ['sat on','ate','danced with','saw','doesn\'t like','kissed']
var adjectiveArray = ['a funny','a scary','a goofy','a slimy','a barking','a fat']
var noun2Array = ['goat','monkey','fish','cow','frog','bug']
var settingArray = ['on the moon','on the chair','in my pasta','in my soup','on the grass','in my shoes']


// Variables for count to grab array elements
var noun1Count = Number(-1)
var verbCount = Number(-1)
var adjectiveCount = Number(-1)
var noun2Count = Number(-1)
var settingCount = Number(-1)

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it

    // if-else to change count setting
    if (noun1Count == 6){
        noun1Count = -1
    }else {
        noun1Count++ 
        noun.textContent = nounArray[noun1Count]
        page.style.backgroundColor = 'magenta'
    }
}

// changes verb and background color on click
function verb_on_click() {
    if (verbCount == 6){
        verbCount = -1
    }else {
        verbCount++ 
        verb.textContent = verbArray[verbCount]
        page.style.backgroundColor = 'lightblue'
    }
}

// Changes adjective and background color on click
function adjective_on_click() {
    if (adjectiveCount == 6){
        adjectiveCount = -1
    }else {
        adjectiveCount++ 
        adjective.textContent = adjectiveArray[adjectiveCount]
        page.style.backgroundColor = 'limegreen'
    }   
}

// Changes the second noun and background color on click
function noun2_on_click() {
    if (noun2Count == 6){
        noun2Count = -1
    }else {
        noun2Count++ 
        noun2.textContent = noun2Array[noun2Count]
        page.style.backgroundColor = 'orange'
    } 
}

// Changes the setting and background color on click 
function setting_on_click() {
    if (settingCount == 6){
        settingCount = -1
    }else {
        settingCount++ 
        setting.textContent = settingArray[settingCount]
        page.style.backgroundColor = 'pink'
    } 
}

// concatenate the user story and display
function playback_on_click() {
    output.textContent = nounArray[noun1Count] + ' ' + verbArray[verbCount] + ' ' + adjectiveArray[adjectiveCount]
    + ' ' + noun2Array[noun2Count] + ' ' + settingArray[settingCount]
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    var randomArray = ['','','','','']

    // Gets random values and puts them into an array 
    for(let i = 0; i <= 5; i++){
        var random = Math.floor(Math.random() * 6);
        randomArray[i] = random
    }

    // Outputs a random story using the random array values
    output.textContent = nounArray[randomArray[0]] + ' ' + verbArray[randomArray[1]] + ' ' + adjectiveArray[randomArray[2]]
    + ' ' + noun2Array[randomArray[3]] + ' ' + settingArray[randomArray[4]]
   
}

function id_on_click(){
    id.textContent = "Andrew Murgan - 200589802"
}

/* Event Listeners
-------------------------------------------------- */
btn1.addEventListener('click', noun1_on_click)
btn2.addEventListener('click', verb_on_click)
btn3.addEventListener('click', adjective_on_click)
btn4.addEventListener('click', noun2_on_click)
btn5.addEventListener('click', setting_on_click)

finalBtn1.addEventListener('click', playback_on_click)
finalBtn2.addEventListener('click', random_on_click)
finalBtn3.addEventListener('click', id_on_click)

