let numbers = document.querySelectorAll(".number");
let inp = document.getElementById("calc");
window.addEventListener("keypress", (e) => {
    let num = parseInt(e.key)
    if(num>=0 && num <= 9) {
        inp.value += e.key 
    }
})
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    let num = event.target.innerText;
    inp.value += num
  });
});
