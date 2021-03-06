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

// for some reason 1006 = 1023; 1007 = 1024


Modules.UltravioletTheme = (function(self,$){

	var _classNames = {
		startThemeClass: '',
		closeThemeClass: '',
		themeClass: '',
		startThemeTogle: '',
		closeThemeTogle: '',
        overflowHTML: '',
	}
	var _$classNames = {
		themeClass: '',
		startThemeTogle: '',
		closeThemeTogle: '',
		document: '',
        htmlBody: ''
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
        _$classNames.htmlBody = $('html, body');		
		
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
		_docHeight = _$classNames.themeClass.height();
		_$classNames.htmlBody.height(_docHeight).addClass(_classNames.overflowHTML);
        _$classNames.htmlBody.animate({scrollTop: _$classNames.themeClass.offset().top})

		return self;
	}

	self._makeScreenWhiteAgain = function(){

		_$classNames.themeClass.removeClass(_classNames.startThemeClass);
		_$classNames.themeClass.addClass(_classNames.closeThemeClass);
        _$classNames.htmlBody.height('auto').removeClass(_classNames.overflowHTML);
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
            if ($(window).width()<=1006){
                $('html, body').toggleClass('overflow');
            }
    	}
    	else{
    		self._showFilters();
            if ($(window).width()<=1006){
                $('html, body').toggleClass('overflow');
            }
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
		sliderItem: '',
		sliderItemWrapper: '',
		sliderInit: '',
		owl: ''
	}
	var _$classNames = {
		sliderWrapper: '',
		sliderItem: '',
		sliderItemWrapper: '',
		owl: ''
	}

	self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.sliderWrapper = $(_classNames.sliderWrapper);
        _$classNames.sliderItem = $(_classNames.sliderItem);
        _$classNames.sliderItemWrapper = $(_classNames.sliderItemWrapper);
        _$classNames.owl = $(_classNames.owl);

        self._checkNumberOfItems();  

        return self;

    }

    self._checkNumberOfItems = function(){

    	if ((_$classNames.sliderItem.length)>=6){
    		self._sliderInit();
    	}

    	return self;

    }

    self._sliderInit = function(){

		var owl = _$classNames.owl.owlCarousel({
			items: 5,
			loop: true,
			dots: false,
		  	nav: false,
		  	autoplay: true,
		  	autoplayTimeout: 2000,
		  	autoplayHoverPause: true,
		  	autoplaySpeed: 2000,
		  	responsive:{
		  		1025:{
		  			items:5
		  		},
                768:{
                    items:3
                },
		  		0:{
		  			items:1,
		  			autoplayTimeout: 5000
		  		}
		  	}
		});

		_$classNames.owl.addClass(_classNames.sliderInit);

    	return self;
    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.PossibleSlider || {}, jQuery));


Modules.PossibleSliderExamples = (function(self,$){

    var _classNames = {
        sliderWrapper: '',
        sliderItem: '',
        owl: ''
    }
    var _$classNames = {
        sliderWrapper: '',
        sliderItem: '',
        owl: ''
    }

    self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.sliderWrapper = $(_classNames.sliderWrapper);
        _$classNames.sliderItem = $(_classNames.sliderItem);
        _$classNames.owl = $(_classNames.owl);

        self._checkNumber();  

        return self;

    }

    self._checkNumber = function(){

        if ((_$classNames.sliderItem.length)>=2){
            self._sliderInit();
        }

        return self;

    }

    self._sliderInit = function(){

        var owl = _$classNames.owl.owlCarousel({
            loop: false,
            dots: false,
            nav: true,
            autoplay: false,
            items: 1
        });

        return self;
    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.PossibleSliderExamples || {}, jQuery));


