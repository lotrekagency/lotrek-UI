<template>
  <div class="block">
    <div class="block__inner">
      <div class="block__content">
        <h1 class="block__title">
          <code>Marketing_2.vue</code> Marketing block n.2
        </h1>
        <p class="block__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maiores voluptates non aperiam asperiores quia consectetur.
        </p>
      </div><!--/block__content-->
      <form class="block__form">
        <input type="email" name="" id="" class="block__input" placeholder="Email *" required>
        <button type="submit" class="block__btn">Submit</button>
      </form><!--/block__form-->
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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__content {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 2rem 0;
    margin: 0 auto;
    text-align: left;
  }
  &__form {
    flex: 0 0 45%;
    max-width: 45%;
  }
  &__input {
    appearance: none;
    display: inline-block;
    border: 1px solid black;
    border-right: 0;
    background: transparent;
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
  }
  &__btn {
    appearance: none;
    display: inline-block;
    border: 1px solid black;
    background: transparent;
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
  }
}
</style>