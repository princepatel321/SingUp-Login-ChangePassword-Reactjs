import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const[email,setEmail] =React.useState("");
    const[password,setPassword] =React.useState("");
    
    var navigate = useNavigate();


    const SubmitValue =(e) =>{
        var myform = new FormData();
        myform.append('st_email',email);
        myform.append('st_password',password);


    
   
        axios.post("https://akashsir.in/myapi/crud/student-login-api.php",myform)
        .then(res =>{
            console.log(res)
            if(res.data.flag==="1"){
                alert("Sucessfully Login");
               
                var a = res.data.st_name;
                var id = res.data.st_id;
               
                console.log(a);
                console.log(id);
                localStorage.setItem("studentname",a);
                localStorage.setItem("studentid",id);
                navigate('/Homepage');
              }
        
               else{
                alert("Error");
               }
        },[])
        .catch((error) => {
            console.log(error)
        })
        e.target.reset();
        e.preventDefault();
  
    }

    return(
        <>
        <h1>Login</h1>
        <form onSubmit={SubmitValue}>
       Email :<input type="email" name="email" onChange={e => setEmail(e.target.value)}/><br/>
       Password :<input type="password" name="password" onChange={e => setPassword(e.target.value)}/><br/>
       <input type="submit" value="login"/>
       
               </form>
        
        </>
    );
}
export default Login;