function getUsername(){
   var username =  $.session.getUsername();
   return username;
}
var result = "Hello World from new User " + getUsername();
$.response.setBody(result);
