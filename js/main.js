
/*leftmenu*/
$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
    $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
    $("#home-content").animate({marginLeft :'0px'},50)
})


/*scrollmenu*/
$("#leftMenu a[href^='#'").click(function(e){
    let targetSection = $(e.target).attr("href");
    let targetOffset = $(targetSection).offset.top;
    $("html, body").animate({scrollTop:targetOffset},200);
})

/*Accordion*/
$('#sliderDown .toggle').click(function(e){
    $('.inner').not($(e.target).next()).slideUp(500);
    $(e.target).next().slideToggle(500);
});


/*counter*/
let countDown  = new Date("10 october 2024 9:56:00").getTime();
let x = setInterval(function(){
    now = new Date().getTime();
    diffrence = countDown - now ;
    if(diffrence<0)
    {
        clearInterval(x);
        alert("Let's Go");
    }
    days= Math.floor(diffrence / (1000*60*60*24));
    hours = Math.floor(diffrence % (1000*60*60*24)/(1000*60*60));
    minutes = Math.floor(diffrence % (1000*60*60)/(1000*60));
    seconds = Math.floor(diffrence % (1000*60)/(1000));

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${  minutes } m`);
    $('.seconds').html(`${ seconds} s`)
})


/*textarea*/
var maxLength = 100;
$('textarea').keyup(function() {
var length = $(this).val().length;
var AmountLeft = maxLength-length;
if(AmountLeft<=0)
{
    $("#chars").text("your available character finished");
}
else{
    $("#chars").text(AmountLeft);
}
});

/*  click top button   */
let sliderDownSection = $("#sliderDown").offset().top;
$(window).scroll(function(){
    // console.log("hello");
    // console.log($(window).scrollTop());
    let offset = $(window).scrollTop()
    //console.log(offset);
    if(offset > sliderDownSection - 100){
    
        $("#backToTop").fadeIn(200);

    }
    else{
        
        $("#backToTop").fadeOut(200);
        
    }
})
//scroll to tp button
$("#backToTop").click(function(){
    $("html, body").animate({scrollTop:0},200);
    
})