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
        if(times[i].toString().length == 1){
            cards_top[i].textContent = "0" + times[i].toString();
            cards_below[i].textContent = "0" + times[i].toString();
        }
        else{
            cards_top[i].textContent = times[i].toString();
            cards_below[i].textContent = times[i].toString();
        }        
    }
    seconds--; 
}

function callback(mutationsList, observer) {
    for (i=0; i < mutationsList.length; i++){
        if (mutationsList[i].addedNodes[0].textContent != mutationsList[i].removedNodes[0].textContent){   
            mutationsList[i].target.parentElement.classList.add("anim");
            cards_below[i].parentElement.style.visibility = "visible";
            setTimeout(dlt,900,mutationsList[i].target.parentElement);
        }
    }
}

function obs(){
    for (i=0; i < 4; i++){
        observer.observe(cards_top[i], config);
    }
}

function dlt(target){
    target.classList.remove("anim"); 
    target.nextElementSibling.style.visibility = "hidden";  
}

var cards_top = document.querySelectorAll(".card.top div")
var masks = document.querySelectorAll(".mask")
var cards_below = document.querySelectorAll(".card.below div");

const config = {childList: true};  
const observer = new MutationObserver(callback);

const init_date = new Date().getTime();

let seconds = 1209600;

obs()
update();
setInterval(update,1000);