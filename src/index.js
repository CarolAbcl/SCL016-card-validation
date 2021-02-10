import validator from './validator.js';
console.log(validator);
document.getElementById("numberCard").addEventListener("blur", myFunction);
function myFunction() {
    let creditCardNumber = document.getElementById("numberCard").value;
    if (isNaN(creditCardNumber)) {
      alert("debe ingresar un numero");
      document.getElementById("alertCard").innerHTML = "Debe ingresar un número";
      document.getElementById("numberCard").value="";
    }
    else{
    let resultado = validator.maskify (creditCardNumber);
    console.log(validator.isValid (creditCardNumber));
    document.getElementById("numberCard").value = resultado;
    document.getElementById("alertCard").innerHTML = resultado;
    }

}