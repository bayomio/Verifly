/**
 *	===================================
 *	Template Name: Bright
 *	File Name: custom.js
 *	Author: Morad
 *	===================================
 */


( function( $ ) {

"use strict";

// *** On ready *** //
$( document ).on( "ready" , function() {
	stickyNav();
	responsiveMenu();
	parallaxStellar();
	funFactCounter();
	twitterFeedWidget();
	instagramFeedWidget();
	postsTabsWidget();
	screenshotsCarousel();
	testmonialsCarousel();
	relatedPostsCarousel();
	appsScreenshots();
	headerFormValidation();
	contactFormValidation();
	ddMenuPos();
	contactTabs();
});

// *** On load *** //
$( window ).on( "load" , function() {
	WOWAnimation();
});

// *** On resize *** //
$( window ).on( "resize" , function() {
	// FetVFImgHeight();
	ddMenuPos();
});

// *** On scroll *** //
$( window ).on( "scroll" , function() {
	showHeaderScrollTop();
});


 // *** jQuery noConflict *** //
var $ = jQuery.noConflict();


// *** Contact and Subscribe Tabs *** //
function contactTabs() {
	$( ".contact-tabs" ).tabs({
		active: 0,
		hide: { effect: "fadeOut", duration: 100 },
		show: { effect: "fadeIn", duration: 300 },
		event: "click"
		// heightStyle: "auto"
		// collapsible: true,
		// disabled: [ 0, 2 ],
	});
}


// *** Contact and Subscribe section slideDown *** //
$( ".forms-toggler" ).click( function(e) {
	e.preventDefault();
	var $this = $( this );
	// if ( $( this ).hasClass( "opened" ) ) {
	// 	$( this ).removeClass( "opened" );
	// } else {
	// 	$( this ).addClass( "opened" );
	// 	// alert( "hello.." );
	// }

	$( ".contact-and-subscribe" ).slideToggle(500);
	$this.toggleClass( "opened" );
	$this.find( "i" ).toggleClass( "pe-7s-mail" ).toggleClass( "pe-7s-close-circle" );
	$this.find( "span" ).toggleClass( "grey dark" );
    $( "html, body" ).animate({
        scrollTop: $( ".contact-and-subscribe" ).offset().top - 145
    }, 1000, "easeInOutExpo");
})


// *** Scroll Top Button *** //
$( ".header-st" ).click( function(e) {
	e.preventDefault();
    $( "html, body" ).animate({
        scrollTop: 0
    }, 1200, "easeInOutExpo"); //1200 easeInOutExpo
});

// *** Scroll to Element *** //
// $( ".header-st" ).click( function(e) {
// 	e.preventDefault();
//     $( "html, body" ).animate({
//         scrollTop: $( ".intro" ).offset().top - 85
//     }, 1000, "easeInOutExpo");
// });


// *** Apps Screenshots Popup *** //
function appsScreenshots() {
	$('.screenshots-carousel').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery:{
			enabled:true,
			callbacks: {
				beforeOpen: function() {
				// just a hack that adds mfp-anim class to markup 
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	  	},
		removalDelay: 300, //delay removal by X to allow out-animation
		callbacks: {
		    beforeOpen: function() {
		      // just a hack that adds mfp-anim class to markup 
		      this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		      this.st.mainClass = this.st.el.attr('data-effect');
		    }
		},
		closeOnContentClick: true,
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});
}


// *** Sticky Navigation *** //
var logoAndNavHeight = $( ".logo-and-nav" ).css( "height" );

// Moving Logo and Nav to top with value of Logo and Nav height
$( ".logo-and-nav" ).css( "margin-top" , "-" + logoAndNavHeight );

function stickyNav() {
	$( ".logo-and-nav" ).sticky({
		topSpacing: 0,
		wrapperClassName: "logo-and-nav-wrapper",
		className: "logo-and-nav-sticky-state"
	});

	$( ".logo-and-nav" ).on( "sticky-start" , function() { 
		$( ".logo-and-nav" ).css( "margin-top" , 0 );
	});

	$( ".logo-and-nav" ).on( "sticky-end" , function() { 
		$( ".logo-and-nav" ).css( "margin-top" , "-" + logoAndNavHeight );
	});

	// Assigning the height of logo and nav wrapper
	var logoAndNav = $( ".logo-and-nav" ).hasClass( "logo-and-nav" );
	var logoAndNavWrapperHeight = parseInt( logoAndNavHeight , 10 ) + 1 + "px";

	if ( logoAndNav ) {
		$( ".logo-and-nav-wrapper" ).css( "margin-top" , "-" + logoAndNavWrapperHeight );
	}
}


// *** Dropdown Menu *** //
$( document ).ready( function() {

	// Firing Superfish plugin
	$( ".sf-menu" ).superfish({
		popUpSelector: "ul, .megamenu",      
		cssArrows: true,
		delay: 300,
		speed: 150,
		speedOut: 150,
		animation: { opacity : "show", height : "show" }, //  , height : "show"
		animationOut: { opacity : "hide" }
	});

	// Removing the arrow of dropdown menu links when using icons
	var mMenuIconCase = $( "#main-menu .dropdown-menu > li > a, .rm-menu .slicknav_nav a" ).has( "i" );
	mMenuIconCase.each( function() {
		if ( $( this ) ) {
			$( this ).addClass( "remove-link-arrow" );
		};
	});
});

function ddMenuPos() {
$(".main-menu > li").each(function(){var e=$(this),s=e.offset().left,r=e.find(".dropdown-menu"),d=e.children(".dropdown-menu"),o=e.find(".dropdown-menu ul"),n=r.width(),a=$(window).width(),l=a-s-n;n>l?o.addClass("reverse-pos"):o.removeClass("reverse-pos"),0>=l?d.addClass("reverse-pos"):d.removeClass("reverse-pos");var i,v="";for(i=2;10>=i;i++){i*n>=l?o.find("ul"+v).addClass("reverse-pos"):o.find("ul"+v).removeClass("reverse-pos");var v=" ul"}});
}

// Responsive Menu
function responsiveMenu() {
	$( ".main-menu" ).slicknav({
		label : "MENU",
		duration: 400,
		easingOpen: "easeInOutCubic",
		easingClose: "easeInOutCubic",
		closedSymbol: "&#xf105;",
		openedSymbol: "&#xf107;",
		appendTo: ".rm-menu",
		closeOnClick: false, // Close menu when a link is clicked.
		allowParentLinks: true, // Allow clickable links as parent elements.
		nestedParentLinks: true, // If false, parent links will be separated from the sub-menu toggle.
		showChildren: false, // Show children of parent links by default.
		removeIds: true, // Remove IDs from all menu elements. Defaults to false if duplicate set to false.
		removeClasses: false, // Remove classes from all menu elements.
		brand: "" // Add branding to menu bar.	
	});

	// Toggle Responsive Menu
	$( ".rm-menu-btn" ).on( "click", function(e) {
		e.preventDefault();
		$( this ).toggleClass( "is-active" );
		$( ".main-menu" ).slicknav( "toggle" );
	});	
}


// *** Header Scroll Top *** //
function showHeaderScrollTop() {
	var headerHeight = $( "header" ).height();
	if( $( window ).scrollTop() > headerHeight + 400 ) {
		$( ".header-st" ).addClass( "show-header-st" );
	}
	else {
		$( ".header-st" ).removeClass( "show-header-st" );
	}	
}


// *** WOW Animation *** //
function WOWAnimation() {
	var wow = new WOW({
		boxClass: "woow",
		offset: 300,
		mobile: false
	});
	wow.init();	
}


// *** Pattern Overlay Options *** //

// Custom pattern overlay darkness opacity
$( "*[data-pattern-overlay-darkness-opacity]" ).each(function() {
	// 0 value is not read by jquery, but 0.0 is read! in case of making condition "if"
	var patternOverlayDarknessOpacity = $( this ).data( "pattern-overlay-darkness-opacity" );
	$( this ).css( "background-color" , convertHex( "#000000" , patternOverlayDarknessOpacity ) );
});

// disable pattern overlay background image [ dots only ]
$( "*[data-pattern-overlay-background-image]" ).each(function() {
	if ( $( this ).data( "pattern-overlay-background-image" ) == "none" ) {
		$( this ).css( "background-image" , "none" );
	} else if ( $( this ).data( "pattern-overlay-background-image" ) == "yes" ) {
		$( this ).css( "background-image" );
	}
});

// remove pattern overlay
$( "*[data-remove-pattern-overlay]" ).each(function() {
	if ( $( this ).data( "remove-pattern-overlay" ) == "yes" ) {
		$( this ).css( "background" , "none" );
	/**
	 *  In HTML, add expressive word like "none" to know what this option indicates for.  
	 *	Using this word has no direct effect or any another word, it's only word with meaning 
	 *	to help to know what this attribute value is doing.
	 */
	}
});


// *** Background Options *** //

// Custom background color
$( "*[data-background-color]" ).each(function() {
	var customBackgroundColor = $( this ).data( "background-color" );
	$( this ).css( "background-color" , customBackgroundColor );
});

// Custom background color opacity
$( "*[data-background-color-opacity]" ).each(function() {
	var customBackgroundColorOpacity = $( this ).data( "background-color-opacity" ),
		backgroundColor = $( this ).css( "background-color" );

	// Conversion of rgb to rgba
	var rgbaBackgroundColor = backgroundColor.replace( "rgb" , "rgba" ).replace( ")" , ", " + customBackgroundColorOpacity + ")" );
	$( this ).css( "background-color" , rgbaBackgroundColor );
});

// Custom background image
$( "*[data-background-image]" ).each(function() {
	var customBackgroundImage = $( this ).data( "background-image" );
	$( this ).css( "background-image" , "url('" + customBackgroundImage + "')" );
});

// Custom parallax background image
$( "*[data-parallax-background-image]" ).each(function() {
	var customParallaxBackgroundImage = $( this ).data( "parallax-background-image" );
	$( this ).css( "background-image" , "url('" + "./images/files/parallax-background-images/" + customParallaxBackgroundImage + "')" );
});


// *** Divider Space Options *** //

// Custom divider space 
$( "*[data-divider-space]" ).each(function() {
	var customDividerSpaceHeight = $( this ).data( "divider-space" );
	$( this ).css( "height" , parseInt( customDividerSpaceHeight , 10 ) );
});

// Custom divider space with line
$( "*[data-divider-space-with-line]" ).each(function() {
	var customDividerSpaceWithLineHeight = $( this ).data( "divider-space-with-line" );
	$( this ).css({ 
					"margin-bottom" : parseInt( customDividerSpaceWithLineHeight , 10 ) + 25, 
					"top"        	: parseInt( customDividerSpaceWithLineHeight , 10 ) + 15
				 });
	$( this ).parent( ".divider-space-container" ).css( "padding-bottom" , parseInt( customDividerSpaceWithLineHeight , 10 ) );
});

// Custom divider space with 2 lines
$( "*[data-divider-space-with-two-lines]" ).each(function() {
	var customDividerSpaceWithLineHeight = $( this ).data( "divider-space-with-two-lines" );
	$( this ).css({ 
					"margin-bottom" : parseInt( customDividerSpaceWithLineHeight , 10 ) + 25, 
					"top"        	: parseInt( customDividerSpaceWithLineHeight , 10 ) + 15
				 });
	$( this ).parent( ".divider-space-container" ).css( "padding-bottom" , parseInt( customDividerSpaceWithLineHeight , 10 ) );
});


// *** Stellar Parallax *** //
function parallaxStellar() {
	$(function() {
		$.stellar({
			horizontalScrolling: false, // don't change this option
			// verticalScrolling: false,
			verticalOffset: 0,
	    	responsive: true, // false
		});
	});	
}


// *** Count Up *** //
function funFactCounter() {
	$('.fun-facts-box h1').counterUp({
	    delay: 20,
	    time: 2000
	});
}


// *** Twitter Feed Widget *** //
function twitterFeedWidget() {
	$(".twitter-feed").tweet({
		username: "TheNextWeb",
		modpath: './js/twitter/', // 'morad.my-board.org/../js/twitter/',
		join_text: "auto",
		avatar_size: 24,
		count: 2,
		auto_join_text_default: "We said -",
		auto_join_text_ed: "We -",
		auto_join_text_ing: "We were -",
		auto_join_text_reply: "We replied to -",
		auto_join_text_url: "",
		loading_text: "Loading Tweets ..."
	});
}


// *** Instagram Feed Widget *** //
function instagramFeedWidget() {
    var feed = new Instafeed({
	    get: 'user',
	    userId: 349114758,  //Your ID Number Here - 1956899935 - 196729926 - 1555516340
	    resolution: 'thumbnail',
	    accessToken: '2130897638.467ede5.7a543386560f4666b437cb1f6a449c74',
	    template: '<li><a href="{{model.images.standard_resolution.url}}" data-effect="mfp-zoom-in" data-link="{{link}}" data-likes="{{likes}}" data-comments="{{comments}}"><img src="{{image}}"></a></li>',
	    limit: 12, // Number of photo will get from instagram 
	    target: 'instagram-feed',
	    after: instagramPopup()
    });
    feed.run();	
}

// Lightbox instagram feed widget 
function instagramPopup() {
	$( "#instagram-feed" ).magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery:{
			enabled:true,
			callbacks: {
				beforeOpen: function() {
				// just a hack that adds mfp-anim class to markup 
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	  	},
		removalDelay: 300, //delay removal by X to allow out-animation
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				// adding page link for images, likes count and comments count
				var likesCount 	  = item.el.attr( "data-likes" ),
					commentsCount = item.el.attr( "data-comments" ),
					imageLink	  = item.el.attr( "data-link" );
				return '<a class="insta-link" href="' + imageLink + '">' +
				     	  "Go to Post Link!" +
				     	  '<i class="fa fa-long-arrow-right"></i>' + 
				     '</a>' +
				     '<br><span><i class="fa fa-heart"></i>' + likesCount + '</span>' +
				     '<span><i class="fa fa-comment"></i>' + commentsCount + '</span>';
			}
		},
		callbacks: {
		    beforeOpen: function() {
		      // just a hack that adds mfp-anim class to markup 
		      this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		      this.st.mainClass = this.st.el.attr('data-effect');
		    }
		},
		closeOnContentClick: true,
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});
}


