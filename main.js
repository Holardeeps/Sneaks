const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]');
    hamburger.classList.toggle('bx-window-close');
    hamburger.classList.toggle('bxs-food-menu');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('left-[0]');
        hamburger.classList.toggle('bx-window-close');
        hamburger.classList.toggle('bxs-food-menu');
    })
})

const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');

    if(this.scrollY >= 250) {
        scrollUpBtn.classList.replace('-bottom-1/2', 'bottom-4');
    } else {
        scrollUpBtn.classList.replace('bottom-4', '-bottom-1/2');
    }
}

window.addEventListener('scroll', scrollUp);

const scrollHeader = () => {
    const header = document.getElementById('navbar');

    if(this.scrollY >= 50) {
        header.classList.add('border-b', 'border-yellow-500');
    } else {
        header.classList.remove('border-b', 'border-yellow-500');
    }
}

window.addEventListener('scroll', scrollHeader);


const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: true,
  breakpoints: {
    640: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1224: {
        slidesPerView: 3
    }
  }
});