Modules.ImageMechanics = (function(self,$){

	var _classNames = {
		bigImage: '',
        smallImg: '',
        smallImgWrapper: '',
        imgPopUp: '',
        closeImg: '',
        bigImageWrapper: '',
        active: '',
        imgOpen: ''
	}
	var _$classNames = {
		bigImage: '',
        smallImg: '',
        smallImgWrapper: '',
        imgPopUp: '',
        closeImg: '',
        bigImageWrapper: '',
        imgOpen: ''
	}
	var dataGetAttr;
	var dataPath;
	var dataAttr;
	var _clickEvent = 'click';
	var clickedElem;
	var _this;
	var $imgToUp;
	var bigImgWrHeight;

	self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.bigImage = $(_classNames.bigImage);
        _$classNames.smallImg = $(_classNames.smallImg);
        _$classNames.smallImgWrapper = $(_classNames.smallImgWrapper);
        _$classNames.imgPopUp = $(_classNames.imgPopUp);
        _$classNames.closeImg = $(_classNames.closeImg);
        _$classNames.bigImageWrapper = $(_classNames.bigImageWrapper);
        _$classNames.imgOpen = $(_classNames.imgOpen);

        _$classNames.smallImg.on(_clickEvent, function(){
        	_this = this;
        	dataAttr = 'id';
        	self._getDataAttr(_this, dataAttr);
        	self._changeBigImage();
        });

        _$classNames.bigImage.on(_clickEvent, function(){        	
        	_this = this;
        	dataAttr = 'path';
        	self._getDataAttr(_this, dataAttr);
        	self._mobileCheck();
        });

        return self;

    }

    self._mobileCheck = function(){

        if ($(window).width()>=1007) {
            self._openBigImage();
        }

        return self;

    }

    self._changeBigImage = function(){

    	$imgToUp = _$classNames.bigImageWrapper.find('[data-id="' + dataGetAttr + '"]');

    	bigImgWrHeight = _$classNames.bigImageWrapper.outerHeight();

    	_$classNames.bigImage.removeClass(_classNames.active);
    	$imgToUp.addClass(_classNames.active);

    	if(bigImgWrHeight>_$classNames.bigImageWrapper.height())
    		_$classNames.bigImageWrapper.height(bigImgWrHeight);

    	return self;

    }

    self._getDataAttr = function(_this, dataAttr){
    	console.log(dataAttr)

    	dataGetAttr = $(_this).data(dataAttr);
    	console.log(dataGetAttr)

    	return self;

    }

    self._openBigImage = function(){

    	_$classNames.imgPopUp.addClass(_classNames.active)
    	_$classNames.imgOpen.attr('src', dataGetAttr )

		_$classNames.closeImg.on(_clickEvent, function(e){
			e.preventDefault();
			self._closeBigImage();
		});	

    	return self;

    }

    self._closeBigImage = function(){

    	_$classNames.imgPopUp.removeClass(_classNames.active)

    	return self;

    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.ImageMechanics || {}, jQuery));


Modules.BasketMechanics = (function(self,$){

    var _classNames = {
        removeELement: '',
        addElement: '',
        basketItem: '',
        basketPage: '',
        basketEmpty: '',
        footNoScrol: ''
    }
    var _$classNames = {
        removeELement: '',
        addElement: '',
        basketItem: '',
        basketPage: '',
        footNoScrol: ''
    }
    var pathToPHP;
    var _dataPar = 'data-parallax'
    var _clickEvent = 'click';
    var _footer = '.footer';

    self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.removeELement = $(_classNames.removeELement);
        _$classNames.addElement = $(_classNames.addElement);
        _$classNames.basketItem = $(_classNames.basketItem);
        _$classNames.basketPage = $(_classNames.basketPage);
        _$classNames.footer = $(_footer);

        _$classNames.removeELement.on(_clickEvent, function(e){
            e.preventDefault();
            _this = this;
            self._removeItem(_this);
        });

        _$classNames.addElement.on(_clickEvent, function(){  
            e.preventDefault();
            _this = this;
            self._addItemPHP(_this);
        });

        return self;

    }

    self._removeItem = function(_this){

        $(_this).closest(_classNames.basketItem).remove();

        self._checkBasketForItems();
        self._removeItemPHP(_this);
        footerFixed();

        return self;

    }

    self._checkBasketForItems = function(){

        if ($(_classNames.basketItem).length === 0) {
            _$classNames.basketPage.addClass(_classNames.basketEmpty);
            _$classNames.footer.removeAttr(_dataPar).addClass(_classNames.footNoScrol).css('transform', 'none');
        }

        return self;

    }

    self._removeItemPHP = function(){

        

        return self;

    }

    self._addItemPHP = function(){

        

        return self;

    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.BasketMechanics || {}, jQuery));


