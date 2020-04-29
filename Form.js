//create the form class
class Form
{
  
  //create the constructor function
    constructor()
    {



    }

    //create the display function
    display()
    {

      //create the heading
      var title = createElement('h2');
      title.html("Survey Form");
      title.position(430,0);
       
      //create the name box and the OK button
      var input = createInput("Name");
      var button = createButton('OK');
      input.position(430,160);
      button.position(550,600);
    
      //create vaiable for greeting
      var greeting = createElement('h3');
      
      //create the age box
      var age = createInput("Your Age");
      age.position(430,200);

      //create the gender button
      var gender = createInput("Your Gender");
      gender.position(430,240);
      
      //create the first question and its answer box
      var question1 = createElement('h4');
      question1.html("1. Do you think we need to have free lunch meals in our school for very poor children ?");
      question1.position(430,280);
      var option1 = createInput("Yes Or NO (write here)");
      option1.position(430,320);
     

     //create the second question and its answer box
      var question2 = createElement('h4');
      question2.html("2. Would you be willing to contribute a small amount every month for such a program ?");
      question2.position(430,380);
      var option3 = createInput("Yes or No (write here)");
      option3.position(430,420);
      

      //create the third question and its money box
      var question3 = createElement('h4');
      question3.html("3. How much would you like to be willing to pay ? Write in the box below.");
      question3.position(430,480);
      var amount = createInput("Amount");
      amount.position(430,520);
      




      
 
      //write the code that if the OK button is pressed so do the necessary functions
      button.mousePressed(function()
      {

        //make all the objects hide
         input.hide();
         button.hide();
         age.hide();
         gender.hide();
         question1.hide();
         option1.hide();
         question2.hide();
         option3.hide();
         question3.hide();
         amount.hide();

         //create new variables to store voter's information
         var name = input.value();
         var ageValue = age.value();
         var genderValue = gender.value();
         var q1 = option1.value() 
         var q2 = option3.value() 
         var q3 = amount.value();

         //update the voter count
         voter.getCount();
         voterCount += 1;

         //update the voter's information in database
         voter.update(name, ageValue, genderValue, q1,q2,q3);
         voter.updateCount(voterCount);

         //give the greeting
         greeting.html("Your Vote is saved in database");
         greeting.position(530,160);

      })

      

    }


};