<template>
  <div class="slider" id="slider-3">

    <div class="slider__inner">
      <div class="slider__content slider__content--center">
        <h1>Lorem, ipsum dolor.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div><!--/slider__content-->
    </div><!--/slider__inner-->


    <div class="slider__carousel">

      <div class="slider__carousel__list">
        <div class="slider__carousel__item slider__carousel__item--big active" data-carousel="0">
          <div class="slider__carousel__item__inner">
            <h1>
              Testimonial n.1
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugit et sequi totam praesentium quibusdam exercitationem debitis in nam! Maxime, incidunt!
            </p>
            <a href="#" class="button">Click me</a>
          </div>
        </div><!--/carousel-testimonial - 0 -->

        <div class="slider__carousel__item slider__carousel__item--big" data-carousel="1">
          <div class="slider__carousel__item__inner">
            <h1>
              Testimonial n.2
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#" class="button">Click me</a>
          </div>
        </div><!--/carousel-testimonial - 1 -->

        <div class="slider__carousel__item slider__carousel__item--big" data-carousel="2">
          <div class="slider__carousel__item__inner">
            <h1>
              Testimonial n.3
            </h1>
            <p>
              Fugit et sequi totam praesentium quibusdam exercitationem debitis in nam! Maxime, incidunt!
            </p>
            <a href="#" class="button">Click me</a>
          </div>
        </div><!--/carousel-testimonial - 2 -->

      </div><!--/carousel__list-->

      <div class="slider__nav">
        <div class="slider__nav__prev">
          &lt;
        </div>
        <div class="slider__nav__next">
          >
        </div>
      </div><!--/slider__nav-->

    </div><!--/slider__carousel-->

  </div>
</template>

<script>
export default {
  mounted: function() {

    //Copypaste this code
    //Slider func: standard slider behaviors, such as showing slides on click events
    let context = document.querySelector("#slider-3");
    let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    context.querySelector(".slider__carousel").addEventListener("click", function(e) {

      //if clicking the "previous slide" button
      if(e.target.classList.contains("slider__nav__prev")) {
        let currentSlide = parseInt(context.querySelector(".slider__carousel__item.active").dataset.carousel);
        let offset;

        if(currentSlide == 0) {
          context.querySelector(".slider__carousel__item.active").classList.remove("active");
          offset = (context.querySelector(".slider__carousel__item").clientWidth + 32) * (this.querySelectorAll(".slider__carousel__item").length - 1);
          context.querySelector(".slider__carousel__list").style.transform = "translateX(-"+offset+"px)";
          this.querySelectorAll(".slider__carousel__item")[this.querySelectorAll(".slider__carousel__item").length - 1].classList.add("active");
        } else {
          offset = (context.querySelector(".slider__carousel__item").clientWidth + 32) * (currentSlide - 1);
          context.querySelector(".slider__carousel__item.active").classList.remove("active");
          context.querySelector(".slider__carousel__list").style.transform = "translateX(-"+offset+"px)";
          this.querySelectorAll(".slider__carousel__item")[currentSlide - 1].classList.add("active");
        }
      }

      //if clicking the "next slide" button
      if(e.target.classList.contains("slider__nav__next")) {
        let currentSlide = parseInt(context.querySelector(".slider__carousel__item.active").dataset.carousel);
        let offset;

        if(currentSlide == (context.querySelectorAll(".slider__carousel__item").length - 1)) {
          context.querySelector(".slider__carousel__item.active").classList.remove("active");
          offset = 0;
          context.querySelector(".slider__carousel__list").style.transform = "translateX("+offset+"px)";
          this.querySelectorAll(".slider__carousel__item")[0].classList.add("active");
        } else {
          context.querySelector(".slider__carousel__item.active").classList.remove("active");
          offset = (context.querySelector(".slider__carousel__item").clientWidth + 32) * (currentSlide + 1);
          context.querySelector(".slider__carousel__list").style.transform = "translateX(-"+offset+"px)";
          this.querySelectorAll(".slider__carousel__item")[currentSlide + 1].classList.add("active");
        }
      }

    })
    
  }
}
</script>