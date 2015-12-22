var thePull = [];
var thePush = [];

// pull the menu in

$(document).ready(function(){
   var menuOnThePage = $("#eatThisMenu")
   var demBurgers = $("#bburgers")
   var daaPizzas = $("#pizzas")
   var getMenu = $.ajax( {
      url:"https://galvanize-eats-api.herokuapp.com/menu",
      method:"GET",
      dataType: "json",
      success: function(data) {
         thePull = data.menu;
         for (var i = 0; i < data.menu.length; i++) {
            var whatIsIt = data.menu[i]['name'];
            whatIsIt = whatIsIt.charAt(whatIsIt.length-1);
            console.log(whatIsIt);
               if (whatIsIt.charAt(whatIsIt.length-1) === "r") {
                  console.log("burger");
                  menuOnThePage.append("<option id='menuItem"+[i]+"' value='"+[i]+"'>"+data.menu[i]['name']+" "+data.menu[i]['price']+"</option>")
               } else {
               console.log("pizza");
               menuOnThePage.append("<option id='menuItem"+[i]+"' value='"+[i]+"'>"+data.menu[i]['name']+" "+data.menu[i]['price']+"</option>")
               }

            // menuOnThePage.append("<option id='menuItem"+[i]+"' value='"+[i]+"'>"+data.menu[i]['name']+" "+data.menu[i]['price']+"</option>")
         }
      }
   });
});

// add things to the order

var subtotal = 0;
var orderTaxxx = 0;
$("#addToOrder").click(function(){
   console.log(thePull);
   var itemToAdd = $("#eatThisMenu").val()
   var amount = $("#qty").val()
   var orderTable = $("#putAllTheOrderHere")
   for (var i = 0; i < amount; i++) {
      orderTable.append("<tr><td>"+thePull[itemToAdd]['name']+"</td><td>"+thePull[itemToAdd]['price']+"</td></tr>");
      thePush.push(thePull[itemToAdd]);
      subtotal += (thePull[itemToAdd]['price'])*1;
      orderTaxxx += ((thePull[itemToAdd]['price'])*.083)*1;
   }
   var grandddTotal = (subtotal*1) + (orderTaxxx*1);
   $("#orderSubtotal").html(subtotal.toFixed(2));
   $("#orderTax").html(orderTaxxx.toFixed(2));
   $("#orderGrandTotal").html(grandddTotal.toFixed(2));
   $("#theDeets").animate({"opacity":1.0},500,function(){console.log()});
});

// get user info and post
$("#deliverIt").click(function(){
   var userName = $("input[name=name]").val();
   var userPhone = $("input[name=phone]").val();
   var userAddy = $("input[name=address]").val();
   var theOrder = {
      "customerInfo":[userName,userPhone,userAddy],
      "orderItems":thePush
   };
   console.log(theOrder);

   var placeOrder = $.ajax( {
         url:"https://galvanize-eats-api.herokuapp.com/orders",
         method:"POST",
         data: theOrder,
         success: function(data){
            console.log(data);
            console.log("HUZZAH");
         }
      })
});

// add post
