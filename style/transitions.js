$(document).ready(function(){

    $(function() {
        $(".fadein").delay(800).fadeIn();
    });

    $('.casecard').hover(
        function () 
            {
            $("#line").css(
                {'border-bottom': 'solid 6px #ffffff'});
            },
        function () 
            {
            $("#line").css(
                {'border-bottom': 'solid 6px #000000'});
            },
        );

})


// $("#caseStudyImg").animate({transform: 'scale(2)'}, 100);},

// $(document).ready(function(){

//     $(function() {
//         $(".fadein").delay(800).fadeIn();
//     });

//     $('.casecard').hover(
//         function () {
//             $("#line").hide();
//             $("#caseStudyImg").css({'padding-top': '24px'});},
//         function () {
//         $("#line").show(); 
//         $("#caseStudyImg").css({'padding-top': '0px'});}),
// })