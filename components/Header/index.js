// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-Container component

function Header() {
    let div = document.createElement("div"); 
    div.setAttribute("class", "header"); 

    let span = document.createElement("span"); 
    span.setAttribute("class", "date"); 
    span.textContent = "SMARCH 28, 2019"; 
    div.appendChild(span);
    
    let h1 = document.createElement('h1'); 
    h1.textContent = "Lambda Times"; 
    div.appendChild(h1); 

    let spanTemp = document.createElement("span"); 
    spanTemp.setAttribute("class", "temp"); 
    spanTemp.textContent = "98°"; 
    div.appendChild(spanTemp); 

    return div; 
}

let headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header()); 
 


