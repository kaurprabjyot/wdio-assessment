
**About**

This is my attempt at the QA assignment to automate the checking for the correctness of an answer.

**Requirements**
- NodeJS (minimum v12.16.1)
- Java 8 (for allure reporter)
  
**Instructions for OsX**
- Clone the repo  

    `git clone https://github.com/kaurprabjyot/wdio-assessment.git`
- Once done, move into the repo folder
- Run the following command to install the requirements

    `npm install`
- Run the following command to run all the tests

   `npm run test:all`
- Run this command to generate the report.(The report will be open in the browser)  

  `npm run allure-report-generate`

**Options**

The tests execute by default on Chrome.

**Package information** 

  - WEBDRIVER I/O Next-gen browser and mobile automation test framework for Node.js
  - Mocha -javaScript test framework is used for creating tests
  - Chai - used for assertions
  - allure-report - used of report generation

**Structure**

- `test/data` - Fixtures for test data
- `test/pageObject` - PageOjects are defined here
- `test/specs` - The spec files reside here.
- `wdio.conf.js` - storing the WebdriverIO configuration.
- `.babelrc` - For writting the  tests using next-generation JavaScript features,i used Babel to compile the test files.

**Specs**

  - `flashCard-2826229-spec` 
    - Verifying the Scenarios 
      - Flash Cards appears
      - Next card is displayed
      - Correct answer is provided
      - Incorrect answer is provided
  - `flashCard-waituntil-spec`
     - Verifying the Scenarios where flash card disappers afetr some ms and the next card need to be diaplayed without    pressing any button 
     
**Major issues faced**

I tried to build the assessment in cypress but found that the flash cards where showing strange behaviour. Sometimes the flash card would appear and sometimes a blank card was being displayed. Hence I decided to use webDriver IO

**How much to test**

Scope is to test the flash card (https://exercise-player.snappet.org/exercise/2826229) and the behaviour of the "answer-checker" controller 

**Further, proposed improvements**

