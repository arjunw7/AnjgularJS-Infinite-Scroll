

$(document).ready(function(){
	$(".sButton").click(function(){
		$(".success").show();
		$(".success").delay(500).fadeOut(1000);
	})
});

// jQuery(
//   function($)
//   {
//     $('.right').bind('scroll', function()
//                               {
//                                 if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
//                                 {
//                                   refreshNow();
//                                 }
//                               })
//   }
// );