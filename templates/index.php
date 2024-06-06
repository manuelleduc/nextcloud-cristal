<?php

declare(strict_types=1);

use OCP\Util;

Util::addScript(OCA\Cristal\AppInfo\Application::APP_ID, 'cristal.umd');
Util::addStyle(OCA\Cristal\AppInfo\Application::APP_ID, 'style');

?>

<div id="app"></div>
