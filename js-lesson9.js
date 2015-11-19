//Task #1
/*
var a = +prompt("input first number","");
var b = +prompt("input second number","");
var arr = [];
var n = 0;
for (a ; a <= b; a++) {
		 arr[n] = a;
		 n+=1;		
		}
alert("The numerical series: " + arr + "    Amount of numbers in the row: " + arr.length);
*/

//Task #2
/*
var a = +prompt("input first number","");
var b = +prompt("input second number","");
var sum = 0;
for (a ; a <= b ; a++) {
	sum += a;		
	}
alert("The elements sum is: " + sum);
*/

// Task #3
/*
var n = +prompt("input a number","");
var fact = 1;
for (var i = 1 ; i <= n ; i++) {
	fact *= i;
}
alert(fact);
*/

//Task #4
/*
var a = +prompt("input first number","");
var b = +prompt("input second number","");
while (a >= b) {
	a = a - b;
}
alert("The length of remaining segment is: " + a);
*/

// Task #5
/*
var n = +prompt("input a number","");
var k = 1;
while (n/3 >= k) {
	k++;
}
alert("At least 'k' should be equal: " + k);
*/
/*
//Task #6
var n = +prompt("input a number","");
var number;
while (n > 0) {
	number = n%10;
	if 
}
*/

var n = 122;
var k="";
do {
	if (n > 1 && n%10 == 0) { k+= 0;}
	k+=(n%10);
	n-=n%10;	
} while (n!=0);
alert(k);






