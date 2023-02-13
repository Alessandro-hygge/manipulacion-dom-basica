const h1 = document.querySelector("h1");
const form = document.querySelector("#formID");
const input = document.querySelector("#calculoID");
const input2 = document.querySelector("#calculo2ID");
const btnCalcular = document.querySelector("#btnCalcularID");


form.addEventListener('submit', sumarValores);

function sumarValores(event){
    console.log(event);
    event.preventDefault();
    let resultado = parseInt(calculoID.value) + parseInt(calculo2ID.value);
    presultID.innerText=resultado;
}



