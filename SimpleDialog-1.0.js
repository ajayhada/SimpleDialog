/**
 * jquery.SimpleDialog 1.0
 *
 * A simple dialog box jquery plugin.
 * 
 * Author  : Ajay Singh Hada
 * WebPage : https://www.facebook.com/ajay.hada
 * Version : 1.0
 * Released: January 27, 2012
 */
(function($){

 	var settings;

	$.fn.closepopup = function() {
		$('.simple_popup').fadeOut(100,function(){
			$('.simple_popup').remove();
			if(settings.ismodal){ $('.simple_popup_overlay').remove();}
		});
	}
	
    $.fn.showpopup = function(options) {
	
	settings = $.extend(true,{        
        left : (($(window).width() - $(this).outerWidth()) / 2 )  + $(window).scrollLeft(),
		top : (($(window).height() - $(this).outerHeight()) / 2 )  + $(window).scrollTop(),
		height : 100,
		width : 240,
		draggable : false,
		draggableContainer:'document',
		enableclose : true,
		ismodal : false,
		closeIcon : '',
		overlayStyle:{
			opacity: 0.1,
			background:'black',
			extraCSS:''
		},
		popupStyle:{
			border: 3,
			bordercolor: '#000',
			borderradius: 10,
			background:'#dddddd',
			extraCSS:''
		}
    }, options);
	
	var innerHtml ='';
	var closebuttoncss ='color:BLUE;margin-top:5px;margin-right:5px;float:right;';
	if(settings.enableclose){
		var closeButton = 'close';
		if(settings.closeIcon.length>0){
			closeButton = '<img src="'+settings.closeIcon+'"/>'
		}
		innerHtml = '<a href="javascript:closePopup()" style="'+closebuttoncss+'">'+closeButton+'</a>';
	}
	
	var popupcss='border:'+settings.popupStyle.border+'px solid '+settings.popupStyle.bordercolor+'; border-radius:'+settings.popupStyle.borderradius+'px; background:'+settings.popupStyle.background+'; height:'+settings.height+'px; width:'+settings.width+'px; z-index:2000;' + settings.popupStyle.extraCSS;
    
	var popup = $('<DIV class ="simple_popup" style="'+popupcss+'"></DIV>');
    
	popup.html(innerHtml+this.html());
    
    popup.appendTo(document.body);
	popup.css({padding :'0px',display : 'none', position:'absolute', margin:0, top:settings.top+'px', left: settings.left+'px'});
	popup.fadeIn(100);
	if(settings.draggable){
		$(popup).draggable({containment:settings.draggableContainer});
	}
	
	var overlaycss='';
	if(settings.ismodal){
		overlaycss='position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index:100;opacity:'+settings.overlayStyle.opacity+';filter:Alpha(Opacity=30);background:'+settings.overlayStyle.background+';'+ + settings.overlayStyle.extraCSS;
		var overlay = $('<div class="simple_popup_overlay" style="'+overlaycss+'" ></div>');
		overlay.appendTo(document.body);
		overlay.css({ height: $(document).height() });
		overlay.fadeIn(100);
	}
  };
})( jQuery );