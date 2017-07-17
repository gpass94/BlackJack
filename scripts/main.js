/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
var cards = [];

function handValue (handArray) {
let totalofAllCards = 0;

for (let i = 0; i < handArray.length; i++) {
  if (handArray[i] === "J"|| handArray[i] === "Q"|| handArray[i] === "K" ){
    //given that comparison is true, then run this process
    handArray[i]= 10;
    totalofAllCards += 10;
  }else if(handArray[i] == "A" && totalofAllCards < 10){
           handArray[i] = 11;
           totalofAllCards += 11;
         }else if(handArray[i] == "A" && totalofAllCards > 10){
           handArray[i] = 1;
           totalofAllCards += 1;
         }else{
           handArray[i] = parseInt(handArray[i])
           totalofAllCards += handArray[i];
         }
       }
       if(totalofAllCards > 21){
         totalofAllCards -= 10;
       }
       return totalofAllCards;
    }




console.assert(handValue(["2", "2", "8"] === 12));
console.assert(handValue(["2", "2", "K"] === 14));
