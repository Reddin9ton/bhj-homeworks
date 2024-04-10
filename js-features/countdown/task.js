let start = document.getElementById("timer");
let timeValue = parseInt(start.textContent);
start.textContent = "00" + ":" + "00" + ":" + timeValue;
let timerId = setInterval(function() {
    timeValue = timeValue - 1;
    let date = new Date(0, 0, 0, 0, 0, timeValue);
    hours = date.getHours().toString().padStart(2,0);
    minutes = date.getMinutes().toString().padStart(2,0);
    seconds = date.getSeconds().toString().padStart(2,0);
    start.textContent = `${hours}:${minutes}:${seconds}`;
 
    
    if (timeValue === 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
    }
  }, 1000);

