// Initial grid setup 

window.onload = function() {
   initGrid();

}

let submitBtn = document.getElementById("myBtn");
let container = document.getElementById("container");
let diffColorBtn = document.getElementById("changeColorBtn");
let resetBtn = document.getElementById("resetBtn");


// Scale buttons in and out on clicks
diffColorBtn.addEventListener("mousedown", function() {
   diffColorBtn.style.transform = "scale(.9)";
})
diffColorBtn.addEventListener("mouseup", function() {
   diffColorBtn.style.transform = "scale(1)";
})


// Scale buttons in and out on clicks
submitBtn.addEventListener("mousedown", function() {
   submitBtn.style.transform = "scale(.9)";
})
submitBtn.addEventListener("mouseup", function() {
   submitBtn.style.transform = "scale(1)";
})

// Scale buttons in and out on clicks
resetBtn.addEventListener("mousedown", function() {
   resetBtn.style.transform = "scale(.9)";
})
resetBtn.addEventListener("mouseup", function() {
   resetBtn.style.transform = "scale(1)";
})

// Reset grid to 16x16
resetBtn.addEventListener("click", function() {
   initGrid();
})


submitBtn.addEventListener("click", function(numOfTiles) {
   // reset
   container.innerHTML = '';
   
   // container 2 built so DOM is accessed only once
   let container2 = document.createElement('div')
   container2.classList.add('container');
   numOfTiles = document.getElementById("userInput").value;
   // If user input has an whitespace, it will delete
   numOfTiles = Number(numOfTiles.trim());
   // tests if user input is a numnber
   if(numOfTiles%1==0 && Number.isInteger(numOfTiles) && numOfTiles != '') {
      if(numOfTiles >= 5 && numOfTiles <=64) {
         makeGrid(numOfTiles, container2);
      } else {
         alert("Please enter a number from 5 to 64")
      }
   } else {
      alert("Please enter a valid number from 5 to 64");
   }
   document.getElementById("userInput").value = '';
});

diffColorBtn.addEventListener("click", function () {
   addColorTiles();
});

function initGrid() {
   container.innerHTML = '';
   let numOfTiles = 16;
   let container2 = document.createElement('div')
   container2.classList.add('container');
   makeGrid(numOfTiles, container2);
}

function makeGrid(numOfTiles, container2) {
   // create tiles and organize tiles
   for (let j = 1; j<=numOfTiles; j++) {
      let divj = document.createElement("div");
      for(let i = 1; i<=numOfTiles; i++) {
         let divi = document.createElement("div");
         let tileSize = (650/numOfTiles) + "px";
         divi.style.height = tileSize;
         divi.style.width = tileSize;
         divi.classList.add("tile");
         divi.addEventListener("mouseover", function() {
            divi.style.backgroundColor = "black";
            makeOpaque(divi);
         });
         divj.appendChild(divi);
         container2.appendChild(divj);
      }
   }
   container.appendChild(container2);
}

function makeOpaque(tile) {
      if(parseFloat(tile.style.opacity) <1) {
         tile.style.opacity= parseFloat(tile.style.opacity)+0.1;
      } else if (parseFloat(tile.style.opacity)>=1){
         return;
      } else {
         tile.style.opacity = 0.1;
      }
}

function getRandomColor() {
   let letters = "0123456789ABCDEF";
   let color = "#";
   for(let i = 0; i<6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

function addColorTiles () {
   let tiles = document.getElementsByClassName("tile");
   tiles = Array.from(tiles);
   tiles.forEach(function(tile) {
      let newColor = getRandomColor();
      tile.addEventListener("mouseover", function(){
         tile.style.backgroundColor = newColor;
      });
   });   
}