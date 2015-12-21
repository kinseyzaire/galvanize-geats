var thePull = [];

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

$("#addToOrder").click(function(){
   var itemToAdd = $("#eatThisMenu").val()
   var amount = $("#qty").val()
   var orderTable = $("#putAllTheOrderHere")
   for (var i = 0; i < amount; i++) {
      orderTable.append("<tr><td>"+thePull[itemToAdd]['name']+"</td><td>"+thePull[itemToAdd]['price']+"</td></tr>");
   }
});
