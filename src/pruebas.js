function myFunction() {
    alert("pasa");
    //alertCard = "Tarjeta Valida";
    document.getElementById('alertCard').style.display='block';  
    alertCard = "Tarjeta Valida";
    let creditCardNumber = document.getElementById("numberCard").value;
    console.log(creditCardNumber);
    alert(creditCardNumber);
    console.log(creditCardNumber.lenght);
  }
