var current= new Date()
var time=current.getHours()
var input = document.getElementById("pw-field");
var button = document.getElementById("pw-button");
// if(button){
//     button.addEventListener("click", validate);
// }
// console.log("WORKS");

// $(document).on('click', button, function() {
//     if (input.value === 'molly') { 
//         console.log("WORKS");
//         //  window.open('./team.html');
//       } else {  
//          input.focus(); // <-- If you don't do this first, your select code won't work
//          input.setSelectionRange(0, input.value.length);   
//          alert('Invalid Password!'); 
//       }
// });


// // function validate(){
// //   if (input.value === 'molly') { 
// //     console.log("WORKS");
// //      // No need to add a "show" class. Just remove the "hidden" class.
// //     //  window.open('./team.html');
// //   } else {  
// //      password.focus(); // <-- If you don't do this first, your select code won't work
// //      password.setSelectionRange(0, password.value.length);   
// //      alert('Invalid Password!'); 
// //   }
// // }


function fadeIn(obj) {
        $('#night').fadeIn(2000);
        }

function fadeInTime(obj) {
        if (time>=5 && time<=8) {
            $('#sunrise').fadeIn(2000);}

    // 8-11am morning
        else if (time>=8 && time<=12) {
            $('#morning').fadeIn(2000);}

    //11-5pm day
        else if (time>=12 && time<=16) {
            $('#day').fadeIn(2000);}
    
    //5-8pm sunset start
        else if (time>=17 && time<=19) {
            $('#sunset').fadeIn(2000);}
    
    //8pm-5am nighttime 
        else {
            $('#night').fadeIn(2000);}
    }

function quickFadeInDawn(obj) {
    if (time<=22)
        $('#morning').fadeIn(400);
        }

function quickFadeInNight(obj) {
    if (time>23 && time<=23)
        $('#night').fadeIn(400);
        }        


window.onload = function sunRise(obj) {
// 5-8am sunrise
    if (time>=5 && time<=8) {
        $("#circle").animate({"margin-top": "90px", "opacity": ".5"}, 2400);
        document.getElementById('greeting').innerHTML = "Good Morning";
        $("#greeting").animate({"opacity": '1'}, 1000);}
// 8-11am morning
    else if (time>=8 && time<=11) {
        $("#circle").animate({"margin-top": "60px", "opacity": ".5"}, 2400);
        document.getElementById('greeting').innerHTML = "Good Morning";
        $("#greeting").animate({"opacity": '1'}, 1000);}

//11-5pm day
    else if (time>=12 && time<=17) {
        $("#circle").animate({"margin-top": "-300px", "opacity": ".5"}, 2400);
        document.getElementById('greeting').innerHTML = "Good Afternoon";
        $("#greeting").animate({"opacity": '1'}, 1000);}


//5-8pm sunset start
    else if (time>=18 && time<=19) {
        $("#circle").animate({"margin-top": "90px", "opacity": ".5"}, 2400);
        document.getElementById('greeting').innerHTML = "Good Evening";
        $("#greeting").animate({"opacity": '1'}, 1000);}


//8pm-5am nighttime 
    else {
        $("#moon").animate({"top": "210px", "opacity": "1"}, 2400);
        $("#greeting").animate({"opacity": '1'}, 1000);
        document.getElementById('greeting').innerHTML = "Good Evening";
        $('#night').fadeIn(2000);
        $('#greeting').attr('id', 'greeting-dt');
        $('.description').attr('class', 'description-dt');
        $('.header').attr('class', 'header-dt');
        $('.button').attr('class', 'button-dt');
        $('#active-dt-marker').attr('id', 'active-dt-state');
        $('.dates').attr('class', 'dates-dt');
        $('.title').attr('class', 'title-dt');
        $('.case-description').attr('class', 'case-description-dt');
        $('#about-header').attr('id', 'about-header-dt');
        $('#active-dt-about-marker').attr('id', 'active-dt-about-state');
        $( "p" ).addClass("dt");
        $( "h6" ).addClass("dt");
        $( "h4" ).addClass("dt");
        $( "h3" ).addClass("dt");
        $( "h2" ).addClass("dt")
        $('.company-title').attr('class', 'company-title-dt');
        $('.case-header').attr('class', 'case-header-dt');
        $('.casestudy-description').attr('class', 'casestudy-description-dt');        
    }
}        



// $(document).ready(function(){
//     if (time<=20 && time<=23) {
//        $("#circle").css({"margin-top": "96px", "opacity": ".5"});}
//         }    
