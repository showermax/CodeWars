// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
function mango(quantity, price){
    var r = quantity % 3;
    var trios = (quantity - r) / 3;
    var result = r*price + trios*price*2;
    return result;
  }