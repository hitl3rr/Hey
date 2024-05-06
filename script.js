
let modal = document.querySelector("#myModal");
let btn = document.querySelector("#myBtn");
let span = document.querySelector(".close");
let clsbtn = document.querySelector(".MyClsBtn");

btn.addEventListener("click" , function(){
  modal.style.display = "block";
})

span.onclick = function() {
  modal.style.display = "none";
}
clsbtn.onclick = function() {
    modal.style.display = "none"; 
}
window.onclick = function(memmed) {
    if (memmed.target == modal) {
      modal.style.display = "none";
    }
  }