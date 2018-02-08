$(function(){
	
	var expanded = "menu-expanded"

	$('#toggleSidenav').on('click', function(){
		if ( $('body').hasClass(expanded)){
			$('body').removeClass(expanded) 
		} else {
			console.log('retracted')
			$('body').addClass(expanded) 
		}
	})

})