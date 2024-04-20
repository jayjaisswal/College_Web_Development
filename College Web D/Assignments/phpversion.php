<!-- <?php

$php_version = phpversion();

$php_config = phpinfo();

echo "PHP Version: $php_version\n\n";
echo "PHP Configuration:\n";
echo $php_config;
?> -->
<?php
$mysqli = new mysqli("localhost","my_user","my_password","my_db");

if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

echo $mysqli -> server_version;

$mysqli -> close();
?>