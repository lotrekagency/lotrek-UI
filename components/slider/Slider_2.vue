<template>
  <div class="slider" id="slider-2">

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
        <div class="slider__carousel__item active" data-carousel="0">
          <h1>
            Card n.1
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit et sequi totam praesentium quibusdam exercitationem debitis in nam! Maxime, incidunt!
          </p>
          <a href="" class="button">Click me</a>
        </div><!--/carousel-card - 0 -->

        <div class="slider__carousel__item" data-carousel="1">
          <h1>
            Card n.2
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a href="" class="button">Click me</a>
        </div><!--/carousel-card - 1 -->

        <div class="slider__carousel__item" data-carousel="2">
          <h1>
            Card n.3
          </h1>
          <p>
            Fugit et sequi totam praesentium quibusdam exercitationem debitis in nam! Maxime, incidunt!
          </p>
          <a href="" class="button">Click me</a>
        </div><!--/carousel-card - 2 -->

        <div class="slider__carousel__item" data-carousel="3">
          <h1>
            Card n.4
          </h1>
          <p>
            Fugit et sequi totam praesentium quibusdam exercitationem debitis in nam! Maxime, incidunt!
          </p>
          <a href="" class="button">Click me</a>
        </div><!--/carousel-card - 3 -->

        <div class="slider__carousel__item" data-carousel="4">
          <h1>
            Card n.5
          </h1>
          <p>
            Fugit et sequi totam praesentium quibusdam exercitationem debitis in nam! Maxime, incidunt!
          </p>
          <a href="" class="button">Click me</a>
        </div><!--/carousel-card - 4 -->

        <div class="slider__carousel__item" data-carousel="5">
          <h1>
            Card n.6
          </h1>
          <p>
            Fugit et sequi totam praesentium quibusdam exercitationem debitis in nam! Maxime, incidunt!
          </p>
          <a href="" class="button">Click me</a>
        </div><!--/carousel-card - 5 -->

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
    let context = document.querySelector("#slider-2");
    let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    context.querySelector(".slider__carousel").addEventListener("click", function(e) {

      //if clicking the "previous slide" button
      if(e.target.classList.contains("slider__nav__prev")) {
        let currentSlide = parseInt(context.querySelector(".slider__carousel__item.active").dataset.carousel);
        let offset;

        if(currentSlide == 0) {
          return false;
        } else {
          offset = (context.querySelector(".slider__carousel__item").clientWidth + 36) * (currentSlide - 1);
        context.querySelector(".slider__carousel__item.active").classList.remove("active");
        e.target.classList.add("active");
        }
        console.log(offset)
        context.querySelector(".slider__carousel__list").style.transform = "translateX(-"+offset+"px)";
        this.querySelectorAll(".slider__carousel__item")[currentSlide - 1].classList.add("active");
      }

      //if clicking the "next slide" button
      if(e.target.classList.contains("slider__nav__next")) {
        let currentSlide = parseInt(context.querySelector(".slider__carousel__item.active").dataset.carousel);
        let offset, mobileCont;

        if(deviceWidth < 769) {
          //mobile
          mobileCont = 1;
        } else {
          //tablet & desktop
          mobileCont = 2;
        }

        //why (length - mobileCont)? because I don't wanna too much show empty space, 
        //feel free to change the mobileCont's value, atleast for tablet & desktop sizes
        if(currentSlide == (context.querySelectorAll(".slider__carousel__item").length - mobileCont)) {
          return false;
        } else {
          context.querySelector(".slider__carousel__item.active").classList.remove("active");
          e.target.classList.add("active");
          offset = (context.querySelector(".slider__carousel__item").clientWidth + 36) * (currentSlide + 1);
        }
        context.querySelector(".slider__carousel__list").style.transform = "translateX(-"+offset+"px)";
        this.querySelectorAll(".slider__carousel__item")[currentSlide + 1].classList.add("active");
      }

    })
    
  }
}
</script>