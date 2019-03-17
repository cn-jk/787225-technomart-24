// :::::::::::::::::::::::::  

var cartLink  =    document.querySelectorAll(".sale-button");
var cartPopup =    document.querySelector(   ".modal-cart-plus");
var cartClose =    cartPopup.querySelector(  ".modal-close");

// :::::::::::::::::::::::::  

for (i = 0; i < cartLink.length; i++)
{
  cartLink[i].addEventListener( "click", function (evt) { evt.preventDefault(); cartPopup.classList.add("modal-show"); });
}

// :::::::::::::::::::::::::  

cartClose.addEventListener("click",      function (evt) { evt.preventDefault(); cartPopup.classList.remove("modal-show"); });

// :::::::::::::::::::::::::  

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27)
  {
    if (cartPopup.classList.contains("modal-show"))
    {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});

// :::::::::::::::::::::::::  
