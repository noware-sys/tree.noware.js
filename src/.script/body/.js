function content_init (jq)
{
	//$.get ('.lay/overview.htm', body_append);
	//$.get ('.lay/menu.htm', body_append);
	//$.get ('.lay/content.htm', body_append);
	$('body').load ('.lay/body.html');
	/*
	$('#pre').load ('.lay/.body/.pre/path.htm');
	$('#menu').load ('.lay/.body/.menu/main.htm');
	$('#content').load ('.lay/.body/.content/list.htm');
	$('#post').load ('.lay/.body/.post/about.htm');
	*/
	/*
	$.get ('.lay/.body/.pre/path.htm', function (data, status, jqxhr) { $('#pre').append (data); } );
	$.get ('.lay/.body/.menu/main.htm', function (data, status, jqxhr) { $('menu').append (data); } );
	$.get ('.lay/.body/.content/list.htm', function (data, status, jqxhr) { $('#content').append (data); } );
	$.get ('.lay/.body/.post/about.htm', function (data, status, jqxhr) { $('#post').append (data); } );
	*/
	/*
	$.get ('.lay/.body/.pre/path.htm', function (data, status, jqxhr) { $('#pre').append (data); } );
	$.get ('.lay/.body/menu.htm', function (data, status, jqxhr) { $('menu').append (data); } );
	//$('#menu').load ('.lay/.body/menu.htm');
	$.get ('.lay/.body/.content/list.htm', function (data, status, jqxhr) { $('#content').append (data); } );
	$.get ('.lay/.body/.post/about.htm', function (data, status, jqxhr) { $('#post').append (data); } );
	*/
	/*
	$.get ('.lay/.body/pre.htm', function (data, status, jqxhr) { $('#pre').append (data); });
	$.get ('.lay/.body/menu.htm', function (data, status, jqxhr) { $('menu').append (data); });
	$.get ('.lay/.body/content.htm', function (data, status, jqxhr) { $('#content').append (data); });
	$.get ('.lay/.body/post.htm', function (data, status, jqxhr) { $('#post').append (data); });
	*/
	/*
	$('#pre').load ('.lay/.body/pre.htm');
	$('#menu').load ('.lay/.body/menu.htm');
	$('#content').load ('.lay/.body/content.htm');
	$('#post').load ('.lay/.body/post.htm');
	*/
}

/*
function body_append (data, status, jqxhr)
{
	$('body').append (data);
}
*/
/*
function menu_append (data, status, jqxhr)
{
	$('#menu').append (data);
}

function pre_append (data, status, jqxhr)
{
	$('#pre').append (data);
}

function content_append (data, status, jqxhr)
{
	$('#content').append (data);
}

function post_append (data, status, jqxhr)
{
	$('#post').append (data);
}
*/

function get (name)
{
	return url.searchParams.get (name);;
}
