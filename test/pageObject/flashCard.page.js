class FlashCard
{
  get card1() { 

    return $('div.ng-tns-c16-4') ;
  }
  get card2() { 
    return $('div.ng-tns-c16-9') ;
  }
  get pinkButton () {
    return $$('exercise-hit-box')[1];
  }
  get answerInput () {
    return $('exercise-text-box.ng-tns-c18-11.ng-trigger.ng-trigger-visibilityState.ng-star-inserted');
  }
  get enterText () 
  {
     return $('input[data-test="text-box"]');
  }
  get radioButton () {

    return $('label[for="b2e54ba5-3953-46fd-8db0-14c4703ad27f"]');
  }
  get checkBoxFirst() {

    return $('label[for="2ca83a80-819a-409a-9991-0beed58459fc"]');
  }
  get checkBoxSecond() {

    return $('label[for="c46292f0-d71a-47dd-ad15-2f060525c51a"]');
  }
  get checkAnswerButton()
  {
    return $('button#check.btn.btn-warning');
  }
  get answerStatus() 
  {
    return $('span#exercise_status.status'); 
  }
  get hint() 
  {
    return $('#exercise_hint');
  }
  get duration() 
  {
    return $('#exercise_duration');
  }
}
export default new FlashCard();