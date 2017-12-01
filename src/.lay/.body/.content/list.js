//$.get ('srv/eg/ndx.html').done (function (data, status, jqxhr) { $('#content_list').append (data); });
var src = get ('src');
if (src == null)
	src = 'src/eg/blank.html';

$.get (src).done (function (data, status, jqxhr) { $('#content_list').append (data); });
