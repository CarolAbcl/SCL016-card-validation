const validator = {
  //metodo que valida tarjetas de crédito
    isValid (creditCardNumber){
    // se genera un arreglo desde la cadena y se reversa
    let nuevo = creditCardNumber.split("");
    nuevo = nuevo.reverse();
    //console.log(nuevo);
    //se convierten los datos del arreglo a numeros
    let sizeArray = nuevo.length - 1;
    //console.log (sizeArray); 
    let i = 0;
      for (i = 0; i <= sizeArray; i++){
      let enNumero=parseInt(nuevo[i],10);
      nuevo.splice(i,1,enNumero);
      }
      //console.log(nuevo);
      let double = [];
      for ( i = 0; i <= sizeArray; i++){
      if (i % 2 == 0){
      double.push(nuevo[i]);
      } 
    else{
      let doubleNumber = nuevo[i]*2;
      if (doubleNumber >= 10){
      let decena=(doubleNumber/10);
      decena=parseInt(decena,10);
      //console.log(decena);
      let resto=doubleNumber % 10;
      doubleNumber=decena+resto;
     // console.log(doubleNumber);
      }
    double.push(doubleNumber);
    }
      } 
    let suma=0;
      for (i = 0; i <= sizeArray; i++){
        suma += double[i];
      }
      //console.log(suma);
    let cardStatus = false;
        if ((suma != 0) && (suma % 10 == 0)){
        cardStatus=true;
        }
        //console.log(cardStatus);
    return cardStatus;
  },
  //metodo para enmascarar tarjetas
  maskify (creditCardNumber) {
      let long = creditCardNumber.length - 4;
      //console.log(long);
      let last4 = creditCardNumber.substring(creditCardNumber.length -4);
      let result = ""; 
      //bucle para tapar los numeros de la tarjeta menos los ultimos 4
        for (let mask = 1; mask <= long; mask ++){
        result += "#";
        }
      //console.log(result + last4);
      return result + last4;
    } 
  }
export default validator;