Modules.FilterMechanics = (function(self,$){

    var _classNames = {
        checkBox: '',
        unTouchClass: '',
        filtersAttrs: '',
        filtersColorCLass: '',
        label: '',
        beforeItem: '',
        filtersCont: '',
        footer: '',
        filtersParentWr: '',
        filtersParOpenClass: ''
    }
    var _$classNames = {
        checkBox: '',
        filtersAttrs: '',
        filtersColor: '',
        label: '',
        beforeItem: '',
        filtersCont: '',
        footer: '',
        filtersParentWr: ''
    }
    var _clickEvent = 'click';
    // data attrs
    var _name = 'name';
    var _color = 'color';
    // "invisible" color
    var _colorHash = '#eaeaea';
    var _bGColor = 'background-color';
    var _$window = $(window);
    var _$document = $(document);
    var _$html = $('html');
    // variables
    var _topOffsetFilters;
    var _filtersHeight;
    var _footerHeight;
    var _downPageVar;
    // window width point
    var _sizePoint = 1007;
    var _filtersContCheck;
    var _scrollTop;
    var _htmlHeight;

    self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.checkBox = $(_classNames.checkBox);
        _$classNames.filtersAttrs = $(_classNames.filtersAttrs);
        _$classNames.label = $(_classNames.label);
        _$classNames.beforeItem = $(_classNames.beforeItem);
        _$classNames.filtersCont = $(_classNames.filtersCont);
        _$classNames.footer = $(_classNames.footer);
        _$classNames.filtersParentWr = $(_classNames.filtersParentWr);

        // scrolling mechanics
        self._scrollMechs();
        _$window.resize(self._scrollMechs)

        // filter click
        _$classNames.checkBox.on(_clickEvent, function(e){
            // e.preventDefault();
            _this = this;
            self._checkPossibility(_this);
            self._checkBox(_this);
        });

        return self;

    }

    self._checkPossibility = function(_this){

        if($(_this).parents(_classNames.unTouchClass).length > 0) return false;

        return self;

    }

    self._checkBox = function(_this){

        // coloring filter
        if($(_this).closest(_$classNames.filtersAttrs).hasClass(_classNames.filtersColorClass)){
            if($(_this).is(':checked')) $($(_this).closest(_$classNames.label).find(_$classNames.beforeItem)).css(_bGColor, $(_this).closest(_$classNames.label).data(_color));
            else  $($(_this).closest(_$classNames.label).find(_$classNames.beforeItem)).css(_bGColor, _colorHash);
        }

        return self;

    }

    self._scrollMechs = function(){
        // desktop
        if ((self._checkWidth()) && (self._ifExists())) {

            _$classNames.filtersParentWr.addClass(_classNames.filtersParOpenClass);
            _$classNames.filtersCont.css({"transform":"translateY(0)"});

            _topOffsetFilters = _$classNames.filtersCont.offset().top;
            _filtersHeight = _$classNames.filtersCont.height();
            _footerHeight = _$classNames.footer.height();

            self._stick(_topOffsetFilters, _filtersHeight, _footerHeight);
        }
        // mobile
        else if (!self._checkWidth()) {

            _$classNames.filtersParentWr.removeClass(_classNames.filtersParOpenClass);
            self._stick();

            _$classNames.filtersCont.css({
                "-webkit-transform":"translateX(-110%)",
                "-ms-transform":"translateX(-110%)",
                "transform":"translateX(-110%)"
            });
        }

        return self;

    }

    self._stick = function(_topOffsetFilters, _filtersHeight, _footerHeight){
        // important?
        if (_footerHeight) {
            // _$window.off('scroll', );
            _$window.on('scroll', scrolling);
        }

        if (!_footerHeight) {
            // _$window.off('scroll', );
        }
        
        // console.log(_topOffsetFilters)

        function scrolling () {
            _scrollTop = $(this).scrollTop();
            _htmlHeight = _$html.height();

            if (_topOffsetFilters <= _scrollTop) {

                if (self._checkWidth()) {

                    _downPageVar = _htmlHeight - _footerHeight - _filtersHeight;

                    if (_scrollTop >= _downPageVar) {
                        _$classNames.filtersCont.css({
                            "-webkit-transform":"translateY("+ (_downPageVar - 20 -  _topOffsetFilters) +"px)",
                            "-ms-transform":"translateY("+ (_downPageVar - 20 -  _topOffsetFilters) +"px)",
                            "transform":"translateY("+ (_downPageVar - 20 - _topOffsetFilters) +"px)"
                        });
                    }

                    else {
                        _$classNames.filtersCont.css({
                            "-webkit-transform":"translateY("+ (_scrollTop - _topOffsetFilters) +"px)",
                            "-ms-transform":"translateY("+ (_scrollTop - _topOffsetFilters) +"px)",
                            "transform":"translateY("+ (_scrollTop - _topOffsetFilters) +"px)"
                        });
                    }
                }

            }

            else if (self._checkWidth()) _$classNames.filtersCont.css({"transform":"translateY(0)"});

            else if (!self._checkWidth()) _$classNames.filtersCont.css({
                "-webkit-transform":"translateX(-110%)",
                "-ms-transform":"translateX(-110%)",
                "transform":"translateX(-110%)"
            });
        }

        return self;

    }

    self._ifExists = function(){

        if (_$classNames.filtersCont[0]) return true;
        else return false;

        return self;

    }

    self._checkWidth = function(){

        if (_$document.width()  >= _sizePoint) {
            return true;
        }
        else {
            return false;
        }     

        return self;

    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.FilterMechanics || {}, jQuery));


