var array = [];

function Listing(parentList, mapList, button) {
  this.parentList = parentList;
  this.mapList = mapList;
  this.button = button;
  Array.from(parentList.children).forEach(e => {
    e.addEventListener("click", mapRight);
  });
  Array.from(mapList.children).forEach(e => {
    e.addEventListener("click", mapLeft);
  });
  this.rightButton = button.querySelector(".rightButton");
  this.leftButton = button.querySelector(".leftButton");
  this.rightButton.addEventListener("click", funcR);
  this.leftButton.addEventListener("click", funcL);

  function mapRight(e) {
    array.push(e.target);
  }

  function mapLeft(e) {
    array.push(e.target);
  }

  function funcR(e) {
    array.forEach(e => {
      mapList.appendChild(e);
    });
    array = [];
  }
  function funcL(e) {
    array.forEach(e => {
      parentList.appendChild(e);
    });
    array = [];
  }
}

let pairOne = new Listing(
  document.querySelector(".listOne"),
  document.querySelector(".listTwo"),
  document.querySelector(".buttonOneTwo")
);
let pairTwo = new Listing(
  document.querySelector(".listTwo"),
  document.querySelector(".listThree"),
  document.querySelector(".buttonTwoThree")
);
let pairThree = new Listing(
  document.querySelector(".listThree"),
  document.querySelector(".listFour"),
  document.querySelector(".buttonThreeFour")
);
let pairFour = new Listing(
  document.querySelector(".listFour"),
  document.querySelector(".listFive"),
  document.querySelector(".buttonFourFive")
);
let pairFix = new Listing(
  document.querySelector(".listFive"),
  document.querySelector(".listSix"),
  document.querySelector(".buttonFiveSix")
);
