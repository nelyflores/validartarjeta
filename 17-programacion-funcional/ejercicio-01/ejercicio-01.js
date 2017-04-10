
function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(creditCardNumber== null){
      return "Ingresa un numero";
    }
    if(typeof creditCardNumber != "number"){
      return "Error de dato"
    }



      var cadena = creditCardNumber.toString();
      var longitud = cadena.length;
      var cifra = null;
      var cifra_cad=null;
      var suma=0;

      if(longitud< 16){
        return "Faltan numeros";
      }
      for (var i=0; i < longitud; i+=2){
        cifra = parseInt(cadena.charAt(i))*2;
      if (cifra > 9){
        cifra_cad = cifra.toString();
        cifra = parseInt(cifra_cad.charAt(0)) +
        parseInt(cifra_cad.charAt(1));
      }
      suma+=cifra;
      }
      for (var i=1; i < longitud; i+=2){
        suma += parseInt(cadena.charAt(i));
      }

      if ((suma % 10) == 0){
        return true;
      } else {
        return false;
  }

    }


// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
