<template>
  <div class="block">
    <div class="block__inner">
      <div class="block__content">
        <h5 class="block__pretitle">
          Lorem, ipsum.
        </h5>
        <h1 class="block__title">
          <code>Marketing_1.vue</code> Marketing block n.1
        </h1>
        <p class="block__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maiores voluptates non aperiam asperiores quia consectetur.
        </p>
      </div><!--/block__content-->
    </div><!--/block__inner-->
  </div>
</template>

<style scoped lang="scss">
.block {
  background: white;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  overflow: hidden;

  &__inner {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  &__content {
    max-width: clamp(300px,100vw,650px);
    padding: 2rem 0;
    margin: 0 auto;
    text-align: center;
  }
  &__pretitle {
    margin: 0;
  }
}
</style>