// *** Posts Tabs Widget *** //
function postsTabsWidget() {
	$( ".posts-tabs" ).tabs({
		active: 0,
		hide: { effect: "slideUp", duration: 150 },
		show: { effect: "slideDown", duration: 400 },
		event: "click"
		// heightStyle: "auto"
		// collapsible: true,
		// disabled: [ 0, 2 ],
	});
}


// *** App Screenshots Carousel *** //
function screenshotsCarousel() {
	$( ".screenshots-carousel" ).owlCarousel({
	    // Most important owl features
	    items : 4, // Items number appeared
	    itemsCustom : false, // Custom responsive widths
	    itemsDesktop : [ 1199,4 ],
	    itemsDesktopSmall : [ 979,3 ],
	    itemsTablet: [ 768,2 ],
	    itemsTabletSmall: false,
	    itemsMobile : [ 479,1 ],
	    singleItem : false, // Making only 1 item appearing

		//Basic Speeds
	    slideSpeed : 200,
	    paginationSpeed : 800, // Pagination speed
	    rewindSpeed : 1000, // Rewind speed

	    //Autoplay
	    autoPlay : false, // Integer means autoplay equal to the value. True means autoplay with 5 seconds
	    stopOnHover : false,

	    // Navigation
	    navigation : false, // Display "next" and "prev" buttons
		navigationText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"],
	    rewindNav : true, // Slide to first item

	    //Pagination
		pagination: true, // Show pagination
		paginationNumbers: false, // Show numbers inside pagination buttons

	    // Responsive 
		responsive: true,

		//Auto height
		autoHeight: false,

	    //Transitions
	    transitionStyle : false // "fade", "backSlide", "goDown" and "fadeUp"
	});	
}


