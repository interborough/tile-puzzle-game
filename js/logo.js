var logo = document.getElementById("logo"); 

//If logo is hovered over, highight it. 
logo.onmouseover = function() {
    logo.style.backgroundColor = "#34495e"; 
}

//If logo is un-hovered, remove its highlight.
logo.onmouseout = function() {
    logo.style.backgroundColor = "rgb(41, 61, 81)";
}

//If logo is clicked, go back to homepage.  
logo.onclick = function() {
    document.location.href = "https://interborough.github.io/tile-puzzle-game/";
}