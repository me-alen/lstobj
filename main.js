let elementArray = [];

function Transfer(leftList, rightList, buttons, elementAddButton) {
  this.leftList = leftList;
  this.rightList = rightList;
  this.buttons = buttons;
  this.elementAddButton = elementAddButton;

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
  this.addButton = elementAddButton.querySelector(".addElement");
  this.addButton.addEventListener("click", addNewElement);

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
    const fromInput = parseInt(buttons.querySelector(".fromInput").value);
    const toInput = parseInt(buttons.querySelector(".toInput").value);
    Array.from(leftList.children)
      .slice(fromInput - 1, toInput)
      .forEach(event => {
        rightList.appendChild(event);
      });
  }
  function moveIndexToLeft() {
    const fromInput = parseInt(buttons.querySelector(".fromInput").value);
    const toInput = parseInt(buttons.querySelector(".toInput").value);
    Array.from(rightList.children)
      .slice(fromInput - 1, toInput)
      .forEach(event => {
        leftList.appendChild(event);
      });
  }

  function addNewElement() {
    const inputValue = elementAddButton.querySelector(".newListInput").value;
    const listNo = elementAddButton.querySelector("select").value;
    let newListElement = document.createElement("li");
    newListElement.textContent = inputValue;
    if (newListElement === null) {
      switch (listNo) {
        case "list1":
          document.querySelector(".ullist1").appendChild(newListElement);
          break;
        case "list2":
          document.querySelector(".ullist2").appendChild(newListElement);
          break;
        case "list3":
          document.querySelector(".ullist3").appendChild(newListElement);
          break;
        default:
          break;
      }
    }
  }
}

const firstPairList = new Transfer(
  document.querySelector(".ullist1"),
  document.querySelector(".ullist2"),
  document.querySelector(".buttons12"),
  document.querySelector(".newElementInput")
);

const secondPairList = new Transfer(
  document.querySelector(".ullist2"),
  document.querySelector(".ullist3"),
  document.querySelector(".buttons23")
);
