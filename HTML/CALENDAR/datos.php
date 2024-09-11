<?php
// Obtén los eventos de tu base de datos y formatea los datos en JSON
// Aquí tienes un ejemplo básico utilizando MySQLi

// Conexión a la base de datos
$conexion = new mysqli('localhost', 'root', '', 'base_calendarioweb');

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Consulta para obtener los eventos de la base de datos
// $sql = "SELECT id, title, start, end FROM eventos";

$sql = "SELECT id, title, descripcion, start, end, textColor, backgroundColor FROM eventos";
$resultado = $conexion->query($sql);

// Array para almacenar los eventos
$eventos = array();

// Recorre los resultados de la consulta
while ($row = $resultado->fetch_assoc()) {
    $evento = array(
        'id' => $row['id'],
        'title' => $row['title'],
        'descripcion' => $row['descripcion'],
        'start' => $row['start'],
        'end' => $row['end'],
        'textColor' => $row['textColor'],
        'backgroundColor' => $row['backgroundColor']
    );

    // Agrega el evento al array de eventos
    $eventos[] = $evento;
}

// Convierte el array de eventos a formato JSON
$jsonEventos = json_encode($eventos);

// Devuelve los eventos en formato JSON
header('Content-Type: application/json');
echo $jsonEventos;

// Cierra la conexión a la base de datos
$conexion->close();
?>
