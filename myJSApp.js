// Nasty experiments in adding elements and moving them around
// ------------------------------------------------------------
  // Create a display element
  let eleDisplay =   document.createElement("span"); 
  eleDisplay.style.position = "absolute";

  // and create some content 
  let textContent = document.createTextNode("Hi there and greetings! Enter Top then Left positions"); 
  let inputTop = document.createElement("input","text");
  let inputLeft = document.createElement("input","text"); 

  // add an event listener to get the Top postion value from the inputTop feild.
  inputTop.addEventListener("keyup",gotTopInput);
  // add listener for blur for top
  inputTop.addEventListener("blur",gotTopBlur);
  // add an event listener to get the Top postion value from the inputLeft feild.
  inputLeft.addEventListener("keyup",gotLeftInput);
  // add listener for blur for top
  inputLeft.addEventListener("blur",gotLeftBlur);

  // add the text node and input node to the newly created div
  eleDisplay.append(textContent);  
  eleDisplay.append(inputTop); 
  eleDisplay.append(inputLeft); 
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
