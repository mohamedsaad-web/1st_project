new Swiper(".wrapper", {
    loop: true,
    spaceBetween: 30,
    // Autoplay
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    // Pagination bullets
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  const btnToTop = document.querySelector("#backToTop")
  
  const showAfter=300

  window.addEventListener("scroll",()=>{
    if(scrollY>showAfter){
      btnToTop.classList.add("show")
    }
    else{
      btnToTop.classList.remove("show")
    }
  }
  
)
btnToTop.addEventListener("click",()=>{

  scrollTo({top:0,behavior:"smooth"})

})


const text="The Highest Quality Products From a Organic Dairy Farm"
const pEffect = document.querySelector("#pEffect")
let i = 0

function typeWriter(){

  if(i < text.length){
    
    pEffect.innerHTML += text.charAt(i)
    i++
    setTimeout(typeWriter,100)
  }
  window.onload = typeWriter

}

const selectThemColors = document.querySelector("#themcolor");
selectThemColors.addEventListener("change",()=>
  document.body.className = selectThemColors.value
)
