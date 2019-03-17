// :::::::::::::::::::::::::

var node_selector = ".div--item";
var node_Link =document.querySelectorAll(node_selector);
var input_Value;

// .........................

for ( i = 0; i < node_Link.length; i++ )
{
  fun_ChangeColor( node_Link[i].id );
}

// .........................

  fun_ChangeColor_2('id-search-form');

// :::::::::::::::::::::::::

function fun_ChangeColor( id_element )
{
  
//  var parentNode_ChangeColor = document.getElementById( id_element );
  var node_ChangeColor = document.getElementById( id_element );

  var tag_for_Work     = 'input';
  var class_for_Work   = 'user-korzina-red';

  var input_ChangeColor;
  var input_Value;
  
// .........................
  
try
  {
    input_ChangeColor = node_ChangeColor.querySelector(tag_for_Work);
  }
catch (err)
  {
    return;
  }
  
  input_Value = input_ChangeColor.value;
    
if ( input_Value * 1  >  0 )
  {
    node_ChangeColor.classList.add(class_for_Work);
  }
else
  {
    node_ChangeColor.classList.remove(class_for_Work);
  }
}

// :::::::::::::::::::::::::

function fun_ChangeColor_2( id_element )
{
  
  var parentNode_for_Work = document.getElementById( id_element );
  var node_ChangeColor;

  var tag_ChangeColor  = 'label';
  var tag_for_Work     = 'input';
  var class_for_Work   = 'icon-search-red';
  var input_Value;

// .........................
  
try
  {
    node_ChangeColor = parentNode_for_Work.querySelector(tag_ChangeColor);  
    input_Value      = parentNode_for_Work.querySelector(tag_for_Work);
  }
catch (err)
  {
    return;
  }
  
if ( input_Value.value )
  {
    node_ChangeColor.classList.add(class_for_Work);
  }
else
  {
    node_ChangeColor.classList.remove(class_for_Work);
  }  
}

// :::::::::::::::::::::::::
