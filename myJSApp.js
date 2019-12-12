// Nasty experiments in adding elements to the DOM and moving them around
// ----------------------------------------------------------------------
  // Create a display element
  let eleDisplay =   document.createElement("div"); // Try this with different types of element, consider the Box Model
  eleDisplay.style.width = '800px';
  eleDisplay.style.height = '600px';

  // and create some content 
  let textContent = document.createTextNode("Hi there and greetings! Enter Top then Left positions"); 
  let inputTop = document.createElement("input","text");
  let inputLeft = document.createElement("input","text"); 
  let canvasDrawing = document.createElement("canvas"); 
  
  // canvas width and height
  canvasDrawing.style.width = '300px';
  canvasDrawing.style.height = '300px';
  const ctx = canvasDrawing.getContext('2d');

  // draw something from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  // Set line width
  ctx.lineWidth = 3;

  // Wall
  ctx.strokeRect(75, 140, 150, 110);

  // Door
  ctx.fillRect(130, 190, 40, 60);

  // Roof
  ctx.moveTo(50, 140);
  ctx.lineTo(150, 60);
  ctx.lineTo(250, 140);
  ctx.closePath();
  ctx.stroke();

  // add an event listener to get the Top postion value from the inputTop feild.
  inputTop.addEventListener("keyup",gotTopInput);
  // add listener for blur for top
  inputTop.addEventListener("blur",gotTopBlur);
  // add an event listener to get the Top postion value from the inputLeft feild.
  inputLeft.addEventListener("keyup",gotLeftInput);
  // add listener for blur for top
  inputLeft.addEventListener("blur",gotLeftBlur);

  // add the text node and input node to the display element
  eleDisplay.append(textContent);  
  eleDisplay.append(inputTop); 
  eleDisplay.append(inputLeft); 
  eleDisplay.append(canvasDrawing); 

  // Use absolute positioning on the Display element
  eleDisplay.style.position = "absolute";

  // Manage dragging of Display
  // eleDisplay.addEventListener("dragover", dragover_handler);

  // add the div to the body
  document.documentElement.appendChild(eleDisplay); 
  
  // Event Handler code
  function gotInput(event){
    // FROM https://stackoverflow.com/questions/905222/enter-key-press-event-in-javascript
    if(  event.which == 13 || event.keyCode == 13){ 

            console.log("Got "+ event.keyCode);
            // Experiment in STORAGE on the current domain - is this cookie like?
            let myStore = window.localStorage;
            if( strLog = myStore.getItem("inputLog")){
                myStore.setItem("inputLog", strLog+","+inputField.value);
            } 
            else
                myStore.setItem("inputLog", inputField.value);
            
            console.log("Log so far", myStore.getItem("inputLog"));
            inputField.value = inputField.value.toUpperCase();
    }
  }

  function gotTopInput(event){
    // FROM https://stackoverflow.com/questions/905222/enter-key-press-event-in-javascript
    if(  event.which == 13 || event.keyCode == 13){ 
      eleDisplay.style.top = Number(event.target.value) + 'px';
    }
  }

  function gotLeftInput(event){
    // FROM https://stackoverflow.com/questions/905222/enter-key-press-event-in-javascript
    if(  event.which == 13 || event.keyCode == 13){ 
      eleDisplay.style.left = Number(event.target.value) + 'px';
    }
  }
  function gotLeftBlur(event){
    // FROM https://stackoverflow.com/questions/905222/enter-key-press-event-in-javascript
      eleDisplay.style.left = Number(event.target.value) + 'px';
  }
  function gotTopBlur(event){
    // FROM https://stackoverflow.com/questions/905222/enter-key-press-event-in-javascript
      eleDisplay.style.top = Number(event.target.value) + 'px';
  }
  // Drag behaviours
  /*
  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
   }
   function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
   }
   */
// REFACTORING INTO CLASSES
// The question is, "What is our GUI metaphor?"
// Desirable features
// 1. stick as close to the DOM as possible.
// 2. introduce an architectural pattern, for example MVC.
// 3. the GUI is functionally composable, i.e. you can add another part to the GUI using a method like "with" (?).
// 4. can't think of any others
class GUI{
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