// *** Testmonial Carousel *** //
function testmonialsCarousel() {
	$( ".testmonials-carousel" ).owlCarousel({
	    // Most important owl features
	    items : 3, // Items number appeared
	    itemsCustom : false, // Custom responsive widths
	    itemsDesktop : [ 1199,3 ],
	    itemsDesktopSmall : [ 979,2 ],
	    itemsTablet: [ 768,2 ],
	    itemsTabletSmall: false,
	    itemsMobile : [ 479,1 ],
	    singleItem : false, // Making only 1 item appearing

		//Basic Speeds
	    slideSpeed : 200,
	    paginationSpeed : 800, // Pagination speed
	    rewindSpeed : 1000, // Rewind speed

	    //Autoplay
	    autoPlay : false, // Integer means autoplay equal to the value. True means autoplay with 5 seconds
	    stopOnHover : false,

	    // Navigation
	    navigation : false, // Display "next" and "prev" buttons
		navigationText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"],
	    rewindNav : true, // Slide to first item

	    //Pagination
		pagination: true, // Show pagination
		paginationNumbers: false, // Show numbers inside pagination buttons

	    // Responsive 
		responsive: true,

		//Auto height
		autoHeight: false,

	    //Transitions
	    transitionStyle : false // "fade", "backSlide", "goDown" and "fadeUp"
	});	
}


