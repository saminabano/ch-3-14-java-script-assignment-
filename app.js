//-------------------xxx-----------------------------------
//chapter3
//assignment 3//
//Q1//
//var age=("I am 15 years old");
//alert (age);
//Q2//
//var totalVisite=("you have visite this site 14 times");
//alert(totalVisite);
//Q3//
//var birthYear=("my birth year is 1986");
//document.write(birthYear);
//var datatype=("data type of my declared variable is number");
//document.write("<br>");
//document.write(datatype);
//Q4//
 //var name=("john Doe");
//var title=("T shirt");
 //var quntity=("5");
 //var storename=("on XYZ clothing store");
//var information= name + title + quntity + storename
//document.write("<br>");
//document.write(information);

//Chapter 4//
//Q1//
//var num1=("sana ");
//var num2=("samina ");
//var num3=("sumaira");
//var num4=(num1 + num2 + num3);
//console.log(num4);
//Q2//
//5 legal & 5 illegal variable names//
//5 legal variables//
//& _ camelcase any number in between variable
//5 illegal variables//
//space # % number cannot start in starting of any variable

//Q3//
//b//
//numbers,$,_,letters//
//c//

//letters ,$ ,_//

//d//
//sensitive//

//e//
//keywords//

// assignment chapter 5//
//Q1//
//var num1=5;
//var num2=3;
//var num3=(num1 + num2);
//console.log(num3);
//var totalnum=("sum of 5 and 3 is 8");
//document.write("<br>");
//document.write(totalnum);
//Q2//

//var num1=5;
//var num2=3;
//var num3=(num1 * num2);
//console.log(num3);
//var totalnum=("multiplication of 5 and 3 is 15");
//document.write("<br>");
//document.write(totalnum);

//var num1=5;
//var num2=3;
//var num3=(num1 - num2);
//console.log(num3);
//var totalnum=("subtraction of 5 and 3 is 2");
//document.write("<br>");
//document.write(totalnum);

//var num1=5;
//var num2=3;
//var num3=(num1 / num2);
//console.log(num3);
//var totalnum=("multiplication of 5 and 3 is 1.6");
//document.write("<br>");
//document.write(totalnum);

//Q3//
///q//
//var x;
//b//
//var delaration=("value after declaration is");
//document.write("<br>");
//document.write(delaration);
//c,d,e//
//var x=5;

//var intitilize=("variable vale is 5");
//document.write("<br>");
//document.write(intitilize);

//var newnum=x++;
//console.log(newnum);
//g,h,i//
//var x=5;
//var y=7;
//var z=x + y;Q
//console.log(z);
//document.write("<br>");
//var xyz=("value after addition is 12");
//document.write(xyz);
//var desnum=--x;
//console.log(desnum);

//-----------------xx----------xx-------------xx----------
//chapter 6-9
//Q1 Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your
//browser:
var a=10;
document.write("<br>","the value of a is : ", a);
var num=++a;
document.write("<br>","The value of a now is ",num);
var num1=++num;
document.write("<br>","Tha value of a++ is :,",num1);
var num2=--num1;
document.write("<br>","The value of--a is:",num2);
var num3=--num2;
document.write("<br>","The value of a is now",num3);
//Q2 What will be the output in variables a, b & result after
//execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a=2;
document.write("<br>","a is =",a);
var b=1;
document.write("<br>","b is =",b);
var num1=--a;
var num2=(num1 - --b);
var num3=(num2 + ++b);
var num4=(num3 + b--);
document.write("<br>","result =",num4);
//Q3Write a program that takes input a name from user &
//greet the user.
var data=prompt("writa your name");
alert("<br>","welcom to", data);
//Q 5Write a program to take input a number from user &
var question =prompt("enter number here")|| 5;
for(i=0;i<=10;i++){
    var result=(question * i);

document.write("<br>",question,"x",i,"=",result);
}
//Q6
var subName1=prompt("enter your first subject here");
console.log("<br>","first subject is =",subName1)
var subName2=prompt("enter your second subject here");
console.log("<br>","your second subject is =",subName2);
var subName3=prompt("enter your third subject here");
console.log("<br>","your third subject is =",subName3)
var totalMar=100;
console.log("<br>","total marks"+ totalMar);
var obtainM1=prompt("enter your first subjaect obtain marks");
console.log("<br>",subName1,"=",obtainM1);
var obtainM2=prompt("enter your second subjaect obtain marks");
console.log("<br>",subName2,"=",obtainM2);
var obtainM3=prompt("enter your third subjaect obtain marks")
console.log("<br>",subName3,"=",obtainM3);

//--------------------x---------------x------------
//--------------------x---------------x------------
//chapter 12-13
//Q1 Write a program that takes a character (number or string)
//in a variable & checks whether the giv...........
var data=prompt("enter any number or letter");
if (data >= '0' && data <= '9') {
    console.log("The character is a number.");
  }
  // Check if the character is an uppercase letter
  else if (data >= 'A' && data <= 'Z') {
    console.log("The character is an uppercase letter.");
  }
  // Check if the character is a lowercase letter
  else if (data >= 'a' && data <= 'z') {
    console.log("The character is a lowercase letter.");
  }

//Q2 Write a JavaScript program that accept two integers and
//display the larger. Also show if the two integers are equal.
 var num1=prompt("enter your first number here");
 var num2=prompt("enter your second number here");
 {
 if(num1 < num2){
    console.log(num1 ,"is grater then number 2 ")
 }
 else if(num2 < num1){
    console.log(num2,"is grater then number 1")
 }
 else{
    console.log("both numbers are equavql")
 }
}
//Q3 Write a program that takes input a number from user &
//state whether the number is positive, negative or zero.
var data=prompt("enter any number ");
if (data >= '0' && data <= '9') {
    console.log("The number  is a positive .");
  }
  // Check if the character is an uppercase letter
  else if (data >= '-0' && data <= '-9') {
    console.log("The number is an neagative.");
  }
  // Check if the character is a lowercase letter
  else if (data === '0' ) {
    console.log("The number is a zero.");
  }