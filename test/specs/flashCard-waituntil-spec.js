import flashCard from '../pageObject/flashCard.page';
import testData from '../data/testData';

describe('testing the flash card exercise', () => {
  before('testing the answer',function() {

    browser.url('https://exercise-player.snappet.org/exercise/2826229');

  });
  it('checking without selecting the button the next flash card appears and answer is validated', () => {
    browser.waitUntil(
      () => $(flashCard.answerInput).isDisplayed()
    );
    flashCard.enterText.setValue(testData.enterAnswer);
    flashCard.radioButton.click();
    flashCard.checkBoxFirst.click();
    flashCard.checkBoxSecond.click();
    flashCard.pinkButton.click();

    flashCard.checkAnswerButton.click();

    const checkAnswer = flashCard.answerStatus.getText();
    expect(checkAnswer).to.be.equal("Correct");

  });
});