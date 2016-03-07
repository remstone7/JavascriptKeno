var count = 0;
var selectNum = [];
var gameNumber= ["col-md-2",
	"col-sm-2",
	"col-lg-2",
	"keno-game-style",
	"first-column",
	"keno-number",];
var userValues = [
	"col-xs-12",
	"userinputstyles",
	"userNums"
	];
var kenoNums = 1;
var num = [];
var i = 0;
var arrF = [];
var number1 = "",
	number2 = "",
	number3 = "",
	number4 = "",
	number5 = "";
var insert = 1;
var arr = [];
var num1 = "",
	num2 = "",
	num3 = "",
	num4 = "",
	num5 = "";
var classItems = 0;


$(document).ready(function(){


	$(".lets-play").on("click", function(e){
		// Validate


		// store the user inputs
		number1 = $("#number1").val();
		number2 = $("#number2").val();
		number3 = $("#number3").val();
		number4 = $("#number4").val();
		number5 = $("#number5").val();
		// stop automatic refresh
		e.preventDefault();

		// timer countdown
		startCountDown(classItems);

	});
});


function startCountDown(){ // countdown function
	$("#mainDisplay").hide();
	$(".buttonCon").hide();
	$(".countDown").css("display","block");
	$("#red").animate({
		fontSize: "2em",
		color: "red",
		duration: 1000}, "slow", function(){
		$("#yellow").animate({
			fontSize: "2em",
			color: "yellow",
			duration: 2000}, "slow", function(){
			$("#green").animate({
				fontSize: "2em",
				color: "green",
				duration: 3000}, "slow", function(){
				$("#go").animate({
					fontSize: "3em",
					duration: 3000}, "slow", function(){
						$(".countDown").hide();//hide the dountdown div
						$("#theGame").css("display", "block");// set the board live

						createGameBoard();

				});
			});
		});
	});

}



function createGameBoard(){ 
	// put user inputs into the dom
	$("#userInputValues").append("<div class='"+userValues[0]+" "+userValues[2]+"'><span>"+number1+"</span><span>"+number2+"</span><span>"+number3+"</span><span>"+number4+"</span><span>"+number5+"</span></div>");
	// create game board
	for (var board = 0; board < 10; board++) {
		for (count = 0; count < 8; kenoNums++){
			count++;
			$("#theGame").append("<div class='"+gameNumber[0]+" "+gameNumber[1]+" "+gameNumber[2]+" "+gameNumber[3]+" "+gameNumber[4]+" "+gameNumber[5]+"' data-type='"+kenoNums+"'>"+kenoNums+"</div>");
			pickComputerNumbers();
		}
	};
}


function pickComputerNumbers(){  // pick computer numbers function
	while(arr.length < 20){
 	 var randomnumber=Math.ceil(Math.random()*80)
	  var found=false;
	  for(var i=0;i<arr.length;i++){
		if(arr[i]==randomnumber){found=true;break}
	  }
	  if(!found)arr[arr.length]=randomnumber;
	}
	// save random array in new array
	arr=arrF;

	highlightComputerNumbers();//run next function
}

function highlightComputerNumbers(){ //highlight the computer numbers
	for(var i = 0; i < 20; i++){
		var computerNums = arrF[i];	
		var insert = $("*[data-type='"+computerNums+"']");
		// add animation to selected numbers 1 by 1
		$(insert).addClass("selected").animate({
			borderRadius: "5px",
			fontSize: "1.2em",
			color: "white",
			duration: 2000}, "slow", function(){

			}
		)


		matchUserInputs();//run next function
	}//forloop


}//highlight


// for each to loop through arrF array.
function matchUserInputs(){
	// If any element inside the array == user input do something
		$.each(arrF, function(x,y){
			if($("#number1").val() == y){
				// store result 
				$("span:nth-child(1)").addClass("correct");

			}if($("#number2").val() == y){

				$("span:nth-child(2)").addClass("correct");

			}if($("#number3").val() == y){

				$("span:nth-child(3)").addClass("correct");

			}if($("#number4").val() == y){

				$("span:nth-child(4)").addClass("correct");

			}if($("#number5").val() == y){

				$("span:nth-child(5)").addClass("correct");

			}
		});

		classItems = $(".correct").length;

		if(classItems >= 1){
			$("#userRight").html("<div class='new'>Congrats you got "+classItems+" right!</div>");
		}else{
			$("#userRight").html("<div class='new'>You didn't get any right, try again!</div>");	
		}
		
	}









