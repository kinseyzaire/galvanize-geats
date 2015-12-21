$(document).ready(function(){
   var menuOnThePage = $("#eatThisMenu")
   var menu = $.ajax( {
      url:"https://galvanize-eats-api.herokuapp.com/menu",
      method:"GET",
      dataType: "json",
      success: function(data) {
      console.log(data);
      console.log(data.menu[0]["name"]);
      console.log(data.menu.length);
      for (var i = 0; i < data.menu.length; i++) {
         menuOnThePage.append("<option id='menuItem"+[i]+"'>"+data.menu[i]['name']+" "+data.menu[i]['price']+"</option>")
      }

      }
   });
});
