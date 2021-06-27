
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

    pizzaSizePrice: [
        {default: 0}, 
        {small: 500}, 
        {medium: 800}, 
        {large: 1200}],

    pizzaCrustPrice: [
        {default: 0}, 
        {crispy: 200}, 
        {stuffed: 220}, 
        {glutten_free: 300}],

    deliveryPrice: 100,

    toppingPrice: [
        {default: 0}, 
        {potato_sausage_bacon: 300}, 
        {black_olives_anchovies_capers: 500},
        {mixed_sliced_mushrooms_and_garlic: 700}
    ]
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

    // PRICE CALCULATIONS
    // For small pizza
    if (pizzaSize == "small" && crust == "crispy" && toppings == "potato_sausage_bacon" && deliveryOption == "on"){
        let totalPrice = (customerOrder.kadimasPizza.pizzaSizePrice[1].small + 
            customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy + 
            customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon + 
            customerOrder.kadimasPizza.deliveryPrice) * pizzaNumberTotal;
        $(".formOutput").text(totalPrice);
    }

    // OUTPUT
    // $(".formOutput").text(customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy);

    
});
});