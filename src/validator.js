const validator = {
  //metodo que valida tarjetas de crédito
    isValid (creditCardNumber){
    // se genera un arreglo desde la cadena y se reversa
    let nuevo = creditCardNumber.split("");
    nuevo = nuevo.reverse();
    //se convierten los datos del arreglo a números
    let sizeArray = nuevo.length - 1;
    let i = 0;
      for (i = 0; i <= sizeArray; i++){
      let enNumero=parseInt(nuevo[i],10);
      nuevo.splice(i,1,enNumero);
      }
      //inicio algoritmo de Lhun
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
      let resto=doubleNumber % 10;
      doubleNumber=decena+resto;
      }
      double.push(doubleNumber);
    }
      } 
    let suma=0;
      for (i = 0; i <= sizeArray; i++){
        suma += double[i];
      }
    let cardStatus = false;
        if ((suma != 0) && (suma % 10 == 0)){
        cardStatus=true;
        }
    return cardStatus;
  },
  //metodo para enmascarar tarjetas
  maskify (creditCardNumber) {
      let long = creditCardNumber.length - 4;
      let last4 = creditCardNumber.substring(creditCardNumber.length -4);
      let result = ""; 
      //bucle para tapar los numeros de la tarjeta menos los ultimos 4
        for (let mask = 1; mask <= long; mask ++){
        result += "#";
        }
      return result + last4;
    } 
  }
export default validator;
