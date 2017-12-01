//$.get ('.lay/.body/.menu/main.htm').done (function (data, status, jqxhr) { $('#menu_main').append (data); });
//$.get ('.lay/.body/.menu/secondary.htm').done (function (data, status, jqxhr) { $('#menu_secondary').append (data); });

$('#menu_main').load ('.lay/.body/.menu/main.html');
$('#menu_properties').load ('.lay/.body/.menu/properties.html');
