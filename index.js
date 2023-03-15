
// Plan of Record Button

var acc = document.getElementsByClassName("accordion");
var pan = document.getElementsByClassName("panel");
var i;

for (i = 0; i < 4; i++) {
acc[i].addEventListener("click", function() {
  for (i = 0; i < 4; i++) {
    
   if (pan[i].style.maxHeight) {
     pan[i].style.maxHeight = null;
   } else {
     pan[i].style.maxHeight = pan[i].scrollHeight + "px";
}
}
});
}