 (function() {

  "use strict";

 const track = document.getElementById('marqueeTrack');
  const wrapper = document.getElementById('marqueeWrapper');

  // Clone the content
  const clone = track.cloneNode(true);
  track.appendChild(clone.children[0].cloneNode(true));

  let position = 0;
  let speed = 1; // px per frame

  function animate() {
    position -= speed;
    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();

  // Pause on hover
  wrapper.addEventListener('mouseenter', () => speed = 0);
  wrapper.addEventListener('mouseleave', () => speed = 1);

  // document.addEventListener("DOMContentLoaded", function () {
  //           const container = document.querySelector('.grid-system-wrapper');

  //           function createGrid() {
  //               container.innerHTML = ""; // Clear any existing boxes

  //               const screenWidth = window.innerWidth;
  //               let boxSize;

  //               if (screenWidth < 768) {
  //                   boxSize = Math.floor(screenWidth / 7); // 8 boxes per row
  //               } else {
  //                   boxSize = Math.min(Math.floor(screenWidth / Math.ceil(screenWidth / 109)), 109);
  //               }

  //               const numColumns = Math.ceil(window.innerWidth / boxSize);
  //               const numRows = Math.ceil(window.innerHeight / boxSize);
  //               const totalBoxes = numColumns * numRows;

  //               for (let i = 0; i < totalBoxes; i++) {
  //                   const box = document.createElement('div');
  //                   box.classList.add('box');
  //                   box.style.width = `${boxSize}px`;
  //                   box.style.height = `${boxSize}px`;
  //                   container.appendChild(box);
  //               }
  //           }

  //           function getRandomBoxes() {
  //               const boxes = document.querySelectorAll('.box');
  //               const randomIndexes = [];

  //               while (randomIndexes.length < 6) {
  //                   const randomIndex = Math.floor(Math.random() * boxes.length);
  //                   if (!randomIndexes.includes(randomIndex)) {
  //                       randomIndexes.push(randomIndex);
  //                   }
  //               }

  //               return randomIndexes.map(index => boxes[index]);
  //           }

  //           function blinkBoxes() {
  //               const boxes = document.querySelectorAll('.box');
  //               boxes.forEach(box => box.classList.remove('blink'));

  //               setTimeout(() => {
  //                   const randomBoxes = getRandomBoxes();
  //                   randomBoxes.forEach(box => box.classList.add('blink'));
  //               }, 100);
  //           }

  //           window.addEventListener('resize', createGrid); // Recreate grid on window resize
  //           createGrid(); // Initial grid creation
  //           setInterval(blinkBoxes, 2000);
  //       });

  class TxtType {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}

 /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

// DOMContentLoaded  end

  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function() {
  // var currentScrollPos = window.pageYOffset;
  //    if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("headerfixed").style.top = "0";
  //     document.getElementById("navsticky").style.top = "75px";
  //   } 
  //   else {
  //     document.getElementById("headerfixed").style.top = "-92px";
  //     //document.getElementById("navsticky").style.top = "0";
  //   }
    
  //   prevScrollpos = currentScrollPos;
  // };

var lastScrollTop = 0;
$(window).scroll(function(){
  var st = $(this).scrollTop();
  var banner = $('#headerfixed');
  var navsticky = $('#navsticky');
  setTimeout(function(){
    if (st > lastScrollTop){
      banner.addClass('headerhide');
      navsticky.removeClass('tabshide2');
    } else {
      banner.removeClass('headerhide');
      navsticky.addClass('tabshide2');
    }
    lastScrollTop = st;
  }, 100);
});


   window.onload = function () {
      lax.setup();
      const e = () => {
        lax.update(window.scrollY), window.requestAnimationFrame(e)
      };
      window.requestAnimationFrame(e)
    };
$(".navbar-toggler").on('click', function() {
 $("#headerfixed").removeAttr("style");
});

  /**
   * humbagger menu Animation
   */
 document.querySelector('.first-button').addEventListener('click', function() {
    document.querySelector('.animated-icon1').classList.toggle('open');
  });
// Mobile Navigation

  let scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  // Initialize when DOM is ready
window.onload = function () {
  const elements = document.getElementsByClassName('typewrite');
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-type');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};
})();

