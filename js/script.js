$(document).ready(function(){
	//Alert
	$('#btn').click(function(){

		alert("Hello ssb 332! Congratulations!");
	})

	//hide
	$('#hide').click(function(){

		$('.message').hide(2000);
	})

	//show
	$('#show').click(function(){

		$('.message').show(1000);
	})
	//toggle
	$('#toggle').click(function(){

		$('.message').toggle();
	})


})