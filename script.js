function rpsGame(yourchoice) {
    console.log(yourchoice);
        var humanchoice, botchoice;
         humanchoice = yourchoice.id;

         botchoice = numberToChoice(randToRpsInt());
         console.log('computer choice:', botchoice);

        result = decideWinner(humanchoice , botchoice); // [0,1] humanLost | bot won
        console.log(result);
        
        message = finalMessage(result); // 'you won'
        console.log(message);

rpsFrontEnd(yourchoice.id, botchoice, message);
}

//random selector
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
 return['rock' , 'paper' , 'scissor'][number];
}

function decideWinner(yourchoice , computerchoice){
    var rpsDataBase = {
        'rock': {'scissor':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissor':0},
        'scissor':{'paper':1, 'scissor':0.5, 'rock':0},
    };

var yourscore = rpsDataBase[yourchoice][computerchoice];
var computerscore = rpsDataBase[computerchoice][yourchoice];

    return [yourscore , computerscore];
}

function finalMessage([yourscore , computerscore]) {
    if (yourscore === 0){
    return{'message':'You Lost!','color': 'red'};
    }else if(yourscore === 0.5){
    return{'message':"Draw" , 'color': 'yellow'};
    }else{
        return{'message':'you Won!', 'color': 'green'};
    }
}
function rpsFrontEnd(humanimagechoise , botimagechoice , finalMessage) {
   var imageDataBase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissor': document.getElementById('scissor').src,
}

//remove all images
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissor').remove();

var humandiv = document.createElement('div');
var botdiv = document.createElement('div');
var messagediv = document.createElement('div');

humandiv.innerHTML= "<img src ='" + imageDataBase[humanimagechoise] + "'height=150 width=150 syle='box-shadow:0px 10px 50px rgba(937 , 50 , 233,1);'>"
messagediv.innerHTML= "<h1 style='color: "+finalMessage['color'] + ";font-size:60px; padding:30px;'>" + finalMessage['message'] + "</h1>"
botdiv.innerHTML= "<img src ='" + imageDataBase[botimagechoice] + "'height=150 width=150 syle='box-shadow:0px 10px 50px rgba(937 , 50 , 233,1);'>"

document.getElementById('flex-rps').appendChild(humandiv);
document.getElementById('flex-rps').appendChild(messagediv);
document.getElementById('flex-rps').appendChild(botdiv);
}