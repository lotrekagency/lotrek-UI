<template>
  <div class="form">
    <div class="form__inner">

      <div class="form__content form__content--side">
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

      <form action="" class="form__core form__core--side">
        
        <div class="form__box">
          <div class="form__box__cell">
            <label for="formName1" class="form__pretxt">Name</label>
            <input class="form__item" type="text" name="" id="formName1" placeholder="Name">
          </div><!--/box__cell-->

          <div class="form__box__cell">
            <label for="formSurname1" class="form__pretxt">Surname</label>
            <input class="form__item" type="text" name="" id="formSurname1" placeholder="Surname">
          </div><!--/box__cell-->
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__cell">
            <label for="formEmail1" class="form__pretxt">Email</label>
            <input class="form__item" type="email" name="" id="formEmail1" placeholder="Email">
          </div>
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__group">
            <div class="form__box__cell">
              <label for="formPreRadio1" class="form__pretxt">Pre-radio</label>
              <input class="form__item" type="text" name="" id="formPreRadio1" placeholder="Pre-radio">
            </div>
            
            <div class="form__box__group form__box__group--subgroup">
              <div class="form__box__cell form__box__cell--row form__box__cell--nomargin">
                <input class="form__radio" type="radio" name="formRadioGroup1" id="formRadio11">
                <label for="formRadio11" class="form__pretxt">Radio 1</label>
              </div>
              <div class="form__box__cell form__box__cell--row form__box__cell--nomargin">
                <input class="form__radio" type="radio" name="formRadioGroup1" id="formRadio12">
                <label for="formRadio12" class="form__pretxt">Radio 2</label>
              </div>
            </div><!--/box--subgroup-->
          </div><!--/box__group-->

          <div class="form__box__cell">
            <label for="formSelect1" class="form__pretxt">Select</label>
            <select name="" id="formSelect1">
              <option value="" selected disabled>Default option</option>
              <option value="1">Value 1</option>
              <option value="2">Value 2</option>
            </select>
          </div>
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__cell form__box__cell--row">
            <input class="form__checkbox" type="checkbox" name="formCheckboxGroup1" id="formCheckbox11">
            <label for="formCheckbox11" class="form__pretxt">Checkbox 1</label>
          </div>
          <div class="form__box__cell form__box__cell--row">
            <input class="form__checkbox" type="checkbox" name="formCheckboxGroup1" id="formCheckbox12">
            <label for="formCheckbox12" class="form__pretxt">Checkbox 2</label>
          </div>
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__cell">
            <label for="formMessage1" class="form__pretxt">Message</label>
            <textarea class="form__item" name="" id="formMessage1" cols="6" rows="4" placeholder="Message"></textarea>
          </div>
        </div><!--/box-->

        <div class="form__box">
          <div class="form__box__cell form__box__cell--row">
            <input class="form__checkbox" type="checkbox" name="" id="formAgreement1">
            <label for="formAgreement1" class="form__pretxt">
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