// *** Testmonial Carousel *** //
function relatedPostsCarousel() {
	$( ".sp-related-posts-carousel" ).owlCarousel({
	    // Most important owl features
	    items : 3, // Items number appeared
	    itemsCustom : false, // Custom responsive widths
	    itemsDesktop : [ 1199,3 ],
	    itemsDesktopSmall : [ 979,2 ],
	    itemsTablet: [ 768,2 ],
	    itemsTabletSmall: false,
	    itemsMobile : [ 479,1 ],
	    singleItem : false, // Making only 1 item appearing

		//Basic Speeds
	    slideSpeed : 200,
	    paginationSpeed : 800, // Pagination speed
	    rewindSpeed : 1000, // Rewind speed

	    //Autoplay
	    autoPlay : false, // Integer means autoplay equal to the value. True means autoplay with 5 seconds
	    stopOnHover : false,

	    // Navigation
	    navigation : true, // Display "next" and "prev" buttons
		navigationText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"],
	    rewindNav : true, // Slide to first item

	    //Pagination
		pagination: false, // Show pagination
		paginationNumbers: false, // Show numbers inside pagination buttons

	    // Responsive 
		responsive: true,

		//Auto height
		autoHeight: false,

	    //Transitions
	    transitionStyle : false // "fade", "backSlide", "goDown" and "fadeUp"
	});	
}


