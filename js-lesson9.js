//Task #1
/*Даны два целых числа A и B (A < B). Выведите в порядке возрастания все целые числа, расположенные между A и B (включая сами числа A и B), а также количество N этих чисел. */
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
/*Даны два целых числа A и B (A < B). Найдите сумму всех целых чисел от A до B включительно.*/
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
//Дано целое число N (N > 0). Найдите произведение N! = 1 * 2 * … * N.
/*
var n = +prompt("input a number","");
var fact = 1;
for (var i = 1 ; i <= n ; i++) {
	fact *= i;
}
alert(fact);
*/

//Task #4
/*Даны положительные числа A и B (A > B). На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений). Не используя операции умножения и деления, найдите длину незанятой части отрезка A.*/
/*
var a = +prompt("input first number","");
var b = +prompt("input second number","");
while (a >= b && b != 0) {
	a -= b;
}
alert("The length of remaining segment is: " + a);
*/

// Task #5
/*Дано целое число N (N > 1). Найдите наименьшее целое число K, при котором выполняется неравенство 3 * K > N.*/
/*
var n = +prompt("input a number","");
var k = 0;
do {
	k++;
} while (n >= 3*k); 
alert("At least 'k' should be equal: " + k);
*/

//Task #6
/*Дано целое число N (>0). Используя операции деления нацело и взятия остатка от деления, выведите все его цифры, начиная с самой правой (разряда единиц).*/
/*
var n = +prompt("input a number","");
var number;
do { 
	number = n % 10;
	if (number == 0) {
		n /= 10;
	} else  {
		n = (n - n % 10) / 10;	
	}
	alert(number);	
} while (n > 0);
*/

//Task #7
/*
Задание №7. Циклы
Напишите код, который:
1. Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве;*.
2. Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт "Отмена";
3. Выводит сумму всех значений массива.
*/
/*
var array = [];
var arraySum = 0;
my: {
	for (var i = 0;; i++) {
		var k = prompt("Input a value", "");
		   if ( k == "" || k === null || isNaN(k) || k == " ") {
				break my;
			}
				array[i] = +k;
				arraySum += array[i];	
	}
}
alert("Sum of array values = "+ arraySum);
*/
//Task #8
/*
Задание №8. Циклы
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввел другое число – попросить ввести еще раз, и так далее. Цикл должен спрашивать число пока либо посетитель не введет число, большее 100, либо не нажмет кнопку Cancel (ESC). Предполагается, что посетитель вводит только числа.
*/
/*
my: {
	while (true) {
		var k = prompt("Input a value", "");
		   if (k != null && k <= 100 || k === 0) {
			   alert("Value must be more than 100");
			   continue;
		   } else if (k > 100 || k == null) {
			   break my;			   
		   }
	}
}
alert("Cycle is ended");
*/
//Task #9
/*
Даны целые числа A и B (A < B). Выведите все целые числа от A до B включительно; при этом число A должно выводиться 1 раз, число A + 1 должно выводиться 2 раза и т.д.
*/
/*
var a = +prompt("input first number","");
var b = +prompt("input second number","");
var k =1;
for (a ; a <= b ; a++) {
		for (var i=0; i < k; i++) {
			alert("Вывод числа "+ a); // вывод цифр
		}
		k++;
}
*/

// Task #10
/*Напишите функцию Pow(x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
*/
/*
var x = +prompt("input first number","");
var n = +prompt("input exponent","");
var resultOfPow;
function Pow(num, exp) {
	resultOfPow = num;
	if (exp == 0 && num !=0) {
		resultOfPow = 1;
	} else { if (exp < 0) {
				exp = Math.abs(exp);
				for (var i = 1; i < exp ; i++) {
					resultOfPow *= num;
				}
			resultOfPow = 1 / resultOfPow;
			} else {
				for (var i = 1; i < exp ; i++) {
					resultOfPow *= num;
				}	
			  }
	  }	
}
Pow(x, n);
alert("Result = " + resultOfPow);
*/
	
	
//Task #11
/*Напишите функцию RectP(x1, y1, x2, y2), которая возвращает периметр прямоугольника со сторонами, параллельными осям координат, по координатам (x1, y1), (x2, y2) его противоположных вершин. */
//sqrt(sqr(x1-x2)+sqr(y1-y2))
/*
function rectP(x1, y1, x2, y2) {
	var sideX = Math.sqrt(Math.pow((x1 - x2), 2));
	var sideY = Math.sqrt(Math.pow((y1 - y2), 2));
	var perimeter = 2 * (sideX + sideY);
	alert("Perimeter of rectangle = " + perimeter);
}
var x1 = +prompt("input coordinate X1","");
var y1 = +prompt("input coordinate Y1","");
var x2 = +prompt("input coordinate X2","");
var y2 = +prompt("input coordinate Y2","");
rectP(x1 , y1 , x2 , y2);
*/

