# Lab 8 - Starter
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

   1. Within a Github action that runs whenever code is pushed 
   2. Manually run them locally before pushing code
   3. Run them all after all development is completed

    **Answer: Choice 2** <br>
    It would be wise to first run the tests locally before pushing code because in the event that a test(s) fail, this would prevent the code to be pushed and allow the developer to find and fix the issue. If the code was pushed and failed tests occurred, then it would require the developer to first fix the issue and commit and push again. This would be tedious, so running the tests locally before pushing would prevent this and minimizes the amount of pushing and committing the code. <br><br>

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
    **Answer: No**


