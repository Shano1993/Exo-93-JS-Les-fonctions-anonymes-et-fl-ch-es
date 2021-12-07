const button1 = document.getElementById('alert');
const button2 = document.getElementById('somme');


button1.addEventListener("click", () =>  alert("Hello World !"));

function myFunction() {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = 5 + 6;
}

button2.addEventListener("click", () => myFunction());


