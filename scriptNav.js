document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

  // nav functions

  var homeNav = document.getElementById("homeNav");
  var artNav = document.getElementById("artNav");
  var graphicNav = document.getElementById("graphicNav");
  var photoNav = document.getElementById("photoNav");
  var contactNav = document.getElementById("contactNav");
  var arrow = document.getElementById("down_arrow");
  var nav = document.querySelectorAll("nav");

  var navLink = [homeNav, artNav, graphicNav, photoNav, contactNav];

  // nav link ids

  // when link is selected, make it appear different than other nav links

  for(var i = 0; i<navLink.length; i++){

    navLink[i].addEventListener("mouseover", function(){
      this.className = "pink";

    });

    navLink[i].addEventListener("mouseout",
      function(){
        this.className = "";
    });

  }

  arrow.addEventListener("click", function(){
    nav.style.display = "block";
  });

});
