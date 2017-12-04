//$.get ('srv/eg/ndx.html').done (function (data, status, jqxhr) { $('#content_list').append (data); });
var src = get ('src');
if (src == null)
	//src = encodeURIComponent ('src/eg/ndx.html');
	src = 'src/eg/blank.html';

//$.get (decodeURIComponent (src)).done (function (data, status, jqxhr) { $('#content_list').append (data); });
$.get (src).done (function (data, status, jqxhr) { $('#content_list').append (data); });