// *** Header Form *** //
function headerFormValidation() {
	$( "#header-form" ).validate({
		// rules
		rules: {
			hfName: {
				required: true,
				minlength: 3
			},
			hfEmail: {
				required: true,
				email: true
			},
			hfPassword: {
				required: true,
				minlength: 6
			}
		}
	});

	// Submit event
	$( "#header-form" ).on( "submit", function(event) {
	    if ( event.isDefaultPrevented() ) {
	        headerFormError();
		    var errorContent = 	  
		    					  '<i class="hf-error-icon pe-7s-close"></i>' +
		    					  '<div class="hf-submit-msg-cont-inner">' +
		                          	  '<h5>There Are Some Errors!</h5>' +
		                              '<p>Please Follow Error Messages and Complete as Required</p>' +
		                          '</div>';
			headerSubmitMSG(false, errorContent);
	    } else {
	        event.preventDefault();
	        headerSubmitForm();
	    }
	});	
}

function headerSubmitForm(){
    // Initiate Variables With Form Content
    var hfName = $("#hfName").val();
    var hfEmail = $("#hfEmail").val();
    var hfPassword = $("#hfPassword").val();
 
    $.ajax({
        type: "POST",
        url: "./php/hf-process.php",
        data: "hfName=" + hfName + "&hfEmail=" + hfEmail + "&hfPassword=" + hfPassword,
        success : function(text){
            if (text == "success"){
                headerFormSuccess();
            } else {
                headerFormError();
                headerSubmitMSG(false,text);
            }
        }
    });
}

function headerFormSuccess(){
    $("#header-form")[0].reset();
    var successContent =  '<i class="hf-success-icon pe-7s-like2"></i>' +
    					  '<div class="hf-submit-msg-cont-inner">' +
                          	  '<h5>It\'s Done!!</h5>' +
                          	  '<p>Thank you for your submission :)</p>';
						  '</div>';	
	headerSubmitMSG(true, successContent);
}

function headerFormError(){
    $("#header-form").removeClass().addClass('shake animated form-inline')
    	.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass().addClass( "form-inline" );
    });
}

function headerSubmitMSG(valid, msg){
    var msgClasses;
    if(valid){
        msgClasses = "shake animated";
    } else {
        msgClasses = "zoomIn animated appearing-delay";
    }

    $(".hf-submit-msg").removeClass( "fadeOutDown" ).addClass(msgClasses).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass( "shake zoomIn appearing-delay" );
    });

    $(".hf-submit-msg").children(".hf-submit-msg-cont").html(msg);
}

//Fading Out AlertBox
$('.hf-submit-msg').find('i').on( "click" , function(){
    $(this).parent(".hf-submit-msg").addClass( "fadeOutDown animated" ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass( "appearing-delay" );
    });
});


// *** Contact Form *** //
function contactFormValidation() {
	$( "#contact-form" ).validate({
		// rules
		rules: {
			cfName: {
				required: true,
				minlength: 3
			},
			cfEmail: {
				required: true,
				email: true
			},
			cfSubject: {
				required: true,
				minlength: 3
			},
			cfMessage: {
				required: true,
				minlength: 8,
				maxlength: 500
			}
		}
	});

	// Submit event
	$( "#contact-form" ).on( "submit", function(event) {
	    if ( event.isDefaultPrevented() ) {
		    var errorContent = '<i class="cf-error-icon fa fa-close"></i>' +
		                       'Please Follow Error Messages and Complete as Required';
			cfSubmitMSG(false, errorContent);
	        cfError();
	    } else {
	        event.preventDefault();
	        cfSubmitForm();
	    }
	});	
}

