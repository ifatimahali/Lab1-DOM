let namE = document.querySelector(".name");
console.log(namE)
let changeText = document.querySelector(".but1");
console.log(changeText);
changeText.addEventListener("click", (e)=> {
    namE.textContent = "Ali"
});

let sizeDecr = document.querySelector(".but2");
sizeDecr.addEventListener("click", (e)=> {
    namE.style.fontSize = "100px"
});
let changeColor = document.querySelector(".but3");
changeColor.addEventListener("click", (e)=> {
    namE.style.color = "blue"
});
let changeBacgraund = document.querySelector(".but4");
changeBacgraund.addEventListener("click", (e)=> {
    namE.style.backgroundColor = "blue"
});

let image = document.querySelector(".but5");
image.addEventListener("click", (e)=> {
    document.querySelector("img").src="/img.jpg";
});


