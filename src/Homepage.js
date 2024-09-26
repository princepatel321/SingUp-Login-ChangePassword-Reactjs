import React from "react";

function Homepage(){
    const[msg,setMsg] = React.useState('');


React.useEffect(()=>{
    var a =localStorage.getItem("name");
    setMsg(a);
},[])



    return(
        <div>
    <h4><i>Home page</i></h4>
  <h2><b>WelCome to... {msg}</b></h2>



        </div>
    )
}
export default Homepage;