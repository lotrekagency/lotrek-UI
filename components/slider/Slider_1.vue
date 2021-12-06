<template>
  <div class="slider" id="slider-1">
    <div class="slider__core">

      <div class="slider__core__slide active" data-slide="0">
        <h1>
          Slide n.1
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugit et sequi totam praesentium quibusdam exercitationem debitis in nam! Maxime, incidunt!
        </p>
        <a href="#" class="button">Button</a>
      </div><!--/slide - 0 -->

      <div class="slider__core__slide" data-slide="1">
        <h1>
          Slide n.2
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <a href="#" class="button">Button</a>
      </div><!--/slide - 1 -->

      <div class="slider__core__slide" data-slide="2">
        <h1>
          Slide n.3
        </h1>
        <p>
          Fugit et sequi totam praesentium quibusdam exercitationem debitis in nam! Maxime, incidunt!
        </p>
        <a href="#" class="button">Button</a>
      </div><!--/slide - 2 -->

      <div class="slider__nav">
        <div class="slider__nav__prev">
          &lt;
        </div>
        <div class="slider__nav__next">
          >
        </div>
      </div><!--/slider__nav-->

      <div class="slider__dots">
        <div class="slider__dot active" data-slidedot="0"></div>
        <div class="slider__dot" data-slidedot="1"></div>
        <div class="slider__dot" data-slidedot="2"></div>
      </div><!--/slider__dots-->

    </div><!--/slider__core-->

  </div>
</template>

<script>
export default {
  mounted: function() {

    //Copypaste this code
    //Slider func: standard slider behaviors, such as showing slides on click events
    let context = document.querySelector("#slider-1");
    context.querySelector(".slider__core").addEventListener("click", function(e) {

      //if clicking the "previous slide" button
      if(e.target.classList.contains("slider__nav__prev")) {
        let currentSlide = parseInt(context.querySelector(".slider__core__slide.active").dataset.slide);
        context.querySelector(".slider__core__slide.active").classList.remove("active");
        context.querySelector(".slider__dot.active").classList.remove("active");
        if(currentSlide != 0) {
          this.querySelectorAll(".slider__core__slide")[currentSlide - 1].classList.add("active");
          this.querySelectorAll(".slider__dot")[currentSlide - 1].classList.add("active");
        } else {
          //getting the last slide and activating it
          this.querySelectorAll(".slider__core__slide")[this.querySelectorAll(".slider__core__slide").length - 1].classList.add("active");
          this.querySelectorAll(".slider__dot")[this.querySelectorAll(".slider__core__slide").length - 1].classList.add("active");
        }
      }

      //if clicking the "next slide" button
      if(e.target.classList.contains("slider__nav__next")) {
        let currentSlide = parseInt(context.querySelector(".slider__core__slide.active").dataset.slide);
        context.querySelector(".slider__core__slide.active").classList.remove("active");
        context.querySelector(".slider__dot.active").classList.remove("active");
        console.log(currentSlide)
        if(currentSlide == (this.querySelectorAll(".slider__core__slide").length - 1)) {
          //getting the first slide and activating it
          this.querySelectorAll(".slider__core__slide")[0].classList.add("active");
          this.querySelectorAll(".slider__dot")[0].classList.add("active");
        } else {
          this.querySelectorAll(".slider__core__slide")[currentSlide + 1].classList.add("active");
          this.querySelectorAll(".slider__dot")[currentSlide + 1].classList.add("active");
        }
      }

      //if clicking the dot navigation
      if(e.target.classList.contains("slider__dot")) {
        context.querySelector(".slider__core__slide.active").classList.remove("active");
        context.querySelector(".slider__dot.active").classList.remove("active");
        e.target.classList.add("active");
        let currentDot = parseInt(e.target.dataset.slidedot);
        console.log(currentDot)
        context.querySelector('.slider__core__slide[data-slide="'+currentDot+'"]').classList.add("active");
      }

    })
    
  }
}
</script>