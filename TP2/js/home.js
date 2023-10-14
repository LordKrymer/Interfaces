document.querySelectorAll(".card").forEach((e)=>{e.addEventListener("click",()=>{changeRoute("pdp")})})
document.querySelectorAll(".gallery-card").forEach((e)=>{e.addEventListener("click",()=>{changeRoute("pdp")})})
document.getElementById("arrow-left").addEventListener('click',(e)=>{
    let carousel = e.target.parentElement.nextElementSibling.firstElementChild
    let minX = 0;
    let maxX = (carousel.querySelectorAll(".card").length * 400) - 1200;
    console.log(carousel)
    carousel.style.transition = `1s ease`
    carousel.style.transform = `translateX(-${Math.max(carousel.dataset.scroll - 400,minX)}px)`;
    carousel.dataset.scroll = Math.max(carousel.dataset.scroll - 400,minX)

})

document.getElementById("arrow-right").addEventListener('click',(e)=>{
    let carousel = e.target.parentElement.previousElementSibling.firstElementChild
    let minX = 0;
    let maxX = (carousel.querySelectorAll(".card").length * 420)  - 1200;
    carousel.style.transition = `1s ease`
    carousel.style.transform = `translateX(-${Math.min(Number(carousel.dataset.scroll) + 400,maxX)}px)`;
    carousel.dataset.scroll = Math.min(Number(carousel.dataset.scroll) + 400,maxX)

    
    console.log(carousel)
    //carousel.scroll({left:Number(carousel.dataset.scroll)+400,behavior:"smooth"})
    //carousel.dataset.scroll= Number(carousel.dataset.scroll)+400
})
//document.getElementById("arrow-right").addEventListener('click',(e)=>{e.target.parentElement.previousElementSibling.firstElementChild.scroll({left:400,behavior:"smooth"})})


//document.querySelector("#arrow-right").addEventListener('click',(e)=>{console.log(e.target.parentElement.previousElementSibling)})

