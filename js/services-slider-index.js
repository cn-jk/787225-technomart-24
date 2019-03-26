// :::::::::::::::::::::::::  

//var slideIndex = 1;
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
