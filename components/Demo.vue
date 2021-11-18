<template>
  <div class="demo">

    <div class="demo__btn">
      <span class="demo__btn__icon">+</span>
    </div>

    <div class="sider demo__sider">
      <div class="sider__head">
        <h1 class="sider__head__title">
          Lotrek UI 
        </h1>
        <h2 class="sider__head__claim">A collection of ready-to-use  UI components written in HTML & CSS</h2>
      </div><!--/sider__head-->

      <div class="sider__categ">

        <!-- Hero blocks -->
        <div class="sider__categ__item" id="bcat-0">
          <div class="sider__categ__item__head">
            <span class="sider__categ__title">Hero blocks</span>
            <span class="sider__categ__btn">+</span>
          </div><!--/sider__categ__item__head-->
          <div class="sider__categ__item__sub">
            <span class="sider__categ__bname">Hero_1</span>
            <span class="sider__categ__bname">Hero_2</span>
            <span class="sider__categ__bname">Hero_3</span>
          </div><!--/sider__categ__item__sub-->
        </div><!--/sider__categ__item-->

        <!-- Features blocks -->
        <div class="sider__categ__item" id="bcat-1">
          <div class="sider__categ__item__head">
            <span class="sider__categ__title">Features blocks</span>
            <span class="sider__categ__btn">+</span>
          </div><!--/sider__categ__item__head-->
          <div class="sider__categ__item__sub">
            <span class="sider__categ__bname">Features_1</span>
            <span class="sider__categ__bname">Features_2</span>
            <span class="sider__categ__bname">Features_3</span>
          </div><!--/sider__categ__item__sub-->
        </div><!--/sider__categ__item-->

        <!-- Showcase blocks -->
        <div class="sider__categ__item" id="bcat-2">
          <div class="sider__categ__item__head">
            <span class="sider__categ__title">Showcase blocks</span>
            <span class="sider__categ__btn">+</span>
          </div><!--/sider__categ__item__head-->
          <div class="sider__categ__item__sub">
            <span class="sider__categ__bname">Showcase_1</span>
            <span class="sider__categ__bname">Showcase_2</span>
            <span class="sider__categ__bname">Showcase_3</span>
          </div><!--/sider__categ__item__sub-->
        </div><!--/sider__categ__item-->

        <!-- Marketing blocks -->
        <div class="sider__categ__item" id="bcat-3">
          <div class="sider__categ__item__head">
            <span class="sider__categ__title">Marketing blocks</span>
            <span class="sider__categ__btn">+</span>
          </div><!--/sider__categ__item__head-->
          <div class="sider__categ__item__sub">
            <span class="sider__categ__bname">Marketing_1</span>
            <span class="sider__categ__bname">Marketing_2</span>
          </div><!--/sider__categ__item__sub-->
        </div><!--/sider__categ__item-->

        <!-- Header blocks -->
        <div class="sider__categ__item" id="bcat-4">
          <div class="sider__categ__item__head">
            <span class="sider__categ__title">Header blocks</span>
            <span class="sider__categ__btn">+</span>
          </div><!--/sider__categ__item__head-->
          <div class="sider__categ__item__sub">
            <span class="sider__categ__bname">Header_1</span>
            <span class="sider__categ__bname">Header_2</span>
          </div><!--/sider__categ__item__sub-->
        </div><!--/sider__categ__item-->

      </div><!--/sider__categ-->
    </div><!--/sider-->

    <div class="core demo__core">
      <div class="core__inner">
        
        <div class="core__categ" id="ccat-0">
          <div class="core__block">
            <span class="core__block__title">
              <code>Hero_1.vue</code> Hero block n.1
            </span>
            <Hero_1 />
          </div>
          <div class="core__block">
            <span class="core__block__title">
              <code>Hero_2.vue</code> Hero block n.2
            </span>
            <Hero_2 />
          </div>
          <div class="core__block">
            <span class="core__block__title">
              <code>Hero_3.vue</code> Hero block n.3
            </span>
            <Hero_3 />
          </div>
        </div><!--/core__categ-->

        <div class="core__categ" id="ccat-1">
          <div class="core__block">
            <span class="core__block__title">
              <code>Features_1.vue</code> Features block n.1
            </span>
            <Features_1 />
          </div>
          <div class="core__block">
            <span class="core__block__title">
              <code>Features_2.vue</code> Features block n.2
            </span>
            <Features_2 />
          </div>
          <div class="core__block">
            <span class="core__block__title">
              <code>Features_3.vue</code> Features block n.3 - Accordion
            </span>
            <Features_3 />
          </div>
        </div><!--/core__categ-->

        <div class="core__categ" id="ccat-2">
          <div class="core__block">
            <span class="core__block__title">
              <code>Showcase_1.vue</code> Showcase block n.1
            </span>
            <Showcase_1 />
          </div>
          <div class="core__block">
            <span class="core__block__title">
              <code>Showcase_2.vue</code> Showcase block n.2
            </span>
            <Showcase_2 />
          </div>
          <div class="core__block">
            <span class="core__block__title">
              <code>Showcase_3.vue</code> Showcase block n.3
            </span>
            <Showcase_3 />
          </div>
        </div><!--/core__categ-->

        <div class="core__categ" id="ccat-3">
          <div class="core__block">
            <span class="core__block__title">
              <code>Marketing_1.vue</code> Marketing block n.1
            </span>
            <Marketing_1 />
          </div>
          <div class="core__block">
            <span class="core__block__title">
              <code>Marketing_2.vue</code> Marketing block n.2
            </span>
            <Marketing_2 />
          </div>
        </div><!--/core__categ-->

        <div class="core__categ" id="ccat-4">
          <div class="core__block">
            <span class="core__block__title">
              <code>Header_1.vue</code> Header block n.1 - simple header
            </span>
            <Header_1 />
          </div>
          <div class="core__block">
            <span class="core__block__title">
              <code>Header_2.vue</code> Header block n.2 - multiple levels header with megamenu
            </span>
            <Header_2 />
          </div>
        </div><!--/core__categ-->

      </div>
    </div><!--/core-->
  </div><!--/demo-->