// Modules.LaningProds = (function(self,$){

//     var _classNames = {
//         productItem: '',
//         productsCont: '',
//         firstColumnClass: '',
//         lastColumnCLass: '',
//         toggleFilters: ''
//     }
//     var _$classNames = {
//         productItem: '',
//         productsCont: '',
//         toggleFilters: ''
//     }
//     var _$window = $(window);
//     var _$document = $(document);
//     var _sizePoint = 1007;
//     // variables for size counting
//     var _itemWidth;
//     var _contWidth;
//     var _intPart;
//     var _flPart;

//     self._construct = function(params){

//         $.extend(_classNames, params);
//         _$classNames.productItem = $(_classNames.productItem);
//         _$classNames.productsCont = $(_classNames.productsCont);
//         _$classNames.toggleFilters = $(_classNames.toggleFilters);

//         self._resizing();
//         _$window.resize(self._resizing);
//         _$classNames.toggleFilters.click(function () {
//             // maybe later i'll fix it
//             setTimeout(self._resizing, 10);
//         })

//         return self;

//     }

//     self._resizing = function(){

//         if (self._checkWidth) {
//             _$classNames.productItem.removeClass(_classNames.firstColumnClass).removeClass(_classNames.lastColumnCLass);
//             _itemWidth = _$classNames.productItem.outerWidth();
//             _contWidth = _$classNames.productsCont.outerWidth();
//             // console.log(_contWidth, _itemWidth)
//             _intPart = ~~(_contWidth/_itemWidth)
//             _flPart = _contWidth % _itemWidth;
//             // 300 ~ .99, 200 ~ .8
//             if ((_flPart >= 200) && (_flPart < 300)) return false;

//             for (var i = 0; i < 500; i++){
//                 _$classNames.productItem.eq(_intPart*i).addClass(_classNames.firstColumnClass);
//             }

//             for (var i = 0; i < 500; i++){
//                 _$classNames.productItem.eq(_intPart*(i-1)-1).addClass(_classNames.lastColumnCLass);                
//             }
//         }
//         else{
//             _$classNames.productItem.removeClass(_classNames.firstColumnClass).removeClass(_classNames.lastColumnCLass);
//         }
        

//         return self;

//     }

//     self._checkWidth = function(){

//         if (_$document.width()  >= _sizePoint) {
//             return true;
//         }
//         else {
//             return false;
//         }     

//         return self;

//     }

//     return {

//         init: function(params){

//             self._construct(params);

//             return self;

//         }

//     }

// }(Modules.LaningProds || {}, jQuery));



Modules.NavBarSlider = (function(self,$){

    var _classNames = {
        navBar: '',
        trigger: '',
        offClass: ''
    }
    var _$classNames = {
        navBar: '',
        offClass: ''
    }
    var _$window = $(window);
    var _$document = $(document);
    // var _sizePoint = 1007;
    var _sizePoint = 1007;

    self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.navBar = $(_classNames.navBar);

        self._resizing();
        _$window.resize(self._resizing);

        return self;

    }

    self._resizing = function(){

        if (self._checkWidth()) {
            var owl = _$classNames.navBar.owlCarousel({
                items: 6,
                loop: false,
                dots: false,
                nav: false,
                responsive:{
                    768:{
                        items:6
                    },
                    414:{
                        items:4
                    },
                    0:{
                        items:3
                    }
                }
            });
        }
        else{
            _$classNames.navBar.trigger(_classNames.trigger).addClass(_classNames.offClass);
        }

        return self;

    }

    self._checkWidth = function(){

        if (_$document.width() < _sizePoint) {
            return true;
        }
        else {
            return false;
        }     

        return self;

    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.NavBarSlider || {}, jQuery));


