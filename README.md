# Lab 8 - Starter
### Name: Steve Padmanaban <br>

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

   1. Within a Github action that runs whenever code is pushed 
   2. Manually run them locally before pushing code
   3. Run them all after all development is completed<br><br>

    **Answer: Choice 1** <br>

    It would be wise to run automated tests in a Github Action whenever the code is pushed. This allows for the developer to see if all the test cases pass or not before any deployment is made. Also, this ensures the developer to easily make the changes in the code if test cases fail which makes it more convenient since they would quickly understand any bugs in the code unlike Choice 3 which will cause tension in understanding why such cases fail. Choice 2 seems like another great choice since it is better to run
    tests before code is pushed which prevents more frequent pushes, but manually running tests locally would be a hassle for the developer which leads to Choice 1 as the best option. <br><br>

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no) <br>
    **Answer: No**<br><br>

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. <br><br>
   **Answer: No** <br>

   A unit test wouldn't be the best idea to test the "message" feature. This component of the application depends on the user input as well as involves in a submit button that needs to be pressed to sent the message to another person. A method of testing that fits more appropriate for this is End-to-End testing which can be used to automate test cases of the user experience of the application from start to finish. <br><br>
   
4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters. <br><br>
**Answer: Yes** <br>
A unit seems like a better choice for this situation. This is because the feature, "max message length," acts as a separate component of the project that can be formulated as a function to keep track of how many characters the user is typing and enforce a way to prevent the user from typing more than 80 characters. This can be tested independently since all the required input is the user's message, so that the function can simply check if the user is going above the character limit or not.
