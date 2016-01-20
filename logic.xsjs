function getUsername(){
   var username =  $.session.getUsername();
   return username;
}
var result = "Hello World from New Hana User " + getUsername();
$.response.setBody(result);
