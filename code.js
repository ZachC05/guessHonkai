const audio = new Audio("Ding.mp3");
var number = 0;
var score = 0;

NewChar();


function Check(){
    let input = document.getElementById('char').value;
    if(number == 0){
        if(input == "Firefly"){
            alert('You Guessed the password correctly!');
            audio.play();
            number++;
            score++;
            NewChar();
        }
        else{
            alert('INCORRECT!');
            number++;
            NewChar();
        }
    }
    else if(number == 1){
        if(input == "Welt" || input == "Welt Yang"){
            alert('You Guessed the password correctly!');
            audio.play();
            number++;
            score++;
            NewChar();
        }
        else{
            alert('INCORRECT!');
            number++;
            NewChar();
        }
    }
    else if(number == 2){
        if(input == "Sunday"){
            alert('You Guessed the password correctly!');
            audio.play();
            number++;
            score++;
            NewChar();
        }
        else{
            alert('INCORRECT!');
            number++;
            NewChar();
        }
    }
    else if(number == 3){
        if(input == "Aventurine"){
            alert('You Guessed the password correctly!');
            audio.play();
            number++;
            score++;
            NewChar();
        }
        else{
            alert('INCORRECT!');
            number++;
            NewChar();
        }
    }
}

function NewChar(){
    const image = document.getElementById("myImage");
    document.getElementById("score").textContent = score + "/4";
    document.getElementById("path").textContent = "Who is this Character";
    if(number == 0){
        image.src = 'Firefly.jpg';
    }
    if(number == 1){
        image.src = 'Welt.jpg';
    }
    if(number == 2){
        image.src = 'Sunday.jpg';
    }
    if(number == 3){
        image.src = 'av.jpg';
    }
    if(number == 4){
        image.src = 'av.jpg';
        if(score == number){
            alert("You Won!!!")
        }
    }
}