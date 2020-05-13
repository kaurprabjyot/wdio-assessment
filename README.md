


Skip to content

**About**

This is my attempt at the QA assignment to automate the checking for the correctness of an answer.

**Requirements**
- NodeJS (minimum v12.16.1)
- Java 8 (for allure reporter)
  
**Instructions for OsX**
<<<<<<< HEAD
- Clone the repo  `git clone https://github.com/kaurprabjyot/wdio-assessment.git`
=======
- Make a directory wdio-flashCard
- cd wdio-flashCard
- Clone the repo
- git clone https://github.com/kaurprabjyot/wdio-assessment.git
>>>>>>> 08645f0944cd1b1004a7fa20adb02c0bef97408d
- Once done, move into the repo folder
- Run the following command to install the requirements
    `npm install`
- Run the following command to run all the tests
   `npm run test:all`
- Run this command to generate the report.     
  `npm run allure-report-generate`

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
    - Verifying the Scenarios where flash card disappers afetr some ms and the next card need to be diaplayed without pressing any button
  - wdio.conf.js
    - storing the WebdriverIO settings.
  - .babelrc 
    - For writting the  tests using next-generation JavaScript features,i used Babel to compile the test files.

**Major issues faced**

Tried to build the asessment in cypress but found the flash cards where showing weired behaviour like sometime they appear and sometime a blank card was getting displayed.

**How much to test**

Scope is to test the flash card (https://exercise-player.snappet.org/exercise/2826229) and the behaviour of the "answer-checker" controller 

<<<<<<< HEAD
**Further, proposed improvements**
=======
**Further, proposed improvements

>>>>>>> 08645f0944cd1b1004a7fa20adb02c0bef97408d
