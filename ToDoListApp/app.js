//1. user clicks button
//2. capture text in the input field
//3. display the text on the screen
  // create the element
  // add the usertext to the element
  // add the element as a child to the UL
//4. When delete is clicked, delete item
  // add a delete button
  // delete button on click should remove item itself
    // add an event listener
    // delete the parent (list item)
//5. After item is added, clear text field
//6. Auto-focus after adding an item
//7. Enable enter-to-submit functionality


document.addEventListener("DOMContentLoaded", init);

function init(){

  const form = document.querySelector("form.add");
  const addButton = document.querySelector("#addButton");
  const itemToAdd = document.querySelector("#itemToAdd");
  const ul = document.querySelector(".todo");
  //this is to clear the todo list when the user clicks the body
  const body = document.querySelector("body");
  const app = document.querySelector(".app");
  
  app.addEventListener("click", function(event){
    event.stopPropagation();
  });
  
  body.addEventListener("click", function(event){
    ul.innerHTML = ""; //clears any child of this element
  });
  
  //end of clear all tasks code
  
  form.addEventListener("submit", event => { //can also write function(event){}
    event.preventDefault();
    if (!itemToAdd.value) {
      return;
    }
    const newItem = createListItem(itemToAdd.value);
    ul.appendChild(newItem);
    itemToAdd.value = "";
    itemToAdd.focus();
  });
  
  function createListItem(val){
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    
    span.textContent = val;
    delBtn.textContent = "Delete";
    delBtn.classList.add("btn-link");
  
    newLi.appendChild(span);
    span.appendChild(delBtn);
  
    delBtn.addEventListener("click", function(){
      newLi.parentNode.removeChild(newLi);
    })
  
    return newLi;
  }
};
