function Login()
{
    
    player_name = document.getElementById("playername").value;
    localStorage.setItem("player_name", player_name);

    window.location = "gamepage.html";
}
 var y = Math.floor(Math.random() * 10 + 1);
 var x = document.getElementById("guessField").value;
if (x==y)
{
    alert("CONGRATS!!!" +player_name+" You Guessed It Right!"
    + guess + "Guess");
    guess= 1;
}
else if (x>y)
{
    guess++;
alert("Try a Smaller Number");
}
else 
{
    guess++
    alert("Try a Bigger Number");
}
function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}