//nav hide //
let navBar=document.querySelectorAll(".nav-hide")
let navCollapes=document.querySelector(".navbar-collapse")

navBar.forEach(function(e){
    e.addEventListener("click",function(){
        navCollapes.classList.remove("show")
    })
})
