// Nasty experiments in adding elements  
// ------------------------------------
  // Create a SPAN element
  let spanDisplay =   document.createElement("span"); 
  spanDisplay.style.position = "absolute";

  // and create some content 
  let textContent = document.createTextNode("Hi there and greetings! Enter Top then Left positions"); 
  let inputTop = document.createElement("input","text");
  let inputLeft = document.createElement("input","text"); 

  // add an event listener to get the Top postion value from the inputTop feild.
  inputTop.addEventListener("keyup",gotTopInput);

  // add an event listener to get the Top postion value from the inputLeft feild.
  inputLeft.addEventListener("keyup",gotLeftInput);

  // add the text node and input node to the newly created div
  spanDisplay.append(textContent);  
  spanDisplay.append(inputTop); 
  spanDisplay.append(inputLeft); 

  // add the div to the body
  document.documentElement.appendChild(spanDisplay); 
  
  function gotInput(event){
    // FROM https://stackoverflow.com/questions/905222/enter-key-press-event-in-javascript
    if(  event.which == 13 || event.keyCode == 13){ 

            console.log("Got "+ event.keyCode);
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
      spanDisplay.style.top = Number(event.target.value) + 'px';
    }
  }

  function gotLeftInput(event){
    // FROM https://stackoverflow.com/questions/905222/enter-key-press-event-in-javascript
    if(  event.which == 13 || event.keyCode == 13){ 
      spanDisplay.style.left = Number(event.target.value) + 'px';
    }
  }
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