function cfSubmitForm(){
    // Initiate Variables With Form Content
    var name = $("#cfName").val();
    var email = $("#cfEmail").val();
    var website = $("#cfWebsite").val();
    var subject = $("#cfSubject").val();
    var message = $("#cfMessage").val();
 
    $.ajax({
        type: "POST",
        url: "./php/cf-process.php",
        data: "cfName=" + name + "&cfEmail=" + email + "&cfWebsite=" + website + "&cfSubject=" + subject + "&cfMessage=" + message,
        success : function(text){
            if (text == "success"){
                cfSuccess();
            } else {
                cfError();
                cfSubmitMSG(false,text);
            }
        }
    });
}

function cfSuccess(){
    $("#contact-form")[0].reset();
    var successContent =  '<i class="cf-success-icon fa fa-check"></i>' +
                          'Thank you for your submission :)';
	cfSubmitMSG(true, successContent);
	$( ".cf-submit-msg-cont" ).addClass( "sent" );
	$(".cf-submit-msg").css( "opacity", 0 );
    $(".cf-submit-msg").slideDown( 300 ).animate({ "opacity" : 1 }, 300 ).delay( 5000 ).slideUp( 400 );
}

function cfError(){
	$(".cf-submit-msg").css( "opacity", 0 );
    $(".cf-submit-msg").slideDown( 300 ).animate({ "opacity" : 1 }, 300 );
	$( ".cf-submit-msg-cont" ).removeClass( "sent" );
}

function cfSubmitMSG(valid, msg){
    var msgClasses;
    if(valid){
        msgClasses = "shake animated";
    } else {
        msgClasses = "bounce animated";
    }

    $(".cf-submit-msg").addClass(msgClasses).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass( "shake bounce animated" );
    });

    $(".cf-submit-msg").children(".cf-submit-msg-cont").html(msg);
}


// *** Mailchimp Subscribe Form *** //
$( ".subscribe-form" ).ajaxChimp({
    callback: mailchimpCallback,
    url: "http://themeforest.us12.list-manage.com/subscribe/post?u=271ee03ffa4f5e3888d79125e&amp;id=163f4114e2" //Replace this with your own mailchimp post URL. 
});

function mailchimpCallback(resp) {
	// IMPORTANT : The input field must be type="email"
	var $subsMsg = $( ".subs-submit-msg" );
    if (resp.result === 'success') {
    	$(".subscribe-form")[0].reset();
	    $subsMsg.children( ".subs-submit-msg-cont" ).html( '<i class="subs-success-icon fa fa-check"></i>' + resp.msg ).addClass( "sent shake animated" ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        	$(this).removeClass( "shake bounce animated" );
        });
		$subsMsg.css( "opacity", 0 );
	    $subsMsg.slideDown( 300 ).animate({ "opacity" : 1 }, 300 ).delay( 5000 ).slideUp( 400 );
        // $('.subscribe-result').hide().html('<div class="success"><i class="fa fa-check"></i>' + resp.msg + '</div>').slideDown().delay(10000).slideUp();
    }
    else if (resp.result === 'error') {
	    $subsMsg.children( ".subs-submit-msg-cont" ).html( '<i class="subs-error-icon fa fa-close"></i>' + resp.msg ).removeClass( "sent" ).addClass( "bounce animated" ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        	$(this).removeClass( "shake bounce animated" );
        });
		$subsMsg.css( "opacity", 0 );
	    $subsMsg.slideDown( 300 ).animate({ "opacity" : 1 }, 300 );
        // $('.subscribe-result').hide().html('<div class="error"><i class="fa fa-exclamation"></i>' + resp.msg + '</div>').slideDown().delay(10000).slideUp();
    }
}

} )( jQuery );


function convertHex( hex , opacity ){
	// "use strict";
	// var r, g, b, result;
    hex = hex.replace( '#' , '' );
    r = parseInt( hex.substring( 0 , 2 ) , 16 );
    g = parseInt( hex.substring( 2 , 4 ) , 16 );
    b = parseInt( hex.substring( 4 , 6 ) , 16 );

    result = 'rgba('+r+', '+g+', '+b+', '+opacity+')';
    return result;
}


