const featureMenu = document.getElementById('feature');
const enterPriceMenu = document.getElementById("enterprice");
const supportMenu = document.getElementById("support");
const dropDown = document.querySelector('.float-end');



  const feature = () => {
    const parentDiv = document.createElement('div');
    const featureOne = document.createElement('h4');
    const featureTwo = document.createElement("h4");
    const featureThree = document.createElement("h4");
    featureOne.innerText = `Feature One`;
    featureTwo.innerText = `Feature Two`;
    featureThree.innerText - `Feature Three`;
    parentDiv.appendChild(featureOne);
    parentDiv.appendChild(featureTwo);
    parentDiv.appendChild(featureThree);
    parentDiv.classList.add('mx-5')
    dropDown.appendChild(parentDiv);
  }

  const enterprice = () => {
    const parentDiv = document.createElement('div');
    const featureOne = document.createElement('h4');
    const featureTwo = document.createElement("h4");
    const featureThree = document.createElement("h4");
    featureOne.innerText = `Feature One`;
    featureTwo.innerText = `Feature Two`;
    featureThree.innerText - `Feature Three`;
    parentDiv.appendChild(featureOne);
    parentDiv.appendChild(featureTwo);
    parentDiv.appendChild(featureThree);
    parentDiv.classList.add("mx-3");
    dropDown.appendChild(parentDiv);
  }

  const support = () => {
    const parentDiv = document.createElement('div');
    const featureOne = document.createElement('h4');
    const featureTwo = document.createElement("h4");
    const featureThree = document.createElement("h4");
    featureOne.innerText = `Feature One`;
    featureTwo.innerText = `Feature Two`;
    featureThree.innerText - `Feature Three`;
    parentDiv.appendChild(featureOne);
    parentDiv.appendChild(featureTwo);
    parentDiv.appendChild(featureThree);
    parentDiv.classList.add('mx-1');
    dropDown.appendChild(parentDiv);
  }

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('feature')) {
    feature();
  }
})