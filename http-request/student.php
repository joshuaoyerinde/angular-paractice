<?php
    // $children=file_get_contents('php://input');
    // echo $children;
    // $student=["charles","joke","damilare","femi","kola"];
    // echo $student;
    // echo json_encode($student);
    $con=mysqli_connect("localhost","root","","student_db");
    $fetch_details="SELECT * FROM student_tb";
    $query=mysqli_query($con, $fetch_details);
    echo json_encode(mysqli_fetch_all($query,MYSQLI_ASSOC));
?>