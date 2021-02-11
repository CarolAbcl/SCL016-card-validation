import validator from './validator.js';
//console.log(validator);
document.getElementById("numberCard").addEventListener("blur", myFunction);
function myFunction() {
    let creditCardNumber = document.getElementById("numberCard").value;
    if (isNaN(creditCardNumber)) {
      //alert("debe ingresar un numero");
      document.getElementById("alertCard").innerHTML = "Debe ingresar un número";
      document.getElementById("numberCard").value ="";
        }
    else{
            let validacion = validator.isValid (creditCardNumber);
            //console.log(validacion);
            if (validacion == true){
            document.getElementById("alertCard").innerHTML = "Tarjeta de Crédito Valida";
            }
            else{
            document.getElementById("alertCard").innerHTML = "Tarjeta de Crédito Invalida";
            }
            let resultado = validator.maskify (creditCardNumber);
            document.getElementById("numberCard").value = resultado;
    }

}