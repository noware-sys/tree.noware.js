/*
$.get ('.lay/.body/pre.htm', body_append);
$.get ('.lay/.body/menu.htm', body_append);
$.get ('.lay/.body/content.htm', body_append);
$.get ('.lay/.body/post.htm', body_append);
*/
//$.get ('.lay/.body/menu.htm').done (function (data, status, jqxhr) { $('#menu').append (data); });
$('#msg').load ('.lay/.body/msg.html');
$('#pre').load ('.lay/.body/pre.html');
$('#menu').load ('.lay/.body/menu.html');
$('#content').load ('.lay/.body/content.html');
$('#post').load ('.lay/.body/post.html');
