
// CUSTOMER ORDER CONSTRUCTOR
let CustomerOrder = function(typeOfPizza, pizzaSize, crust,toppings, deliveryOption, pizzaNumberTotal, deliveryLocation ){

    this.typeOfPizza = typeOfPizza;
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.toppings = toppings;
    this.deliveryOption = deliveryOption;
    this.pizzaNumberTotal = pizzaNumberTotal;
    this.deliveryLocation = deliveryLocation;
}

// PRICING OBJECT
CustomerOrder.prototype.kadimasPizza = { 
    name: "Kadima's Pizza",
    pizzaSizePrice: [{small: 500}, {medium: 800}, {large: 1200}],
    pizzaCrustPrice: [{Crispy: 200}, {Stuffed: 220}, {Glutten_free: 300}],
    deliveryPrice: 100
}


$(document).ready(function(){
$("button#customizeOrder").click(function(event){

    event.preventDefault();

    let typeOfPizza = $("#pizzaTypes").val();
    let pizzaSize = $("#pizzaSize").val();
    let crust = $("#crust").val();
    let toppings = $("#toppings").val();
    let deliveryOption = $("input[name='delivery']").val()
    let pizzaNumberTotal = parseInt($("#pizzaNumberTotal").val());
    let deliveryLocation = $("#location").val();
    

    // NEW INSTANCE OF CUSTOMER OBJECT
    let customerOrder = new CustomerOrder(typeOfPizza, pizzaSize, crust, toppings, deliveryOption, pizzaNumberTotal, deliveryLocation );

    // OUTPUT
    $(".formOutput").text(customerOrder.kadimasPizza.pizzaCrustPrice[0].Crispy);

    
});
});