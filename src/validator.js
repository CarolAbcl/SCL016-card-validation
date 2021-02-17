const validator = {
  //metodo que valida tarjetas de crédito
    isValid (creditCardNumber){
    // se genera un arreglo desde la cadena y se reversa
    let newArray = creditCardNumber.split("");
    newArray = newArray.reverse();
    //se convierten los datos del arreglo a números
    let sizeArray = newArray.length - 1;
    let i = 0;
      for (i = 0; i <= sizeArray; i++){
      let inNumber=parseInt(newArray[i],10);
      newArray.splice(i,1,inNumber);
      }
      //inicio algoritmo de Lhun
      let double = [];
      for ( i = 0; i <= sizeArray; i++){
      if (i % 2 == 0){
      double.push(newArray[i]);
      } 
    else{
      let doubleNumber = newArray[i]*2;
      if (doubleNumber >= 10){
      let ten=(doubleNumber/10);
      ten=parseInt(ten,10);
      let rest=doubleNumber % 10;
      doubleNumber=ten+rest;
      }
      double.push(doubleNumber);
    }
      } 
    let sum=0;
      for (i = 0; i <= sizeArray; i++){
        sum += double[i];
      }
    let cardStatus = false;
        if ((sum != 0) && (sum % 10 == 0)){
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
