$(function(){
	$.get('https://guarded-wave-7903.herokuapp.com/').
	done(function(result){
		console.log(result)
		console.log($('#welcomeMessage').value());
	});
});