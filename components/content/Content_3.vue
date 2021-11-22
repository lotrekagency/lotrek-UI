<template>
  <div class="content">
    <div class="content__inner">

      <ul class="content__acc">
        <li class="content__acc__item">
          <div class="content__acc__head">
            <h4>Lorem ipsum dolor sit.</h4>
            <svg class="content__acc__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0801 10.6667L16.7063 22.0404C16.3158 22.431 15.6826 22.431 15.2921 22.0404L3.91832 10.6667L5.33253 9.25244L15.9992 19.9191L26.6659 9.25244L28.0801 10.6667Z" fill="#000"></path></svg>
          </div>
          <div class="content__acc__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magnam. Odit odio ipsam dolore inventore amet magnam consequatur, perspiciatis nesciunt?
            </p>
          </div>
        </li><!--/accordion item-->
        <li class="content__acc__item">
          <div class="content__acc__head">
            <h4>Lorem, ipsum.</h4>
            <svg class="content__acc__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0801 10.6667L16.7063 22.0404C16.3158 22.431 15.6826 22.431 15.2921 22.0404L3.91832 10.6667L5.33253 9.25244L15.9992 19.9191L26.6659 9.25244L28.0801 10.6667Z" fill="#000"></path></svg>
          </div>
          <div class="content__acc__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magnam. Odit odio ipsam dolore inventore amet magnam consequatur, perspiciatis nesciunt?
            </p>
          </div>
        </li><!--/accordion item-->
        <li class="content__acc__item">
          <div class="content__acc__head">
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing.</h4>
            <svg class="content__acc__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0801 10.6667L16.7063 22.0404C16.3158 22.431 15.6826 22.431 15.2921 22.0404L3.91832 10.6667L5.33253 9.25244L15.9992 19.9191L26.6659 9.25244L28.0801 10.6667Z" fill="#000"></path></svg>
          </div>
          <div class="content__acc__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magnam. Odit odio ipsam dolore inventore amet magnam consequatur, perspiciatis nesciunt?
            </p>
          </div>
        </li><!--/accordion item-->
      </ul><!--/content__acc - accordion-->

    </div><!--/content__inner-->
  </div><!--/content-->
</template>

<script>
export default {
  mounted: function() {

    //Copypaste this code
    document.querySelectorAll('.content__acc').forEach(element => {
      element.querySelectorAll('.content__acc__item').forEach(aux => {
        aux.querySelector('.content__acc__head').addEventListener('click', () => {
          if(aux.classList.contains('active')) {
            aux.classList.remove('active')
          } else {
            if(element.querySelector('.content__acc__item.active')) {
              element.querySelector('.content__acc__item.active').classList.remove('active')
            }
            aux.classList.add('active')
          }
        })
      })
    })
    
  }
}
</script>