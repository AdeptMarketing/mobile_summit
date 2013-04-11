/*! responsive-nav.js v1.11 by @viljamis, http://responsive-nav.com, MIT license */
/* Note: debug option isn't included in this production version */
var responsiveNav=function(g,h){var t=!!g.getComputedStyle;g.getComputedStyle||(g.getComputedStyle=function(a){this.el=a;this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;"float"===b&&(b="styleFloat");c.test(b)&&(b=b.replace(c,function(a,b,c){return c.toUpperCase()}));return a.currentStyle[b]?a.currentStyle[b]:null};return this});var d,f,e,u=h.documentElement,v=h.getElementsByTagName("head")[0],k=h.createElement("style"),r=!1,l=function(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,
c,d)}catch(e){if("object"===typeof c&&c.handleEvent)a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d);else throw e;}else"attachEvent"in a&&("object"===typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))},m=function(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if("object"===typeof c&&c.handleEvent)a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d);else throw e;}else"detachEvent"in a&&("object"===
typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))},j=function(a,b){for(var c in b)a.setAttribute(c,b[c])},n=function(a,b){a.className+=" "+b;a.className=a.className.replace(/(^\s*)|(\s*$)/g,"")},p=function(a,b){a.className=a.className.replace(RegExp("(\\s|^)"+b+"(\\s|$)")," ").replace(/(^\s*)|(\s*$)/g,"")},s=function(a,b){var c;this.options={animate:!0,transition:400,label:"Menu",insert:"after",customToggle:"",tabIndex:1,openPos:"relative",jsClass:"js",
init:function(){},open:function(){},close:function(){}};for(c in b)if(c in this.options)this.options[c]=b[c];else throw Error("Responsive Nav doesn't support option: "+c);n(u,this.options.jsClass);this.wrapperEl=a.replace("#","");if(h.getElementById(this.wrapperEl))this.wrapper=h.getElementById(this.wrapperEl);else throw Error("The nav element you are trying to select doesn't exist");c=this.wrapper;for(var e=this.wrapper.firstChild;null!==e&&1!==e.nodeType;)e=e.nextSibling;c.inner=e;f=this.options;
d=this.wrapper;this._init(this)};s.prototype={destroy:function(){this._removeStyles();p(d,"closed");p(d,"opened");d.removeAttribute("style");d.removeAttribute("aria-hidden");q=d=null;m(g,"load",this,!1);m(g,"resize",this,!1);m(e,"mousedown",this,!1);m(e,"touchstart",this,!1);m(e,"keyup",this,!1);m(e,"click",this,!1);f.customToggle?e.removeAttribute("aria-hidden"):e.parentNode.removeChild(e)},toggle:function(){r?(p(d,"opened"),n(d,"closed"),j(d,{"aria-hidden":"true"}),f.animate?setTimeout(function(){d.style.position=
"absolute"},f.transition+10):d.style.position="absolute",r=!1,f.close()):(p(d,"closed"),n(d,"opened"),d.style.position=f.openPos,j(d,{"aria-hidden":"false"}),r=!0,f.open())},handleEvent:function(a){a=a||g.event;switch(a.type){case "mousedown":this._onmousedown(a);break;case "touchstart":this._ontouchstart(a);break;case "keyup":this._onkeyup(a);break;case "click":this._onclick(a);break;case "load":this._transitions(a);this._resize(a);break;case "resize":this._resize(a)}},_init:function(){n(d,"closed");
this._createToggle();l(g,"load",this,!1);l(g,"resize",this,!1);l(e,"mousedown",this,!1);l(e,"touchstart",this,!1);l(e,"keyup",this,!1);l(e,"click",this,!1)},_createStyles:function(){k.parentNode||v.appendChild(k)},_removeStyles:function(){k.parentNode&&k.parentNode.removeChild(k)},_createToggle:function(){if(f.customToggle){var a=f.customToggle.replace("#","");if(h.getElementById(a))e=h.getElementById(a);else throw Error("The custom nav toggle you are trying to select doesn't exist");}else a=h.createElement("a"),
a.innerHTML=f.label,j(a,{href:"#",id:"nav-toggle",tabindex:f.tabIndex}),"after"===f.insert?d.parentNode.insertBefore(a,d.nextSibling):d.parentNode.insertBefore(a,d),e=h.getElementById("nav-toggle")},_preventDefault:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},_onmousedown:function(a){var b=a||g.event;3===b.which||2===b.button||(this._preventDefault(a),this.toggle(a))},_ontouchstart:function(a){e.onmousedown=null;this._preventDefault(a);this.toggle(a)},_onkeyup:function(a){13===
(a||g.event).keyCode&&this.toggle(a)},_onclick:function(a){this._preventDefault(a)},_transitions:function(){if(f.animate){var a=d.style,b="max-height "+f.transition+"ms";a.WebkitTransition=b;a.MozTransition=b;a.OTransition=b;a.transition=b}},_calcHeight:function(){var a="#"+this.wrapperEl+".opened{max-height:"+d.inner.offsetHeight+"px}";t&&(k.innerHTML=a)},_resize:function(){"none"!==g.getComputedStyle(e,null).getPropertyValue("display")?(j(e,{"aria-hidden":"false"}),d.className.match(/(^|\s)closed(\s|$)/)&&
(j(d,{"aria-hidden":"true"}),d.style.position="absolute"),this._createStyles(),this._calcHeight()):(j(e,{"aria-hidden":"true"}),j(d,{"aria-hidden":"false"}),d.style.position=f.openPos,this._removeStyles());f.init()}};var q;return function(a,b){q||(q=new s(a,b));return q}}(window,document);



