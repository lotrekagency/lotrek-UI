<template>
  <div class="nav" id="head-mega">

    <div class="nav__pre">
      <a href="" class="nav__pre__link">Pre-link 1</a>
      <a href="" class="nav__pre__link">Pre-link 2</a>
      <a href="" class="nav__pre__link">Pre-link 3</a>
    </div><!--/nav__pre-->

    <div class="nav__inner">

      <a href="" class="nav__logo">
        <img src="../../static/assets/images/logo.svg" alt="" class="nav__logo__img">
      </a><!--/nav__logo-->

      <div class="nav__hmb">
        <span class="nav__hmb__line"></span>
        <span class="nav__hmb__line"></span>
        <span class="nav__hmb__line"></span>
      </div><!--/nav__hmb-->

      <nav class="nav__core">
        <span class="nav__core__link nav__core__link--sub" data-presub="0">Sublevel 1</span>
        <span class="nav__core__link nav__core__link--sub" data-presub="1">Sublevel 2</span>
        <a href="" class="nav__core__link">Link 3</a>
        <a href="" class="nav__core__link">Link 4</a>
      </nav><!--/nav__core-->
    </div><!--/nav__inner-->

    <div class="nav__sub">

      <span class="nav__sub__exit">
        Back
      </span>

      <div class="nav__sub__item" data-sub="0">
        <div class="nav__sub__box">
          <!--put here the sub-menu content, inside the box-->
          <h2>
            Feel free to put multiple elements here, even a grid.
          </h2>
          <h4>Lorem ipsum dolor sit.</h4>
          <hr>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusamus!
          </p>
          <a href="" class="nav__btn">Button</a>
          <!--end of content-->
        </div>
      </div><!--/nav__sub__item - 0 -->

      <div class="nav__sub__item" data-sub="1">
        <div class="nav__sub__box">
          <!--put here the sub-menu content, inside the box-->
          <h3>Lorem, ipsum.</h3>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <a href="" class="nav__btn">Button</a>
          <!--end of content-->
        </div>
      </div><!--/nav__sub__item - 0 -->
    </div><!--/nav__sub-->

  </div><!--/nav-->
</template>

<script>
export default {
  mounted: function() {
    
    //Copypaste this code
    function navFunc() {
      var context = document.querySelector("#head-mega");

      //Hamburger clicking - open & close dropdown menu
      context.querySelector(".nav__hmb").addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.toggle("active");
        context.querySelector(".nav__core").classList.toggle("active");
        
        if(context.querySelector(".nav__core:not(.active)")) {
          //Closing / resetting the megamenu when closing the main menu
          if(context.querySelector(".nav__sub__item.active") && context.querySelector(".nav__core__link--sub.active")) {
            context.querySelector(".nav__sub.active").classList.remove("active");
            context.querySelector(".nav__sub__item.active").classList.remove("active");
            context.querySelector(".nav__core__link--sub.active").classList.remove("active");
            context.querySelector('.nav__sub').style.minHeight = 0+'px'
          }
        }
      })

      //Adding the click event to each header item (first level) to open & close its relative sub-menu
      context.querySelectorAll(".nav__core__link--sub").forEach(element => {
        element.addEventListener("click", function(e) {
          e.preventDefault();

          let elementNum = element.dataset.presub;
          let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

          if(element.classList.contains("active")) {
            //If the user clicks on an already active item
            context.querySelector(".nav__sub").classList.remove("active");
            context.querySelector('.nav__sub__item[data-sub="'+elementNum+'"]').classList.remove("active");
            context.querySelector('.nav__core__link--sub[data-presub="'+elementNum+'"]').classList.remove("active");
            context.querySelector('.nav__sub').style.minHeight = 0+'px'
          } else {
            //Else if the user clicks on an item which isn't active, and...
            if(context.querySelector(".nav__sub__item.active") && context.querySelector(".nav__core__link--sub.active")) {
              context.querySelector(".nav__sub.active").classList.remove("active");
              context.querySelector(".nav__sub__item.active").classList.remove("active");
              context.querySelector(".nav__core__link--sub.active").classList.remove("active");
              context.querySelector('.nav__sub').style.minHeight = 0+'px'
            }

            //...close the currently opened item and open the clicked item
            element.classList.add("active");
            context.querySelector(".nav__sub").classList.add("active");
            context.querySelector('.nav__sub__item[data-sub="'+elementNum+'"]').classList.add("active");

            //Properly sizing the sub item's content on mobile
            if(deviceWidth < 769) {
              let headerCoreHeight = context.querySelector(".nav__core").clientHeight;
              context.querySelector('.nav__sub').style.minHeight = headerCoreHeight+"px";
            }
          }
        })
      });

      //Megamenu navigation - closing the current sublevel when touching the Back button
      context.querySelector(".nav__sub__exit").addEventListener("click", () => {
        context.querySelector(".nav__sub.active").classList.remove("active");
        context.querySelector(".nav__sub__item.active").classList.remove("active");
        context.querySelector(".nav__core__link--sub.active").classList.remove("active");
        context.querySelector('.nav__sub').style.minHeight = 0+'px';
      })

    }
    navFunc();
    
  }
}
</script>
