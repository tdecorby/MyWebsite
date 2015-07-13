// Runs at start
$(document).ready(function() {
	//Nav icons
	addIcons();
	
	//search bar submit change
	$('form').submit(false);
	
	//Contents page change animaiton and page change
	$("#leftnav li").click(function() {
        
        var prev_tab = $('.active').find("a").attr("href");
        var selected_tab = $(this).find("a").attr("href");
        var prev_button = $('.active');


        if (selected_tab == "#" || selected_tab == prev_tab){
        	return false;
        }else if (selected_tab == "#Home_tab" || selected_tab == "#Services_tab" || selected_tab == "#Contact-Us_tab" || selected_tab == "#FAQ_tab" ){
        
		$("#leftnav li").removeClass('active');
		$(prev_button).animate({'left':'0px' });
		$(this).addClass("active");
		$(this).animate({'left':'10px'});
			
		$(function(){
		$(selected_tab).fadeIn("fast");
        $(prev_tab).animate({'margin-left':'3000px' },"slow");
        $(selected_tab).animate({'margin-left':'0px' },"easin");
        $(prev_tab).fadeOut("fast");
        });
        return false;
        }else{

        }
    });
	// Nav bar Dropdown off click fadeout
	$('.nav li').click(function(e) {
		if ($('.dropdown').is(':visible')) {
			$(function(){
			$('.dropdown').fadeOut();
			});
			if($('#sites').is(':visible')){
							$('#clients span:last').html('&nbsp;<i class="icon-caret-right"></i></i>');
			}else{
				$('#quicklinks span:last').html('&nbsp;<i class="icon-caret-right"></i></i>');
			}
		}
	});
	
	// Clients Dropdown animation and off click fadeout
	$('#clients').click(function(e) {
		if (!($('#sites').is(':visible'))) {
		$('#sites').css('margin-left','-150px');
			$(function(){
				$('#sites').fadeIn("fast");
				$('#sites').animate({'margin-left':'0px' },"easin");
			});
			$('#clients span:last').html('&nbsp;<i class="icon-caret-left"></i></i>');
			e.stopPropagation();
		}else{
			$(function(){
				$('#sites').fadeOut();
			});
			$('#clients span:last').html('&nbsp;<i class="icon-caret-right"></i></i>');
		}	
	});
	
	// Quicklinks Dropdown animation and off click fadeout
	$('#quicklinks').click(function(e) {
		if (!($('#rightlinks').is(':visible'))) {
		$('#rightlinks').css('margin-left','-150px');
			$(function(){
				$('#rightlinks').fadeIn("fast");
				$('#rightlinks').animate({'margin-left':'0px' },"easin");
			});
			$('#quicklinks span:last').html('&nbsp;<i class="icon-caret-left"></i></i>');
			e.stopPropagation();
		}else{
			$(function(){
				$('#rightlinks').fadeOut();
			});
			$('#quicklinks span:last').html('&nbsp;<i class="icon-caret-left"></i></i>');
		}	
	});

	
	// Everywere Dropdown fadout and arrow changes
	$(document).click(function() {

		if ($('.dropdown').is(':visible')) {
			$(function(){
			$('.dropdown').fadeOut();
			});
			if($('#sites').is(':visible')){
							$('#clients span:last').html('&nbsp;<i class="icon-caret-right"></i></i>');
			}else{
				$('#quicklinks span:last').html('&nbsp;<i class="icon-caret-right"></i></i>');
			}

		}
	});	
	
	
	//Text size Buttons
	var largeButton = document.getElementById("large");
  		largeButton.onclick = large;
  	var regularButton = document.getElementById("regular");
  		regularButton.onclick = regular;
	var smallButton = document.getElementById("small");
  		smallButton.onclick = small;
  	var searchButton = document.getElementById("searchbutton");
  		searchButton.onclick = search;


});
// Adding icons to Navigation bar
// This is to fix an error with IE7 not displaying them
function addIcons(){
$('#home span').append('<i class="icon-home">&nbsp;</i>');
$('#services span').append('<i class="icon-building">&nbsp;</i>');
$('#contact span').append('<i class="icon-group">&nbsp;</i>');
$('#faq span').append('<i class="icon-comments">&nbsp;</i>');
$('#clients span:first').append('<i class="icon-book">&nbsp;</i>');
$('#clients span:last').html('&nbsp;<i class="icon-caret-right"></i></i>');
$('#members span').append('<i class="icon-key">&nbsp;</i>');
$('#quicklinks span:first').append('<i class="icon-bookmark">&nbsp;</i>');
$('#quicklinks span:last').html('&nbsp;<i class="icon-caret-right"></i></i>');
$('#searchbutton span').append('<i class="icon-search"></i>');
}
//seach bar funciton
function search(){
	var text = document.getElementById('searchText').value;
	var url = 'http://cserv.internal/sites/ITSS/_layouts/OSSSearchResults.aspx?k='+text+'&cs=This%20List&u=http%3A%2F%2Fcserv.internal%2Fsites%2FITSS%2FSitePages';
	window.location.assign(url)
	return false;
}
//change text to Large
function large() {
	document.getElementById("content").style.fontSize = "150%";
	$("h1").css("font-size","200%");
	$('h4').css("font-size","135%");
	$('.phone').css("width","175px");
	$('strong').css("font-size","120%");

	return false;
}
//change text to regular
function regular() {
	document.getElementById("content").style.fontSize = "125%";
	$("h1").css("font-size","200%");
	$('h4').css("font-size","130%");
	$('.phone').css("width","150px");
	$('strong').css("font-size","110%");
	return false;
}
//change text to small
function small() {
	document.getElementById("content").style.fontSize = "100%";
	$("h1").css("font-size","200%");
	$('h4').css("font-size","125%");
	$('.phone').css("width","110px");
	$('strong').css("font-size","100%");
	return false;
}