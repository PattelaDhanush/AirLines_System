import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useHistory } from 'react-router';


const Login= () => {


    const [user_name, setuser_name] = useState("");
    const [error_user_name, seterror_user_name] = useState("Please Enter User ID");
    const [password, setpassword] = useState("");


    //------------------------- USER NAME CHANGE-------------------------

    const onchangeUser_name= (e)=>{
        let user=e.target.value;
        setuser_name(user);
        if(user!==""){
                setuser_name(user);
                seterror_user_name("");
        }else{
            seterror_user_name("Please Enter User ID");
        }
    }

    //------------------------ PASSWORD--------------------------

    const onchangePassword=  (e)=>{
        let password=e.target.value;        
        if(password!==""){
                setpassword(password);
        }else{
            setpassword("");
            window.alert("Please Enter Password");
        }
    }
 

    //------------------- FORM VALIDATION AND SUBMISSION -----------------------------

    const history=useHistory();

    const onLogin=async (e)=>{
        e.preventDefault();

        if(error_user_name!==""){
            window.alert(error_user_name);
        }    
        else if(password==="")
            window.alert("Please Enter Password");
        else{
                if(user_name==="ADMIN" && password==="ADMIN")
                    history.push("/Home");
                else
                    window.alert("Login Failed");
            }
    }


    //------------------ USER INTERFACE --------------------------------------------

    return (
        <div>
            <div className="Login">
                <div className="main-section">
                    <div className="content-section">
                        <div className="head-section">
                            <h3>Login</h3>
                        </div>
                    <div className="body-section">
                        <form>
                            <div className="form-input">
                                <input type="text" value={user_name} placeholder="Username" 
                                onChange={onchangeUser_name} required/>
                            </div>
                            <div className="error">{error_user_name}</div>
                            <div className="form-input">
                                <input type="password" value={password} placeholder="Password" 
                                onChange={onchangePassword} required/>
                            </div>
                            <div className="form-input">
                                <input type="checkbox" name=""/> 
                                <label>
                                    Remember me on this computer
                                </label>
                                <button type="submit" className="btn-submit" onClick={onLogin}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-section">
                    <Link to="">
                        Forgot your password?
                    </Link> <span>Click here to reset it.</span>
                </div>
            </div>
        </div>
        
      </div>  
    )
};

export default Login