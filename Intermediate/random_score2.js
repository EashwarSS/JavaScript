prompt("What is your name?")
prompt("What is wife name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
// alert("Your love score is " + loveScore + "%");

if (loveScore > 75) {
    alert("Your love is score is " + loveScore + "%" + " You are made for each other.")
} 
if (loveScore > 30 && loveScore <= 70) {
    alert("Your love is score is " + loveScore + "%" + " You are not made for each other.")
}
if (loveScore <= 30) {
    alert("Your love is score is " + loveScore + "%" + " You are waste in relationship and love.")
} 
