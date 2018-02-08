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


	/*----------------------------------------------------------------------------
		Progress chart
	----------------------------------------------------------------------------*/
	var $c_circle = $('.chart-circle');

  $c_circle.each(function(){
      var barSize = 5;
      var barColor = $(this).css('color');
      var value = $(this).data('valuenow');
      var valuemax = $(this).data('valuemax');
      var width = $(this).width();

      //Radius of width minus bar size
      var radiusSize = (width / 2) - (barSize * 2);
      //Percentage of data-valuenow and data-valuemax
      var value = Math.round((value / valuemax) * 100);
      //Settings for radial indicator
      var settings = {
        barColor: barColor,
        displayNumber: false,
        barWidth: barSize,
        radius: radiusSize,
        initValue: value,
      }

     $(this).radialIndicator(settings);
  });

})
