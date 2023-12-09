let entries = [
  "Christmas Cookies",
  "Hero catches heroine",
  "Sassy hair dresser",
  "Carolers",
  "Small town feud",
  "Hero brushes hair back for heroine",
  "Hot chocolate",
  "Best friend hits on someone",
  "Red cowboy boots",
  "First kiss",
  "Awkward family dinner",
  "Sleigh ride",
  "Snow",
  "Neighborhood gossip",
  "Hero is someone from childhood",
  "Christmas tree decorating",
  "Strange family Christmas tradition",
  "Mother gives sage advice",
  "Someone is slapped or punched",
  "Waking up with full makeup",
  "Hero wears Henley shirt",
  "Cute old farm truck",
  "Horse is pre-saddled",
  "Christmas wish"
];

const card = document.querySelector(".card");

let gridDim = 5;

const inCenter = (i, j, dim) => {
  let isInCenter = false;

  // If dim is odd
  if (dim % 2 === 1) {
    centerDim = Math.floor(dim / 2);
    isInCenter = i === centerDim && j === centerDim;
  }

  return isInCenter;
}

const cardCreator = (width, height) => {
  card.innerHTML = "";

  // Populate the card
  for (let i = 0; i < width; i++) {
    let subcontainer = document.createElement("div");
    subcontainer.classList.add(`col-${i}`);
    subcontainer.style.display = "flex";
    subcontainer.style.flexDirection = "column";
    subcontainer.style.flex = "auto";
    card.appendChild(subcontainer);

    // Create the boxes
    for (let j=0; j<height; j++) {
      let box = document.createElement("div");
      box.classList.add(`col-${i}`);
      box.classList.add(`row-${j}`);

      box.style.borderLeftStyle = "solid";
      box.style.borderTopStyle = "solid";
      box.style.color = "#386641";
      box.style.padding = "4px";
      box.style.backgroundColor = "#F2E8CF";

      if (i === width - 1) box.style.borderRightStyle = "solid";
      if (j === height - 1) box.style.borderBottomStyle = "solid";

      box.innerText = "fdlkjfdlkjfkd";
      if (inCenter(i, j, gridDim)) {
        box.innerText = "Free";
      }

      box.style.borderColor = "#BC4749";
      box.style.flex = "auto";
      box.dataset.depth = 0;

      subcontainer.appendChild(box);
    }
  }  
}

cardCreator(gridDim, gridDim);
