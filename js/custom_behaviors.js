$(document).ready(function() {
					
	// VARIABLES
var agentOnesS = true
var agentTwosS = true
var agentThreesS = true
var agentOnecS = true
var agentTwocS = true
var agentThreecS = true
var sound = document.getElementById('GetPowAudio')
var play = document.getElementById('playOne')
	// EVENT HANDLERS
	$(".openingPage").fadeIn(900).delay(3500).fadeOut(1000)
	$(".signInSec").delay(3500).fadeIn(1000)

	$(".signIn").on("click", function(event){
		event.preventDefault()
		console.log("1")
		$(".signIn").addClass(".signInmovedown")
		$(".signInSec").fadeOut(900)
		$(".logInSec").fadeIn(900)
	})
	$(".LogIn").on("click", function(event){
		event.preventDefault()
		// console.log("1")

		$(".logInSec").fadeOut(900)
		$(".verifysec").fadeIn(1000).delay(4000).fadeOut(900)
		$(".reminderMess").fadeIn(900)
		$(".agentOnewindow").fadeIn(500)
		$(".topMess").fadeOut(500)

	})
	$("a").on("click", function(event){

		sound.play();

	})
	$(".okayButton").on("click", function(event){
		event.preventDefault()
		// console.log("1")

		$(".reminderMess").fadeOut(900)

	})
	$(".AlertokayButton").on("click", function(event){
		event.preventDefault()
		// console.log("1")
			// console.log("1")
			sound.play()
		$(".reminderAlert").fadeOut(900)

	})
	$(".tabOne").on("click", function(event){
		event.preventDefault()
		// console.log("1")

		$(".agentTwowindow").fadeOut(500)
		$(".agentOnewindow").fadeIn(500)
		$(".agentThreewindow").fadeOut(500)
	})
	$(".tabTwo").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		
		$(".agentTwowindow").fadeIn(500)
		$(".agentOnewindow").fadeOut(500)
		$(".agentThreewindow").fadeOut(500)
			
	});

	$(".tabThree").on("click", function(event){
		event.preventDefault()
		// console.log("1")
			
		$(".agentTwowindow").fadeOut(500)
		$(".agentOnewindow").fadeOut(500)
		$(".agentThreewindow").fadeIn(500)

	})
	
	$(".agentOnememoryButton").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		$(".agentOnememoryButton").addClass(".memorymovedown")
		$(".agentOnememoryGall").fadeIn(500)
		$(".agentThreewindow").fadeOut(500)
		$(".agentTwowindow").fadeOut(500)
		$(".agentOnewindow").fadeOut(500)
	
	})

	$(".agentTwomemoryButton").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		$(".agentTwomemoryGall").fadeIn(500)
		$(".agentThreewindow").fadeOut(500)
		$(".agentTwowindow").fadeOut(500)
		$(".agentOnewindow").fadeOut(500)
	})

	$(".agentThreememoryButton").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		$(".agentThreememoryGall").fadeIn(500)
		$(".agentThreewindow").fadeOut(500)
		$(".agentTwowindow").fadeOut(500)
		$(".agentOnewindow").fadeOut(500)
	})

	$(".agentOneBack").on("click", function(event){
		event.preventDefault()
		// console.log("1")	
		$(".agentOnewindow").fadeIn(500)
		$(".windowOne").fadeIn(500)
		$(".agentOnememoryGall").fadeOut(500)
	})
	$(".agentTwoBack").on("click", function(event){
		event.preventDefault()
		// console.log("1")
	
		$(".agentTwowindow").fadeIn(500)
		$(".windowTwo").fadeIn(500)
		$(".agentTwomemoryGall").fadeOut(500)
	})

	$(".agentThreeBack").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		$(".agentThreewindow").fadeIn(500)
		$(".windowThree").fadeIn(500)
		$(".agentThreememoryGall").fadeOut(500)
		
	})


	$(".agentOnecB").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		$("this").addClass(".ComStatusChangeanimation");
		$(".agentOnesB").fadeOut(1000)
		agentOnecS = false;
	})
	$(".agentOnesB").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		$("this").addClass(".ComStatusChangeanimation");
		$(".agentOnecB").fadeOut(1000)
		agentOnesS = false;
	})
	$(".agentTwocB").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		$("this").addClass(".ComStatusChangeanimation");
		$(".agentTwosB").fadeOut(1000)
		agentTwocS = false;
	})
		$(".agentTwocB").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		$("this").addClass(".ComStatusChangeanimation");
		$(".agentTwosB").fadeOut(1000)
		agentTwosS = false;
	})
	$(".agentThreecB").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		$("this").addClass(".ComStatusChangeanimation");
		$(".agentThreesB").fadeOut(1000)
		agentThreecS = false;
							
		if(agentTwosS == false && agentOnesS == false ){
			$(".agentThreewindow").fadeOut(500)
			$(".agentTwowindow").fadeOut(500)
			$(".agentOnewindow").fadeOut(500)
			$(".picFive").fadeIn(500)

		}else if(agentTwosS == false && agentOnecS ==false ){
			$(".agentThreewindow").fadeOut(500)
			$(".agentTwowindow").fadeOut(500)
			$(".agentOnewindow").fadeOut(500)
			$(".picThree").fadeIn(500)

		}else {
			$(".agentThreewindow").fadeOut(500)
			$(".agentTwowindow").fadeOut(500)
			$(".agentOnewindow").fadeOut(500)
			$(".picSix").fadeIn(500)

		
	}
	})
	
	$(".agentThreesB").on("click", function(event){
		event.preventDefault()
		// console.log("1")
		$("this").addClass(".SafeStatusChangeanimation");
		$(".agentThreecB").fadeOut(1000)
		agentThreesS = false;
					
		if(agentTwosS == false && agentOnesS == false ){
			$(".agentThreewindow").fadeOut(500)
			$(".agentTwowindow").fadeOut(500)
			$(".agentOnewindow").fadeOut(500)
			$(".picOne").fadeIn(500)


		}else if(agentTwosS == false && agentOnecS ==false ){
			$(".agentThreewindow").fadeOut(500)
			$(".agentTwowindow").fadeOut(500)
			$(".agentOnewindow").fadeOut(500)
			$(".picTwo").fadeIn(500)

		}else {
			$(".agentThreewindow").fadeOut(500)
			$(".agentTwowindow").fadeOut(500)
			$(".agentOnewindow").fadeOut(500)
			$(".picSix").fadeIn(500)

		}
		
	
})
	// FUNCTIONS
	
	// INITIALIZATION
	
	
});

