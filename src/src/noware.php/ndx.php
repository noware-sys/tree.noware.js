<?php
	/*
	echo 'PHP';
	echo PHP_EOL;
	echo $_GET ['q'];
	
	if (isset ($_GET ['action'], $_GET ['target']))
		if (isset ($_GET ['usr'])
			$success = file_get_contents ($_SERVER ['REQUEST_SCHEME'] . '//' . $_SERVER ['HTTP_HOST'] . '/Projects/NoWare/aaa.noware.php/src/authrn/txt/?usr='.$_GET['usr'].';action='.$_GET['action'].';target='.$_GET['target']) != 0;
		else
			$success = file_get_contents ($_SERVER ['REQUEST_SCHEME'] . '//' . $_SERVER ['HTTP_HOST'] . '/Projects/NoWare/aaa.noware.php/src/authrn/txt/?action='.$_GET['action'].';target='.$_GET['target']) != 0;
	else if (isset ($_POST ['action'], $_POST ['target']))
		if (isset ($_POST ['usr'])
			$success = file_get_contents ($_SERVER ['REQUEST_SCHEME'] . '//' . $_SERVER ['HTTP_HOST'] . '/Projects/NoWare/aaa.noware.php/src/authrn/txt/?usr='.$_POST['usr'].';action='.$_POST['action'].';target='.$_POST['target']) != 0;
		else
			$success = file_get_contents ($_SERVER ['REQUEST_SCHEME'] . '//' . $_SERVER ['HTTP_HOST'] . '/Projects/NoWare/aaa.noware.php/src/authrn/txt/?action='.$_POST['action'].';target='.$_POST['target']) != 0;
	
	if ($success)
		include (__DIR__ . DIRECTORY_SEPARATOR . 'true.txt');
	else
		include (__DIR__ . DIRECTORY_SEPARATOR . 'false.txt');
	*/
	
	require_once ($_SERVER ['REQUEST_SCHEME'] . '://' . $_SERVER ['HTTP_HOST'] . '/lib/tree.noware.php/www.ntt.php');
	
	$view = 'list';
	$path = 0;
	$ntt = new noware\ntt ();
	
	if (isset ($_GET ['view']))
		$view = $_GET ['view'];
	
	if (isset ($_GET ['path']))
		$path = $_GET ['path'];
	
	//if ($ntt -> nav ($path))
	{
		switch ($view)
		{
			//case 'list':
			default:
				include (__DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '.lay' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'noware.php' . DIRECTORY_SEPARATOR . 'list.php');
		}
	}