</template>

<style lang="scss">
@import './styles/main.scss';

body {
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  overflow: hidden;
  //margin-top: 2rem;
}
code {
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
  background: #0F7EE6;
  color: white;
  font-size: 0.55em;
  font-weight: 500;
  line-height: 1;
  padding: 0 0.25rem;
  vertical-align: middle;
}
</style>

<style scoped lang="scss">
.demo {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  &__btn {
    display: flex;
    position: absolute;
    top: 0%;
    right: 0%;
    z-index: 100;
    box-shadow: -2px 2px 4px 1px rgba(0,0,0,0.1);
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.4rem;
    line-height: 1;
    align-items: center;
    justify-content: center;
    background: #FA501E;

    &.active {
      .demo__btn__icon {
        transform: rotate(45deg);
      }
    }

    @media (min-width: 769px) {
      display: none;
    }
    &__icon {
      transition: all ease-in .25s;
      transform: rotate(0);
      color: var(--white);
    }
  }
}//demo

.sider {
  padding: 1rem;
  top: 0%;
  left: 0%;
  width: clamp(200px,16.5vw,300px);
  flex: 0 0 clamp(200px,16.5vw,300px);
  height: calc(100vh - 2rem);
  overflow-y: auto;
  z-index: 10;
  background: var(--white);
  box-shadow: 4px 0px 10px rgba(0,0,0, 0.1);
  transition: all ease-in .25s;

  @media (max-width: 768px) {
    position: fixed;
    transform: translateX(-100%);
    &.active {
      transform: translateZ(0);
      transition: all ease-in .5s;
      z-index: 100;
    }
  }

  &__head {
    text-align: left;
    margin: 0 0 1rem;
    border-bottom: 1px solid var(--grey);

    &__title {
      font-size: 1.4rem;
      line-height: 1;
      margin: 0 0 0.5rem;
    }
    &__claim {
      display: block;
      margin: 0 0 1rem;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1;
      opacity: 0.8;
    }
  }
  &__categ {
    &__item {
      //background: aquamarine;
      text-align: left;
      margin: 0.5rem 0;
      transition: all ease-in .25s;
      border-radius: 0.25rem;
      box-shadow: -3px -3px 7px var(--white), 4px 4px 10px rgba(0,0,0, 0.1);

      &.active {
        .sider__categ__item__head {
          //background: aqua;
        }
        .sider__categ__btn {
          transform: rotate(45deg);
        }
        .sider__categ__item__sub {
          display: flex;
        }
      }

      &__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 0.75rem 1rem;
      }
      &__sub {
        padding: 0.75rem 1rem;
        flex-direction: column;
        align-items: baseline;
        border-top: 1px solid var(--grey);
        display: none;
      }
    }
    &__title {
      margin-right: 0.5rem;
    }
    &__bname {
      display: inline-block;
      margin-bottom: 0.75rem;
      padding-left: 1rem;
      position: relative;
      cursor: pointer;

      &:last-of-type {
        margin-bottom: 0;
      }
      &:before {
        content: ">";
        position: absolute;
        font-size: 0.75rem;
        line-height: 1;
        left: 0;
        top: calc(50% - 1px);
        transform: translateY(-50%);
      }
    }
    &__btn {
      transition: all ease-in .25s;
      font-size: 1.2rem;
      line-height: 1;
      user-select: none;
    }
  }
}//sider

