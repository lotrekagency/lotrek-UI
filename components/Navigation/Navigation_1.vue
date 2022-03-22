<template>
  <div class="nav" id="head-simple">
    <div class="nav__inner">

      <a href="" class="nav__logo">
        <img src="../../static/assets/images/logo.svg" alt="" class="nav__logo__img">
      </a><!--/nav__logo-->

      <div class="nav__hmb">
        <div class="nav__hmb__line"></div>
        <div class="nav__hmb__line"></div>
        <div class="nav__hmb__line"></div>
      </div><!--/nav__hmb-->

      <nav class="nav__core">
        <div class="nav__core__link nav__core__link--dropdown">
          <div class="nav__core__link__label">Dropdown 1</div>

          <div class="nav__core__dropdown">
            <a href="" class="nav__core__dropdown__link">Dropdown link 1</a>
            <a href="" class="nav__core__dropdown__link">Dropdown link 2</a>
            <a href="" class="nav__core__dropdown__link">Dropdown link 3</a>
          </div>
        </div>
        <a href="" class="nav__core__link">Link 2</a>
        <a href="" class="nav__core__link">Link 3</a>
        <a href="" class="nav__core__link">Link 4</a>
      </nav><!--/nav__core-->

    </div><!--/nav__inner-->
  </div><!--/nav-->
</template>

<script>
export default {
  mounted: function() {

    //Copypaste this code
    //Hamburger clicking - open & close dropdown menu
    var context = document.querySelector("#head-simple");
    context.querySelector(".nav__hmb").addEventListener("click", function(e) {
      e.preventDefault();
      this.classList.toggle("active");
      context.querySelector(".nav__core").classList.toggle("active");
    })
    
  }
}
</script>
