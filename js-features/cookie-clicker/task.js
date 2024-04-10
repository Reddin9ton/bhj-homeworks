cookie.onclick = function () { 
  let cookieWidth = document.getElementById("cookie");
  let cookiCounter = document.getElementById("clicker__counter");
  cookiCounter.textContent ++;
  if (cookiCounter.textContent % 2 === 0) {
    cookieWidth.width -= 20;
    cookieWidth.height -= 20;
  } else {
    cookieWidth.width += 20;
    cookieWidth.height += 20;

  }
  let date = new Date();
  let seconds = date.getSeconds();
  let cookiSpeed = document.getElementById("speed__counter");
  let speeder = Number(cookiCounter.textContent) / seconds;
  cookiSpeed.textContent = speeder;

 };
