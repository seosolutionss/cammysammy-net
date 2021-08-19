// define all UI variable
const navToggler = document.querySelector('.nav-toggler')
const navMenu = document.querySelector('.site-navbar ul')
const navLinks = document.querySelectorAll('.site-navbar a')

// load all event listners
allEventListners()

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick)
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener('click', navLinkClick))
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open')
  navMenu.classList.toggle('open')
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click()
  }
}

// slider
$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  })
})
