document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

  // nav events

  console.log("reading");

    // end of nav events

  // all thumbnails

  var elements = document.querySelectorAll("li");
  var c = 0;

  
// all file names
  var jMrazFile = "jMraz.jpg";
  var threeWomenFile = "3women.jpg";
  var beachFile = "beach.jpg";
  var fmaFile = "fma.jpg";
  var foxFile = "fox.jpg";
  var leoFile = "leo.jpg";
  var roxasFile = "roxas.jpg";
  var roxFile = "rox.jpg";
  var spiderMFile = "spiderM.jpg";
  var stillLifeFile = "stillLife.jpg";
  var venFile = "ven.jpg";

  // filename array
  var fileName = [jMrazFile, threeWomenFile, beachFile, fmaFile, foxFile, leoFile, roxasFile, roxFile, spiderMFile, stillLifeFile, venFile];

  // all titles
  var jMrazTitle = "Portrait #1";
  var threeWomenTitle = "Three Women";
  var beachTitle = "Beach";
  var fmaTitle = "Anime Multi-portrait";
  var foxTitle = "Hipster Fox";
  var leoTitle = "Portrait #2";
  var roxasTitle = "Roxas #1";
  var roxTitle = "Rox #2";
  var spiderMTitle = "Spiderman";
  var stillLifeTitle = "Still Life";
  var venTitle = "Ventus";

  var title = [jMrazTitle, threeWomenTitle, beachTitle, fmaTitle, foxTitle, leoTitle, roxasTitle, roxTitle, spiderMTitle, stillLifeTitle, venTitle];

  // all descriptions

  var jMrazDes = "Portrait of singer/songwriter Jason Mraz, charcoal on bristol paper, 2012";
  var threeWomenDes = "Colored pencil on tissue paper, 2011";
  var beachDes = "Watercolor, watercolor paper, 2011";
  var fmaDes = "Oil paint on canvas, 2014";
  var foxDes = "Digital illustration, 2015";
  var leoDes = "Oil pastel on paper, 2012";
  var roxasDes = "Pencil on paper, 2009";
  var roxDes = "Pencil on paper, 2010";
  var spiderMDes = "Charcoal on paper, 2011";
  var stillLifeDes = "Pencil on paper, 2008";
  var venDes = "Pencil on Paper, 2011";

  // description array
  var description = [jMrazDes, threeWomenDes, beachDes, fmaDes, foxDes, leoDes, roxasDes, roxDes, spiderMDes, stillLifeDes, venDes];

  var previewImg = document.getElementById("previewImg");
  var artTitle = document.getElementById("artTitle");
  var artDes = document.getElementById("artDes");

  function preview(x, y, z){

      previewImg.src = "images/" + x;
      artTitle.innerHTML = y;
      artDes.innerHTML = z;

  }

  for(var i = 0; i < elements.length; i++){

    elements[i].addEventListener("click", preview(fileName[i], title[i], description[i]));

  }


  });
