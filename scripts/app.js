
// CUSTOMER ORDER CONSTRUCTOR
let CustomerOrder = function(typeOfPizza, pizzaSize, crust,toppings, deliveryOption){

    this.typeOfPizza = typeOfPizza;
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.toppings = toppings;
    this.deliveryOption = deliveryOption;
    
}

// PIZZA PRICE OBJECT


$(document).ready(function(){
$("button#customizeOrder").click(function(event){

    event.preventDefault();

    let typeOfPizza = $("#pizzaTypes").val();
    let pizzaSize = $("#pizzaSize").val();
    let crust = $("#crust").val();
    let toppings = $("#toppings").val();
    let deliveryOption = $("input[name='delivery']").val()

    // NEW INSTANCE OF CUSTOMER OBJECT
    let customerOrder = new CustomerOrder(typeOfPizza, pizzaSize, crust, toppings, deliveryOption);

    // OUTPUT
    $(".formOutput").text(customerOrder.typeOfPizza);

    
});
});