/*global jQuery */
/*!	
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){
	
  $.fn.fitText = function( kompressor, options ) {
	   
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);
	
    return this.each(function(){

      // Store the object
      var $this = $(this); 
        
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();
				
      // Call on resize. Opera debounces their resize by default. 
      $(window).on('resize', resizer);
      	
    });

  };

})( jQuery );


/**
 * jQuery SlideTo Plugin (version 1.0)
 * 
 * @copyright Jesse Price <jesseprice.com>
 * @description Animate slide scroll to effects to specific elements in the document
 * 
 * @license Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */

// Create closure
(function($) {
	$.fn.slideto = function(options) {
		var opts = $.extend({}, $.fn.slideto.defaults, options);
		var elem = (this.length > 0) ? this : 'a';
		// Element instance specific actions
		$(elem).each(function() {
			var e = $(this);
			var o = $.meta ? $.extend({}, opts, e.data()) : opts;
			var url = $(e).attr("href");
			var anchor = '';
			if(url && url.indexOf("#") != -1 && url.indexOf("#") == 0) {
				var pieces = url.split("#",2);
				anchor = $("a[name='"+pieces[1]+"']");
				$(this).attr('href', 'javascript:void(0);');
			} else
				anchor = $(o.target);
			
			$(e).bind('click', function(){
				$('html, body').animate({
					scrollTop: anchor.offset().top - 80,
					scrollLeft: anchor.offset().left
				}, o.speed);
			});
		});
		
		// Allow jQuery chaining
		return this;
	};
	
	/**
	 * Plugin Options
	 * ---------------------------------------------------------------------
	 * Overwrite the default options? Go for it!
	 */
	$.fn.slideto.defaults = {
		target : false, 	// Where to scroll? If it's false, we use the "scroll attribute"
		speed  : 1500 	// slow, medium, fast, numeric microseconds
	}
})(jQuery);



/**
  mediacheck will take a hash and execute the specified methods based on the current mediaquery status.

  ex.
  
  mediaCheck({  
    media: '(min-width: 500px)',  
    entry: function() { ... },  
    exit: function() { ... }  
  });
  
  @param Object - options
*/
var mediaCheck = function( options ) {
  var mq,
      	//matchMedia = window.matchMedia !== undefined;
		matchMedia = (window.matchMedia !== undefined && window.matchMedia('').addListener !== undefined);
		
  mqChange = function( mq, options ) {
    if ( mq.matches ) {
      if ( typeof options.entry === "function" ) {
        options.entry();
      }
    } else if ( typeof options.exit === "function" ) {
      options.exit();
    }
  };
  
  if ( matchMedia ) {
    // Has matchMedia support
    createListener = function() {

      mq = window.matchMedia( options.media );
      mq.addListener( function() {
        mqChange( mq, options );
      });
      mqChange( mq, options );
    };
    createListener();
    
  } else {
    // capture the current pageWidth
    var pageWidth = window.outerWidth;

    // No matchMedia support
    var mmListener = function() {
      var parts = options.media.match( /\((.*)-.*:\s*(.*)\)/ ),
          constraint = parts[ 1 ],
          value = parseInt( parts[ 2 ], 10 ),
          fakeMatchMedia = {};

      // scope this to width changes to prevent small-screen scrolling (browser chrome off-screen)
      //   from triggering a change
      if (pageWidth != window.outerWidth) {
        fakeMatchMedia.matches = constraint === "max" && value > window.outerWidth ||
                                 constraint === "min" && value < window.outerWidth;
        mqChange( fakeMatchMedia, options );
        
        // reset pageWidth
        pageWidth = window.outerWidth;
      }
    };

    if (window.addEventListener) {
      window.addEventListener("resize", mmListener);
    } else if (window.attachEvent) {
      window.attachEvent("resize", mmListener);
    }
    mmListener();
  }
};