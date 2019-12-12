// Nasty experiments in adding elements  
// ------------------------------------
  // Create a DIV element
  let divDisplay =   document.createElement("div"); 
  // and create some content 
  let textContent = document.createTextNode("Hi there and greetings!"); 
  let inputField = document.createElement("input","text");
    
  // add an event listener to the input feild.
  inputField.addEventListener("keyup",gotInput);

  // add the text node and input node to the newly created div
  divDisplay.append(textContent);  
  divDisplay.append(inputField); 
  
  // add the div to the body
  document.body.appendChild(divDisplay); 
  
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
