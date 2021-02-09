function myFunction() {
    //let alertCard = "Tarjeta Valida";
    //document.getElementById('alertCard').style.display='block';
    document.getElementById("alertCard").innerHTML = "Tarjeta Valida";
    let creditCardNumber = document.getElementById("numberCard").value;
    console.log(creditCardNumber);
    let largo = creditCardNumber.length - 4;
    console.log(largo);
    let last4 = creditCardNumber.substring(creditCardNumber.length -4);
    let result = ""; 
   for (let tap = 1; tap <= largo; tap ++){
     result += "#";
    }
    console.log(result + last4);
    document.getElementById("alertCard").innerHTML = (result + last4);
  }
