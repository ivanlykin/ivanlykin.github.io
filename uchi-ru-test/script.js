var arrowWidth = 2;
var startX = 35.5;
var startY = 139;
var endX;
var endY = 140;
var scaleStep = 39;

var firstNumber;
var secondNumber;
var questionMark;
var summ;

var firstInput;
var secondInput;
var answerInput;

var arrowCanvas;
var countArrows=0;

// Генерация чисел a и b.
function createNumbers(minA, maxA, minB, maxB) {
	var a = Math.floor(Math.random() * (maxA - minA + 1)) + minA; 
	var b;
	do {
		b=Math.floor(Math.random() * (maxB - minB + 1)) + minB;
	} while (a+b<11)
	firstNumber.innerHTML = a;
	secondNumber.innerHTML = b;
	summ = Number(firstNumber.innerHTML) + Number(secondNumber.innerHTML);
}

// Рисуем стрелку
function drawingArrow(startX, startY, num) {
	if(countArrows==2) {
		return;
	}
	endX = startX + scaleStep*num;
	var controlX = scaleStep*num / 2 + startX;
	var controlY = endY-num*15;

	var canvas = arrowCanvas;
	var context = canvas.getContext("2d");
	context.beginPath();
	context.moveTo(startX, startY);
	context.quadraticCurveTo(controlX, controlY, endX, endY);
	context.moveTo(endX, endY);
	context.lineTo(endX-5, endY-9);
	context.moveTo(endX, endY);
	context.lineTo(endX-11, endY-3);
	context.lineWidth = arrowWidth;
	context.strokeStyle = "#C71585";
	context.stroke();
	countArrows++;
}

// Позиционирование инпутов
function inputPosition(input,num,plus){
	if(countArrows==2) {
		return;
	}
	var inputWidth = input.offsetWidth;
	input.style.left = plus + scaleStep*num / 2 + startX - inputWidth / 2  + "px";
	input.style.top = -(105 + num*15/2) + "px";
	input.style.opacity = 1;
	input.style.cursor = "text";
}

// Скрываем инпут с ответом
function hideAnswerInput() {
	answerInput.style.opacity = "0";
	answerInput.style.cursor = "default";
	questionMark.style.display = "inline";
}

// Показываем инпут с ответом
function showAnswerInput() {
	answerInput.style.opacity = "1";
	answerInput.style.cursor = "text";
	questionMark.style.display = "none";
}

// Проверка ввода данных в инпуты, подсвечивание ошибок
function enterNumber(input,inputNum) {
	var value = input.value; 
	var regExp = /[-\.;":'a-zA-Zа-яА-Я]/; 
	if (regExp.test(value)) { 
	    value = value.replace(regExp, ''); 
	    input.value = value; 
	} 
	switch(inputNum) {
		case 0: 
			if(input.value!=summ){
				answerInput.style.color = "red";
				startBtn.innerHTML = "...";
			} else {
				questionMark.innerHTML = summ;
				hideAnswerInput();
				questionMark.style.display = "inline";
				startBtn.innerHTML = "Новое задание";
			}
			break;
		case 1: 
			if(input.value==firstNumber.innerHTML) {
				firstNumber.style.background = "none";
				input.style.color = "black";
				input.setAttribute("disabled", "disabled");
				var plus = endX - 32 - startX;
				inputPosition(secondInput,secondNumber.innerHTML,plus);
				drawingArrow(endX,endY,secondNumber.innerHTML);
			} else {
				firstNumber.style.background = "yellow";
				input.style.color = "red";
			}
			break;
		case 2: 
			if(input.value==secondNumber.innerHTML) {
				secondNumber.style.background = "none";
				input.style.color = "black";
				input.setAttribute("disabled", "disabled");
				showAnswerInput();
			} else {
				secondNumber.style.background = "yellow";
				input.style.color = "red";
			}
			break;
		default:
			break;	 
	}
}


window.onload = function() {
	firstNumber = document.getElementById("firstNumber");
	secondNumber = document.getElementById("secondNumber");
	questionMark = document.getElementById("question");
	firstInput = document.getElementById("firstInput");
	secondInput = document.getElementById("secondInput");
	answerInput = document.getElementById("answerInput");
	arrowCanvas = document.getElementById("arrowCanvas");

	createNumbers(6,9,2,5);

	startBtn.onclick = function(){
		if(this.innerHTML=="Начать задание") {
			var num = firstNumber.innerHTML;
			drawingArrow(startX,startY,num);
			inputPosition(firstInput,num,0);
			this.innerHTML="...";
		} else if(this.innerHTML=="Новое задание") {
			hideAnswerInput();
			questionMark.innerHTML = "?";
			answerInput.value = "";
			answerInput.style.color = "black";
			firstInput.value = "";
			secondInput.value = "";
			firstInput.style.left = 0;
			firstInput.style.top = 0;
			firstInput.style.opacity = 0;
			firstInput.style.cursor = "default";
			firstInput.removeAttribute("disabled");
			secondInput.style.left = 0;
			secondInput.style.top = 0;
			secondInput.style.opacity = 0;
			secondInput.style.cursor = "default";
			secondInput.removeAttribute("disabled");
			startX=35.5;
			countArrows=0;
			arrowCanvas.getContext("2d").clearRect(0, 0, 875, 140);
			createNumbers(6,9,2,5);
			this.innerHTML="Начать задание";
		}
	}
}

