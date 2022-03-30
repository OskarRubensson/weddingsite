<?php
    if( !empty($_POST['firstName']) && !empty($_POST['lastName']) ){
        $first = $_POST['firstName'];
        $last = $_POST['lastName'];
        die($first . ", " . $last . " ");
    }
    die("fel");
?>