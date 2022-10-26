let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = "40px";

//tag.className grabs the first instance of that tag with that className
let paraMess = document.querySelector('p.mess-with-me');
paraMess.style.background = "green";

let hiddenDino = document.querySelector('#hide-me');// 3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!  id="hide-me" 
hiddenDino.style.display = 'none';
//hiddenDino.style.opacity = '0';

 let firstDino = document.querySelector('#triceratops'); //4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
 firstDino.style.width = '324px';


 //EVENT LISTENERS CHALLENGES 
 spanMess.addEventListener('click', function(){ //1. Add an event listener to the span with the class mess-with-me so that when it is clicked, the font color changes to orange.
    spanMess.style.color = 'orange';
});

firstDino.addEventListener('click', function(){ //2. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.
    firstDino.style.border = '3px solid red';
});

let featherDino = document.querySelector('#feathers');
featherDino.addEventListener('click', function(){ //3. Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.id="feathers"
    featherDino.style.opacity = '.50';
});

let switchColorButton = document.querySelector('#toggle');
let dinoRow = document.querySelector('#row')
//dinoRow.style.background = "white"; //set it to white by default.
//4. Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice. id="row"
switchColorButton.addEventListener('click', function(){
    console.log('TESTING BUTTON!');

    //if(dinoRow.style.background === ''){
    //    dinoRow.style.background = "pink";
    //} else if(dinoRow.style.background === "pink"){
    //    dinoRow.style.background = "";
   // }

    if(dinoRow.style.background === ''){
        dinoRow.style.background = 'pink';
    } else {
        dinoRow.style.background = '';
    }
});

//5. Add an event listener to the dinosaur with the id 'biggify' that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some searching on what different string you'll need to pass. It's not gonna be 'click'!

let biggify = document.querySelector('#biggify');
biggify.addEventListener('mouseenter', function(){
    biggify.style.width = '200px';
});

biggify.addEventListener('mouseout', function(){
    biggify.style.width = '162px';
});

