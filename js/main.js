function convert(seconds){
    let minutes, hours, days;

    days = Math.floor(seconds / 86400);
    seconds -= days * 86400;

    hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;

    minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    return [days,hours,minutes,seconds];
}

function update(){
    var times = convert(seconds); 
        
    for (i=0; i<4; i++){

        observer.observe(cards[i], config);

        if(times[i].toString().length == 1)
            cards[i].textContent = "0" + times[i].toString();
        else
            cards[i].textContent = times[i].toString();
    }

    seconds--;
}

function callback(mutationsList, observer) {
    var target = mutationsList[0].target.parentNode.className; 
    
    //document.styleSheets[0].insertRule("." + target + ":hover { background: black;}",0);
    //document.styleSheets[0].addRule('div.card:hover', 'background: black;');
   
    /*
    for (i=0; i <4; i++){
        if (mutationsList[i].addedNodes[0].textContent != mutationsList[i].removedNodes[0].textContent){
            mutationsList[i].target.parentElement.style.background = "var(--very-dark-mostly-black-blue)";
            mutationsList[i].target.parentElement.style.transform = "translateY(100%) scale(1,-1)";
            mutationsList[i].target.parentElement.style.transition = "transform 500ms ease-in";
        }
    }
    */


}

var cards = document.querySelectorAll(".card div")

const config = {childList: true};  
const observer = new MutationObserver(callback);

let seconds = 777342;


update();
//setInterval(update,1000);

