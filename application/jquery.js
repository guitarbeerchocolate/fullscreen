(function()
{
	$('.goFullScreen').click(function()
	{
		section = document.getElementById('page');
		section.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		section.mozRequestFullScreen();
		section.requestFullscreen();
	});
	/*
	$.getJSON('jsonout.php', function(data)
	{
		$.each(data, function(i, items)
		{
			$('body').append('<p>'+items.userid+'</p>'+items.entry+'<p>'+items.datesaved+'</p>');
		});
	});
	*/

	/*
	$('form').submit(function()
	{
		$.post('posthandler.php',
		{
			method:'getContent',
			myname:$(this).find('#myname').val()
			$(this).hide(),
			$('img').show()
		}, function(data)
		{
			$(this).show(),
			$('img').hide()
			console.log(data)
		});
	return false;
	});
	*/

})();