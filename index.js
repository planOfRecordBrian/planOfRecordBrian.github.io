
// Plan of Record Button

var pan = document.getElementsByClassName("panel")[0];
var acc = document.getElementsByClassName("accordion")[0];

acc.addEventListener("click", function() {
   if (pan.style.maxHeight) {
     pan.style.maxHeight = null;
   } else {
     pan.style.maxHeight = pan.scrollHeight + "px";
}
});