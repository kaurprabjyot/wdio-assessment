import flashCard from '../pageObject/flashCard.page';
import testData from '../data/testData';

describe('testing the flash card exercise', () => {
  before('testing the answer',function() {

    browser.url('https://exercise-player.snappet.org/exercise/2826229');

  });
  it('checking the flash exercise appears with the questions', () => {
    const card1Text = flashCard.card1.getText();
    expect(card1Text).to.be.equal(testData.answer);

    const isCard2Visible = flashCard.card2.isDisplayed();
    expect(isCard2Visible).to.be.equal(true);
  });
  it('checking the next flash card appears on pressing the button with d=uration set to 0ms', () => {
    flashCard.pinkButton.click();
    const isTextBoxDisplayed = flashCard.answerInput.isDisplayed();
    expect(isTextBoxDisplayed).to.be.equal(true);

    const duration =flashCard.duration.getText();
    expect(duration).to.be.equal(testData.duration);
  });
  it('checking on entering the correct values the answer is validated correctly', () => {
    flashCard.enterText.setValue(testData.enterAnswer);
    flashCard.radioButton.click();
    flashCard.checkBoxFirst.click();
    flashCard.checkBoxSecond.click();
    flashCard.checkAnswerButton.click();

    const checkAnswer = flashCard.answerStatus.getText();
    expect(checkAnswer).to.be.equal("Correct");

  });
  it('checking on leaving the textbox empty the validation is getting raised', () => {
    flashCard.enterText.clearValue();
    flashCard.enterText.setValue(" ");
    flashCard.radioButton.click();
    flashCard.checkBoxFirst.click();
    flashCard.checkBoxSecond.click();
    flashCard.checkAnswerButton.click();

    const checkAnswer = flashCard.answerStatus.getText();
    expect(checkAnswer).to.be.equal("Incorrect");

    const hint  = flashCard.hint.getText();
    expect(hint).to.be.equal("required text empty");

  });
  it('checking on entering the invalid value in the textBox the answer is getting validated', () => {
    flashCard.enterText.clearValue();
    flashCard.enterText.setValue(testData.wrongAnswer);
    flashCard.radioButton.click();
    flashCard.checkBoxFirst.click();
    flashCard.checkBoxSecond.click();
    flashCard.checkAnswerButton.click();

    const checkAnswer = flashCard.answerStatus.getText();
    expect(checkAnswer).to.be.equal("Incorrect");
  });
  it('checking on not selecting the pink button answer is getting validated ', () => {
    flashCard.enterText.clearValue();
    flashCard.enterText.setValue(testData.enterAnswer);
    flashCard.checkBoxFirst.click();
    flashCard.checkBoxSecond.click();
    flashCard.checkAnswerButton.click();

    const checkAnswer = flashCard.answerStatus.getText();
    expect(checkAnswer).to.be.equal("Incorrect");
  });
})