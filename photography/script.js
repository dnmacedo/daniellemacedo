document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

    // nav events

    console.log("reading");

      // end of nav events

    // all thumbnails

    var elements = document.getElementsByClassName("photo");

    // filename array
    var fileName = ["bandit.jpg", "beach.jpg", "boots.JPG", "bridge.jpg", "bulb.JPG", "lights.JPG", "catRoad.JPG", "owl.JPG", "room.JPG", "sanctuary.JPG", "stitches.JPG", "stitches2.JPG", "tree.jpg", "trees.jpg", "wall.jpg"];

    var title = ["Bandit", "Leguna", "Boots for Sale", "Flight", "Light Bulb", "Lights", "Cat in the Arboretum", "Owl", "Room-ination", "Sanctuary", "Stitches #1", "Stitches #2", "Treetop", "Algae Galaxy", "Old Towne Sacramento"];

    // description array
    var description = ["2016", "2016", "2016", "2016", "2017", "2017", "2016", "2016", "2016", "2016", "2017", "2017", "2016", "2016", "2016"];

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
