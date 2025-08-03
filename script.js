let scrollRevealOption = {
    distance: "15px",
    duration: 500,
};
ScrollReveal().reveal(".conta", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal(".conta", {
     ...scrollRevealOption,
     delay: 500,
});
let text = document.querySelector(".text");
let btns = document.querySelectorAll(".btn");
let btnContianer = document.querySelector(".btnContianer");
let contai = document.querySelector(".contai");
contai.addEventListener("click",()=>{
btnContianer.classList.toggle("hidden")
});
btns.forEach((key)=>{
key.addEventListener("click",()=>{
text.innerHTML = key.innerHTML;
btnContianer.classList.toggle("hidden");
});
})

