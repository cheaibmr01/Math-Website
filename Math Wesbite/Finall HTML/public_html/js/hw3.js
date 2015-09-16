//Howwork 3 Question 6.18

			   var firstnumber;
			   var secondnumber;
			   var thirdnumber;
			   
			   var number1;
			   var number2;
			   var number3;
			   
			   var sum;
			   var average;
			   var product;
			   var smalest;
			   var largest;
			   var results;
					// read in the first number
					firstnumber = window.prompt("Enter first integer" );
					secondnumber = window.prompt("Enter second integer" );
					thirdnumber = window.prompt("Enter third integer" );
					
					number1 = parseInt(firstnumber);
					number2 = parseInt(secondnumber);
					number3 = parseInt(thirdnumber);
					
					sum = number1 + number2 + number3;
					average = ((number1 + number2 + number3)/3)
					product = number1 * number2 * number3;
					smallest = Math.min(number1,number2,number3);
					largest = Math.max(number1,number2,number3);
					
					
					results = window.alert("The Sum of the numbers is: " + sum + " \n The average of the numbers is: " + average
					+ " \n  The product of the numbers is: " + product + " \n The smallest number of the three is: " + smallest
					+ " \n The largest number of the three is: " + largest );
					
					
// Homework 3 Question 6.19


				var radius;
				var diameter;
				var circumferance;
				var area;
				
				radius = window.prompt("Enter the radius of the circle");
				
				diameter = radius * 2;
				circumferance = 2 * Math.PI * radius;
				area = Math.PI * radius ^ 2;
				
				document.writeln(
		       "<h1>Question 6.19 Circle Details</h1>" );
				
			   document.writeln(
		       "<h2>The radius is "  + radius  );
			   document.writeln(
		       "<h2>The diameter is "  + diameter  );
			   document.writeln(
		       "<h2>The circumferance is "  + circumferance  );
			   document.writeln(
		       "<h2>The area is "  + area + " \n\n\n" );
			   
// Homework 3 Question 6.19

document.writeln(
		       "<h1>Question 6.24 Number Cubes and Squares</h1>" );


var square;
var cube;
document.write("<table border='10'>" );
document.write("<tr>");
	document.write("<td>");
	document.write("Number") ;
	document.write("</td>");
	document.write("<td>");
	document.write("Square" );
	document.write("</td>");
	document.write("<td>");
	document.write("Cube");
	document.write("</td>");
	document.write("</tr>");

for (var number = 0; number <=5; number +=1){
	square = number * number;
	cube = number * number * number;	
	
	
	document.write("<tr>");
	document.write("<td>");
	document.write(number) ;
	document.write("</td>");
	document.write("<td>");
	document.write(square );
	document.write("</td>");
	document.write("<td>");
	document.write(cube);
	document.write("</td>");
	document.write("</tr>");
}	


// Homework 3 Question 7.16
document.writeln(
		       "<h4>Question 7.16 Powers of N </h4>" );



var N;
var Nx10;
var Nx100;
var Nx1000;
document.write("<table border='10'>" );
document.write("<tr>");
	document.write("<td>");
	document.write("N") ;
	document.write("</td>");
	document.write("<td>");
	document.write("N*10" );
	document.write("</td>");
	document.write("<td>");
	document.write("N*100");
	document.write("</td>");
	document.write("</tr>");
	document.write("N*1000");
	document.write("</td>");
	document.write("</tr>");

for (var number = 1; number <=6; number +=1){
	N = N;
	Nx10 = N * 10;
	Nx100 = N * 100;
	Nx1000 = N * 100;	
	
	
	document.write("<tr>");
	document.write("<td>");
	document.write(N);
	document.write("</td>");
	document.write("<td>");
	document.write(Nx10);
	document.write("</td>");
	document.write("<td>");
	document.write(Nx100);
	document.write("</td>");
	document.write("</tr>");
	document.write(Nx1000);
	document.write("</td>");
	document.write("</tr>");
}	
									
				
					

//-->
					