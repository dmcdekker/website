var divs=$('div[id^="content-"]').hide(),i=0;!function d(){divs.eq(i).fadeIn(600).delay(3500).fadeOut(1500,d),i=++i%divs.length}();