Modules.FixFooter = (function(self,$){

    var _classNames = {
        footer: '',
        footerCont: '',
        fixClass: '',
        offTrsClass: ''
    }
    var _$classNames = {
        footer: '',
        footerCont: ''
    }
    var _$window = $(window);
    var _$document = $(document);
    var _$html = $('html');
    var _pageHeight;
    var _footerHeight;
    var _windowHeight;
    // page's height w/o footer
    var _pageWOFooter;
    //data attr
    var _attr = 'data-parallax';

    self._construct = function(params){

        $.extend(_classNames, params);
        _$classNames.footer = $(_classNames.footer);
        _$classNames.footerCont = $(_classNames.footerCont);

        self._resizing();
        _$window.resize(self._resizing);

        return self;

    }

    self._resizing = function(){

        _$classNames.footer.removeClass(_classNames.fixClass);
        _$classNames.footerCont.attr(_attr, '{"y": 220}').removeClass(_classNames.offTrsClass);
        _pageHeight = _$html.height();    
        _footerHeight = _$classNames.footer.height();
        _windowHeight = _$window.height();
        _pageWOFooter = _pageHeight - _footerHeight;
        
        if ((_pageWOFooter <= _windowHeight) || ($(document).width() < 1007)) {
            _$classNames.footerCont.removeAttr(_attr).addClass(_classNames.offTrsClass).css('transform', 'none');        
        }
        if (_pageHeight <= _windowHeight) {
            _$classNames.footer.addClass(_classNames.fixClass);
        }

        return self;

    }

    return {

        init: function(params){

            self._construct(params);

            return self;

        }

    }

}(Modules.FixFooter || {}, jQuery));


