let elementArray = [];
function Transfer(leftList, rightList, buttons) {
  this.leftList = leftList;
  this.rightList = rightList;
  this.buttons = buttons;
  Array.from(leftList.children).forEach(event => {
    event.addEventListener("click", function() {
      elementArray.push(event);
      event.style.backgroundColor = "lightgreen";
    });
  });
  Array.from(rightList.children).forEach(event => {
    event.addEventListener(function() {
      elementArray.push(event);
      event.style.backgroundColor = "lightgreen";
    });
  });
  this.rightButton = buttons.querySelector(".right");
  this.leftButton = buttons.querySelector(".left");
  this.rightButton.addEventListener("click", moveRight);
  this.leftButton.addEventListener("click", moveLeft);
  function moveRight() {
    elementArray.forEach(event => {
      rightList.appendChild(event);
      event.style.backgroundColor = "";
      elementArray = [];
    });
  }
  function moveLeft() {
    elementArray.forEach(event => {
      leftList.appendChild(event);
      event.style.backgroundColor = "";
      elementArray = [];
    });
  }

  buttons
    .querySelector(".rightInputButton")
    .addEventListener("click", moveIndexToRight);
  buttons
    .querySelector(".leftInputButton")
    .addEventListener("click", moveIndexToLeft);

  function moveIndexToRight() {
    const fromInput = parseInt(document.querySelector(".fromInput").value);
    const toInput = parseInt(document.querySelector(".toInput").value);
  }
  function moveIndexToLeft() {
    const fromInput = parseInt(document.querySelector(".fromInput").value);
    const toInput = parseInt(document.querySelector(".toInput").value);
  }
}

const firstPairList = new Transfer(
  document.querySelector(".ullist1"),
  document.querySelector(".ullist2"),
  document.querySelector(".buttons12")
);

const secondPairList = new Transfer(
  document.querySelector(".ullist2"),
  document.querySelector(".ullist3"),
  document.querySelector(".buttons23")
);
