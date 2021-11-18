<template>
  <div class="headr" id="head-mega">

    <div class="headr__pre">
      <a href="" class="headr__pre__link">Pre-link 1</a>
      <a href="" class="headr__pre__link">Pre-link 2</a>r
      <a href="" class="headr__pre__link">Pre-link 3</a>
    </div><!--/headr__pre-->

    <div class="headr__inner">

      <a href="" class="headr__logo">
        <img src="../../static/assets/images/logo.svg" alt="" class="headr__logo__img">
      </a><!--/headr__logo-->

      <div class="headr__hmb">
        <span class="headr__hmb__line"></span>
        <span class="headr__hmb__line"></span>
        <span class="headr__hmb__line"></span>
      </div><!--/headr__hmb-->

      <nav class="headr__core">
        <span class="headr__core__link headr__core__link--sub" data-presub="0">Link 1 with sublevel</span>
        <span class="headr__core__link headr__core__link--sub" data-presub="1">Link 2 with sublevel</span>
        <a href="" class="headr__core__link">Link 3</a>
        <a href="" class="headr__core__link">Link 4</a>
      </nav><!--/headr__core-->
    </div><!--/headr__inner-->

    <div class="headr__sub">

      <span class="headr__sub__exit">
        Back
      </span>

      <div class="headr__sub__item" data-sub="0">
        <div class="headr__sub__box">
          <!--put here the sub-menu content, inside the box-->
          <h2>
            Feel free to put multiple elements here, even a grid.
          </h2>
          <h4>Lorem ipsum dolor sit.</h4>
          <hr>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusamus!
          </p>
          <a href="" class="headr__btn">Button</a>
          <!--end of content-->
        </div>
      </div><!--/headr__sub__item - 0 -->

      <div class="headr__sub__item" data-sub="1">
        <div class="headr__sub__box">
          <!--put here the sub-menu content, inside the box-->
          <h3>Lorem, ipsum.</h3>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <a href="" class="headr__btn">Button</a>
          <!--end of content-->
        </div>
      </div><!--/headr__sub__item - 0 -->
    </div><!--/headr__sub-->

  </div><!--/headr-->
</template>

<script scoped>
export default {
  mounted: function() {
    
    //Copypaste this code
    function headrFunc() {
      var context = document.querySelector("#head-mega");

      //Hamburger clicking - open & close dropdown menu
      context.querySelector(".headr__hmb").addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.toggle("active");
        context.querySelector(".headr__core").classList.toggle("active");
        
        if(context.querySelector(".headr__core:not(.active)")) {
          //Closing / resetting the megamenu when closing the main menu
          if(context.querySelector(".headr__sub__item.active") && context.querySelector(".headr__core__link--sub.active")) {
            context.querySelector(".headr__sub.active").classList.remove("active");
            context.querySelector(".headr__sub__item.active").classList.remove("active");
            context.querySelector(".headr__core__link--sub.active").classList.remove("active");
            context.querySelector('.headr__sub').style.minHeight = 0+'px'
          }
        }
      })

      //Adding the click event to each header item (first level) to open & close its relative sub-menu
      context.querySelectorAll(".headr__core__link--sub").forEach(element => {
        element.addEventListener("click", function(e) {
          e.preventDefault();

          let elementNum = element.dataset.presub;
          let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width

          if(element.classList.contains("active")) {
            //If the user clicks on an already active item
            context.querySelector(".headr__sub").classList.remove("active");
            context.querySelector('.headr__sub__item[data-sub="'+elementNum+'"]').classList.remove("active");
            context.querySelector('.headr__core__link--sub[data-presub="'+elementNum+'"]').classList.remove("active");
            context.querySelector('.headr__sub').style.minHeight = 0+'px'
          } else {
            //Else if the user clicks on an item which isn't active, and...
            if(context.querySelector(".headr__sub__item.active") && context.querySelector(".headr__core__link--sub.active")) {
              context.querySelector(".headr__sub.active").classList.remove("active");
              context.querySelector(".headr__sub__item.active").classList.remove("active");
              context.querySelector(".headr__core__link--sub.active").classList.remove("active");
              context.querySelector('.headr__sub').style.minHeight = 0+'px'
            }

            //...close the currently opened item and open the clicked item
            element.classList.add("active");
            context.querySelector(".headr__sub").classList.add("active");
            context.querySelector('.headr__sub__item[data-sub="'+elementNum+'"]').classList.add("active");

            //Properly sizing the sub item's content on mobile
            if(deviceWidth < 769) {
              let headerCoreHeight = context.querySelector(".headr__core").clientHeight;
              context.querySelector('.headr__sub').style.minHeight = headerCoreHeight+"px";
            }
          }
        })
      });

      //Megamenu navigation - closing the current sublevel when touching the Back button
      context.querySelector(".headr__sub__exit").addEventListener("click", () => {
        context.querySelector(".headr__sub.active").classList.remove("active");
        context.querySelector(".headr__sub__item.active").classList.remove("active");
        context.querySelector(".headr__core__link--sub.active").classList.remove("active");
        context.querySelector('.headr__sub').style.minHeight = 0+'px'
      })

    }
    headrFunc();
    
  }
}
</script>
