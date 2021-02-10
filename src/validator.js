const validator = {
  //metodo que valida tarjetas de crédito
  isValid (creditCardNumber){
  },
  //metodo para enmascarar tarjetas
  maskify (creditCardNumber) {
      let long = creditCardNumber.length - 4;
      console.log(long);
      let last4 = creditCardNumber.substring(creditCardNumber.length -4);
      let result = ""; 
      //bucle para tapar los numeros de la tarjeta menos los ultimos 4
     for (let mask = 1; mask <= long; mask ++){
       result += "#";
      }
      console.log(result + last4);
      return result +last4;
    } 
  }
export default validator;
