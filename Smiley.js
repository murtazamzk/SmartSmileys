(function($){
  $.fn.dosmile = function(options){ 
		var emo = new Array('smile.png','smile.png','smile-big.png', 'smile-big.png', 'sad.png', 'sad.png', 'crying.png', 'tongue.png','tongue.png', 'tongue.png', 'tongue.png', 'shock.png', 'shock.png', 'angry.png', 'confused.png', 'confused.png', "wink.png", "wink.png", "embarrassed.png", "disapointed.png", "sick.png", "shut-mouth.png", "sleepy.png", "eyeroll.png", "thinking.png", "thinking.png", "thinking.png", "lying.png", "lying.png", "glasses-nerdy.png", "teeth.png" );
		var	symbols = new Array(":)", ":-)", ":D", ":-D", ":(", ":-(", ":'(", ":P", ":p", ":-p", ":-P", ":o", "8-0", ":@", ":s", ":S", ";)", ";-)", ":$", ":|", "+o(", ":-#", "|-)", "8-)", ":\\", "*-)", ":-\\", "(lying)", ":--)", "8-|", "8o|" );
		var $this = $(this);
		
			return $this.each(function(i,obj) {
				var x = $(obj);
				for(i=0; i<symbols.length; i++){
					var htm = x.html();
					if (htm.indexOf(symbols[i]) !== -1) {
						var elem = emo[i];
						var a = symbols[i];
						var c = $("<img src='img/" + elem + "' />");
						var myHtm = c.clone().wrap('<p>').parent().html();
						htm = replaceAll(a, myHtm, htm);	
						x.html(htm);	
					};
				};
			});
		

		function replaceAll(find, replace, str) {
			
			find = escapeRegExp(find);
			var regex = new RegExp(find, 'gi');
			return str.replace(regex, replace);
		}
		function escapeRegExp(str) {
			return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
		};

	};
})(jQuery);