.core {
  position: relative;
  //left: clamp(300px,20vw,500px);
  top: 0%;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 1;
  background: #f7f7f7;

  &__inner {
    padding: 2rem 2rem 4rem;
  }
  &__block {
    margin-top: 2rem;
    margin-bottom: 4rem;
    box-shadow: 4px 4px 10px rgba(0,0,0, 0.1);
    position: relative;

    &__title {
      display: inline-block;
      text-align: left;
      position: absolute;
      bottom: 100%;
      left: 0%;
      margin-block: 0.25rem;

      code {
        vertical-align: initial;
        font-size: initial;
      }
    }
  }
  &__categ {
    display: none;

    &.active {
      display: block;
    }
  }
}
</style>

<script>

import Hero_1 from '~/components/hero/Hero_1.vue';
import Hero_2 from '~/components/hero/Hero_2.vue';
import Hero_3 from '~/components/hero/Hero_3.vue';

import Features_1 from '~/components/features/Features_1.vue';
import Features_2 from '~/components/features/Features_2.vue';
import Features_3 from '~/components/features/Features_3.vue';

import Showcase_1 from '~/components/showcase/Showcase_1.vue';
import Showcase_2 from '~/components/showcase/Showcase_2.vue';
import Showcase_3 from '~/components/showcase/Showcase_3.vue';

import Marketing_1 from '~/components/marketing/Marketing_1.vue';
import Marketing_2 from '~/components/marketing/Marketing_2.vue';

import Header_1 from '~/components/header/header_1.vue';
import Header_2 from '~/components/header/header_2.vue';

export default {
  components: {
    Hero_1,
    Hero_2,
    Hero_3,
    Features_1,
    Features_2,
    Features_3,
    Showcase_1,
    Showcase_2,
    Showcase_3,
    Marketing_1,
    Marketing_2,
    Header_1,
    Header_2
  },
  mounted: function() {

    if(document.querySelector('.sider') && document.querySelector('.core')) {

      // Sidebar's logic, mostly clicking & menu management
      document.querySelectorAll('.sider__categ__item').forEach((element, index) => {
        element.addEventListener('click', (e) => {

          // If the click is on a sub-level element, then just focus the block in the view
          if(e.target.classList.contains('sider__categ__bname')) {
            let elementIndex = Array.prototype.indexOf.call(element.querySelectorAll('.sider__categ__bname'), e.target);
            document.querySelectorAll('.core__categ.active .core__block')[elementIndex].scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
            if(document.querySelector('.sider').classList.contains('active')) {
              document.querySelector('.sider').classList.remove('active')
            }
            if(document.querySelector('.demo__btn').classList.contains('active')) {
              document.querySelector('.demo__btn').classList.remove('active')
            }
            return false;
          }
          
          // Handling the opening of sider items and its blocks on the core view of the app
          if(element.classList.contains('active')) {
            element.classList.remove('active');
            document.querySelector('.core__categ.active').classList.remove('active');
          } else {

            // Resetting the sider menu, closing already opened items
            if(document.querySelector('.sider__categ__item.active')) {
              document.querySelector('.sider__categ__item.active').classList.remove('active');
            }

            element.classList.add('active');
            if(document.querySelector('.core__categ.active')) {
              document.querySelector('.core__categ.active').classList.remove('active');
            }
            document.querySelector('#ccat-'+element.id.split('bcat-')[1]).classList.add('active');
          }
        })

      });

      // Sider handling on mobile
      document.querySelector('.demo__btn').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.sider').classList.toggle('active');
      })
    }

    //element.id.split('bcat-')[1]


    /*document.querySelectorAll('.docs__block').forEach(element => {
      element.querySelector('.docs__btn').addEventListener('click', () => {
        if(element.classList.contains('active')) {
          element.classList.remove('active')
        } else {
          element.classList.add('active')
        }
      })
    });*/
  }
}
</script>