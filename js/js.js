var Modules = (function(self){

    return self; 
    
}(Modules || {}));


Modules.UltravioletTheme = (function(self,$){

	var _classNames = {
		startThemeClass: '',
		closeThemeClass: '',
		themeClass: '',
		startThemeTogle: '',
		closeThemeTogle: ''
	}
	var _$classNames = {
		themeClass: '',
		startThemeTogle: '',
		closeThemeTogle: '',
		document: ''
	}
	var _docHeight;
	var _animationEnd = 'animationEnd transitionEnd transitionend';
	var _clickEvent = 'mousedown touchstart';

	self._construct = function(params){

		$.extend(_classNames, params);

		_$classNames.themeClass = $(_classNames.themeClass);
		_$classNames.startThemeTogle = $(_classNames.startThemeTogle);
		_$classNames.closeThemeTogle = $(_classNames.closeThemeTogle);
		_$classNames.document = $(document);		
		
		$(_$classNames.startThemeTogle).on(_clickEvent, function(e) {
			e.preventDefault();
			self._makeScreenDark();
		});

		$(_$classNames.closeThemeTogle).on(_clickEvent, function(e) {
			e.preventDefault();
			self._makeScreenWhiteAgain();
		});

		return self;

	}

	self._makeScreenDark = function(){
	
		_$classNames.themeClass.addClass(_classNames.startThemeClass);
		_docHeight = _$classNames.document.height();
		_$classNames.themeClass.height(_docHeight);		

	}

	self._makeScreenWhiteAgain = function(){

		_$classNames.themeClass.removeClass(_classNames.startThemeClass);
		_$classNames.themeClass.addClass(_classNames.closeThemeClass);
		_$classNames.themeClass.on(_animationEnd, function(){
			_$classNames.themeClass.removeClass(_classNames.closeThemeClass);
		});

	}

	return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.UltravioletTheme || {}, jQuery));


Modules.ToggleFilters = (function(self,$){

}(Modules.ToggleFilters || {}, jQuery));


(function($){
    $(function(){
    	var ultravioletTheme = new Modules.UltravioletTheme.init({
            startThemeClass: 'dark-on',
            closeThemeClass: 'dark-off',
            themeClass: '.dark',
            startThemeTogle: '.ultraviolet',
            closeThemeTogle: '.dark_off'
    	});
    });
    $(function(){
    	var toggleFilters = new Modules.ToggleFilters.init({
            toggleItem: '.toggle_filters',
            parentWrapper: '.deal_with_filters',
            openFiltersClass: 'filters_opened',
            filters: '.filters'
    	});
    });
})(jQuery);


$(document).ready(function(){

	$(document).on("click", ".burgerbutton", function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).closest('.head').toggleClass('open');
	});

	function footerSizing() {
		var footerHeight = $('.footer').height();
		console.log(footerHeight);
		$('section').last().css('margin-bottom', footerHeight + 'px');
	}

	$(window).resize(footerSizing);
	footerSizing();

});