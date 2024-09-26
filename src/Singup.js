import axios from "axios";
import React from "react";


function Singup(){
    
    const[name,setName] =React.useState("");
    const[gender,setGender] =React.useState("");
    const[email,setEmail] =React.useState("");
    const[mobile,setMobile] =React.useState("");
    const[password,setPassword] =React.useState("");


    const SubmitValue =(e) =>{
        var myform = new FormData();
        myform.append('st_name',name);
        myform.append('st_gender',gender);
        myform.append('st_email',email);
        myform.append('st_mobileno',mobile);
        myform.append('st_password',password);


    
   
        axios.post("https://akashsir.in/myapi/crud/student-add-api.php",myform)
        .then(res =>{
            console.log(res)
        },[])
        .catch((error) => {
            console.log(error)
        })
        e.target.reset();
        e.preventDefault();
  
    }

    return(
        <>
        <h1>SingUp</h1>
        <form onSubmit={SubmitValue}>
       Name :<input type="text" name="name" onChange={e => setName(e.target.value)}/><br/>
       Gender :<input type="text" name="gender" onChange={e => setGender(e.target.value)}/><br/>
       Email :<input type="email" name="email" onChange={e => setEmail(e.target.value)}/><br/>
       Mobile No :<input type="text" name="mobile" onChange={e => setMobile(e.target.value)}/><br/>
       Password :<input type="password" name="password" onChange={e => setPassword(e.target.value)}/><br/>
       <input type="submit"/>


        </form>
        
        </>
    );
}
export default Singup;