<?php

#Todos los datos los va a regresar en formato JSON

require_once "conexion.php";

header('Content-Type: application/json');

$conexion = regresarConexion();

switch ($_GET['accion']) {
    case 'listar':
        $datos = mysqli_query($conexion,  "SELECT id,
                            title,
                            descripcion,
                            start,
                            end,
                            textColor,
                            backgroundColor
                            FROM eventos");

        $resultado = mysqli_fetch_all($datos, MYSQLI_ASSOC);
        echo json_encode($resultado);
        break;
    
    case 'agregar':
        # code...
        // "insert into eventos (titulo, descripcion, inicio, fin, colortexto, colorfondo) values 
        //     ('$_POST[titulo], $_POST[descripcion], $_POST[inicio], $_POST[fin], $_POST[colortexto], $_POST[colorfondo]')"

        break;

    case 'modificar':
        # code...
        // "update eventos set titulo = '$_POST[titulo]',
        //                     descripcion = '$_POST[descripcion]',
        //                     inicio = '$_POST[inicio]',
        //                     fin = '$_POST[fin]',
        //                     colortexto = '$_POST[colortexto]',
        //                     colorfondo = '$_POST[colorfondo]'
        //                     where id = $_POST[id]"
        break;

    case 'borrar':
        # code...
        // "delete from eventos where id = $_POST[id]"
        break;
}

?>