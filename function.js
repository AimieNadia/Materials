var btn= document.querySelector('button');
var result = document.querySelector('div');

btn.onclick= function()
{ var x = document.getElementById('myx').value;
  var y = document.getElementById('myy').value;

  var z = parseInt(x) + parseInt(y);

  result.textContent = "Result is " + z;
}
