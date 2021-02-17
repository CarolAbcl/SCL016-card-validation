import validator from './validator.js';
document.getElementById("numberCard").addEventListener("blur", myFunction);
function myFunction() {
    let creditCardNumber = document.getElementById("numberCard").value;
    //revisa si se completó el campo del formulario para la validación
    if (isNaN(creditCardNumber) || (creditCardNumber == "")) {
      document.getElementById("alertCard").innerHTML = "Debe ingresar un número";
      document.getElementById("numberCard").value ="";
        }
    else{
            //llamado a procedimiento de validación en validator.js
            let validacion = validator.isValid (creditCardNumber);
            if (validacion == true){
              document.getElementById("alertCard").style.color = "#2EA033";
              document.getElementById("alertCard").innerHTML = "Tarjeta de Crédito Válida";
            }
            else{
              document.getElementById("alertCard").style.color = "red";
              document.getElementById("alertCard").innerHTML = "Tarjeta de Crédito Inválida";
            }
            //enmascara numeros de la tarjeta
            let resultado = validator.maskify (creditCardNumber);
            document.getElementById("numberCard").value = resultado;
    }

}