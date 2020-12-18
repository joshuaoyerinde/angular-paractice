<?php
    $con=mysqli_connect("localhost","root","","student_db");
    $_POST=json_decode(file_get_contents('php://input'),true);
    // echo $_POST;

    $id=$_POST['id'];
    $delete_list="DELETE FROM student_tb WHERE id=$id";
    $delete_file=mysqli_query($con, $delete_list);
    echo json_encode($delete_file);

?>