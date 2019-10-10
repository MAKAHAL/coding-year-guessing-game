var computerGuess;
    var userGuessLog = [];
    var attempts= 0;

function newGame(){
    window.location.reload();
}
    function init(){

        computerGuess= 1990;
        console.log(computerGuess);
    }
    function compareGuess(){
        var userGuess = " " + document.getElementById('inputBox').value;
        console.log(userGuess);
      userGuessLog.push(userGuess);
      console.log(userGuessLog);
document.getElementById('guessLog').innerHTML = userGuessLog;
attempts++;
document.getElementById('attemps').innerHTML = attempts;

        if(userGuess > computerGuess){
        document.getElementById('textOutPut').innerHTML = 'Your guess is too high';
        Document.getElementById("inputBox").value = "";
    } else if (userGuess< computerGuess){
        document.getElementById('textOutPut').innerHTML = 'Your guess is too low';
        Document.getElementById("inputBox").value = ""; //is supposed to clear the number you enter but it's not working but im too lazy to remove it.
    }else{
        document.getElementById('textOutPut').innerHTML = 'CORRECT!';
    }
        
    }
    

    function init(){

computerGuess= 1994;
console.log(computerGuess);


}
function init(){

computerGuess= 1979;
console.log(computerGuess);
if(userGuess > computerGuess){
        document.getElementById('textOutPut').innerHTML = 'Your guess is too high';
        Document.getElementById("inputBox").value = "";
    } else if (userGuess< computerGuess){
        document.getElementById('textOutPut').innerHTML = 'Your guess is too low';
        Document.getElementById("inputBox").value = "";
    }else{
        document.getElementById('textOutPut').innerHTML = 'CORRECT!';
    }
}
function init(){

computerGuess= 2001;
console.log(computerGuess);
if(userGuess > computerGuess){
        document.getElementById('textOutPut').innerHTML = 'Your guess is too high';
        Document.getElementById("inputBox").value = "";
    } else if (userGuess< computerGuess){
        document.getElementById('textOutPut').innerHTML = 'Your guess is too low';
        Document.getElementById("inputBox").value = "";
    }else{
        document.getElementById('textOutPut').innerHTML = 'CORRECT!';
    }
}
function init(){

computerGuess= 1996;
console.log(computerGuess);
if(userGuess > computerGuess){
        document.getElementById('textOutPut').innerHTML = 'Your guess is too high';
        Document.getElementById("inputBox").value = "";
    } else if (userGuess< computerGuess){
        document.getElementById('textOutPut').innerHTML = 'Your guess is too low';
        Document.getElementById("inputBox").value = "";
    }else{
        document.getElementById('textOutPut').innerHTML = 'CORRECT!';
    }
}
function init(){

computerGuess= 1995;
console.log(computerGuess);
if(userGuess > computerGuess){
        document.getElementById('textOutPut').innerHTML = 'Your guess is too high';
        Document.getElementById("inputBox").value = "";
    } else if (userGuess< computerGuess){
        document.getElementById('textOutPut').innerHTML = 'Your guess is too low';
        Document.getElementById("inputBox").value = "";
    }else{
        document.getElementById('textOutPut').innerHTML = 'CORRECT!';
    }
}












