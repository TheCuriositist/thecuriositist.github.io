//jshint esversion: 7
let footerLoad = function(){
  let footer = `
  <div class="col-md-12">
    <hr />
    <p>Copyright Seiji Furukawa, 2020 <br>All Rights Reserved<p/>
  <div/>
  `;
  divElem = document.querySelector("#pageFooter");
  divElem.innerHTML = footer;
};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //document.querySelector("body").innerHTML = ``;
  let menuArray = ["Home","Podcast","Music","Food","Writing","Resume","About"],aElem,divElem;
  divElem = document.querySelector("#menu");
  console.log(divElem);
  for(i = 0; i < menuArray.length; i++){
    aElem = document.createElement("a");
    aElem.setAttribute("href",menuArray[i].toLowerCase() + ".html");
    aElem.textContent = menuArray[i];
    divElem.appendChild(aElem);
  }
  //document.querySelector("body").innerHTML = `<button id="menuButton">Menu</button>`;
  /*let buttons = document.querySelectorAll("button");
  //register the click handler for the button
  for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",menuLoad);
  }*/
  footerLoad();
});
