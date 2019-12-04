function squareNumber(num) {
  var square = num * num;
  console.log('The result of squaring the number ' + num + ' is ' + square);
  return square;
}
var squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function () {
  var num = document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML = squareNumber(num);
});
function halfNumber(num) {
  var half = num / 2;
  console.log('Half of ' + num + ' is ' + half);
  return half;
}
var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", function () {
  var num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfNumber(num);
});
function percentOf(num1,num2) {
  var percent = (num1/num2) * 100;
  console.log(num1 + ' is ' + percent + '% of ' + num2);
  return percent;
}
var percentButton = document.getElementById("percent-button");
percentButton.addEventListener("click", function () {
  var num1 = document.getElementById("percent1-input").value;
  var num2 = document.getElementById("percent2-input").value;
  document.getElementById("solution").innerHTML = percentOf(num1,num2);
});
function areaOfCircle(radius) {
  var area = Math.PI * squareNumber(radius);
  console.log('The area of circle with radius ' + radius + ' is ' + area);
}
var areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", function () {
  var radius = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML = areaOfCircle(radius);
});
