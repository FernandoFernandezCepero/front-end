

//Dit voeg ik toe
var fires = [document.getElementById('vuur'),document.getElementById('vuur1'),document.getElementById('vuur2'),document.getElementById('vuur3'),document.getElementById('vuur4')];

//De functie om het spel te herstarten
function restart(){

    x = 0

    document.getElementById('result').classList.add('hidden');
    document.getElementById('result').classList.remove('show');
   
    document.getElementById('vuur').classList.add('hidden');
    document.getElementById('vuur').classList.remove('show');

    document.getElementById('vuur1').classList.add('hidden');
    document.getElementById('vuur1').classList.remove('show');

    document.getElementById('vuur2').classList.add('hidden');  
    document.getElementById('vuur2').classList.remove('show');

    document.getElementById('vuur3').classList.add('hidden');  
    document.getElementById('vuur3').classList.remove('show');

    document.getElementById('vuur4').classList.add('hidden');  
    document.getElementById('vuur4').classList.remove('show');

    document.getElementById('restart').classList.add('hidden');
    document.getElementById('restart').classList.remove('show');

    document.getElementById('vuurButton').classList.add('show');
    document.getElementById("myC").style.cursor = "";
}

//Functie die aangeeft of je het spel hebt gehaald
function myFunction () {
    console.log('runned');
    if(x >= 5)
    {

        document.getElementById('vuurButton').classList.add('hidden');
        document.getElementById('vuurButton').classList.remove('show');

        document.getElementById('restart').classList.add('show');
        win()
    }
}


restart()



//Dit is de start knop om te beginnen met de demo
document.getElementById('vuurButton'). onclick = function(event){
    startTimer(20);
    document.getElementById('vuur').classList.add("show");

    setTimeout(function(){document.getElementById('vuur1').classList.add("show");}, 1000);

    setTimeout(function(){document.getElementById('vuur2').classList.add("show");}, 2500);

    setTimeout(function(){document.getElementById('vuur3').classList.add("show");}, 4000);

    setTimeout(function(){document.getElementById('vuur4').classList.add("show");}, 5500);

    start()
    document.getElementById('result').classList.add('show');
    document.getElementById('vuurButton').classList.remove('show');
    document.getElementById('vuurButton').classList.add('hidden');
    document.getElementById("myC").style.cursor="url('image/blusser.png'),help";

};

//Dit is de restart button om het spel opnieuw te spelen.
document.getElementById('restart'). onclick = function(event){
    restart()
    resetl()
    resetw()
    document.getElementById('restart').classList.remove('show');
    document.getElementById('restart').classList.add('hidden');
};

function start(){
    var str = document.getElementById("result").innerHTML; 
    var res = str.replace("", "Snel blus het vuur!");
    document.getElementById("result").innerHTML = res;
}

function fail(){
    var str = document.getElementById("result").innerHTML; 
    var res = str.replace("Snel blus het vuur!", "Jammer! Je hebt het helaas niet gehaald.");
    document.getElementById("result").innerHTML = res;
}

function resetl(){
    var str = document.getElementById("result").innerHTML; 
    var res = str.replace("Jammer! Je hebt het helaas niet gehaald.", "");
    document.getElementById("result").innerHTML = res;
}

function resetw(){
    var str = document.getElementById("result").innerHTML; 
    var res = str.replace("Goed gedaan! Het gebouw is geblust.", "");
    document.getElementById("result").innerHTML = res;
}

function win(){
    var str = document.getElementById("result").innerHTML; 
    var res = str.replace("Snel blus het vuur!", "Goed gedaan! Het gebouw is geblust.");
    document.getElementById("result").innerHTML = res;
}



var timeInSecs;
var ticker;

function startTimer(secs){
timeInSecs = parseInt(secs)-1;
ticker = setInterval("tick()",1000);   // elke seconde
}

function tick() {
var secs = timeInSecs;
if (secs>0) {
timeInSecs--;
}
else {
    fail()
    document.getElementById('restart').classList.add('show');
    
    
clearInterval(ticker); // stop tellen bij 0  
}

if(x >= 5){
    clearInterval(ticker);
}

if (secs<10){
    secs = "0" + secs
}
document.getElementById("countdown").innerHTML = secs;
}




//Op het moment dat er op een vlam wordt geklikt, word 'show' weggehaald en vervangen door 'hidden'.
//Dit gebeurd bij alle vlammen. Bij elke vlam die aangeklikt is komt er een x bij.
var x = 0
document.getElementById('vuur').onclick = function(event){
    document.getElementById('vuur').classList.add('hidden');
    document.getElementById('vuur').classList.remove('show');
    x++
    console.log(x + " vlam geblust");
    myFunction();
};
document.getElementById('vuur1').onclick = function(event){
    document.getElementById('vuur1').classList.add('hidden');
    document.getElementById('vuur1').classList.remove('show');
    x++
    console.log(x + " vlammen geblust");
    myFunction();
};
document.getElementById('vuur2').onclick = function(event){
    document.getElementById('vuur2').classList.add('hidden');
    document.getElementById('vuur2').classList.remove('show');
    x++
    console.log(x + " vlammen geblust");
    myFunction();
};
document.getElementById('vuur3').onclick = function(event){
    document.getElementById('vuur3').classList.add('hidden');
    document.getElementById('vuur3').classList.remove('show');
    x++
    console.log(x + " vlammen geblust");
    myFunction();
};
document.getElementById('vuur4').onclick = function(event){
    document.getElementById('vuur4').classList.add('hidden');
    document.getElementById('vuur4').classList.remove('show');
    x++
    console.log(x + " vlammen geblust");
    myFunction();
};

//refresh de pagina na 90 seconden
    setInterval(function(reload){
        window.location.reload(1);
        console.log("reload");
     }, 90000);