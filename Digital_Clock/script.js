const time = document.querySelector(".time")

setInterval(() => {

    const now = new Date();

    time.innerText = now.toLocaleTimeString();

}, 1000);