var character = document.getElementById("character");
var block = document.getElementById("block");
var score = document.getElementById("score");
var i = 0;
function jump()
{
    if(character.classList != "animate")// only add class if class is empty
    {
        character.classList.add("animate");
    }
    setTimeout(function()// elimiate class to jump again
    {
        character.classList.remove("animate");
    },500);
    
}

var checkDead = setInterval(function()
{
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));// vertical value of character
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));// horizontal value of the block
    if(blockLeft<20 && blockLeft>0 && characterTop>= 130)
    {
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose.");
    }
    if(blockLeft<5 && blockLeft>0)
    {
        i++;
    }
    function scoreBoard()
    {
        var scores = i;
        score.innerHTML = scores;
    }
scoreBoard();
},10);
