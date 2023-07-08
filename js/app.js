const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `perspective(2300px) translateZ(${zValue * speedz
            }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(${-xValue * speedx
            }px) translateY(${-yValue * speedy
            }px)`;
    });
}

update();

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20

    update(e.clientX);
});


// let timeline = gsap.timeline();

// parallax_el.forEach(el => {
//     timeline.from(
//         el,
//         {
//             top: `${el.dataset.distance}px`,
//             duration: 1,
//         },
//         "1"
//     );
// })
