document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

  document.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM fully loaded and parsed");

    // nav events

    console.log("reading");

      // end of nav events

    // all thumbnails

    var elements = document.getElementsByClassName("photo");

    // filename array
    var fileName = [];

    var title = [];

    // description array
    var description = [];

    var previewImg = document.getElementById("previewImg");
    var artTitle = document.getElementById("photoTitle");
    var artDes = document.getElementById("photoDes");

    function preview(x, y, z){

      return function(){

        previewImg.src = "images/" + x;
        artTitle.innerHTML = y;
        artDes.innerHTML = z;

      }

    }


    for(var i = 0; i < elements.length; i++){

      elements[i].addEventListener("click", preview(fileName[i], title[i], description[i]));

      elements[i].addEventListener("mouseover", function(){

        this.style.transition = "background-color 1s";
      });

      elements[i].addEventListener("mouseout", function(){

        this.style.transition = "background-color 1s";
      });

    }

    });


});
