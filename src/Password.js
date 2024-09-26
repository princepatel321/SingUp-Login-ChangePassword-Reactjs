import axios from "axios";
import React from "react";



function Singup(){
    const[oldpassword,setoldPassword] = React.useState("");
    const[newpassword,setnewPassword] = React.useState("");
    const[confirmpassword,setConfirmpassword] = React.useState("");
   


    const SubmitValue =(e) =>{
        var id = localStorage.getItem("studentid");
        var myform = new FormData();
        myform.append ('st_id',id)
        myform.append('opass',oldpassword);
        myform.append('npass',newpassword);
        myform.append('cpass',confirmpassword);


    
   
        axios.post("https://akashsir.in/myapi/crud/student-change-password-api.php",myform)
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
        <h1>Forgot password</h1>
        <form onSubmit={SubmitValue}>
       Old password :<input type="password" name="oldpassword" onChange={e => setoldPassword(e.target.value)}/><br/>
       New password :<input type="password" name="newpassword" onChange={e => setnewPassword(e.target.value)}/><br/>
       Confirm password :<input type="password" name="confirmpassword" onChange={e => setConfirmpassword(e.target.value)}/><br/>
       <input type="submit"/>


        </form>
        
        </>
    );
}
export default Singup;