//Task #12
//Напишите функцию MinMax(X, Y), которая возвращает минимальное из X и Y.
/*
function minMax(x, y) {
	if (x > y) {
		return y;
	} else {
		if (x < y) {
			return x;
		} else {
			return 0;
		}
	}
}
var a = +prompt("input first value","");
var b = +prompt("input second value","");
var minimal = minMax(a, b);
if (minimal) {
		alert ("The smallest of x,y = " + minimal)
	} else {
		alert("This numbers are equal!");
}
*/

//Task #13
/*
Напишите функцию Sign(X) целого типа, возвращающую для вещественного числа X следующие значения:
– -1, если X < 0;
– 0, если X = 0;
– 1, если X > 0.
*/
/*
function signX(x) {
	if (x < 0) {
		return -1;
	} else {
		if (x > 0) {
			return 1;
		} else {
			return 0;
		}
	 }
}
var numX = +prompt("input any value","");
alert(signX(numX));
*/

//Task #14
/* Напишите функцию Calc(A, B, Op), которая выполняет над числами A и B одну из арифметических операций и возвращает ее результат. Вид операции определяется целым числом Op: 1 – вычитание, 2 – умножение, 3 – деление, остальные значения – сложение.*/
/*
function calcOf(num1 , num2 , oper) {
	if (oper == 1) {
		return num1 - num2;
	} else {
		if (oper == 2) {
			return num1 * num2;
		} else {
				if (oper == 3) {
					return num1 / num2;
				} else {
					return num1 + num2;
				  }
		  }
	  }
}
var a = +prompt("input first value","");
var b = +prompt("input second value","");
var act = prompt("input operation: 1 - ded, 2 - mult, 3 - div, any other - sum","");
alert(calcOf(a, b, act));
*/

//Task #15
/*Напишите функцию DigitN(K, N), которая возвращает N-ю цифру целого положительного числа K (цифры в числе нумеруются справа налево). Если количество цифр в числе K меньше N, то функция возвращает -1. */
/*
function digitN(x, n) {
	var arrayDig = [];
	var number = 0;
	var i = 1;
	do { 
		number = x % 10;
			if (number == 0) {
				x /= 10;
			} else  {
				x = (x - x % 10) / 10;	
			}
		arrayDig[i] = number;
		i++;		
	} while (x > 0);
	if (n > arrayDig.length || n <= 0) {
			return -1;
		} else {
			return arrayDig[n];
		}
}
var a = +prompt("input any number","");
var b = +prompt("input any digit of the first number","");
var resDigit = digitN(a, b);
if (resDigit == -1) {
	alert("There no such digit in this number");
} else {
	alert("The " + b + " character of number " + a + " is " + resDigit + "!");
}
*/

// Task#16
/*Задание №16. Ассоциативный массив
Напишите код, по строке на каждое действие:
1. Создайте пустой объект user;
2. Добавьте свойство name со значением Вася;
3. Добавьте свойство surname со значением Петров;
4. Выведите на экран значения свойств name и surname;
5. Поменяйте значение name на Сергей;
6. Выведите на экран значения свойства name;
7. Удалите свойство name из объекта;
8. Проверьте существование свойства name, если данное свойство отсутствует, выведите сообщение: "Свойство отсутствует".
*/
/*
var user = {};
user.name = "Вася";
user.surname = "Петров";
alert(user.name + " " + user.surname);
user.name = "Сергей";
alert(user.name);
delete user.name;
//var 1
if (!("name" in user)) {
	alert("Свойство отсутствует!");
}
//var2
if (user.name == undefined) {
	alert("Свойство отсутствует!");
}
*/

