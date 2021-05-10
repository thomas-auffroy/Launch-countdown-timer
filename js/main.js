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
        if(times[i].toString().length == 1)
            cards[i].textContent = "0" + times[i].toString();
        else
            cards[i].textContent = times[i].toString();

        dlt(masks[i]);
    }
   
    seconds--;
    
}

function callback(mutationsList, observer) {
    for (i=0; i <4; i++){
        if (mutationsList[i].addedNodes[0].textContent != mutationsList[i].removedNodes[0].textContent){
            masks[i].classList.add("anim"); 
        }
    }
}

function obs(){
    for (i=0; i<4; i++){
        observer.observe(cards[i], config);
    }
}

function dlt(target){
    target.classList.remove("anim");
    console.log(target)
}

var cards = document.querySelectorAll(".card div")
var masks = document.querySelectorAll(".mask")

const config = {childList: true};  
const observer = new MutationObserver(callback);

const init_date = new Date().getTime();

let seconds = 777342;

obs()
update();
setInterval(update,1000);
//setTimeout(dlt,10,masks[3]);