(function($){
    $(function(){
        var fixFooter = new Modules.FixFooter.init({
            footer: 'footer',
            footerCont: '.footer',
            fixClass: 'fixed',
            offTrsClass: 'no_trs'
        });
    });
    $(function(){
        var navBarSlider = new Modules.NavBarSlider.init({
            navBar: '.additional_nav',
            trigger: 'destroy.owl.carousel',
            offClass: 'off'
        });
    });
    // $(function(){
    //     var laningProds = new Modules.LaningProds.init({
    //         productItem: '.products__item',
    //         productsCont: '.products',
    //         firstColumnClass: 'first_column',
    //         lastColumnCLass: 'last_column',
    //         toggleFilters: '.toggle_filters'
    //     });
    // });
    $(function(){
        var filterMechanics = new Modules.FilterMechanics.init({
            filtersParentWr: '.deal_with_filters',
            filtersParOpenClass: 'filters_opened',
            filtersCont: '.filters',
            checkBox: '.filters input',
            unTouchClass: '.untouch',
            filtersAttrs: '.filters__attrs',
            filtersColorClass: 'filters_color',
            label: 'label',
            beforeItem: '.before',
            footer: 'footer'
        });
    });
    $(function(){
        var basketMechanics = new Modules.BasketMechanics.init({
            removeELement: '.basket_page__item_remove',
            addElement: '.add_to_basket',
            basketItem: '.basket_page__item',
            basketEmpty: 'basketEmpty',
            basketPage: '.basket_page',
            footNoScrol: 'no_trs'
        });
    });
	$(function(){
    	var possibleSlider = new Modules.PossibleSlider.init({
            sliderWrapper: '.similiar_prods',
            sliderItem: '.sim__prod',
            sliderItemWrapper: '.similiar_prods li',
            sliderInit: 'owled',
            owl: '.owl-carousel'
    	});
    });
    $(function(){
        var possibleSliderExamples = new Modules.PossibleSliderExamples.init({
            sliderWrapper: '.examples_wr',
            sliderItem: '.examples_wr img',
            owl: '.examples_wr'
        });
    });
    $(function(){
    	var ultravioletTheme = new Modules.UltravioletTheme.init({
            startThemeClass: 'dark-on',
            closeThemeClass: 'dark-off',
            themeClass: '.dark',
            startThemeTogle: '.ultraviolet',
            closeThemeTogle: '.dark_off',
            overflowHTML: 'overflow_violet'
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
    $(function(){
    	var imageMechanics = new Modules.ImageMechanics.init({
            bigImage: '.big_img_wr img',
            bigImageWrapper: '.big_img_wr',
            smallImg: '.small_img_wr img',
            smallImgWrapper: '.small_img_wr',
            imgPopUp: '.img_pop_up',
            imgOpen: '.img_pop_up img',
            closeImg: '.img_pop_up__close',
            active: 'active'
    	});
    });
})(jQuery);


$(document).ready(function(){

    $('.form__item .checkout').on('click', function (e) {
        e.preventDefault();
        window.location = 'success.html';
    });    

	$(document).on("click", ".burgerbutton", function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
        $(this).closest('.head').toggleClass('open');
		$('html, body').toggleClass('overflow');
	});

    $('.about__desc-title').click(function(){
        if ($(window).width()<=1006){
            $(this).closest('.desc_wr').toggleClass('opened');
        }
    });

    $('.examples__cap').click(function(){
        if ($(window).width()<=1006){
            $('.examples_wr').toggleClass('opened');
            $(this).toggleClass('opened');
        }
    });    

    $('.dark_phone').click(function () {
        $('.head').removeClass('open');
        $('.deal_with_filters').removeClass('filters_opened');
        $('html, body').removeClass('overflow');
    });

    $('.burgerbutton').click(function () {
        $('.deal_with_filters').removeClass('filters_opened');
        // $('html, body').removeClass('overflow');
    });

    $('.payment__btn.another').click(function () {
        $('.payment__btns2').addClass('non_displayed');
        $('.payment__btns3').removeClass('non_displayed');
        return false;
    });

    $('.payment__btn.deliev').click(function () {
        $('.payment__btns3').addClass('non_displayed');
        $('.payment__btns2').removeClass('non_displayed');
        return false;
    });

    var hrefParts = location.href.split('/');
    var conForLink = hrefParts[hrefParts.length - 1];
    console.log($('.info_top__links a[data-check="' + conForLink + '"]'))
    $('.info_top__links a[data-check="' + conForLink + '"]').addClass('picked')
    $('.info_top__links a[data-check="' + conForLink + '"]').click(function () {
        return false;
    })

    

    // function laningProds() {
    //     if ($(window).width() > 1007) {
    //         $('.products__item').removeClass('first_column last_column')
    //         var itemWidth = $('.products__item').outerWidth();
    //         var contWidth = $('.products').outerWidth();
    //         var intPart = ~~(contWidth/itemWidth)
    //         var flPart = contWidth % itemWidth;
    //         if ((flPart >= 200) && (flPart < 300)) return false
    //         console.log(intPart, flPart)
    //         for (var i = 0; i < 200; i++){
    //             $('.products__item').eq(intPart*i).addClass('first_column');
    //         }
    //         for (var i = 0; i < 200; i++){
    //             $('.products__item').eq(intPart*(i-1)-1).addClass('last_column');                
    //         }
    //     }
    //     else{
    //         $('.products__item').removeClass('first_column last_column')
    //     }
    // }
    // laningProds();
    // $(window).resize(laningProds);
    // $('.toggle_filters').click(laningProds)

    // $(window).resize(footerFixed);
    // footerFixed();

    // function footerSizing() {
    //  var footerHeight = $('.footer').height();
 //        if ($(window).width()>=1007){
    //    $('section').last().css('margin-bottom', footerHeight + 'px');
 //        }
 //        else{
 //           $('section').last().css('margin-bottom', 'auto'); 
 //        }
    // }

 //    $(window).resize(footerSizing);
	// footerSizing();

	// $('a').click(function(e){
	// 	e.preventDefault();
	// })

    // var docHeight;
    // var winHeight;
    // var scrTop;
    // var percentScroll;

    // docHeight = $(document).outerHeight();       
    // winHeight = $(window).height();
    // docHeight = docHeight - winHeight;


    // function footerScroll() {
    //     scrTop = $(window).scrollTop();
    //     percentScroll = scrTop/docHeight*100;
    //     percentScroll = 100 - percentScroll;
    //     // $('.footer').css('transform', 'translateY(-' + percentScroll + '%)')
    //     percentScroll = percentScroll/100;
    //     $('footer>div>div').css('opacity', 1 - percentScroll);
    //     // requestAnimationFrame(footerScroll)
    // }

    // $(window).on('scroll', footerScroll);

});