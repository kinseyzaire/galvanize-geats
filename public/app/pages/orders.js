var thePull = [];
var thePush = [];

$(document).ready(function(){
   var menuOnThePage = $("#eatThisMenu")
   var getMenu = $.ajax( {
      url:"https://galvanize-eats-api.herokuapp.com/menu",
      method:"GET",
      dataType: "json",
      success: function(data) {
         thePull = data.menu;
         for (var i = 0; i < data.menu.length; i++) {
            menuOnThePage.append("<option id='menuItem"+[i]+"' value='"+[i]+"'>"+data.menu[i]['name']+" "+data.menu[i]['price']+"</option>")
         }
      }
   });
});

var subtotal = 0;
var orderTaxxx = 0;
$("#addToOrder").click(function(){
   var itemToAdd = $("#eatThisMenu").val()
   var amount = $("#qty").val()
   var orderTable = $("#putAllTheOrderHere")
   for (var i = 0; i < amount; i++) {
      orderTable.append("<tr><td>"+thePull[itemToAdd]['name']+"</td><td>"+thePull[itemToAdd]['price']+"</td></tr>");
      thePush.push(thePull[itemToAdd]);
      console.log(subtotal);
      console.log(thePull[itemToAdd]['price']);
      subtotal += (thePull[itemToAdd]['price'])*1;
      orderTaxxx += ((thePull[itemToAdd]['price'])*.07)*1;
   }
   var grandddTotal = (subtotal*1) + (orderTaxxx*1);
   $("#orderSubtotal").html(subtotal);
   $("#orderTax").html(orderTaxxx.toFixed(2));
   $("#orderGrandTotal").html(grandddTotal.toFixed(2));
   console.log(thePush);
   console.log(subtotal);
   console.log(orderTaxxx);
   console.log(grandddTotal);
   $("#theDeets").animate({"opacity":1.0},500,function(){console.log()});
});
