document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

  // nav functions



    // end of nav functions

    // function for form

var entry = [];
var close = document.getElementById("close");

// capture submit event
document.emailForm.onsubmit = submitForm;

function submitForm() {

  entry[0]= document.emailForm.name.value;

  entry[1]= document.emailForm.contact_info.value;

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

});
