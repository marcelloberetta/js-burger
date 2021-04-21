/**
 * refereces
 */
 var priceEl = document.getElementById('price');
 var button = document.getElementById('button');
 var nameUser = document.getElementById('name');
 var ingrediets = document.getElementsByClassName("ingredient-checkbox");
 var coupon = document.getElementById('coupon');
 
 
 /**
  * settings
  */
 var defaultPrice = 50;
 var coupons = ['sconto2021', 'sconto-bool'];
 var discount = 0.3;
 writePrice(defaultPrice, priceEl);
 
 /**
  * events
  */
 button.addEventListener('click', function(){
 
   // controllo del nome
   var nomeInserito = nameUser.value.trim();
 
   // verifico la presenza del nome
   if(nomeInserito.length === 0){
     alert("Inserisci il nome del burger");
   }else{
    
     // se il nome è stato inserito richiamo la funzione che si occupa di stamparlo
     operatePrice(defaultPrice);
 
   }
 });
 
 /**
  * functions
  */
 
  // calcolo del prezzo 
 function operatePrice(value){
     // il calcolo del prezzo degli elementi lo delogo all funzione calcPice
     // passo value che è il defaultPrice ereditato da qundo viene invocata la funzione
      var totalPr = calcPrice(value);
      var couponCode = coupon.value;
      if(coupons.includes(couponCode)){
        // il calcolo delle sconto lo delogo alla funzione calcDiscount
        totalPr = calcDiscount(totalPr, discount);
      }
 
      // stampo il prezzo definitivo
      writePrice(totalPr, priceEl);
 }
 
 function calcDiscount(proiceToDisc, disc){
   return proiceToDisc * (1 - disc);
 }
 
 function calcPrice(value){
     var priceIngredient = 0;
     // ciclo la lista degli inputo checkbox
     for(var i = 0; i < ingrediets.length; i++){
       var ingredient = ingrediets[i];
       
       // se un checbox è checked === true summo iil suo value
       if(ingredient.checked === true){
         priceIngredient += parseInt(ingredient.value);
       }
 
     }
     return value + priceIngredient;
 }
 
 // riceve il velare da scrivere e l'elemento dove deve esere scritto
 function writePrice(value, target){
   target.innerHTML = value.toFixed(2);
 }