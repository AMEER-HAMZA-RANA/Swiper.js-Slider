var swiper = new Swiper('.BenefitCardSlider__Container', {
  // Install Plugin To Swiper
  // modules: [myPlugin],
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  // },
  // Enable debugger
  // debugger: true,
});

const overlay = document.querySelector('.PageOverlay')
const benefitSlider = document.querySelector('.BenefitCardSlider')
const closeButton = document.querySelector('.BenefitCardSlider__CloseButton')
console.log(closeButton)

document.addEventListener("click", (e) => {
  
  console.log(e.target)
  let itemParent = e.target.closest(".BenefitItem")
  let badgeParent = e.target.closest(".BenefitBadge")
  if (
    e.target.matches(".BenefitItem") ||
    itemParent?.contains(e.target) ||
    e.target.matches(".BenefitBadge") ||
    badgeParent?.contains(e.target)
  ) {
    const benefitItem = e.target.closest('.BenefitItem') || e.target.closest('.BenefitBadge')
    const slideNo = benefitItem.dataset.slidePoint
    // console.log(first)
    goToSlide(slideNo - 1)

    console.log("CLCIKED")
    setTimeout(() => {
      overlay.classList.add('is-visible')
    benefitSlider.classList.add('-Active')
    }, 300)
    
  }

  if(e.target.matches('.PageOverlay') || e.target.matches('.BenefitCardSlider__CloseButton') || e.target.closest('.BenefitCardSlider__CloseButton')) {
    overlay.classList.remove('is-visible')
    benefitSlider.classList.remove('-Active')
  }

  
  

})

function goToSlide(index) {
  swiper.slideTo(index); // Go to the specified slide index
}