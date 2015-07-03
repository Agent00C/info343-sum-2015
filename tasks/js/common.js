// Recommended: put "use strict" in js
"use strict"; // changes interepreter into a strict mode. Flags errors for you.

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('93eXNi1LeHr149KRNYlRaowQC24f2SftlpXwYyU8', 'unXjVtpunbxHYqZIhXw6q598aVIXg4su9xY4D2Nv');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
