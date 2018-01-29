document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

  // nav events

  var picButton = document.getElementsByClassName("picbutton");
  var Logos = document.getElementById("Logos");
  var Packaging = document.getElementById("Packaging");
  var Posters = document.getElementById("Posters");

  picButton[0].addEventListener("click", function(){

    Logos.style = "display:block";
    Packaging.style = "display:none";
    Posters.style = "display:none";
  });

  picButton[1].addEventListener("click", function(){

    Logos.style = "display:none";
    Packaging.style = "display:block";
    Posters.style = "display:none";
  });

  picButton[2].addEventListener("click", function(){

    Logos.style = "display:none";
    Packaging.style = "display:none";
    Posters.style = "display:block";
  });

    // end of nav events

});
