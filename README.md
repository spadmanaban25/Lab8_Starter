# Lab 8 - Starter
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

   1. Within a Github action that runs whenever code is pushed 
   2. Manually run them locally before pushing code
   3. Run them all after all development is completed

    **Answer: Choice 2** <br>
    It would be wise to first run the tests locally before pushing code because in the event that a test(s) fail, this would prevent the code to be pushed and allow the developer to find and fix the issue. If the code was pushed and failed tests occurred, then it would require the developer to first fix the issue and commit and push again. This would be tedious, so running the tests locally before pushing would prevent this and minimizes the amount of pushing and committing the code. <br><br>

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
    **Answer: No**

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
