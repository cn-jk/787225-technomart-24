// :::::::::::::::::::::::::  

var slideIndex = 1;

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

showDivs(slideIndex);

// :::::::::::::::::::::::::

function plusDivs(n)    { showDivs(slideIndex += n); }

// :::::::::::::::::::::::::  

function currentDivs(n) { showDivs(slideIndex = n);  }

// :::::::::::::::::::::::::  

function showDivs(n)
{
  var i;
  var x = document.getElementsByClassName("foto-image");
  var dots=document.getElementsByClassName("dot");

  if (n > x.length) { slideIndex = 1;        } 
  if (n < 1)        { slideIndex = x.length; }

  for (i = 0; i < x.length; i++)     { x[i].style.display = "none"; }
  for (i = 0; i < dots.length; i++)  { dots[i].style.background = "white"; }

  x[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].style.background = "red"; 
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

showServc(slideIndex);

// :::::::::::::::::::::::::  

function renewServcs(n)
{
  showServc(slideIndex = n);
}

// :::::::::::::::::::::::::  

function showServc(n)
{
  var i;
  var s = document.getElementsByClassName("services-delivery-details");

  var items  = s[0].getElementsByTagName("LI");
  var slides = s[0].getElementsByClassName("services-slide");
  

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1)             { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) { slides[i].style.display  = "none"; }


  for (i = 0; i < items.length; i++)  {items[i].className = " item-service"; }

  slides[slideIndex-1].style.display   = "block";
   items[slideIndex-1].className       = "active-item-service"; 
}

// :::::::::::::::::::::::::