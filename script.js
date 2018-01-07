document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

  var header = document.querySelectorAll("header");

  var scroll = window.scroll();

  if(scroll > 200){
    header.className = "black";

  } else {

    header.className = "";
  }


});
