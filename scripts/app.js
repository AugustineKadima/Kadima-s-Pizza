
let customerOrder = function(typeOfPizza, pizzaSize, crust,toppings, deliveryOption){

    this.typeOfPizza = typeOfPizza;
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.toppings = toppings;
    this.deliveryOption = deliveryOption;
    let orderArray = [this.typeOfPizza, this.pizzaSize, this.crust, this.toppings, this.deliveryOption];
    
    
}


$(document).ready(function(){
$("button#customizeOrder").click(function(event){

    event.preventDefault();

    let typeOfPizza = $("#pizzaTypes").val();
    let pizzaSize = $("#pizzaSize").val();
    let crust = $("#crust").val();
    let toppings = $("#toppings").val();
    let deliveryOption = $("input[name='delivery']").val()

    
});
});