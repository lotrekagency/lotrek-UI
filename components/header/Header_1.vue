<template>
  <div class="headr">
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
        <a href="" class="headr__core__link">Link 1</a>
        <a href="" class="headr__core__link">Link 2</a>
        <a href="" class="headr__core__link">Link 3</a>
        <a href="" class="headr__core__link">Link 4</a>
      </nav><!--/headr__core-->

    </div><!--/headr__inner-->
  </div><!--/headr-->
</template>

<script>
export default {
  mounted: function() {
    //Copypaste this code

    document.querySelector(".headr__hmb").addEventListener("click", function(e) {
      e.preventDefault();
      this.classList.toggle("active")
      document.querySelector(".headr__core").classList.toggle("active")
    })
    
  }
}
</script>
