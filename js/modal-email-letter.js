// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

var link =     document.querySelector(".write-email-letter");
var popup =    document.querySelector(".modal-email-letter");
var close =    popup.   querySelector(".modal-close");
var form =     popup.   querySelector(".modal-email-letter form");

var your_name_input     = form.querySelector("[name=nm-your-name]");
//var your_name_input     = form.querySelector(".your-name   input"); // -- variant N 2 --
var your_email_input    = form.querySelector("[name=nm-your-email]");
var your_letter_textarea= form.querySelector(".your-letter textarea");

var isStorageSupport = true;
var storage_name     = "";
var storage_email    = "";
  
// .........................
  
try
  {
    storage_name = localStorage.getItem("your_name_input");
    storage_email= localStorage.getItem("your_email_input");
  }
catch (err)
  {
    isStorageSupport = false;
  }  
  
// :::::::::::::::::::::::::
  
link.addEventListener("click",

function (evt)
  {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage_name || storage_email)
    {
      your_name_input.value  = storage_name;
      your_email_input.value = storage_email;
      
      your_letter_textarea.focus();
    }
    else
    {
      your_name_input.focus();
    }
  });

// :::::::::::::::::::::::::

  close.addEventListener("click",
  
  function (evt)
  { 
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
  
// :::::::::::::::::::::::::

  form.addEventListener("submit",
  
  function (evt)
  {
    if (your_name_input.value && your_email_input.value && your_letter_textarea.value)
    {
      if (isStorageSupport)
      {
        localStorage.setItem("your_name_input",  your_name_input.value);
        localStorage.setItem("your_email_input", your_email_input.value);
      }
    }
    else 
    {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });
  
// :::::::::::::::::::::::::

  window.addEventListener("keydown",
  
  function (evt)
  {
    if (evt.keyCode === 27)
    {
      if (popup.classList.contains("modal-show"))
      {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });  
// When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(evt)
//  {
////    window.alert('Hi guys!!');
//  if (evt.target == popup)
//  {
//    window.alert('Hi guys!!-------------');
//        evt.preventDefault();
//        popup.classList.remove("modal-show");
//        popup.classList.remove("modal-error");
//  }
//  };
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  

var mapLink  = document.querySelector(".map-button");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

// :::::::::::::::::::::::::  

mapLink.addEventListener( "click", function (evt) { evt.preventDefault(); mapPopup.classList.add("modal-show"); }); 
mapClose.addEventListener("click", function (evt) { evt.preventDefault(); mapPopup.classList.remove("modal-show"); });

// :::::::::::::::::::::::::  

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27)
  {
    if (mapPopup.classList.contains("modal-show"))
    {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

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

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::