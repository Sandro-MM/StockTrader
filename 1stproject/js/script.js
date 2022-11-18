
$(document).ready(function() {
    $('.header__burger').click(function(events) {
        if ((window.scrollY) >= 100){
            $('.header__burger,.header__menu,.particles-js,.header__nav a,header,.logo,.logoblack').toggleClass('active').toggleClass('active2');
            $('body').toggleClass('lock')
        }else{
            $('.header__burger,.header__menu,.particles-js,.header__nav a,header,.logo,.logoblack').toggleClass('active').remove('active2');
            $('body').toggleClass('lock')
        }
            
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ((window.scrollY) >= 100){
            $('header,.header__nav a,.logo,.logoblack').addClass('active2');
        }else{
            $('header,.header__nav a,.logo,.logoblack').removeClass('active2');
        }
    });
});

let stats = document.querySelectorAll('.stat__num');
let interval = 1000;

stats.forEach((stat)=>{
  let startValue = 0
  let endValue =  parseInt(stat.getAttribute('data-val'));
  let duration = Math.floor(interval/endValue);
  let counter = setInterval(function() {
    startValue += 1;
    stat.textContent = startValue;
    if (startValue == endValue) {
        clearInterval(counter);
    }
  }, duration);
});




particlesJS("particles-js", { "particles": { "number": { "value": 85, "density": { "enable": true, "value_area": 800 } },
 "color": { "value": "#ffffff" },
  "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" },
   "polygon": { "nb_sides": 3 },
    "image": { "src": "img/github.svg", "width": 100, "height": 100 } },
     "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
      "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 4, "size_min": 0.1, "sync": false } },
       "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } },
         "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true },
          "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
