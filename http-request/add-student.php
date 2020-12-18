<?php
    $con=mysqli_connect("localhost","root","","student_db");
    $_POST=json_decode(file_get_contents('php://input'),true);
    
    $fname=$_POST['firstname'];
    $lastname=$_POST['latsname'];
    $phone=$_POST['phonenumber'];
    $email=$_POST['email'];
    // remove----
    $insert="INSERT INTO student_tb(name, lastname, phone, email) VALUES ('$fname','$lastname','$phone','$email')";
    $result= mysqli_query($con,$insert);

    // $result;
    // $result ['success'] = 'true';   
    // echo json_encode($goss);

    if($insert){
        echo '{"success": true}';
    }
    else{
        echo '{"success": false}';
    }
?>