let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    
    if(value > 0){
        header.style.background = "rgba(0, 0, 0, 0.8)";
    } else {
        header.style.background = "transparent";
    }
})

let planosBtn = document.querySelector(".planos-btn");

planosBtn.addEventListener("click", () => {
    location.href = "https://www.google.com/maps/place/11370+Los+Barrios,+C%C3%A1diz/data=!4m2!3m1!1s0xd0cec62501dcdf9:0xc5d6b198daffeaa5?sa=X&ved=2ahUKEwjRrbK97Kn_AhUzWaQEHaAWBdEQ8gF6BAgIEAI";
})