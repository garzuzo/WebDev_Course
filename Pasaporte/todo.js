$("ul").on("click",function(event){
	$(this).toggleClass("completed");
});

$('input').on('keypress',function(e){

	if(e.which==13){
		var valor=$(this).val();
		console.log(valor);
		$("ul").append('<li><span class="delete"><i class="fas fa-trash"></i></span>'+valor+'</li>');
		$(this).val('');

	}
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});

$(".fa-plus").on("click",function(event){
	$("input").fadeToggle();
});