"use strict";

/*
    signin.js
    Script for the signin.html page
    Handle the form submit and use Parse.User.logIn() to start an authenticated session
*/

//use jQuery to register a function that is called when the document is ready for manipulation

$(function() {
	$('.form-signin').submit(function(evt) {
		evt.preventDefault();
		
		var newSignIn = $(this);
		var email = $('#inputEmail').val();
		var password = $('#inputPassword').val();

		var addButton = newSignIn.find(':submit'); // jquery- finds the submit form
			addButton.prop('disabled', true).addClass('working');
		
		Parse.User.logIn(email, password).then(function() {
			window.location = 'index.html';
			addButton.prop('disabled', false).removeClass('working');
		}, function(err) {
			showError(err);
			addButton.prop('disabled', false).removeClass('working');
		});
	});

});