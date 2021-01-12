var images = ['pic/puzzle/Row 1 Col 1.jpg', 'pic/puzzle/Row 1 Col 2.jpg', 'pic/puzzle/Row 1 Col 3.jpg', 'pic/puzzle/Row 2 Col 1.jpg',
 'pic/puzzle/Row 2 Col 2.jpg', 'pic/puzzle/Row 2 Col 3.jpg', 'pic/puzzle/Row 3 Col 1.jpg', 'pic/puzzle/Row 3 Col 2.jpg', 'pic/puzzle/Row 3 Col 3.jpg']; 

var swapCount = 0; 

document.addEventListener("DOMContentLoaded", function() 
{
   randomPositions("picOne"); 
   randomPositions("picTwo"); 
   randomPositions("picThree"); 
   randomPositions("picFour"); 
   randomPositions("picFive"); 
   randomPositions("picSix"); 
   randomPositions("picSeven"); 
   randomPositions("picEight"); 
   randomPositions("picNine");
});

//Generates Random Positions for each picture upon page load.
function randomPositions(picID)
{
   var randomNum = Math.floor(Math.random() * images.length);

  while(images[randomNum] == undefined)
  {
    randomNum = Math.floor(Math.random() * images.length);
  }

   document.getElementById(picID).src = images[randomNum];
   delete images[randomNum]; 
}

//Gets the ID's of the two images to be swapped based on their respective checkboxes. 
function swapImages()
{
    var checkedBoxes = document.querySelectorAll('input[name=box]:checked');
  
    if(checkedBoxes.length != 2)
    {
       window.alert("Please select two images and try again."); 
       $('input[type=checkbox]').prop('checked', false);
       return; 
    }
   
    var firstCheckedBox = checkedBoxes[0].id; 
    var secondCheckedBox = checkedBoxes[1].id;

    var firstIsolatedNum = firstCheckedBox.split("checkbox"); 
    var secondIsolatedNum = secondCheckedBox.split("checkbox"); 
    
    var firstIsolatedNumNoComma = firstIsolatedNum.toString().substr(1); 
    var secondIsolatedNumNoComma = secondIsolatedNum.toString().substr(1);
    
    var picIDOne = "pic" + firstIsolatedNumNoComma; 
    var picIDTwo = "pic" + secondIsolatedNumNoComma; 

    swapImagesHelper(picIDOne, picIDTwo); 
}

//Swaps the two images whose ID's are inputted. 
function swapImagesHelper(picIDOne, picIDTwo)
{
    var picOne = document.getElementById(picIDOne).src; 
    var picTwo = document.getElementById(picIDTwo).src; 
    document.getElementById(picIDOne).src = picTwo; 
    document.getElementById(picIDTwo).src = picOne; 

    $('input[type=checkbox]').prop('checked', false);
    swapCount++; 
    gameWon(); 
}

//Checks if the game is over. 
function gameWon()
{
    var imgPosOne = document.getElementById("picOne"); 
    var imgPosTwo = document.getElementById("picTwo"); 
    var imgPosThree = document.getElementById("picThree");
    var imgPosFour = document.getElementById("picFour"); 
    var imgPosFive = document.getElementById("picFive"); 
    var imgPosSix = document.getElementById("picSix"); 
    var imgPosSeven = document.getElementById("picSeven"); 
    var imgPosEight = document.getElementById("picEight"); 
    var imgPosNine = document.getElementById("picNine"); 

    if(imgPosOne.src == 'https://raw.githubusercontent.com/interborough/tile-puzzle-game/main/pic/puzzle/Row%201%20Col%201.jpg' && imgPosTwo.src == 'https://raw.githubusercontent.com/interborough/tile-puzzle-game/main/pic/puzzle/Row%201%20Col%202.jpg' 
          && imgPosThree.src == 'https://raw.githubusercontent.com/interborough/tile-puzzle-game/main/pic/puzzle/Row%201%20Col%203.jpg' && imgPosFour.src == 'https://raw.githubusercontent.com/interborough/tile-puzzle-game/main/pic/puzzle/Row%202%20Col%201.jpg' 
          && imgPosFive.src == 'https://raw.githubusercontent.com/interborough/tile-puzzle-game/main/pic/puzzle/Row%202%20Col%202.jpg' && imgPosSix.src == 'https://raw.githubusercontent.com/interborough/tile-puzzle-game/main/pic/puzzle/Row%202%20Col%203.jpg'
          && imgPosSeven.src == 'https://raw.githubusercontent.com/interborough/tile-puzzle-game/main/pic/puzzle/Row%203%20Col%201.jpg' && imgPosEight.src == 'https://raw.githubusercontent.com/interborough/tile-puzzle-game/main/pic/puzzle/Row%203%20Col%202.jpg' 
          && imgPosNine.src == 'https://raw.githubusercontent.com/interborough/tile-puzzle-game/main/pic/puzzle/Row%203%20Col%203.jpg')
     {
         if(swapCount == 1)
         {
            window.alert("You win! You took " + swapCount + " swap to solve this puzzle."); 
         }
         else
         {
            window.alert("You win! You took " + swapCount + " swaps to solve this puzzle.");
         }
      
         document.location.reload();
     }

}