/*!
 * Passive Passwords
 * MIT licensed
 *
 * Copyright (C) Tim Holman, http://tholman.com
 */

/*! Passive agressive responses, as said by your cold hearted X.
 *  Level: Response - the higher, the better the password
 *  Buzz word surrounded by "%" signs
 */
var responses = {

	0: [ 0, "I need a %password% not this monstrosity.",
		 "Really, you call %that!% a password?",
	     "Do you even know what a password %is!?%",
	     "Worst. Password. %Ever.%" ],

	1: [ 0, "I'm not %angry%, just dissapointed.",
	     "Try harder, %bub%",
	     "This is pretty %pathetic%",
	     "Really %poor% effort." ],

	2: [ 0, "May god have %mercy% on your email account.",
	     "Don't come %crying% to me when you're hacked.",
	     "I %hope% this account isn't important.",
	     "This password needs more %emoji%." ],

	3: [ 0, "Todlers %eat% passwords like yours for breakfast",
	     "Mashing your %head% on the keyboard would be more secure",
	     "Are you taking this %seriously%?",
	     "You're %joking% right?" ],

	4: [ 0, "I've seen %dogs% with better passwords.",
	     "Perhaps this was good 10 %years% ago.",
	     "I %worry% about you.",
	     "You lack %creativity%."],

	5: [ 0, "Oh... you're going to use %that% huh?",
	     "%Weak%. Just weak.",
	     "Sorry %chump%, this just won't do.",
	     "You're %half% way there, I'd say."
	     ],

	6: [ 0, "I %almost% like where you're going with this.",
	     "%Close%, but no cigar.",
	     "Perhaps I should %just do it%.",
	     "You're %starting% to understand."],

	7: [ 0, "You're %getting% there... kinda.",
	     "Warmer, you're getting %warmer%.",
	     "I would %almost% use this.",
	     "I'll give you an A for %effort%." ],

	8: [ 0, "Not too %shabby%, for a 3 year old.",
	     "So close. I'm %mean% because I care.",
	     "%Fair%, but not your best work.",
	     "%Who% wrote this for you?" ],

	9: [ 0, "Its pretty strong... I %guess%.",
	     "I knew you %could% get there in the end.",
	     "Yeah, like you're going to %remember% this.",
	     "That'll do %pig%, that'll do." ]

}

var passiveText = document.querySelector( '.passive-agressive');
var $passiveText = $( passiveText );
var passwordElement = $( '.password' );
var headerElement = $( 'header' );

function applyResponse( complexity ) {

	// Get item
	var level = ( Math.ceil( complexity / 10) - 1 );

	if ( level == -1 ) {
		return;
	}

	var textSelection = responses[ level ];
	var textItem = textSelection[ 1 + textSelection[0] ];
	
	// Increment item
	textSelection[ 0 ] += 1;
	textSelection[ 0 ] %= (textSelection.length - 1);

	$passiveText.css( { opacity: 0, "margin-top": "-20px" } );
	// Apply, and set title.
	textItems = textItem.split('%');
	passiveText.innerHTML = textItems[0] + "<span class='red'>" + textItems[1] + '</span>' + textItems[2];

	$passiveText.stop().animate( {opacity: 1, "margin-top": 0}, 450, 'swing' );
}

$( "input" ).complexify( {}, function(valid, complexity){
    applyResponse( complexity );
});

$( '.password input' ).focus( function() {
	passwordElement.addClass( "focused" );
})

$( '.password input' ).blur( function() {
	passwordElement.removeClass( "focused" );	
})

$( '.about' ).click( function() {
	headerElement.addClass( "open" );
	$("html, body").animate({ scrollTop: 0 }, 100);
})

headerElement.mouseout( function() {
	headerElement.removeClass( "open" );
})