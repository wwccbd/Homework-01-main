// Place your DOM creation code here
let main = document.createElement("main");
//create section for body
let bodySection = document.createElement("section");
//create h1 element for header
const h1 = document.createElement("h1");
h1.textContent = "Homework 01";
//create and set text for paragraphs
let paragraph_1 = document.createElement("p");
paragraph_1.textContent = "For this homework, I want you to recreate this HTML page using JavaScript and the DOM API. This means, the HTML should have a blank body and minimal head. Once the page loads, use JavaScript to recreate all the elements from the original page.";
//create paragraph 2 element and code element
let paragraph_2 = document.createElement("p");
let p2code = document.createElement("code");
//create textnodes for p2
let p2textnode1 = document.createTextNode("To make it fun, and maybe a bit tricky, I've added several types of elements. Some elements are pretty simple like these ");
p2code.textContent = "<p>";
let p2textnode2 = document.createTextNode(" tags. Others are more going to require extra attributes or mixing text nodes with element nodes.");
//append code and textnodes to p2
paragraph_2.appendChild(p2textnode1);
paragraph_2.appendChild(p2code);
paragraph_2.appendChild(p2textnode2);
//Append h1, paragraphs to section
bodySection.appendChild(h1);
bodySection.appendChild(paragraph_1);
bodySection.appendChild(paragraph_2);
main.appendChild(bodySection);
//appead main to body
document.body.appendChild(main);
//create aside 
let aside = document.createElement("aside");
//create img
let marioImage = document.createElement("img");
marioImage.setAttribute("src", "assets/mario.png");
//create blockquote
let marioBQ = document.createElement("blockquote");
marioBQ.textContent = 'Mario says "Wahoo!" to homework';
//create audio
let marioAudio = document.createElement("audio");
marioAudio.setAttribute("controls", "true");
marioAudio.setAttribute("autoplay", "false");
marioAudio.setAttribute("src", "assets/Super Mario Bros. medley.mp3");
//append image, bq, and audio to aside
aside.appendChild(marioImage);
aside.appendChild(marioBQ);
aside.appendChild(marioAudio);
//append aside to body
document.body.appendChild(aside);

