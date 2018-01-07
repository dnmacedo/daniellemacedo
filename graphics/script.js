document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

  // nav events

  var picButton = document.getElementsByClassName("picbutton");
  var Logos = document.getElementById("Logos");
  var Packaging = document.getElementById("Packaging");
  var Posters = document.getElementById("Posters");

  picButton[0].addEventListener("click", function(){

    window.scroll({
      top: 430,
      left: 0,
      behavior: "smooth"
    });
  });

  picButton[1].addEventListener("click", function(){

    window.scroll({
      top: 4050,
      left: 0,
      behavior: "smooth"
    });
  });

  picButton[2].addEventListener("click", function(){

    window.scroll({
      top: 6100,
      left: 0,
      behavior: "smooth"
    });
  });

    // end of nav events

});
