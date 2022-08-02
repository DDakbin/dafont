$('.slide li').eq(0).css('left','0');
$('.slide li').eq(1).css('left','-100%');
$('.slide li').eq(2).css('left','-100%');

// $('.slide li').eq(0).css('left','0');
// $('.slide li').eq(1).css('left','-100%');
// $('.slide li').eq(2).css('left','-100%');

var start = 0;

setInterval(function(){
    if(start == 2){
        start = 0;
    }else{
        start = start + 1;
    }
    $('.slide li').eq(start-1).css('left','-100%');
    $('.slide li').eq(start).css('left','0');
},3000);

var svg = document.querySelector('svg');
var menu = document.querySelector('.header .menu');

svg.addEventListener('click',function(){
    if(menu.style.height == '0px'){
        menu.style.height = '250px';
    }else{
        menu.style.height = '0px';
    }
});

