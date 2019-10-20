
console.log("hello")
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}

function myFunction4() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show");
}

function myFunction5() {
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("show");
}



// $(window).scroll(function() {
//     var height = $(window).scrollTop();
//     if (height > 100) {
//         $('#back2Top').fadeIn();
//     } else {
//         $('#back2Top').fadeOut();
//     }
// });
// $(document).ready(function() {
//     $("#back2Top").click(function(event) {
//         event.preventDefault();
//         $("html, body").animate({ scrollTop: 0 }, "slow");
//         return false;
//     });
//
// });



// (function($) {
//
//     /**
//      * Copyright 2012, Digital Fusion
//      * Licensed under the MIT license.
//      * http://teamdf.com/jquery-plugins/license/
//      *
//      * @author Sam Sehnert
//      * @desc A small plugin that checks whether elements are within
//      *     the user visible viewport of a web browser.
//      *     only accounts for vertical position, not horizontal.
//      */
//
//     $.fn.visible = function(partial) {
//
//         var $t            = $(this),
//             $w            = $(window),
//             viewTop       = $w.scrollTop(),
//             viewBottom    = viewTop + $w.height(),
//             _top          = $t.offset().top,
//             _bottom       = _top + $t.height(),
//             compareTop    = partial === true ? _bottom : _top,
//             compareBottom = partial === true ? _top : _bottom;
//
//         return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//
//     };
//
// })(jQuery);
//
// var win = $(window);
//
// var allMods = $(".module");
//
// allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//         el.addClass("already-visible");
//     }
// });
//
// win.scroll(function(event) {
//
//     allMods.each(function(i, el) {
//         var el = $(el);
//         if (el.visible(true)) {
//             el.addClass("come-in");
//         }
//     });
//
// });