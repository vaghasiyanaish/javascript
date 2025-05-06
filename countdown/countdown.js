let time=10;

setInterval(() => {
    if(time>0){
        time--;
        document.getElementById("time").innerHTML = time;
    }else{
        document.getElementById("time").innerHTML = "Time's up!";
    }
}, 1000);

//birthday countdown timer

let birthday = new Date("2024-01-01T00:00:00").getTime();

let countdown = setInterval(() => { 
    let now = new Date().getTime();
    let distance = birthday - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("birthday").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("birthday").innerHTML = "EXPIRED";
    }
});