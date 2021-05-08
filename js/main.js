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
    var test = convert(seconds);
    
    for (i=0; i<4; i++){
        times[i].innerText = test[i].toString();
    }
    seconds--;
}


var times = document.querySelectorAll(".card div")

let seconds = 360;


setInterval(update,1000);
