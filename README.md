
**About**

This is my attempt at the QA assignment to automate the checking for the correctness of an answer.

**Requirements**
- NodeJS
  
**Instructions for OsX**
- Make a directory wdio-flashCard
- cd wdio-flashCard
- Clone the repo
- git clone https://github.com/
- Once done, move into the repo folder
- Run the following command to install the requirements
    - npm install
- Run the following command to run all the tests
   - npm run test:all
- The report will be available in the folder allure-report.     
  - npm run allure-report-generate
**Options**
The tests execute by default on Chrome.
**Package information** 
  - WEBDRIVER I/O Next-gen browser and mobile automation test framework for Node.js
  - Mocha -javaScript test framework is used for creating tests
  - Chai - used for assertions
  - allure-report - used of report generation

**Structure**
Specs
  - flashCard-2826229-spec 
    - Verifying the Scenarios 
      - Flash Cards appears
      - Next card is displayed
      - Correct answer is provided
      - Incorrect answer is provided
  - flashCard-waituntil-spec
    - Verfying the Scenarios where flash card disappers afetr some ms and the next card need to be diaplayed without pressing any button
  - wdio.conf.js
    - storing the WebdriverIO settings.
  - .baelrc 
    - For writting the  tests using next-generation JavaScript features,i used Babel to compile the test files.
**Major issues faced**
Tried to build the asessment in cypress but found the flash cards where showing weired behaviour like sometime they appear and sometime a blank card was getting displayed.

**How much to test**
Scope is to test the flash card (https://exercise-player.snappet.org/exercise/2826229) and the behaviour of the "answer-checker" controller 

**Further, proposed improvements
**
