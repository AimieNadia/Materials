function Book(t, a) {
  this.title = t;
  this.author = a;
}
var NewBook= document.getElementById("NewBook");
NewBook=document.addEventListener("click", function() {
  var t= document.getElementById("title").value;
  var a= document.getElementById("author").value;
var Bookobj = new Book(t,a);
console.log("New Book Title " + Bookobj.title + ", Author " + Bookobj.author);
});
