<?php


function regresarConexion(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "base_calendarioweb";

    $conexion = mysqli_connect($servername, $username, $password, $dbname) or die ("Problemas de conexión");
    mysqli_set_charset($conexion, 'utf8');
    return $conexion;
}

?>

