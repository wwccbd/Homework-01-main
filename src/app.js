// Place your DOM creation code here
var main = document.createElement("main");
//create section for body
var bodySection = document.createElement("section");
//create h1 element for header
var h1 = document.createElement("h1");
h1.textContent = "Homework 01";
//create and set text for paragraphs
var paragraph_1 = document.createElement("p");
paragraph_1.textContent = "For this homework, I want you to recreate this HTML page using JavaScript and the DOM API. This means, the HTML should have a blank body and minimal head. Once the page loads, use JavaScript to recreate all the elements from the original page.";

var paragraph_2 = document.createElement("p");
//I cannot figure out how to make HTML Entities "render" without using innerhtml. Replaced <code>&lt;p&gt;</code> with <p>. My research just turns up converting these symbols the other way. 
paragraph_2.innerText =  "To make it fun, and maybe a bit tricky, I've added several types of elements. Some elements are pretty simple like these <p> tags. Others are more going to require extra attributes or mixing text nodes with element nodes.";

//Append h1, paragraphs to section
bodySection.appendChild(h1);
bodySection.appendChild(paragraph_1);
bodySection.appendChild(paragraph_2);
main.appendChild(bodySection);
//appead main to body
document.body.appendChild(main);
//create aside 
var aside = document.createElement("aside");
//create img
var marioImage = document.createElement("img");
marioImage.setAttribute("src", "assets/mario.png");
//create blockquote
var marioBQ = document.createElement("blockquote");
marioBQ.textContent = 'Mario says "Wahoo!" to homework';
//create audio
var marioAudio = document.createElement("audio");
marioAudio.setAttribute("controls", "true");
marioAudio.setAttribute("autoplay", "false");
marioAudio.setAttribute("src", "assets/Super Mario Bros. medley.mp3");
//append image, bq, and audio to aside
aside.appendChild(marioImage);
aside.appendChild(marioBQ);
aside.appendChild(marioAudio);
//append aside to body
document.body.appendChild(aside);

