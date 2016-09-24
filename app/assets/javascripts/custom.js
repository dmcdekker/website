var divs = $('div[id^="content-"]').hide(),
    i = 0;

(function cycle() { 

    divs.eq(i).fadeIn(600)
              .delay(3500)
              .fadeOut(1500, cycle);

    i = ++i % divs.length;

})();