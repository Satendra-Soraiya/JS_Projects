const box = document.querySelector(".outerbox");

box.addEventListener('click', function (e) {
    const circle = document.createElement('div');
    box.appendChild(circle);

    console.log("event running");
    const rect = box.getBoundingClientRect();


    console.log(rect.left);
    console.log(rect.top);


    const X = e.clientX - rect.left;
    const Y = e.clientY - rect.top;


    Object.assign(circle.style, {
        width: "80px",
        height: "80px",
        position: "absolute",
        left: `${X}px`,
        top: `${Y}px`,
        transform: "translate(-50%,-50%)",
        borderRadius: "50%",
        background: "rgba(0,255,255,0.2)",
        border: "2px solid cyan",
        boxShadow: "0 0 15px cyan, 0 0 40px cyan"
    });
    circle.style.transition = "all 0.5s ease";
    circle.style.transform = "translate(-50%,-50%) scale(0)";
    circle.style.opacity = "1";

    requestAnimationFrame(() => {
        circle.style.transform = "translate(-50%,-50%) scale(2)";
        circle.style.opacity = "0";
    });

    setTimeout(() => {
        circle.remove();
    }, 500);

}, 1000)