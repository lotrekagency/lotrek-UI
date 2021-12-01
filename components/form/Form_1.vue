<template>
  <div class="form">
    <div class="form__inner">
      
      <div class="form__content">
        <span>
          Lorem, ipsum.
        </span>
        <h1>
          Lorem ipsum dolor sit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maiores voluptates non aperiam asperiores quia consectetur.
        </p>
      </div><!--/form__content-->

      <form action="" class="form__core form__core--small">
        
        <div class="form__box">
          <div class="form__box__cell">
            <label for="formName" class="form__pretxt">Name</label>
            <input class="form__item" type="text" name="" id="formName" placeholder="Name">
          </div><!--/box__cell-->

          <div class="form__box__cell">
            <label for="formSurname" class="form__pretxt">Surname</label>
            <input class="form__item" type="text" name="" id="formSurname" placeholder="Surname">
          </div><!--/box__cell-->
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__cell">
            <label for="formEmail" class="form__pretxt">Email</label>
            <input class="form__item" type="email" name="" id="formEmail" placeholder="Email">
          </div>
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__cell form__box__cell--row">
            <input class="form__radio" type="radio" name="formRadioGroup" id="formRadio1">
            <label for="formRadio1" class="form__pretxt">Radio 1</label>
          </div>
          <div class="form__box__cell form__box__cell--row">
            <input class="form__radio" type="radio" name="formRadioGroup" id="formRadio2">
            <label for="formRadio2" class="form__pretxt">Radio 2</label>
          </div>
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__cell">
            <label for="formSelect" class="form__pretxt">Select</label>
            <select name="" id="formSelect">
              <option value="" selected disabled>Default option</option>
              <option value="1">Value 1</option>
              <option value="2">Value 2</option>
            </select>
          </div>
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__cell">
            <label for="formMessage" class="form__pretxt">Message</label>
            <textarea class="form__item" name="" id="formMessage" cols="6" rows="4" placeholder="Message"></textarea>
          </div>
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__cell form__box__cell--row">
            <input class="form__checkbox" type="checkbox" name="" id="formAgreement">
            <label for="formAgreement" class="form__pretxt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, quas!
            </label>
          </div>
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__cell">
            <button class="form__btn" type="submit">Submit</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>