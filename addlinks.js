
var HNCacheURL = "http://hncache.bensbit.co.uk/";

for (var i = 0; i < (30*3); i+=3) {
	var n = i - 1;
	var commentsLink = $('table table tbody tr:nth-of-type('+n+') td.subtext span').attr('id');
	//var ID = commentsLink.substring(6);
	if (typeof commentsLink == 'string') {
		var ID = commentsLink.substr(6, 10);
	};
	
	$('table table tbody tr:nth-of-type('+n+') td.subtext').append(" | <a href=\"" + HNCacheURL + ID + "\">Cached</a>");
};
