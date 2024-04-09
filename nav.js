let menuBar=document.querySelector("#menu")
let linkTab=document.querySelector(".links")
let overlay=document.querySelector(".overlay")
let closeBtn=document.querySelector(".close")
console.log(overlay)
menuBar.addEventListener("click",function(){
   
    linkTab.classList.toggle("show")
    overlay.classList.toggle("hide")
})

overlay.addEventListener("click",()=>{
    linkTab.classList.remove("show")
    overlay.classList.remove("hide")
})

closeBtn.addEventListener("click",()=>{
    linkTab.classList.remove("show")
    overlay.classList.remove("hide")
})
