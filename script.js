document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

  // artlink events

  var jMrazLink = document.getElementById("jMrazLink");
  var threeWomenLink = document.getElementById("threeWomenLink");
  var beachLink = document.getElementById("beachLink");
  var fmaLink = document.getElementById("fmaLink");
  var foxLink = document.getElementById("foxLink");
  var leoLink = document.getElementById("leoLink");
  var roxasLink = document.getElementById("roxasLink");
  var roxLink = document.getElementById("roxLink");
  var spiderMLink = document.getElementById("spiderMLink");
  var stillLifeLink = document.getElementById("stillLifeLink");
  var venLink = document.getElementById("venLink");

  var artLink = document.getElementsByClassName("art");
  var previewImg = document.getElementById("previewImg");
  var artTitle = document.getElementById("artTitle");
  var artDes = document.getElementById("artDes");

  // artlink events

  // photo class

  // class Photo {
  //
  // }

  // photo class

  // artlink function

  var fileName;
  var title;
  var description;

  function preview(fileName, title, description){

      previewImg.src = "images/" + fileName;
      artTitle.innerHTML = title;
      artDes.innerHTML = description;

  }

  jMrazLink.addEventListener("clicked", preview("jMraz.jpg", "Portrait #1", "Portrait of singer/songwriter Jason Mraz, charcoal on bristol paper, 2012"));
  threeWomenLink.addEventListener("clicked", preview("3women.jpg", "3 Women", "Colored pencil on tissue paper, 2011"));
  beachLink.addEventListener("clicked", preview("beach.jpg", "The Beach", "Watercolor, watercolor paper, 2011"));


  // artlink function

  // photolink events



  // end of photolink events

  // Contact emailForm

  // capture name entry

  var entry = [];

// capture submit event
  document.emailForm.onsubmit = submitForm;

  function submitForm() {

    entry[0]= document.emailForm.name.value;

    entry[1]= document.emailForm.name.value;

    //store myMsg in a variable called myMsg

    var myMsg = document.getElementById("myMsg");

    //error detection

    for(var i=0; i<10; i++) {
      if(entry[0]=="") {
        alert("Let's not be strangers, please tell me your name!");
      } else if (entry[2] =="") {
        alert("Don't leave me hanging, leave a message!")
      }
    }

    myMsg.innerHTML="Thank you" + entry[0] +" for visiting my site and reaching out. I have receieved your message via email and if you left me contact info, you'll be hearing back from me fairly soon. <br>Contact info: " + entry[1];

    return false;
  }

  close.addEventListener('click', function(){
    aside.style.display="none";
  });

  // contact emailForm

});
