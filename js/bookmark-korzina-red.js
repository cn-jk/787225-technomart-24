// :::::::::::::::::::::::::

var node_selector = ".div--item";
var node_Link =document.querySelectorAll(node_selector);
var input_Value;

// .........................

for ( var i = 0; i < node_Link.length; i++ )
{
  fun_ChangeColor( node_Link[i].id );
}

// .........................

//  fun_ChangeColor_2('id-search-form');

// :::::::::::::::::::::::::

function fun_ChangeColor( id_element )
{
  
  var node_ChangeColor = document.getElementById( id_element );
  
  var class_for_Work      = '.tag-number';  //  var tag_for_Work = 'input';
  var class_ChangeColor = 'user-korzina-red';
  
  var tag_ChangeColor;  //  var input_ChangeColor;
  var tag_Value;        //  var input_Value;
  
// .........................
  
try
  {
    tag_ChangeColor = node_ChangeColor.querySelector(class_for_Work);
  }
catch (err)
  {
    return;
  }
  
  tag_Value = tag_ChangeColor.innerHTML;  // tag_Value = tag_ChangeColor.value;
    
if ( tag_Value * 1  >  0 )
  {
    node_ChangeColor.classList.add(class_ChangeColor);
  }
else
  {
    node_ChangeColor.classList.remove(class_ChangeColor);
  }
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

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
    node_ChangeColor.classList.add( class_for_Work);
    input_Value.classList.add('inpt-search-white');
  }
else
  {
    node_ChangeColor.classList.remove(class_for_Work);
    input_Value.classList.remove('inpt-search-white');
  }  
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function fun_ChangeColor_3( id_element )
{

  var parentNode_for_Work = document.getElementById( id_element );
  
  var node_ChangeColor;

  var tag_ChangeColor  = 'label';
  var class_for_Work   = 'icon-search-red';

// .........................
  
try
  {
    node_ChangeColor = parentNode_for_Work.querySelector(tag_ChangeColor);  
  }
catch (err)
  {
    return;
  }
  
  node_ChangeColor.classList.add( class_for_Work);
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function fun_ChangeColor_4( id_element )
{

  var parentNode_for_Work = document.getElementById( id_element );
  
  var node_ChangeColor;

  var tag_ChangeColor  = 'label';
  var class_for_Work   = 'icon-search-red';

// .........................
  
try
  {
    node_ChangeColor = parentNode_for_Work.querySelector(tag_ChangeColor);  
  }
catch (err)
  {
    return;
  }
  
  node_ChangeColor.classList.remove(class_for_Work);
}
// :::::::::::::::::::::::::
