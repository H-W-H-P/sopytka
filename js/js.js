var Modules = (function(self){

	self.haveFilters = function(filters){
		if ($('.filters').length){
			return true;
		}
		else{
			return false;
		}
	}

	self.isMobail = function(winwidth) {
        if(!winwidth) winwidth = 768;
        var check = true;
        if($(window).width() > 768) check = false;

        return check;
    };

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
	// var _clickEvent = 'mousedown touchstart';
	var _clickEvent = 'click';


	self._construct = function(params){

		$.extend(_classNames, params);

		_$classNames.themeClass = $(_classNames.themeClass);
		_$classNames.startThemeTogle = $(_classNames.startThemeTogle);
		_$classNames.closeThemeTogle = $(_classNames.closeThemeTogle);
		_$classNames.document = $(document);		
		
		_$classNames.startThemeTogle.on(_clickEvent, function(e) {
			e.preventDefault();
			self._makeScreenDark();
		});

		_$classNames.closeThemeTogle.on(_clickEvent, function(e) {
			e.preventDefault();
			self._makeScreenWhiteAgain();
		});

		return self;

	}

	self._makeScreenDark = function(){
	
		_$classNames.themeClass.addClass(_classNames.startThemeClass);
		_docHeight = _$classNames.document.height();
		_$classNames.themeClass.height(_docHeight);	

		return self;
	}

	self._makeScreenWhiteAgain = function(){

		_$classNames.themeClass.removeClass(_classNames.startThemeClass);
		_$classNames.themeClass.addClass(_classNames.closeThemeClass);
		_$classNames.themeClass.on(_animationEnd, function(){
			_$classNames.themeClass.removeClass(_classNames.closeThemeClass);
		});

		return self;
	}

	return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.UltravioletTheme || {}, jQuery));


Modules.ToggleFilters = (function(self,$){
	var _classNames = {
		toggleItem: '',
		parentWrapper: '',
		openFiltersClass: '',
		filters: ''
	}
	var _$classNames = {
		toggleItem: '',
		parentWrapper: '',
		filters: '',
		window: ''
	}
	var _thisPage;
	// var _clickEvent = 'mousedown touchstart';
	var _clickEvent = 'click';
	var _mobile;
	var _windowWidth;


	self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.toggleItem = $(_classNames.toggleItem);
        _$classNames.parentWrapper = $(_classNames.parentWrapper);
        _$classNames.filters = $(_classNames.filters);
        _$classNames.window = $(window);
        _thisPage = Modules.haveFilters(_$classNames.filters);


        _$classNames.toggleItem.on(_clickEvent, function(e){
        	e.preventDefault();
        	// _windowWidth = _$classNames.window.width();
        	// _mobile = Modules.isMobail(_windowWidth);
        	self._checkCondition();
        	return false;
        });        

        return self;

    }

    self._checkCondition = function(){
    	if (_$classNames.parentWrapper.hasClass(_classNames.openFiltersClass)){
    		self._hideFilters();
    	}
    	else{
    		self._showFilters();
    	}

    	return self;
    }

    self._hideFilters = function(){
    	_$classNames.parentWrapper.removeClass(_classNames.openFiltersClass);

    	return self;
    }

    self._showFilters = function(){
    	_$classNames.parentWrapper.addClass(_classNames.openFiltersClass);

    	return self;
    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.ToggleFilters || {}, jQuery));


Modules.PossibleSlider = (function(self,$){

	var _classNames = {
		sliderWrapper: '',
		sliderItem: ''
	}
	var _$classNames = {
		sliderWrapper: '',
		sliderItem: ''
	}

	self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.sliderWrapper = $(_classNames.sliderWrapper);
        _$classNames.sliderItem = $(_classNames.sliderItem);

        self._checkNumberOfItems();  

        return self;

    }

    self._checkNumberOfItems = function(){

    	if ((_$classNames.sliderItem.length)>=5){
    		self._sliderInit();
    	}

    	return self;

    }

    self._sliderInit = function(){

		var owl = $(".owl-carousel").owlCarousel({
			items: 5,
			loop: false,
			dots: false,
		  	nav: false,
		  	// responsive:{
		  	// 	768:{
		  	// 		items:1
		  	// 	},
		  	// 	1100:{
		  	// 		items:3
		  	// 	}
		  	// }
		});

    	return self;
    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.PossibleSlider || {}, jQuery));


(function($){
	$(function(){
    	var possibleSlider = new Modules.PossibleSlider.init({
            sliderWrapper: '.similiar_prods',
            sliderItem: '.sim__prod'
    	});
    });
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

	// $('a').click(function(e){
	// 	e.preventDefault();
	// })

});