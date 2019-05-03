$('.runcar').click(function(){
   $('#car').animate({'left': '1000px'},2000, function() {
                 $('#car').css('transform','rotateY(180deg)');
                 $('#car').animate({'left': '0px'},2000);
             });
   
   
    
});
$('.runcar1').click(function(){
	 $('#xe1').animate({'left': '420px'},1000);
	 $('#xe2').animate({'right': '420px'},1000, function() {
                 $('#xe1').css('display','none');
                 $('#xe2').css('display','none');
                 $('#lua').css('display','block');
             });
});
$('.runcar2').click(function(){
	 $('#xe3').animate({'left': '1050px'},1000);
	 $('#line').animate({'width': '1050px'}, 1000);
	
});